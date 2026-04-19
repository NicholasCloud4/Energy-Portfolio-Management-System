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
    Paper,
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
    electricCost: number | null;
    gasCost: number | null;
    totalCost: number | null;
}

interface NestedEnergyType {
    name: string | null;
    unit?: string | null;
}

interface NestedMeter {
    id?: string;
    energy_type_id?: string | null;
    energy_types?: NestedEnergyType | NestedEnergyType[] | null;
}

interface UsageRow {
    id: string;
    property_id: string;
    meter_id: string | null;
    usage_kwh: number | null;
    usage_amount?: number | null;
    usage_date: string | null;
    usage_start: string | null;
    usage_end: string | null;
    meters?: NestedMeter | NestedMeter[] | null;
}

interface BillingRow {
    id: string;
    meter_id: string | null;
    billing_start: string | null;
    billing_end: string | null;
    cost: number | null;
    usage_amount?: number | null;
    meters?: NestedMeter | NestedMeter[] | null;
}

function getMonthKey(dateString: string | null | undefined): string | null {
    if (!dateString) return null;
    return dateString.slice(0, 7);
}

function getNestedEnergyTypeName(metersValue: NestedMeter | NestedMeter[] | null | undefined): string | null {
    if (!metersValue) return null;

    const meter = Array.isArray(metersValue) ? metersValue[0] : metersValue;
    if (!meter || typeof meter !== "object") return null;

    const energyTypesValue = meter.energy_types;
    if (!energyTypesValue) return null;

    const energyType = Array.isArray(energyTypesValue)
        ? energyTypesValue[0]
        : energyTypesValue;

    if (!energyType || typeof energyType !== "object") return null;

    const name = energyType.name;
    return typeof name === "string" ? name.toLowerCase() : null;
}

function formatCurrency(value: number | null | undefined): string {
    if (value === null || value === undefined) {
        return "N/A";
    }

    return `$${Number(value).toFixed(2)}`;
}

function formatUsage(value: number | null | undefined): string | number {
    if (value === null || value === undefined) {
        return "N/A";
    }

    return value;
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
                    usage_amount,
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
                        .filter(Boolean),
                ),
            ] as string[];

            let billingData: BillingRow[] = [];

            if (meterIds.length > 0) {
                const { data, error } = await supabaseClient
                    .from("energy_billing")
                    .select(`
                        id,
                        meter_id,
                        billing_start,
                        billing_end,
                        cost,
                        usage_amount,
                        meters (
                            id,
                            energy_type_id,
                            energy_types (
                                name,
                                unit
                            )
                        )
                    `)
                    .in("meter_id", meterIds);

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
                    electricCost: null,
                    gasCost: null,
                    totalCost: null,
                };

                const energyTypeName = getNestedEnergyTypeName(row.meters);
                const usageValue =
                    row.usage_amount !== null && row.usage_amount !== undefined
                        ? row.usage_amount
                        : row.usage_kwh;

                if (energyTypeName === "electricity") {
                    existing.electric = (existing.electric ?? 0) + (usageValue ?? 0);
                }

                if (energyTypeName === "gas") {
                    existing.gas = (existing.gas ?? 0) + (usageValue ?? 0);
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
                    electricCost: null,
                    gasCost: null,
                    totalCost: null,
                };

                const energyTypeName = getNestedEnergyTypeName(row.meters);

                if (energyTypeName === "electricity") {
                    existing.electricCost = (existing.electricCost ?? 0) + (row.cost ?? 0);
                }

                if (energyTypeName === "gas") {
                    existing.gasCost = (existing.gasCost ?? 0) + (row.cost ?? 0);
                }

                merged.set(monthKey, existing);
            });

            const finalRows = Array.from(merged.values())
                .map((row) => {
                    const totalCost =
                        (row.electricCost ?? 0) + (row.gasCost ?? 0);

                    return {
                        ...row,
                        totalCost: totalCost > 0 ? totalCost : null,
                    };
                })
                .sort((a, b) => b.billingMonth.localeCompare(a.billingMonth));

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
                                    <TableCell>Electric Cost</TableCell>
                                    <TableCell>Gas Cost</TableCell>
                                    <TableCell>Total Cost</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.billingMonth}>
                                        <TableCell>{row.billingMonth}</TableCell>
                                        <TableCell>{formatUsage(row.electric)}</TableCell>
                                        <TableCell>{formatUsage(row.gas)}</TableCell>
                                        <TableCell>{formatCurrency(row.electricCost)}</TableCell>
                                        <TableCell>{formatCurrency(row.gasCost)}</TableCell>
                                        <TableCell>{formatCurrency(row.totalCost)}</TableCell>
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