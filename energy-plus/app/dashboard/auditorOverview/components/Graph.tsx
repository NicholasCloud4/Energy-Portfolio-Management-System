"use client";

import { useEffect, useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";
import { Property } from "./SelectProperties";

export interface GraphPoint {
    month: string;
    electric: number;
    gas: number;
}

interface GraphProps {
    property: Property | null;
}

interface UsageRow {
    id: string;
    property_id: string;
    meter_id: string | null;
    usage_kwh: number | null;
    usage_date: string | null;
    usage_start: string | null;
    usage_end: string | null;
    meters?: unknown;
}

function getMonthKey(dateString: string | null | undefined): string | null {
    if (!dateString) return null;
    return dateString.slice(0, 7);
}

function getEnergyTypeName(row: UsageRow): string | null {
    const metersValue = row.meters;

    if (!metersValue) return null;

    const meter = Array.isArray(metersValue) ? metersValue[0] : metersValue;
    if (!meter || typeof meter !== "object") return null;

    const energyTypesValue = (meter as any).energy_types;
    if (!energyTypesValue) return null;

    const energyType = Array.isArray(energyTypesValue)
        ? energyTypesValue[0]
        : energyTypesValue;

    if (!energyType || typeof energyType !== "object") return null;

    const name = (energyType as any).name;
    return typeof name === "string" ? name.toLowerCase() : null;
}

export default function Graph({ property }: GraphProps) {
    const [data, setData] = useState<GraphPoint[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchGraphData() {
            if (!property?.id) {
                setData([]);
                return;
            }

            setLoading(true);

            const { data: usageData, error } = await supabaseClient
                .from("energy_usage")
                .select(`
                    id,
                    property_id,
                    meter_id,
                    usage_kwh,
                    usage_date,
                    usage_start,
                    usage_end,
                    meters (
                        id,
                        energy_type_id,
                        energy_types (
                            name,
                            unit
                        )
                    )
                `)
                .eq("property_id", property.id)
                .order("usage_start", { ascending: false });

            if (error) {
                console.error("Error fetching graph data:", error.message);
                setData([]);
                setLoading(false);
                return;
            }

            const typedUsageData = (usageData ?? []) as unknown as UsageRow[];
            const merged = new Map<string, GraphPoint>();

            typedUsageData.forEach((row) => {
                const monthKey =
                    getMonthKey(row.usage_date) ||
                    getMonthKey(row.usage_start) ||
                    getMonthKey(row.usage_end);

                if (!monthKey) return;

                const existing = merged.get(monthKey) || {
                    month: monthKey,
                    electric: 0,
                    gas: 0,
                };

                const energyTypeName = getEnergyTypeName(row);

                if (energyTypeName === "electricity") {
                    existing.electric += row.usage_kwh ?? 0;
                }

                if (energyTypeName === "gas") {
                    existing.gas += row.usage_kwh ?? 0;
                }

                merged.set(monthKey, existing);
            });

            const finalRows = Array.from(merged.values()).sort((a, b) =>
                a.month.localeCompare(b.month)
            );

            setData(finalRows);
            setLoading(false);
        }

        fetchGraphData();
    }, [property]);

    const maxValue =
        data.length > 0
            ? Math.max(...data.flatMap((item) => [item.electric, item.gas]), 1)
            : 1;

    return (
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography sx={{ mb: 2 }}>
                Monthly Gas and Electric Usage
            </Typography>

            {!property ? (
                <Typography color="text.secondary">
                    Select a property to view graph data.
                </Typography>
            ) : loading ? (
                <Typography color="text.secondary">
                    Loading graph data...
                </Typography>
            ) : data.length === 0 ? (
                <Typography color="text.secondary">
                    No graph data found for this property.
                </Typography>
            ) : (
                <Stack direction="row" spacing={1} alignItems="end" sx={{ height: 140 }}>
                    {data.map((item) => {
                        const electricHeight = (item.electric / maxValue) * 100;
                        const gasHeight = (item.gas / maxValue) * 100;

                        return (
                            <Stack key={item.month} spacing={1} alignItems="center">
                                <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="end"
                                    sx={{ height: 110 }}
                                >
                                    <Bar height={electricHeight} color="#4f8cff" />
                                    <Bar height={gasHeight} color="#f2994a" />
                                </Stack>
                                <Typography variant="caption">{item.month}</Typography>
                            </Stack>
                        );
                    })}
                </Stack>
            )}
        </Paper>
    );
}

function Bar({
                 height,
                 color,
             }: {
    height: number;
    color: string;
}) {
    return (
        <div
            style={{
                width: 16,
                height: `${height}px`,
                borderRadius: 4,
                background: color,
            }}
        />
    );
}