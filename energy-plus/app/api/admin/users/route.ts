import { supabaseServer } from "@/lib/supabaseServer";

type AdminUserPayload = {
    id?: string;
    name?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
};

type SupabaseAdminError = {
    message?: string;
    status?: number;
};

function jsonResponse(payload: unknown, status = 200) {
    return new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

function toErrorMessage(err: unknown, fallback: string) {
    if (err instanceof Error) {
        return err.message;
    }
    return fallback;
}

function normalizeAdminError(error: SupabaseAdminError | null, fallback: string) {
    const rawMessage = (error?.message || fallback).trim();
    const lowerMessage = rawMessage.toLowerCase();
    const status =
        typeof error?.status === "number" && error.status >= 400 && error.status < 600 ? error.status : 500;

    if (lowerMessage.includes("database error deleting user") || lowerMessage.includes("foreign key")) {
        return {
            status: 409,
            message:
                "Cannot delete this user because related records still exist. Remove related data first, then try again.",
        };
    }

    if (lowerMessage.includes("user not found")) {
        return { status: 404, message: "User not found." };
    }

    if (lowerMessage.includes("invalid uuid")) {
        return { status: 400, message: "Invalid user ID." };
    }

    if (lowerMessage.includes("already registered")) {
        return { status: 409, message: "A user with that email already exists." };
    }

    if (lowerMessage.includes("duplicate key value") || lowerMessage.includes("unique constraint")) {
        return {
            status: 409,
            message: "A user with that email or username already exists.",
        };
    }

    if (lowerMessage.includes("database error creating new user")) {
        return {
            status: 500,
            message:
                "User creation failed in database logic (likely an auth trigger/profile constraint mismatch).",
        };
    }

    if (lowerMessage.includes("password")) {
        return {
            status: 400,
            message: "Password does not meet policy requirements. Use a stronger password and try again.",
        };
    }

    return { status, message: rawMessage || fallback };
}

export async function GET() {
    const { data, error } = await supabaseServer.auth.admin.listUsers();

    if (error) {
        const normalized = normalizeAdminError(error, "Unable to fetch users.");
        return jsonResponse({ error: normalized.message }, normalized.status);
    }

    const authUsers = data.users ?? [];
    const userIds = authUsers.map((user) => user.id);
    if (userIds.length === 0) {
        return jsonResponse({ users: [] });
    }

    const { data: profileRows, error: profileError } = await supabaseServer
        .from("profiles")
        .select("id, username, first_name, last_name, email")
        .in("id", userIds);

    if (profileError) {
        return jsonResponse({ error: `Unable to fetch profile data: ${profileError.message}` }, 500);
    }

    const profileById = new Map((profileRows ?? []).map((row) => [row.id as string, row]));
    const users = authUsers.map((user) => {
        const profile = profileById.get(user.id);
        const firstName = (profile?.first_name as string | undefined) ?? "";
        const lastName = (profile?.last_name as string | undefined) ?? "";
        const profileName = `${firstName} ${lastName}`.trim();
        return {
            id: user.id,
            username: (profile?.username as string | undefined) ?? "",
            first_name: firstName,
            last_name: lastName,
            name: profileName || ((user.user_metadata?.name as string | undefined) ?? ""),
            email: user.email ?? ((profile?.email as string | undefined) ?? ""),
            created_at: user.created_at,
            last_sign_in_at: user.last_sign_in_at,
        };
    });

    return jsonResponse({ users });
}

export async function POST(req: Request) {
    try {
        const { name, username, first_name, last_name, email, password } = (await req.json()) as AdminUserPayload;

        if (!name || !email || !password) {
            return jsonResponse({ error: "name, email, and password are required" }, 400);
        }

        const trimmedName = name.trim();
        const emailNormalized = email.trim().toLowerCase();
        const [firstNamePart = "", ...lastNameParts] = trimmedName.split(/\s+/);
        const normalizedFirstName = (first_name || "").trim() || firstNamePart || "User";
        const normalizedLastName = (last_name || "").trim() || lastNameParts.join(" ");
        const usernameBase = (username || "").trim() || emailNormalized.split("@")[0] || normalizedFirstName.toLowerCase();
        const normalizedUsername = usernameBase.replace(/[^a-zA-Z0-9._-]/g, "").slice(0, 30) || "user";

        const { data: existingUsername, error: usernameCheckError } = await supabaseServer
            .from("profiles")
            .select("id")
            .ilike("username", normalizedUsername)
            .limit(1);

        if (usernameCheckError) {
            return jsonResponse({ error: "Unable to validate username uniqueness." }, 500);
        }

        if (existingUsername && existingUsername.length > 0) {
            return jsonResponse({ error: "That username is already taken." }, 409);
        }

        const { data: existingEmail, error: emailCheckError } = await supabaseServer
            .from("profiles")
            .select("id")
            .ilike("email", emailNormalized)
            .limit(1);

        if (emailCheckError) {
            return jsonResponse({ error: "Unable to validate email uniqueness." }, 500);
        }

        if (existingEmail && existingEmail.length > 0) {
            return jsonResponse({ error: "A user with that email already exists." }, 409);
        }

        const { data, error } = await supabaseServer.auth.admin.createUser({
            email: emailNormalized,
            password,
            user_metadata: {
                name: trimmedName,
                username: normalizedUsername,
                first_name: normalizedFirstName,
                last_name: normalizedLastName,
                email: emailNormalized,
                account_type: "user",
            },
            email_confirm: true,
        });

        if (error) {
            const normalized = normalizeAdminError(error, "Unable to create user.");
            return jsonResponse({ error: normalized.message }, normalized.status);
        }

        if (!data.user?.id) {
            return jsonResponse({ error: "User created without an ID. Please try again." }, 500);
        }

        const { error: profileError } = await supabaseServer.from("profiles").upsert(
            {
                id: data.user.id,
                username: normalizedUsername,
                first_name: normalizedFirstName,
                last_name: normalizedLastName,
                account_type: "user",
                email: emailNormalized,
            },
            { onConflict: "id" },
        );

        if (profileError) {
            // Best-effort cleanup to avoid orphan auth users when profile insert fails.
            await supabaseServer.auth.admin.deleteUser(data.user.id).catch(() => undefined);
            return jsonResponse(
                {
                    error: `User created in auth but profile insert failed: ${profileError.message}`,
                },
                500,
            );
        }

        return jsonResponse(
            {
                user: {
                    id: data.user.id,
                    name: (data.user.user_metadata?.name as string | undefined) ?? "",
                    email: data.user.email ?? "",
                },
            },
            201,
        );
    } catch (err: unknown) {
        return jsonResponse({ error: toErrorMessage(err, "Unable to create user") }, 500);
    }
}

export async function PUT(req: Request) {
    try {
        const { id, name, username, first_name, last_name, email, password } = (await req.json()) as AdminUserPayload;

        if (!id) {
            return jsonResponse({ error: "id is required" }, 400);
        }

        if (!name && !username && !first_name && !last_name && !email && !password) {
            return jsonResponse({ error: "Provide at least one field to update" }, 400);
        }

        const attributes: {
            email?: string;
            password?: string;
            user_metadata?: {
                name?: string;
                username?: string;
                first_name?: string;
                last_name?: string;
            };
        } = {};

        const normalizedEmail = email?.trim().toLowerCase();
        const normalizedFirstName = first_name?.trim();
        const normalizedLastName = last_name?.trim();
        const normalizedUsername = username?.trim();
        const normalizedName =
            name?.trim() ||
            [normalizedFirstName || "", normalizedLastName || ""]
                .join(" ")
                .trim() ||
            undefined;

        if (normalizedEmail) attributes.email = normalizedEmail;
        if (password) attributes.password = password;
        if (normalizedName || normalizedUsername || normalizedFirstName || normalizedLastName) {
            attributes.user_metadata = {};
            if (normalizedName) attributes.user_metadata.name = normalizedName;
            if (normalizedUsername) attributes.user_metadata.username = normalizedUsername;
            if (normalizedFirstName) attributes.user_metadata.first_name = normalizedFirstName;
            if (normalizedLastName) attributes.user_metadata.last_name = normalizedLastName;
        }

        const { data, error } = await supabaseServer.auth.admin.updateUserById(id, attributes);

        if (error) {
            const normalized = normalizeAdminError(error, "Unable to update user.");
            return jsonResponse({ error: normalized.message }, normalized.status);
        }

        if (normalizedUsername || normalizedFirstName || normalizedLastName || normalizedEmail) {
            const { error: profileError } = await supabaseServer.from("profiles").upsert(
                {
                    id,
                    ...(normalizedUsername ? { username: normalizedUsername } : {}),
                    ...(normalizedFirstName ? { first_name: normalizedFirstName } : {}),
                    ...(normalizedLastName ? { last_name: normalizedLastName } : {}),
                    ...(normalizedEmail ? { email: normalizedEmail } : {}),
                },
                { onConflict: "id" },
            );

            if (profileError) {
                return jsonResponse({ error: `Profile update failed: ${profileError.message}` }, 500);
            }
        }

        return jsonResponse({
            user: {
                id: data.user.id,
                username: (data.user.user_metadata?.username as string | undefined) ?? normalizedUsername ?? "",
                first_name: (data.user.user_metadata?.first_name as string | undefined) ?? normalizedFirstName ?? "",
                last_name: (data.user.user_metadata?.last_name as string | undefined) ?? normalizedLastName ?? "",
                name: (data.user.user_metadata?.name as string | undefined) ?? normalizedName ?? "",
                email: data.user.email ?? "",
            },
        });
    } catch (err: unknown) {
        return jsonResponse({ error: toErrorMessage(err, "Unable to update user") }, 500);
    }
}

export async function DELETE(req: Request) {
    try {
        const { id } = (await req.json()) as AdminUserPayload;

        if (!id) {
            return jsonResponse({ error: "id is required" }, 400);
        }

        const { error } = await supabaseServer.auth.admin.deleteUser(id);

        if (error) {
            const normalized = normalizeAdminError(error, "Unable to delete user.");
            return jsonResponse({ error: normalized.message }, normalized.status);
        }

        return jsonResponse({ message: "User deleted" });
    } catch (err: unknown) {
        return jsonResponse({ error: toErrorMessage(err, "Unable to delete user") }, 500);
    }
}