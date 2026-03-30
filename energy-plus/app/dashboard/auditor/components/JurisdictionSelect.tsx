"use client";

import * as React from "react";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Snackbar,
    Stack,
    Typography,
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";

type JurisdictionType = "city" | "state";

type Jurisdiction = {
    id: string;
    type: JurisdictionType;
    name: string;
    slug: string | null;
    parent_id: string | null;
};

type Notice = {
    type: "success" | "error";
    message: string;
} | null;

interface JurisdictionSelectProps {
    onSelectJurisdiction: (id: string, name: string) => void;
}

export default function JurisdictionSelect({
                                               onSelectJurisdiction,
                                           }: JurisdictionSelectProps) {
    const [jurisdictionType, setJurisdictionType] =
        React.useState<JurisdictionType | "">("");
    const [jurisdictions, setJurisdictions] = React.useState<Jurisdiction[]>([]);
    const [selectedJurisdictionId, setSelectedJurisdictionId] =
        React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [notice, setNotice] = React.useState<Notice>(null);

    React.useEffect(() => {
        async function loadJurisdictions() {
            setLoading(true);

            const { data, error } = await supabaseClient
                .from("jurisdictions")
                .select("id, type, name, slug, parent_id")
                .order("name", { ascending: true });

            if (error) {
                setNotice({
                    type: "error",
                    message: "Could not load jurisdictions.",
                });
                setLoading(false);
                return;
            }

            setJurisdictions((data as Jurisdiction[]) || []);
            setLoading(false);
        }

        loadJurisdictions();
    }, []);

    const filteredJurisdictions = React.useMemo(() => {
        if (!jurisdictionType) return [];
        return jurisdictions.filter((j) => j.type === jurisdictionType);
    }, [jurisdictions, jurisdictionType]);

    const handleTypeSelect = (type: JurisdictionType) => {
        setJurisdictionType(type);
        setSelectedJurisdictionId("");
    };

    const handleJurisdictionChange = (event: SelectChangeEvent<string>) => {
        setSelectedJurisdictionId(event.target.value);
    };

    const handleContinue = () => {
        if (!selectedJurisdictionId) {
            setNotice({
                type: "error",
                message: "Please select a jurisdiction.",
            });
            return;
        }

        const selectedJurisdiction = jurisdictions.find(
            (j) => j.id === selectedJurisdictionId
        );

        if (!selectedJurisdiction) {
            setNotice({
                type: "error",
                message: "Invalid jurisdiction selection.",
            });
            return;
        }

        //  THIS is the key change
        onSelectJurisdiction(
            selectedJurisdiction.id,
            selectedJurisdiction.name
        );
    };

    return (
        <>
            <Card variant="outlined" sx={{ maxWidth: 720, mx: "auto", mt: 4 }}>
                <CardContent sx={{ p: 4 }}>
                    <Stack spacing={4}>
                        <Box textAlign="center">
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                Select your Jurisdiction
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Choose a jurisdiction to view organizations and properties in that area.
                            </Typography>
                        </Box>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button
                                fullWidth
                                variant={jurisdictionType === "state" ? "contained" : "outlined"}
                                size="large"
                                onClick={() => handleTypeSelect("state")}
                            >
                                State
                            </Button>

                            <Button
                                fullWidth
                                variant={jurisdictionType === "city" ? "contained" : "outlined"}
                                size="large"
                                onClick={() => handleTypeSelect("city")}
                            >
                                City
                            </Button>
                        </Stack>

                        <FormControl fullWidth disabled={!jurisdictionType || loading}>
                            <FormLabel sx={{ mb: 1 }}>Jurisdiction</FormLabel>
                            <Select
                                value={selectedJurisdictionId}
                                displayEmpty
                                onChange={handleJurisdictionChange}
                            >
                                <MenuItem value="" disabled>
                                    {loading
                                        ? "Loading jurisdictions..."
                                        : jurisdictionType
                                            ? "Select a jurisdiction"
                                            : "Select type first"}
                                </MenuItem>

                                {filteredJurisdictions.map((jurisdiction) => (
                                    <MenuItem key={jurisdiction.id} value={jurisdiction.id}>
                                        {jurisdiction.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box display="flex" justifyContent="center">
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleContinue}
                                disabled={!selectedJurisdictionId}
                            >
                                Continue
                            </Button>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>

            <Snackbar
                open={Boolean(notice)}
                autoHideDuration={4000}
                onClose={() => setNotice(null)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    severity={notice?.type ?? "success"}
                    onClose={() => setNotice(null)}
                    variant="filled"
                >
                    {notice?.message}
                </Alert>
            </Snackbar>
        </>
    );
}