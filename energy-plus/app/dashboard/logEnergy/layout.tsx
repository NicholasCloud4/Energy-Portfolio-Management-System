"use client";

import { useEffect, useState } from "react";
import { Box, Card, Grid, CardContent, Typography, Button } from "@mui/material";
import RadialDial from "./components/RadialDial";
import SelectProperty, { Property } from "./components/SelectProperty";
import EnergyUsage from "./components/EnergyUsage";
import LogEnergy2 from "./components/LogEnergy2";
import { supabaseClient } from "@/lib/supabaseClient";

export default function OverviewContent() {
    const [score, setScore] = useState<number | null>(null);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [showLogEnergy, setShowLogEnergy] = useState(false);

    useEffect(() => {
        async function fetchScore() {
            if (!selectedProperty?.id) {
                setScore(0);
                return;
            }

            const { data, error } = await supabaseClient
                .from("energy_scores")
                .select("score, billing_month")
                .eq("property_id", selectedProperty.id)
                .order("billing_month", { ascending: false })
                .limit(1);

            if (error) {
                console.error("Error fetching score:", error);
                setScore(0);
                return;
            }

            if (!data || data.length === 0) {
                setScore(0);
                return;
            }

            setScore(data[0].score ?? 0);
        }

        fetchScore();
    }, [selectedProperty]);

    const handlePropertySelect = (property: Property) => {
        setSelectedProperty(property);
        setShowLogEnergy(false);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <SelectProperty
                        selectedProperty={selectedProperty}
                        onPropertySelect={handlePropertySelect}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Current Status
                            </Typography>

                            {score !== null && <RadialDial value={score} />}

                            {selectedProperty && (
                                <Box sx={{ mt: 3 }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => setShowLogEnergy((prev) => !prev)}
                                    >
                                        {showLogEnergy ? "Hide Log Energy" : "Log Energy"}
                                    </Button>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Property Summary
                            </Typography>

                            {selectedProperty ? (
                                <>
                                    <Typography>
                                        <strong>ID:</strong> {selectedProperty.id}
                                    </Typography>

                                    <Typography>
                                        <strong>Street:</strong>{" "}
                                        {selectedProperty.street || "N/A"}
                                    </Typography>

                                    <Typography>
                                        <strong>Type:</strong>{" "}
                                        {selectedProperty.property_type || "N/A"}
                                    </Typography>

                                    <Typography>
                                        <strong>Energy Score:</strong>{" "}
                                        {score && score > 0 ? score : "N/A"}
                                    </Typography>
                                </>
                            ) : (
                                <Typography color="text.secondary">
                                    Select a property to display information.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                {selectedProperty && showLogEnergy && (
                    <Grid size={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Log Energy
                                </Typography>

                                <LogEnergy2 property={selectedProperty} />
                            </CardContent>
                        </Card>
                    </Grid>
                )}

                <Grid size={12}>
                    <EnergyUsage property={selectedProperty} />
                </Grid>
            </Grid>
        </Box>
    );
}