"use client";
import { useEffect, useState } from "react";
import RadialDial from "./components/RadialDial";
import { supabaseClient } from "@/lib/supabaseClient";

export default function OverviewContent() {
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        async function fetchScore() {
            const { data, error } = await supabaseClient
                .from("energy_scores")
                .select("score");

            if (error) {
                console.error("Error fetching scores:", error);
                return;
            }

            if (!data || data.length === 0) {
                setScore(0);
                return;
            }

            const avg =
                data.reduce((sum, row) => sum + row.score, 0) / data.length;

            setScore(Math.round(avg));
        }

        fetchScore();
    }, []);

    return (
        <>
            <div>Overview Test</div>
            {score !== null && <RadialDial value={score} />}
        </>
    );
}