"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import { Property } from "./SelectProperty";
import { supabaseClient } from "@/lib/supabaseClient";

interface EnergyUsageProps {
    property: Property | null;
    refreshKey?: number;
}

interface EnergyUsageDisplayRow {
    billingMonth: string;
    electric: number | null;
    gas: number | null;
    cost: number | null;
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

interface BillingRow {
    id: string;
    meter_id: string | null;
    billing_start: string | null;
    billing_end: string | null;
    cost: number | null;
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

export default function EnergyUsage({ property, refreshKey }: EnergyUsageProps) {
    const [rows, setRows] = useState<EnergyUsageDisplayRow[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchEnergyUsage() {
            if (!property?.id) {
                setRows([]);
                return;
            }

            setLoading(true);

            const { data: usageData, error: usageError } = await supabaseClient
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

            console.log("usageData:", usageData);
            console.log("usageError:", usageError);

            if (usageError) {
                console.error("Error fetching energy usage:", usageError);
                setRows([]);
                setLoading(false);
                return;
            }

            const typedUsageData = (usageData ?? []) as unknown as UsageRow[];

            const meterIds = [
                ...new Set(
                    typedUsageData
                        .map((row) => row.meter_id)
                        .filter(Boolean)
                )
            ] as string[];

            let billingData: BillingRow[] = [];

            if (meterIds.length > 0) {
                const { data, error } = await supabaseClient
                    .from("energy_billing")
                    .select("id, meter_id, billing_start, billing_end, cost")
                    .in("meter_id", meterIds);

                console.log("billingData:", data);
                console.log("billingError:", error);

                if (error) {
                    console.error("Error fetching billing data:", error);
                } else {
                    billingData = (data ?? []) as BillingRow[];
                }
            }

            const merged = new Map<string, EnergyUsageDisplayRow>();

            typedUsageData.forEach((row) => {
                const monthKey =
                    getMonthKey(row.usage_date) ||
                    getMonthKey(row.usage_start) ||
                    getMonthKey(row.usage_end);

                if (!monthKey) return;

                const existing = merged.get(monthKey) || {
                    billingMonth: monthKey,
                    electric: null,
                    gas: null,
                    cost: null
                };

                const energyTypeName = getEnergyTypeName(row);

                console.log("row meter_id:", row.meter_id);
                console.log("row usage_kwh:", row.usage_kwh);
                console.log("energyTypeName:", energyTypeName);

                if (energyTypeName === "electricity") {
                    existing.electric = (existing.electric ?? 0) + (row.usage_kwh ?? 0);
                }

                if (energyTypeName === "gas") {
                    existing.gas = (existing.gas ?? 0) + (row.usage_kwh ?? 0);
                }

                merged.set(monthKey, existing);
            });

            billingData.forEach((row) => {
                const monthKey =
                    getMonthKey(row.billing_start) ||
                    getMonthKey(row.billing_end);

                if (!monthKey) return;

                const existing = merged.get(monthKey) || {
                    billingMonth: monthKey,
                    electric: null,
                    gas: null,
                    cost: null
                };

                existing.cost = row.cost ?? existing.cost;
                merged.set(monthKey, existing);
            });

            const finalRows = Array.from(merged.values()).sort((a, b) =>
                b.billingMonth.localeCompare(a.billingMonth)
            );

            console.log("finalRows:", finalRows);

            setRows(finalRows);
            setLoading(false);
        }

        fetchEnergyUsage();
    }, [property, refreshKey]);

    if (!property) {
        return (
            <Card>
                <CardContent>
                    <Typography color="text.secondary">
                        Select a property to view energy usage.
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Energy Usage
                </Typography>

                {loading ? (
                    <Typography color="text.secondary">
                        Loading energy data...
                    </Typography>
                ) : rows.length === 0 ? (
                    <Typography color="text.secondary">
                        No energy data found for this property.
                    </Typography>
                ) : (
                    <TableContainer component={Paper} elevation={0}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Billing Month</TableCell>
                                    <TableCell>Electric (kWh)</TableCell>
                                    <TableCell>Gas (therms)</TableCell>
                                    <TableCell>Cost</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.billingMonth}>
                                        <TableCell>{row.billingMonth}</TableCell>
                                        <TableCell>{row.electric ?? "N/A"}</TableCell>
                                        <TableCell>{row.gas ?? "N/A"}</TableCell>
                                        <TableCell>
                                            {row.cost !== null && row.cost !== undefined
                                                ? `$${Number(row.cost).toFixed(2)}`
                                                : "N/A"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </CardContent>
        </Card>
    );
}