import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

export async function GET() {
    try {
        const { data, error } = await supabaseServer
            .from("jurisdictions")
            .select("id, name, slug, type, parent_id")
            .order("name", { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ jurisdictions: data ?? [] });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to load jurisdictions.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
