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


import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import { supabaseClient } from "@/lib/supabaseClient";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import {Property} from "@/app/dashboard/logEnergy/components/SelectProperty";

// Types
type EnergyType = {
    id: string;
    name: string;
    unit: string;
};

type EnergyUsageEntry = {
    energy_type_id: string;
    meter_id: string;
    usage_amount: number;
    cost: number;
};

type LogEnergyProps = {
    property: Property;
};

function isUuid(val: unknown): boolean {
    if (typeof val !== "string") return false;
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(val);
}

export default function LogEnergy({ property }: LogEnergyProps) {
    const [userId, setUserId] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);

    //Manual ID inputs for testing
    const [propertyId, setPropertyId] = React.useState("");
    const [meterId, setMeterId] = React.useState("");

    //Form state
    const [energyTypes, setEnergyTypes] = React.useState<EnergyType[]>([]);
    const [selectedEnergyType, setSelectedEnergyType] = React.useState<string>("");

    //Multiple entries support
    const [entries, setEntries] = React.useState<EnergyUsageEntry[]>([
        {
            energy_type_id: "",
            meter_id: "",
            usage_amount: 0,
            cost: 0,
        },
    ]);

    //Dates
    const [usageDate, setUsageDate] = React.useState<Dayjs | null>(dayjs());
    const [billingStart, setBillingStart] = React.useState<Dayjs | null>(dayjs().startOf("month"));
    const [billingEnd, setBillingEnd] = React.useState<Dayjs | null>(dayjs().endOf("month"));

    //Load initial data (just energy types)
    React.useEffect(() => {
        async function loadInitialData() {
            try {
                // Check authentication
                const { data: { user } } = await supabaseClient.auth.getUser();

                if (!user) {
                    setError("Please sign in to log energy usage");
                    setLoading(false);
                    return;
                }

                setUserId(user.id);

                // Fetch energy types
                const { data: energyTypesData, error: energyTypesError } = await supabaseClient
                    .from("energy_types")
                    .select("*")
                    .order('name');

                if (energyTypesError) throw energyTypesError;
                setEnergyTypes(energyTypesData || []);

            } catch (err: any) {
                console.error("Error loading initial data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadInitialData();
    }, []);

    const handleEntryChange = (index: number, field: keyof EnergyUsageEntry, value: any) => {
        const updatedEntries = [...entries];
        updatedEntries[index] = {
            ...updatedEntries[index],
            [field]: value,
        };
        setEntries(updatedEntries);
    };

    const addEnergyEntry = () => {
        if (entries.length < 2) {
            setEntries([
                ...entries,
                {
                    energy_type_id: "",
                    meter_id: "",
                    usage_amount: 0,
                    cost: 0,
                },
            ]);
        }
    };

    const removeEnergyEntry = (index: number) => {
        if (entries.length > 1) {
            setEntries(entries.filter((_, i) => i !== index));
        }
    };

    const validateForm = (): boolean => {
        if (!propertyId) {
            setError("Property ID is required");
            return false;
        }
        if (!isUuid(propertyId)) {
            setError("Property ID must be a valid UUID");
            return false;
        }

        if (!usageDate) {
            setError("Please select a usage date");
            return false;
        }

        if (!billingStart || !billingEnd) {
            setError("Please select billing period dates");
            return false;
        }

        if (!billingEnd.isAfter(billingStart)) {
            setError("Billing end must be after billing start");
            return false;
        }

        for (const entry of entries) {
            if (!entry.energy_type_id) {
                setError("Please select energy type for all entries");
                return false;
            }

            if (!entry.meter_id) {
                setError("Meter ID is required for all entries");
                return false;
            }
            if (!isUuid(entry.meter_id)) {
                setError("Meter ID must be a valid UUID");
                return false;
            }

            if (entry.usage_amount <= 0) {
                setError("Usage amount must be greater than 0");
                return false;
            }

            if (entry.cost <= 0) {
                setError("Cost must be greater than 0");
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async () => {
        setError(null);
        setSuccess(null);

        if (!validateForm()) return;

        setSaving(true);

        try {
            const usageDateStr = usageDate!.format("YYYY-MM-DD");
            const billingStartStr = billingStart!.format("YYYY-MM-DD");
            const billingEndStr = billingEnd!.format("YYYY-MM-DD");

            const results = [];

            for (const entry of entries) {
                console.log("Inserting energy usage with:", {
                    property_id: propertyId,
                    meter_id: entry.meter_id,
                    usage_amount: entry.usage_amount,
                    usage_date: usageDateStr,
                    usage_start: billingStartStr,
                    usage_end: billingEndStr,
                    created_by: userId,
                });

                // 1. Insert into energy_usage
                const { error: usageError } = await supabaseClient
                    .from("energy_usage")
                    .insert({
                        property_id: propertyId,
                        meter_id: entry.meter_id,
                        usage_amount: entry.usage_amount,
                        usage_date: usageDateStr,
                        usage_start: billingStartStr,
                        usage_end: billingEndStr,
                        created_by: userId,
                        usage_kwh: entry.usage_amount
                    });



                // 2. Insert into energy_billing
                const { data: billingData, error: billingError } = await supabaseClient
                    .from("energy_billing")
                    .insert({
                        meter_id: entry.meter_id,
                        billing_start: billingStartStr,
                        billing_end: billingEndStr,
                        cost: entry.cost,
                        usage_amount: entry.usage_amount,
                        created_by: userId,
                        is_voided: false,
                    })
                    .select();

                if (billingError) {
                    console.error("Energy billing insert error:", billingError);
                    throw new Error(`${billingError.message}`);
                }

                results.push({ usage: usageDate, billing: billingData });
            }

            setSuccess(`Successfully logged ${results.length} energy usage record(s)`);

            // Reset form
            setEntries([{
                energy_type_id: "",
                meter_id: "",
                usage_amount: 0,
                cost: 0,
            }]);
            setSelectedEnergyType("");
            setUsageDate(dayjs());
            setBillingStart(dayjs().startOf("month"));
            setBillingEnd(dayjs().endOf("month"));


        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <Paper sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Paper>
        );
    }

    if (!userId) {
        return (
            <Paper sx={{ p: 3 }}>
                <Alert severity="info">
                    Please sign in to log energy usage.
                </Alert>
            </Paper>
        );
    }

    return (
        <Paper sx={{ p: 3, maxWidth: 700, mx: 'auto' }}>
            <Stack spacing={3}>
                <Typography
                    variant="h6"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <FlashOnIcon fontSize="inherit" />
                    Log Energy Usage
                </Typography>

                {error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>}
                {success && <Alert severity="success" onClose={() => setSuccess(null)}>{success}</Alert>}



                <Card variant="outlined" sx={{ bgcolor: '#f5f5f5' }}>
                    <CardContent>
                        <Typography variant="subtitle2" gutterBottom color="primary">
                            📋 Test Configuration
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                label="Property ID (UUID)"
                                value={propertyId}
                                onChange={(e) => setPropertyId(e.target.value)}
                                placeholder="00000000-0000-0000-0000-000000000000"
                                fullWidth
                                required
                                error={propertyId !== "" && !isUuid(propertyId)}
                                helperText={
                                    propertyId === ""
                                        ? "Enter a property UUID from your database"
                                        : (!isUuid(propertyId) ? "Invalid UUID format" : "Valid property ID")
                                }
                                variant="outlined"
                            />
                        </Stack>
                    </CardContent>
                </Card>

                {/* Date Selection */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Usage Date"
                        value={usageDate}
                        onChange={setUsageDate}
                        disableFuture
                        slotProps={{ textField: { fullWidth: true } }}
                    />

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <DatePicker
                            label="Billing Start"
                            value={billingStart}
                            onChange={setBillingStart}
                            disableFuture
                            slotProps={{ textField: { fullWidth: true } }}
                        />
                        <DatePicker
                            label="Billing End"
                            value={billingEnd}
                            onChange={setBillingEnd}
                            disableFuture
                            slotProps={{ textField: { fullWidth: true } }}
                        />
                    </Box>
                </LocalizationProvider>

                <Divider>Energy Usage Entries</Divider>

                {/* Energy Entries */}
                {entries.map((entry, index) => (
                    <Card key={index} variant="outlined" sx={{ p: 2 }}>
                        <Stack spacing={2}>
                            <Typography variant="subtitle2" color="primary">
                                {index === 0 ? 'Primary' : 'Secondary'} Energy Entry
                            </Typography>

                            {/* Manual Meter ID Input */}
                            <TextField
                                label="Meter ID (UUID)"
                                value={entry.meter_id}
                                onChange={(e) => handleEntryChange(index, 'meter_id', e.target.value)}
                                placeholder="00000000-0000-0000-0000-000000000000"
                                fullWidth
                                required
                                error={entry.meter_id !== "" && !isUuid(entry.meter_id)}
                                helperText={
                                    entry.meter_id === ""
                                        ? ""
                                        : (!isUuid(entry.meter_id) ? "Invalid UUID format" : "Valid meter ID")
                                }
                            />

                            {/* Energy Type Selection */}
                            <FormControl fullWidth>
                                <InputLabel>Energy Type</InputLabel>
                                <Select
                                    value={entry.energy_type_id}
                                    label="Energy Type"
                                    onChange={(e) => handleEntryChange(index, 'energy_type_id', e.target.value)}
                                >
                                    {energyTypes.map((type) => (
                                        <MenuItem key={type.id} value={type.id}>
                                            {type.name} ({type.unit})
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* Usage and Cost */}
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <TextField
                                    label="Usage (kWh)"
                                    value={entry.usage_amount}
                                    onChange={(e) => handleEntryChange(index, 'usage_amount', parseFloat(e.target.value) || 0)}
                                    type="number"
                                    required
                                    sx={{ flex: 1 }}
                                    slotProps={{
                                        htmlInput: {
                                            step: "0.01",
                                            min: 0,
                                        },
                                    }}
                                />

                                <TextField
                                    label="Cost ($)"
                                    value={entry.cost}
                                    onChange={(e) => handleEntryChange(index, 'cost', parseFloat(e.target.value) || 0)}
                                    type="number"
                                    required
                                    sx={{ flex: 1 }}
                                    slotProps={{
                                        htmlInput: {
                                            step: "0.01",
                                            min: 0,
                                        },
                                    }}
                                />
                            </Box>

                            {/* Remove button for second entry */}
                            {entries.length > 1 && (
                                <Button
                                    color="error"
                                    onClick={() => removeEnergyEntry(index)}
                                    size="small"
                                >
                                    Remove Entry
                                </Button>
                            )}
                        </Stack>
                    </Card>
                ))}

                {/* Add Entry Button */}
                {entries.length < 2 && (
                    <Button
                        variant="outlined"
                        onClick={addEnergyEntry}
                        startIcon={<GasMeterIcon />}
                    >
                        Add {entries.length === 0 ? 'Energy Entry' : 'Second Energy Type'}
                    </Button>
                )}

                {/* Submit Button */}
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={saving || !propertyId}
                    size="large"
                >
                    {saving ? <CircularProgress size={24} /> : 'Log Energy Usage'}
                </Button>


            </Stack>
        </Paper>
    );
}