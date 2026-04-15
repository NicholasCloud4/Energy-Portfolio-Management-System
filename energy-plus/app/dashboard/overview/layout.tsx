"use client";
import { useEffect, useState } from "react";
import RadialDial from "./components/RadialDial";
import { supabaseClient } from "@/lib/supabaseClient";
import GeneralStatus from "./components/GeneralStatus";
import { Box, Grid } from "@mui/material";
import OverviewSlider from "./components/OverviewSlider";

type PropertyScore = {
    property_id: string;
    property_name: string;
    score: number;
    address: string;
};

export default function OverviewContent() {
    const [score, setScore] = useState<number | null>(null);
    const [properties, setProperties] = useState<PropertyScore[]>([]);
    const [organizations, setOrganizations] = useState<any[]>([]);

    useEffect(() => {
        async function fetchScore() {
            const { data, error } = await supabaseClient.from("energy_scores")
                .select(`
                    property_id,
                    score,
                    properties(property_name, street, city, state, zip)
                `);

            if (error) {
                console.error("Error fetching scores:", error);
                return;
            }

            if (!data || data.length === 0) {
                setScore(0);
                setProperties([]);
                return;
            }

            const formatted: PropertyScore[] = data.map((d: any) => ({
                property_id: d.property_id,
                property_name: d.properties?.property_name || "Unknown",
                score: d.score,
                address: `${d.properties?.street || ""}, ${d.properties?.city || ""}, ${d.properties?.state || ""} ${d.properties?.zip || ""}`,
            }));
            setProperties(formatted);

            const avg =
                data.reduce((sum, row) => sum + row.score, 0) / data.length;

            setScore(Math.round(avg));
        }

        fetchScore();
    }, []);

    useEffect(() => {
        async function fetchOrganizationsWithScores() {
            // Fetch organizations and their properties with scores
            const { data, error } = await supabaseClient.from(
                "organization_members",
            ).select(`
                organization_id,
                organizations!inner (
                    id,
                    name,
                    properties (
                        energy_scores (
                            score
                        )
                    )
                )
            `);

            if (error) {
                console.error("Fetch error:", error);
                return;
            }

            if (data) {
                const orgMap = new Map();

                data.forEach((item: any) => {
                    const org = item.organizations;
                    if (!orgMap.has(org.id)) {
                        // Flatten all scores, filtering out properties without data
                        const allScores: number[] = org.properties
                            .flatMap((p: any) => p.energy_scores)
                            .filter((s: any) => s !== null) // handle missing scores
                            .map((s: any) => s.score);

                        // Calculate average score for the dial
                        const avgScore =
                            allScores.length > 0
                                ? Math.round(
                                      allScores.reduce((a, b) => a + b, 0) /
                                          allScores.length,
                                  )
                                : 0;

                        orgMap.set(org.id, {
                            id: org.id,
                            name: org.name,
                            score: avgScore,
                        });
                    }
                });

                setOrganizations(Array.from(orgMap.values()));
            }
        }
        fetchOrganizationsWithScores();
    }, []);

    return (
        <>
            <div>Overview Test</div>
            <Grid container spacing={3}>
                {/* Radial Dial */}
                <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                    <Box
                        sx={{ p: 2, display: "flex", justifyContent: "center" }}
                    >
                        {score !== null && <RadialDial value={score} />}
                    </Box>
                </Grid>

                {/* General Status */}
                <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                    <Box
                        sx={{
                            maxHeight: 350,
                            overflowY: "auto",
                            pr: 1,
                        }}
                    >
                        <GeneralStatus properties={properties} />
                    </Box>
                </Grid>
            </Grid>
            {/* Slider */}
            <OverviewSlider organizations={organizations} />
        </>
    );
}
