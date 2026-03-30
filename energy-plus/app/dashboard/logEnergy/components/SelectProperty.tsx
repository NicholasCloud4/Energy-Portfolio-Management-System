"use client";

import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    CircularProgress,
    Box,
    Alert,
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";

export interface Property {
    id: string;
    organization_id: string;
    jurisdiction_id: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: number | null;
    sq_ft: number | null;
    property_type: string | null;
    created_at?: string | null;
}

interface SelectPropertyProps {
    onPropertySelect: (property: Property) => void;
    selectedProperty?: Property | null;
}

export default function SelectProperty({
                                           onPropertySelect,
                                           selectedProperty,
                                       }: SelectPropertyProps) {
    const [open, setOpen] = useState(false);
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        async function fetchProperties() {
            setLoading(true);
            setErrorText("");

            const {
                data: { user },
                error: userError,
            } = await supabaseClient.auth.getUser();

            if (userError) {
                console.error("Error fetching user:", userError.message);
                setErrorText(userError.message);
                setLoading(false);
                return;
            }

            if (!user) {
                setProperties([]);
                setLoading(false);
                return;
            }

            const { data, error } = await supabaseClient
                .from("properties")
                .select(
                    "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at"
                )
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching properties:", error.message);
                setErrorText(error.message);
                setProperties([]);
                setLoading(false);
                return;
            }

            setProperties((data ?? []) as Property[]);
            setLoading(false);
        }

        fetchProperties();
    }, []);

    const handleSelect = (property: Property) => {
        onPropertySelect(property);
        setOpen(false);
    };

    const selectedLabel = selectedProperty
        ? `${selectedProperty.street ?? "Property"}${selectedProperty.city ? `, ${selectedProperty.city}` : ""}`
        : "Select Property...";

    return (
        <>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                    minWidth: 240,
                    borderRadius: 2,
                    px: 3,
                    py: 1.25,
                    textTransform: "none",
                }}
            >
                {selectedLabel}
            </Button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Select Property</DialogTitle>

                <DialogContent dividers>
                    {errorText ? (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {errorText}
                        </Alert>
                    ) : null}

                    {loading ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                py: 4,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : properties.length === 0 ? (
                        <Typography color="text.secondary">
                            No properties found.
                        </Typography>
                    ) : (
                        <List>
                            {properties.map((property) => (
                                <ListItemButton
                                    key={property.id}
                                    onClick={() => handleSelect(property)}
                                >
                                    <ListItemText
                                        primary={property.street || "Unnamed Property"}
                                        secondary={[
                                            property.city,
                                            property.state,
                                            property.property_type,
                                        ]
                                            .filter(Boolean)
                                            .join(" • ")}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}