"use client";

import { useEffect, useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";

export interface Property {
    id: string;
    organization_id: string;
    street: string | null;
    city: string | null;
    state: string | null;
    property_type: string | null;
}

interface SelectPropertiesProps {
    selectedOrganizationId?: string | null;
    onPropertySelect: (property: Property) => void;
    selectedProperty?: Property | null;
}

export default function SelectProperties({
                                             selectedOrganizationId,
                                             onPropertySelect,
                                             selectedProperty,
                                         }: SelectPropertiesProps) {
    const [open, setOpen] = useState(false);
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        async function fetchProperties() {
            if (!selectedOrganizationId) {
                setProperties([]);
                return;
            }

            setLoading(true);
            setErrorText("");

            const { data, error } = await supabaseClient
                .from("properties")
                .select(
                    "id, organization_id, jurisdiction_id, street, city, state, zip, sq_ft, property_type, created_at"
                )
                .eq("organization_id", selectedOrganizationId)
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
    }, [selectedOrganizationId]); // ALWAYS exactly one dependency

    const handleSelect = (property: Property) => {
        onPropertySelect(property);
        setOpen(false);
    };

    const buttonLabel = selectedProperty
        ? `${selectedProperty.street ?? "Property"}${
            selectedProperty.city ? `, ${selectedProperty.city}` : ""
        }`
        : "Search Properties";

    return (
        <>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{ minWidth: 220, textTransform: "none" }}
                disabled={!selectedOrganizationId} //  key UX
            >
                {buttonLabel}
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Select Property</DialogTitle>

                <DialogContent dividers>
                    {/* No organization selected */}
                    {!selectedOrganizationId ? (
                        <Typography color="text.secondary">
                            Select organization first
                        </Typography>
                    ) : errorText ? (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {errorText}
                        </Alert>
                    ) : loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : properties.length === 0 ? (
                        <Typography color="text.secondary">
                            No properties found for this organization.
                        </Typography>
                    ) : (
                        <List>
                            {properties.map((property) => (
                                <ListItemButton
                                    key={property.id}
                                    onClick={() => handleSelect(property)}
                                    selected={selectedProperty?.id === property.id}
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