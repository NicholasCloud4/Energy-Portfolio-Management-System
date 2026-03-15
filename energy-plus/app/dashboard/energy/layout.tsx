"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    Alert,
    Paper,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { supabaseClient } from "@/lib/supabaseClient";
import FlashOnIcon from "@mui/icons-material/FlashOn";

type PropertyOption = {
    id: string;
    label: string;
};

export default function EnergyManualEntry() {
    const [userId, setUserId] = React.useState<string | null>(null);
    const [properties, setProperties] = React.useState<PropertyOption[]>([]);
    const [propertyId, setPropertyId] = React.useState("");
    const [usageKwh, setUsageKwh] = React.useState("");
    const [cost, setCost] = React.useState("");
    const [usageDate, setUsageDate] = React.useState<Dayjs | null>(dayjs());
    const [billingStart, setBillingStart] = React.useState<Dayjs | null>(dayjs().startOf("month")); // Billing period start
    const [billingEnd, setBillingEnd] = React.useState<Dayjs | null>(dayjs().endOf("month")); // Billing period end
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);
    const [saving, setSaving] = React.useState(false);
    const [authChecked, setAuthChecked] = React.useState(false); // Checks if user is logged in or not.
    const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Checks if user is logged in or not.

    React.useEffect(() => {
        async function load() {
            const { data } = await supabaseClient.auth.getUser();

            if (!data.user) { // Checks if user is signed in. If not, sets false and prevents user from adding/seeing data.
                setIsAuthenticated(false);
                setUserId(null);
                setAuthChecked(true);
                return;
            }

            const uid = data.user.id;
            setIsAuthenticated(true);
            setUserId(uid);
            setAuthChecked(true);

            const { data: memberships, error } = await supabaseClient
                .from("organization_members")
                .select(`
                    organizations (
                        properties (
                            id,
                            street,
                            city,
                            state,
                            property_type
                        )
                    )
                `)
                .eq("user_id", uid);

            if (error) {
                setError(error.message);
                return;
            }

            type MembershipRow = {
                organizations: {
                    properties: {
                        id: string;
                        street: string;
                        city: string;
                        state: string;
                        property_type: string;
                    }[];
                }[] | null;
            };

            const typedMemberships = (memberships ?? []) as MembershipRow[];

            const props = typedMemberships
                .flatMap(m => m.organizations ?? [])
                .flatMap(o => o.properties ?? [])
                .map(p => ({
                    id: p.id,
                    label: `${p.street}, ${p.city}, ${p.state} (${p.property_type})`,
                }));

            setProperties(props);
        }

        load();
    }, []);

    async function handleSubmit() {
        setError(null);
        setSuccess(null);

        if (!propertyId || !usageDate || !usageKwh || !cost || !billingStart || !billingEnd) { // required fields to be added here
            setError("All fields are required");
            return;
        }

        // Basic guard rails so required values don't become NaN or negative.
        const parsedUsage = Number(usageKwh);
        const parsedCost = Number(cost);

        if (!Number.isFinite(parsedUsage) || parsedUsage < 0) {
            setError("Usage (kWh) must be a valid positive number");
            return;
        }

        if (!Number.isFinite(parsedCost) || parsedCost < 0) {
            setError("Cost must be a valid positive number");
            return;
        }

        // Enforces DB constraint: billing_end > billing_start
        if (!billingEnd.isAfter(billingStart)) {
            setError("Billing End must be after Billing Start");
            return;
        }

        setSaving(true);

        const usageDateStr = usageDate.format("YYYY-MM-DD");
        const billingStartStr = billingStart.format("YYYY-MM-DD");
        const billingEndStr = billingEnd.format("YYYY-MM-DD");

        const { error: usageError } = await supabaseClient
            .from("energy_usage")
            .upsert(
                {
                    property_id: propertyId,
                    usage_kwh: parsedUsage,
                    usage_date: usageDateStr,
                    created_by: userId,
                },
                {
                    onConflict: "property_id,usage_date",
                }
            );

        if (usageError) {
            setError(usageError.message);
            setSaving(false);
            return;
        }

        const { error: billingError } = await supabaseClient
            .from("energy_billing")
            .insert({
                property_id: propertyId,
                billing_start: billingStartStr,
                billing_end: billingEndStr,
                cost: parsedCost,
                created_by: userId,
            });

        if (billingError) {
            setError(billingError.message);
            setSaving(false);
            return;
        }

        setSuccess("Energy usage recorded");
        setUsageKwh("");
        setCost("");
        setUsageDate(dayjs());
        setBillingStart(dayjs().startOf("month"));
        setBillingEnd(dayjs().endOf("month"));

        setSaving(false);
    }

    if (!authChecked) {
        return null;
    }

    if (!isAuthenticated) {
        return (
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6">Sign in required</Typography>
                <Typography color="text.secondary">
                    You must be signed in to enter energy usage data.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper sx={{ p: 3, maxWidth: 500 }}>
            <Stack spacing={2}>
                <Typography
                    variant="h6"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <FlashOnIcon fontSize="inherit" />
                    Energy Usage
                </Typography>

                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}

                <FormControl fullWidth>
                    <InputLabel>Property</InputLabel>
                    <Select
                        value={propertyId}
                        label="Property"
                        onChange={e => setPropertyId(e.target.value)}
                    >
                        {properties.map(p => (
                            <MenuItem key={p.id} value={p.id}>
                                {p.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Usage Date"
                        value={usageDate}
                        onChange={setUsageDate}
                        // disableFuture
                    />

                    <DatePicker
                        label="Billing Start"
                        value={billingStart}
                        onChange={setBillingStart}
                        disableFuture
                    />

                    <DatePicker
                        label="Billing End"
                        value={billingEnd}
                        onChange={setBillingEnd}
                        disableFuture
                    />
                </LocalizationProvider>

                <TextField
                    label="Usage (kWh)"
                    value={usageKwh}
                    onChange={e => setUsageKwh(e.target.value)}
                    type="number"
                    required
                    slotProps={{
                        htmlInput: {
                            step: "0.01",
                            min: 0,
                        },
                    }}
                />

                <TextField
                    label="Cost ($)"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    type="number"
                    required
                    slotProps={{
                        htmlInput: {
                            step: "0.01",
                            min: 0,
                        },
                    }}
                />

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={saving}
                >
                    Save Usage
                </Button>
            </Stack>
        </Paper>
    );
}