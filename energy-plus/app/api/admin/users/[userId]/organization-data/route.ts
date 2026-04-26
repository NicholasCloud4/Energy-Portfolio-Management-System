import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

type ProfileRow = {
    id: string;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
};

type OrganizationRow = {
    id: string;
    name: string | null;
    slug: string | null;
    created_by: string | null;
    created_at: string | null;
};

type PropertyRow = {
    id: string;
    organization_id: string;
    jurisdiction_id: string | null;
    jurisdiction_name?: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: number | null;
    sq_ft: number | null;
    property_type: string | null;
    created_at: string | null;
};

function formatUserName(
    profile: ProfileRow | null,
    authUser: { email?: string | null; user_metadata?: Record<string, unknown> } | null,
) {
    const fullName = [profile?.first_name, profile?.last_name]
        .filter((value): value is string => Boolean(value?.trim()))
        .join(" ")
        .trim();

    if (fullName) {
        return fullName;
    }

    const metadataName = typeof authUser?.user_metadata?.name === "string"
        ? authUser.user_metadata.name.trim()
        : "";

    if (metadataName) {
        return metadataName;
    }

    return profile?.email?.trim() || authUser?.email?.trim() || "Unknown user";
}

export async function GET(
    _request: Request,
    context: { params: Promise<{ userId: string }> },
) {
    try {
        const { userId } = await context.params;
        const normalizedUserId = userId?.trim();

        if (!normalizedUserId) {
            return NextResponse.json({ error: "User ID is required." }, { status: 400 });
        }

        const [
            authUserResult,
            profileResult,
            organizationsResult,
        ] = await Promise.all([
            supabaseServer.auth.admin.getUserById(normalizedUserId),
            supabaseServer
                .from("profiles")
                .select("id, username, first_name, last_name, email")
                .eq("id", normalizedUserId)
                .maybeSingle<ProfileRow>(),
            supabaseServer
                .from("organizations")
                .select("id, name, slug, created_by, created_at")
                .eq("created_by", normalizedUserId)
                .order("name", { ascending: true }),
        ]);

        if (authUserResult.error) {
            return NextResponse.json(
                { error: authUserResult.error.message || "Unable to fetch user." },
                { status: 500 },
            );
        }

        if (profileResult.error) {
            return NextResponse.json(
                { error: `Unable to fetch user profile: ${profileResult.error.message}` },
                { status: 500 },
            );
        }

        if (organizationsResult.error) {
            return NextResponse.json(
                { error: `Unable to fetch user organizations: ${organizationsResult.error.message}` },
                { status: 500 },
            );
        }

        if (!authUserResult.data.user) {
            return NextResponse.json({ error: "User not found." }, { status: 404 });
        }

        const organizations = (organizationsResult.data ?? []) as OrganizationRow[];
        const organizationIds = organizations.map((organization) => organization.id);

        const propertyMap = new Map<string, PropertyRow[]>();

        if (organizationIds.length) {
            const propertyRowsResult = await supabaseServer
                .from("properties")
                .select(
                    "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at, jurisdictions(name)",
                )
                .in("organization_id", organizationIds)
                .order("created_at", { ascending: false });

            if (propertyRowsResult.error) {
                return NextResponse.json(
                    { error: `Unable to fetch organization properties: ${propertyRowsResult.error.message}` },
                    { status: 500 },
                );
            }

            for (const property of (propertyRowsResult.data ?? []) as Array<
                PropertyRow & { jurisdictions?: { name?: string | null } | null }
            >) {
                propertyMap.set(
                    property.organization_id,
                    [
                        ...(propertyMap.get(property.organization_id) ?? []),
                        {
                            ...property,
                            jurisdiction_name: property.jurisdictions?.name ?? null,
                        },
                    ],
                );
            }
        }

        return NextResponse.json({
            user: {
                id: normalizedUserId,
                name: formatUserName(profileResult.data ?? null, authUserResult.data.user),
            },
            organizations: organizations.map((organization) => ({
                id: organization.id,
                name: organization.name ?? "Untitled organization",
                slug: organization.slug,
                createdBy: organization.created_by,
                createdAt: organization.created_at,
                properties: propertyMap.get(organization.id) ?? [],
            })),
        });
    } catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to load user organization data.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}