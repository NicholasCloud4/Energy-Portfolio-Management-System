"use client";
import { useEffect, useState } from "react";
import RadialDial from "./components/RadialDial";
import { supabaseClient } from "@/lib/supabaseClient";
import GeneralStatus from "./components/GeneralStatus";
import { Box, Container, Grid, Typography } from "@mui/material";
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
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Portfolio Score Section */}
                    <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                        <Box
                            sx={{
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "background.paper",
                                borderRadius: 4,
                                height: "100%",
                                minHeight: 200,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 2,
                                    px: 1,
                                    textAlign: "center",
                                    fontWeight: 600,
                                }}
                            >
                                Portfolio Score
                            </Typography>

                            {score !== null && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <RadialDial value={score} />
                                </Box>
                            )}
                        </Box>
                    </Grid>

                    {/* General Status Section */}
                    <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                        <Box sx={{ maxHeight: 350, overflowY: "auto", pr: 1 }}>
                            <GeneralStatus properties={properties} />
                        </Box>
                    </Grid>
                </Grid>

                {/* Slider Section */}
                <Box sx={{ mt: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{ mb: 2, px: 1, textAlign: "center" }}
                    >
                        General Usage Data
                    </Typography>
                    <OverviewSlider organizations={organizations} />
                </Box>
            </Container>
        </>
    );
}
