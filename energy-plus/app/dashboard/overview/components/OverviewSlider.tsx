"use client";

import { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { supabaseClient } from "@/lib/supabaseClient";

type Organization = {
    id: string;
    name: string;
    score: number;
};

type GraphPoint = {
    month: string;
    electric: number;
    gas: number;
};

type Props = {
    organizations: Organization[];
};

export default function OverviewSlider({ organizations }: Props) {
    const [graphData, setGraphData] = useState<Record<string, GraphPoint[]>>(
        {},
    );

    useEffect(() => {
        async function fetchAllOrgData() {
            const result: Record<string, GraphPoint[]> = {};

            for (const org of organizations) {
                const { data, error } = await supabaseClient
                    .from("energy_usage")
                    .select(
                        `
                        usage_kwh,
                        usage_date,
                        usage_start,
                        usage_end,
                        properties!inner (
                            organization_id
                        ),
                        meters (
                            energy_types (
                                name
                            )
                        )
                    `,
                    )
                    .eq("properties.organization_id", org.id);

                if (error) {
                    console.error(error);
                    continue;
                }

                const merged = new Map<string, GraphPoint>();

                data?.forEach((row: any) => {
                    const month =
                        row.usage_date?.slice(0, 7) ||
                        row.usage_start?.slice(0, 7) ||
                        row.usage_end?.slice(0, 7);

                    if (!month) return;

                    const existing = merged.get(month) || {
                        month,
                        electric: 0,
                        gas: 0,
                    };

                    const energyType =
                        row.meters?.energy_types?.name?.toLowerCase();

                    if (energyType === "electricity") {
                        existing.electric += row.usage_kwh ?? 0;
                    }

                    if (energyType === "gas") {
                        existing.gas += row.usage_kwh ?? 0;
                    }

                    merged.set(month, existing);
                });

                // Shows all the data Nd
                // result[org.id] = Array.from(merged.values()).sort((a, b) =>
                //     a.month.localeCompare(b.month),
                // );

                const sorted = Array.from(merged.values()).sort((a, b) =>
                    a.month.localeCompare(b.month),
                );

                // Keep only last 6 months
                const lastSixMonths = sorted.slice(-6);

                result[org.id] = lastSixMonths;
            }

            setGraphData(result);
        }

        if (organizations.length > 0) {
            fetchAllOrgData();
        }
    }, [organizations]);

    function getScoreDisplay(score: number) {
        if (score === 0) {
            return { text: "No Data", color: "text.secondary" };
        }

        if (score >= 75) {
            return { text: score.toString(), color: "#4CAF50" }; // green
        }

        if (score >= 51) {
            return { text: score.toString(), color: "#ffb300" }; // yellow
        }

        return { text: score.toString(), color: "#F44336" }; // red
    }

    return (
        <Box sx={{ display: "flex", overflowX: "auto", gap: 3, py: 3 }}>
            {organizations.map((org) => {
                const scoreDisplay = getScoreDisplay(org.score);
                const data = graphData[org.id] || [];

                const xLabels = data.map((d) => d.month);
                const gas = data.map((d) => d.gas);
                const electric = data.map((d) => d.electric);

                return (
                    <Card
                        key={org.id}
                        sx={{
                            minWidth: 380,
                            height: 280,
                            flexShrink: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            borderRadius: 4,
                            p: 2,
                        }}
                    >
                        {/* Chart */}
                        <Box sx={{ height: 160 }}>
                            <LineChart
                                xAxis={[{ data: xLabels, scaleType: "point" }]}
                                series={[
                                    {
                                        data: gas,
                                        color: "#FFD54F",
                                        label: "Gas",
                                    },
                                    {
                                        data: electric,
                                        color: "#7C4DFF",
                                        label: "Electricity",
                                    },
                                ]}
                                margin={{
                                    top: 10,
                                    bottom: 10,
                                    left: 10,
                                    right: 10,
                                }}
                            />
                        </Box>

                        {/* Bottom Row */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography fontSize={17} color="text.secondary">
                                {org.name}
                            </Typography>

                            <Typography
                                fontWeight={700}
                                fontSize={20}
                                sx={{ color: scoreDisplay.color }}
                            >
                                {org.score}
                            </Typography>
                        </Box>
                    </Card>
                );
            })}
        </Box>
    );
}
