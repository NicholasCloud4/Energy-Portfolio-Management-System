import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

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