import { NextRequest, NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

type CreatePropertyBody = {
    organization_id?: string;
    jurisdiction_id?: string | null;
    street?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: number | null;
    sq_ft?: number | null;
    property_type?: string | null;
};

type ReassignPropertyBody = {
    propertyId?: string;
    organizationId?: string;
};

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as CreatePropertyBody;
        const organizationId = body.organization_id?.trim();
        const jurisdictionId = body.jurisdiction_id?.trim();
        const street = body.street?.trim();

        if (!organizationId) {
            return NextResponse.json(
                { error: "Organization is required." },
                { status: 400 },
            );
        }

        if (!street) {
            return NextResponse.json(
                { error: "Street is required." },
                { status: 400 },
            );
        }

        if (!jurisdictionId) {
            return NextResponse.json(
                { error: "Jurisdiction ID is required." },
                { status: 400 },
            );
        }

        const { data: organization, error: organizationError } = await supabaseServer
            .from("organizations")
            .select("id")
            .eq("id", organizationId)
            .single();

        if (organizationError) {
            return NextResponse.json(
                { error: organizationError.message },
                { status: 500 },
            );
        }

        if (!organization) {
            return NextResponse.json(
                { error: "Organization not found." },
                { status: 404 },
            );
        }

        const payload = {
            organization_id: organizationId,
            jurisdiction_id: jurisdictionId,
            street,
            city: body.city?.trim() || null,
            state: body.state?.trim() || null,
            zip: body.zip ?? null,
            sq_ft: body.sq_ft ?? null,
            property_type: body.property_type?.trim() || null,
        };

        const { data, error } = await supabaseServer
            .from("properties")
            .insert(payload)
            .select(
                "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at",
            )
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ property: data }, { status: 201 });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to create property.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = (await request.json()) as ReassignPropertyBody;
        const propertyId = body.propertyId?.trim();
        const organizationId = body.organizationId?.trim();

        if (!propertyId || !organizationId) {
            return NextResponse.json(
                { error: "Property ID and destination organization are required." },
                { status: 400 },
            );
        }

        const { data: property, error: propertyLookupError } = await supabaseServer
            .from("properties")
            .select("id, organization_id")
            .eq("id", propertyId)
            .single();

        if (propertyLookupError) {
            return NextResponse.json(
                { error: propertyLookupError.message },
                { status: 500 },
            );
        }

        if (!property) {
            return NextResponse.json(
                { error: "Property not found." },
                { status: 404 },
            );
        }

        if (property.organization_id === organizationId) {
            return NextResponse.json(
                { error: "Choose a different organization." },
                { status: 400 },
            );
        }

        const { data: organization, error: organizationLookupError } = await supabaseServer
            .from("organizations")
            .select("id")
            .eq("id", organizationId)
            .single();

        if (organizationLookupError) {
            return NextResponse.json(
                { error: organizationLookupError.message },
                { status: 500 },
            );
        }

        if (!organization) {
            return NextResponse.json(
                { error: "Destination organization not found." },
                { status: 404 },
            );
        }

        const { data, error } = await supabaseServer
            .from("properties")
            .update({ organization_id: organizationId })
            .eq("id", propertyId)
            .select(
                "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at",
            )
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ property: data });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to reassign property.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
