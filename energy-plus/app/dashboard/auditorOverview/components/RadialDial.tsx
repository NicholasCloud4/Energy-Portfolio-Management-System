"use client";

import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";
import { Property } from "./SelectProperties";

interface RadialDialProps {
    property: Property | null;
    label?: string;
}

export default function RadialDial({
                                       property,
                                       label = "Current Status",
                                   }: RadialDialProps) {
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        async function fetchScore() {
            if (!property?.id) {
                setScore(0);
                return;
            }

            const { data, error } = await supabaseClient
                .from("energy_scores")
                .select("score, billing_month")
                .eq("property_id", property.id)
                .order("billing_month", { ascending: false })
                .limit(1);

            if (error) {
                console.error("Error fetching score:", error.message);
                setScore(0);
                return;
            }

            if (!data || data.length === 0) {
                setScore(0);
                return;
            }

            setScore(Math.round(data[0].score ?? 0));
        }

        fetchScore();
    }, [property]);

    const safeValue = Math.max(0, Math.min(100, score));
    const angle = (safeValue / 100) * 360;

    return (
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography sx={{ mb: 2 }}>{label}</Typography>

            {!property ? (
                <Typography color="text.secondary">
                    Select a property to view status.
                </Typography>
            ) : (
                <Box
                    sx={{
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background: `conic-gradient(#4f8cff ${angle}deg, rgba(255,255,255,0.12) ${angle}deg)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                    }}
                >
                    <Box
                        sx={{
                            width: 88,
                            height: 88,
                            borderRadius: "50%",
                            bgcolor: "background.paper",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h5">{safeValue}</Typography>
                    </Box>
                </Box>
            )}
        </Paper>
    );
}