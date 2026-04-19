"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import {
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
    CircularProgress,
    Box,
    Divider,
    Card,
    CardContent,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { supabaseClient } from "@/lib/supabaseClient";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import { Property } from "./SelectProperty";

type LogEnergyProps = {
    property: Property;
    onSuccess?: () => void;
};

type EnergyType = {
    id: string;
    name: string;
    unit: string;
};

type EnergyUsageEntry = {
    energy_type_id: string;
    usage_amount: number | "";
    cost: number | "";
};

export default function LogEnergy({ property, onSuccess }: LogEnergyProps) {
    const [userId, setUserId] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);

    const [energyTypes, setEnergyTypes] = React.useState<EnergyType[]>([]);

    const [entries, setEntries] = React.useState<EnergyUsageEntry[]>([
        { energy_type_id: "", usage_amount: "", cost: "" },
    ]);

    const [usageDate, setUsageDate] = React.useState<Dayjs | null>(dayjs());
    const [billingStart, setBillingStart] = React.useState<Dayjs | null>(dayjs().startOf("month"));
    const [billingEnd, setBillingEnd] = React.useState<Dayjs | null>(dayjs().endOf("month"));

    React.useEffect(() => {
        async function load() {
            const { data: { user } } = await supabaseClient.auth.getUser();

            if (!user) {
                setError("Please sign in");
                setLoading(false);
                return;
            }

            setUserId(user.id);

            const { data, error } = await supabaseClient
                .from("energy_types")
                .select("*")
                .order("name");

            if (error) {
                setError(error.message);
            } else {
                setEnergyTypes(data || []);
            }

            setLoading(false);
        }

        load();
    }, []);

    const handleEntryChange = (index: number, field: keyof EnergyUsageEntry, value: any) => {
        const updated = [...entries];
        updated[index] = { ...updated[index], [field]: value };
        setEntries(updated);
    };

    const addEntry = () => {
        if (entries.length < 2) {
            setEntries([...entries, { energy_type_id: "", usage_amount: "", cost: "" }]);
        }
    };

    const removeEntry = (index: number) => {
        setEntries(entries.filter((_, i) => i !== index));
    };

    const validate = () => {
        if (!property?.id) {
            setError("No property selected");
            return false;
        }

        if (!usageDate || !billingStart || !billingEnd) {
            setError("Dates are required");
            return false;
        }

        if (!billingEnd.isAfter(billingStart)) {
            setError("Billing end must be after start");
            return false;
        }

        for (const e of entries) {
            if (!e.energy_type_id) {
                setError("Select energy type");
                return false;
            }

            if (typeof e.usage_amount !== "number" || e.usage_amount <= 0) {
                setError("Usage must be greater than 0");
                return false;
            }

            if (typeof e.cost !== "number" || e.cost <= 0) {
                setError("Cost must be greater than 0");
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async () => {
        setError(null);
        setSuccess(null);

        if (!validate()) return;

        setSaving(true);

        try {
            const billingStartStr = billingStart!.format("YYYY-MM-DD");
            const billingEndStr = billingEnd!.format("YYYY-MM-DD");

            // 🔥 IMPORTANT: tie usage_date to billing period
            const usageDateStr = billingEndStr;

            for (const entry of entries) {
                // 1. Get or create meter
                const { data: meterId, error: meterError } = await supabaseClient.rpc(
                    "get_or_create_meter",
                    {
                        p_property_id: property.id,
                        p_energy_type_id: entry.energy_type_id,
                    }
                );

                if (meterError || !meterId) {
                    throw new Error("Failed to get/create meter");
                }

                // 2. UPSERT energy_usage (🔥 key fix)
                const { error: usageError } = await supabaseClient
                    .from("energy_usage")
                    .upsert(
                        {
                            property_id: property.id,
                            meter_id: meterId,
                            usage_amount: entry.usage_amount,
                            usage_kwh: entry.usage_amount,
                            usage_date: usageDateStr,
                            usage_start: billingStartStr,
                            usage_end: billingEndStr,
                            created_by: userId,
                        },
                        {
                            onConflict: "meter_id,usage_start,usage_end",
                        }
                    );

                if (usageError) throw usageError;

                // 3. UPSERT energy_billing (optional but recommended)
                const { error: billingError } = await supabaseClient
                    .from("energy_billing")
                    .upsert(
                        {
                            meter_id: meterId,
                            billing_start: billingStartStr,
                            billing_end: billingEndStr,
                            cost: entry.cost,
                            usage_amount: entry.usage_amount,
                            created_by: userId,
                            is_voided: false,
                        },
                        {
                            onConflict: "meter_id,billing_start,billing_end",
                        }
                    );

                if (billingError) throw billingError;
            }

            setSuccess("Energy usage saved (created or updated)");

            if (onSuccess) {
                onSuccess();
            }

            setEntries([{ energy_type_id: "", usage_amount: "", cost: "" }]);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <CircularProgress />;

    if (!userId) {
        return <Alert severity="info">Please sign in</Alert>;
    }

    return (
        <Paper sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
            <Stack spacing={3}>
                <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FlashOnIcon /> Log Energy Usage
                </Typography>

                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Usage Date" value={usageDate} onChange={setUsageDate} />
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <DatePicker label="Billing Start" value={billingStart} onChange={setBillingStart} />
                        <DatePicker label="Billing End" value={billingEnd} onChange={setBillingEnd} />
                    </Box>
                </LocalizationProvider>

                <Divider>Entries</Divider>

                {entries.map((entry, i) => (
                    <Card key={i}>
                        <CardContent>
                            <Stack spacing={2}>
                                <FormControl fullWidth>
                                    <InputLabel>Energy Type</InputLabel>
                                    <Select
                                        value={entry.energy_type_id}
                                        label="Energy Type"
                                        onChange={(e) =>
                                            handleEntryChange(i, "energy_type_id", e.target.value)
                                        }
                                    >
                                        {energyTypes.map((t) => (
                                            <MenuItem key={t.id} value={t.id}>
                                                {t.name} ({t.unit})
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Box sx={{ display: "flex", gap: 2 }}>
                                    <TextField
                                        label="Usage"
                                        type="number"
                                        value={entry.usage_amount}
                                        onChange={(e) =>
                                            handleEntryChange(i, "usage_amount", parseFloat(e.target.value) || 0)
                                        }
                                        fullWidth
                                        sx={{
                                            "& input[type=number]": {
                                                MozAppearance: "textfield",
                                            },
                                            "& input[type=number]::-webkit-outer-spin-button": {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                            },
                                            "& input[type=number]::-webkit-inner-spin-button": {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                            },
                                        }}
                                    />

                                    <TextField
                                        label="Cost"
                                        type="number"
                                        value={entry.cost}
                                        onChange={(e) =>
                                            handleEntryChange(i, "cost", parseFloat(e.target.value) || 0)
                                        }
                                        fullWidth
                                        sx={{
                                            "& input[type=number]": {
                                                MozAppearance: "textfield",
                                            },
                                            "& input[type=number]::-webkit-outer-spin-button": {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                            },
                                            "& input[type=number]::-webkit-inner-spin-button": {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                            },
                                        }}
                                    />
                                </Box>

                                {entries.length > 1 && (
                                    <Button color="error" onClick={() => removeEntry(i)}>
                                        Remove
                                    </Button>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                ))}

                {entries.length < 2 && (
                    <Button onClick={addEntry} startIcon={<GasMeterIcon />}>
                        Add Second Energy Type
                    </Button>
                )}

                <Button variant="contained" onClick={handleSubmit} disabled={saving}>
                    {saving ? <CircularProgress size={24} /> : "Submit"}
                </Button>
            </Stack>
        </Paper>
    );
}