"use client";

import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Alert
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";
import { Property } from "./SelectProperty";

type LogEnergyProps = {
    property: Property | null;
};

export default function LogEnergy2({ property }: LogEnergyProps) {
    const [billingMonth, setBillingMonth] = useState("");
    const [usage, setUsage] = useState("");
    const [cost, setCost] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!property?.id) {
            setErrorMessage("No property selected.");
            return;
        }

        if (!billingMonth || !usage) {
            setErrorMessage("Please complete the required fields.");
            return;
        }

        setLoading(true);

        const { error } = await supabaseClient.from("energy_usage").insert([
            {
                property_id: property.id,
                billing_month: billingMonth,
                usage: Number(usage),
                cost: cost ? Number(cost) : null
            }
        ]);

        setLoading(false);

        if (error) {
            console.error("Error saving energy record:", error);
            setErrorMessage("Failed to save energy record.");
            return;
        }

        setSuccessMessage("Energy record saved successfully.");
        setBillingMonth("");
        setUsage("");
        setCost("");
    };

    if (!property) {
        return (
            <Typography color="text.secondary">
                Select a property first.
            </Typography>
        );
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography sx={{ mb: 2 }}>
                Logging energy for: <strong>{property.street || `Property ${property.id}`}</strong>
            </Typography>

            {successMessage && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {successMessage}
                </Alert>
            )}

            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            )}

            <TextField
                fullWidth
                label="Billing Month"
                type="month"
                value={billingMonth}
                onChange={(e) => setBillingMonth(e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />

            <TextField
                fullWidth
                label="Usage"
                type="number"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                margin="normal"
                required
            />

            <TextField
                fullWidth
                label="Cost"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                disabled={loading}
            >
                {loading ? "Saving..." : "Save Energy Record"}
            </Button>
        </Box>
    );
}