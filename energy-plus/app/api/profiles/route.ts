import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, username, first_name, last_name } = body;

        if (!id || !username) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const { error } = await supabaseServer
            .from("profiles")
            .upsert(
                {
                    id,
                    username,
                    first_name,
                    last_name,
                    account_type: "user",
                },
                { onConflict: "id" }
            );

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: "Profile created" }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}