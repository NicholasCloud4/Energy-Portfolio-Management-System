"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Card,
    Grid,
    CardContent,
    Typography,
    Button,
    IconButton,
    Tooltip,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import RadialDial from "./components/RadialDial";
import SelectProperty, { Property } from "./components/SelectProperty";
import EnergyUsage from "./components/EnergyUsage";
import LogEnergy from "./components/LogEnergy";
import Graph from "./components/Graph";
import Summary from "./components/Summary";
import { supabaseClient } from "@/lib/supabaseClient";
import * as React from "react";

export default function OverviewContent() {
    const [energyRefreshKey, setEnergyRefreshKey] = useState(0);
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
    }, [selectedProperty, energyRefreshKey]);

    const handlePropertySelect = (property: Property | null) => {
        setSelectedProperty(property);
        setShowLogEnergy(false);
    };

    const handleRefresh = () => {
        setEnergyRefreshKey((prev) => prev + 1);
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
                                <Box
                                    sx={{
                                        mt: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={() => setShowLogEnergy((prev) => !prev)}
                                    >
                                        {showLogEnergy ? "Hide Log Energy" : "Log Energy"}
                                    </Button>

                                    <Tooltip title="Refresh metrics">
                                        <IconButton
                                            onClick={handleRefresh}
                                            color="primary"
                                            aria-label="refresh metrics"
                                        >
                                            <RefreshIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Summary property={selectedProperty} score={score} />
                </Grid>

                {selectedProperty && showLogEnergy && (
                    <Grid size={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Log Energy
                                </Typography>

                                <LogEnergy
                                    property={selectedProperty}
                                    onSuccess={() => setEnergyRefreshKey((prev) => prev + 1)}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                )}

                <Grid size={{ xs: 12, md: 8 }}>
                    <Graph
                        property={selectedProperty}
                        refreshKey={energyRefreshKey}
                    />
                </Grid>

                <Grid size={12}>
                    <EnergyUsage
                        property={selectedProperty}
                        refreshKey={energyRefreshKey}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}