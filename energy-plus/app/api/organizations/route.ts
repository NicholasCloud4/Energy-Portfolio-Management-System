import { NextRequest, NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

type CreateOrganizationBody = {
    name?: string;
    createdBy?: string | null;
};

type UpdateOrganizationBody = {
    organizationId?: string;
    name?: string;
};

function slugifyOrganizationName(name: string) {
    return name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function buildUniqueSlug(baseSlug: string, existingSlugs: string[]) {
    const normalizedExisting = new Set(existingSlugs.map((slug) => slug.toLowerCase()));

    if (!normalizedExisting.has(baseSlug.toLowerCase())) {
        return baseSlug;
    }

    let suffix = 2;
    let candidate = `${baseSlug}-${suffix}`;

    while (normalizedExisting.has(candidate.toLowerCase())) {
        suffix += 1;
        candidate = `${baseSlug}-${suffix}`;
    }

    return candidate;
}

async function buildOrganizationSlug(name: string, organizationId?: string) {
    const baseSlug = slugifyOrganizationName(name);

    if (!baseSlug) {
        return { error: "Organization name must contain letters or numbers." };
    }

    const { data: existingSlugs, error: slugLookupError } = await supabaseServer
        .from("organizations")
        .select("id, slug")
        .ilike("slug", `${baseSlug}%`);

    if (slugLookupError) {
        return { error: slugLookupError.message };
    }

    const candidateSlugs = (existingSlugs ?? [])
        .filter((row) => row.id !== organizationId)
        .map((row) => row.slug)
        .filter((slug): slug is string => Boolean(slug));

    return { slug: buildUniqueSlug(baseSlug, candidateSlugs) };
}

export async function GET() {
    try {
        const [{ data: organizations, error: organizationsError }, { data: properties, error: propertiesError }] =
            await Promise.all([
                supabaseServer
                    .from("organizations")
                    .select("id, name, slug, created_by, created_at")
                    .order("name", { ascending: true }),
                supabaseServer
                    .from("properties")
                    .select(
                        "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at",
                    )
                    .order("created_at", { ascending: false }),
            ]);

        if (organizationsError || propertiesError) {
            return NextResponse.json(
                {
                    error:
                        organizationsError?.message ||
                        propertiesError?.message ||
                        "Failed to load organizations.",
                },
                { status: 500 },
            );
        }

        return NextResponse.json({
            organizations: organizations ?? [],
            properties: properties ?? [],
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to load organizations.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as CreateOrganizationBody;
        const name = body.name?.trim();

        if (!name) {
            return NextResponse.json(
                { error: "Organization name is required." },
                { status: 400 },
            );
        }

        const slugResult = await buildOrganizationSlug(name);

        if (slugResult.error || !slugResult.slug) {
            return NextResponse.json(
                { error: slugResult.error || "Failed to generate slug." },
                { status: 400 },
            );
        }

        const insertPayload = {
            name,
            slug: slugResult.slug,
            created_by: body.createdBy?.trim() || null,
        };

        const { data, error } = await supabaseServer
            .from("organizations")
            .insert(insertPayload)
            .select("id, name, slug, created_by, created_at")
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ organization: data }, { status: 201 });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to create organization.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = (await request.json()) as UpdateOrganizationBody;
        const organizationId = body.organizationId?.trim();
        const name = body.name?.trim();

        if (!organizationId) {
            return NextResponse.json(
                { error: "Organization ID is required." },
                { status: 400 },
            );
        }

        if (!name) {
            return NextResponse.json(
                { error: "Organization name is required." },
                { status: 400 },
            );
        }

        const slugResult = await buildOrganizationSlug(name, organizationId);

        if (slugResult.error || !slugResult.slug) {
            return NextResponse.json(
                { error: slugResult.error || "Failed to generate slug." },
                { status: 400 },
            );
        }

        const { data, error } = await supabaseServer
            .from("organizations")
            .update({
                name,
                slug: slugResult.slug,
            })
            .eq("id", organizationId)
            .select("id, name, slug, created_by, created_at")
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ organization: data });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to update organization.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { organizationId } = (await request.json()) as {
            organizationId?: string;
        };

        if (!organizationId?.trim()) {
            return NextResponse.json(
                { error: "Organization ID is required." },
                { status: 400 },
            );
        }

        // Enforce the delete rule server-side so the UI is not the only guard.
        const { count, error: propertyCountError } = await supabaseServer
            .from("properties")
            .select("id", { count: "exact", head: true })
            .eq("organization_id", organizationId);

        if (propertyCountError) {
            return NextResponse.json(
                { error: propertyCountError.message },
                { status: 500 },
            );
        }

        if ((count ?? 0) > 0) {
            return NextResponse.json(
                {
                    error: "Organization cannot be deleted while properties are still assigned to it.",
                },
                { status: 409 },
            );
        }

        const { error } = await supabaseServer
            .from("organizations")
            .delete()
            .eq("id", organizationId);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to delete organization.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
