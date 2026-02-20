"use server";

import { supabaseServer } from "@/lib/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, ownerId } = body;

        if (!email || !ownerId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        // Lookup user by email
        const { data: profile, error: profileError } = await supabaseServer
            .from("profiles")
            .select("id, first_name, last_name, email")
            .eq("email", email)
            .single();

        if (!profile || profileError) {
            return NextResponse.json(
                { error: "No user found with that email" },
                { status: 404 },
            );
        }

        // Check if contact already  exists
        const { data: existing } = await supabaseServer
            .from("contacts")
            .select("id")
            .eq("owner_id", ownerId)
            .eq("email", profile.email)
            .single();

        if (existing) {
            return NextResponse.json(
                { error: "Contact already exists" },
                { status: 400 },
            );
        }

        //Insert contact
        const { error: insertError } = await supabaseServer
            .from("contacts")
            .insert([
                {
                    owner_id: ownerId,
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    email: profile.email,
                },
            ]);

        if (insertError) {
            return NextResponse.json(
                { error: insertError.message },
                { status: 500 },
            );
        }

        return NextResponse.json(
            { message: "Contact added successfully" },
            { status: 200 },
        );
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
