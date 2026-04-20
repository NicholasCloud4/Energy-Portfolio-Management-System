"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Alert,
    Box,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
    SelectChangeEvent,
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
    property_name: string | null;
    created_at?: string | null;
    organization_name?: string | null;
}

interface Organization {
    id: string;
    name: string;
}

interface OrganizationGroup {
    organizationId: string;
    organizationName: string;
    properties: Property[];
}

interface SelectPropertyProps {
    onPropertySelect: (property: Property | null) => void;
    selectedProperty?: Property | null;
}

export default function SelectProperty({
                                           onPropertySelect,
                                           selectedProperty,
                                       }: SelectPropertyProps) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [selectedOrganizationId, setSelectedOrganizationId] = useState("");

    useEffect(() => {
        async function fetchPropertiesAndOrganizations() {
            setLoading(true);
            setErrorText("");

            try {
                const {
                    data: { user },
                    error: userError,
                } = await supabaseClient.auth.getUser();

                if (userError) {
                    setErrorText(userError.message);
                    setLoading(false);
                    return;
                }

                if (!user) {
                    setProperties([]);
                    setLoading(false);
                    return;
                }

                const { data: propertyData, error: propertyError } = await supabaseClient
                    .from("properties")
                    .select(`
                        id,
                        organization_id,
                        jurisdiction_id,
                        street,
                        city,
                        state,
                        zip,
                        sq_ft,
                        property_type,
                        property_name,
                        created_at
                    `)
                    .order("created_at", { ascending: false });

                if (propertyError) {
                    setErrorText(propertyError.message);
                    setProperties([]);
                    setLoading(false);
                    return;
                }

                const { data: organizationData, error: organizationError } =
                    await supabaseClient
                        .from("organizations")
                        .select("id, name");

                if (organizationError) {
                    setErrorText(organizationError.message);
                    setProperties([]);
                    setLoading(false);
                    return;
                }

                const organizationMap = new Map<string, string>(
                    ((organizationData ?? []) as Organization[]).map((org) => [
                        org.id,
                        org.name,
                    ])
                );

                const mappedProperties: Property[] = ((propertyData ?? []) as Omit<
                    Property,
                    "organization_name"
                >[]).map((property) => ({
                    ...property,
                    organization_name:
                        organizationMap.get(property.organization_id) ??
                        "Unknown Organization",
                }));

                setProperties(mappedProperties);
            } catch (error) {
                console.error("Error loading properties:", error);
                setErrorText("Unable to load organizations and properties.");
                setProperties([]);
            } finally {
                setLoading(false);
            }
        }

        fetchPropertiesAndOrganizations();
    }, []);

    useEffect(() => {
        if (selectedProperty?.organization_id) {
            setSelectedOrganizationId(selectedProperty.organization_id);
        }
    }, [selectedProperty]);

    const groupedOrganizations = useMemo<OrganizationGroup[]>(() => {
        const map = new Map<string, OrganizationGroup>();

        for (const property of properties) {
            const organizationId = property.organization_id;
            const organizationName =
                property.organization_name || "Unknown Organization";

            if (!map.has(organizationId)) {
                map.set(organizationId, {
                    organizationId,
                    organizationName,
                    properties: [],
                });
            }

            map.get(organizationId)?.properties.push(property);
        }

        return Array.from(map.values())
            .map((org) => ({
                ...org,
                properties: [...org.properties].sort((a, b) =>
                    (a.property_name || a.street || "").localeCompare(
                        b.property_name || b.street || ""
                    )
                ),
            }))
            .sort((a, b) => a.organizationName.localeCompare(b.organizationName));
    }, [properties]);

    const activeOrganization = useMemo(() => {
        return groupedOrganizations.find(
            (org) => org.organizationId === selectedOrganizationId
        );
    }, [groupedOrganizations, selectedOrganizationId]);

    const selectedOrganizationName =
        selectedProperty?.organization_name ||
        activeOrganization?.organizationName ||
        "No organization selected yet";

    const selectedPropertyName =
        selectedProperty?.property_name ||
        selectedProperty?.street ||
        "No property selected yet";

    const handleOrganizationChange = (event: SelectChangeEvent<string>) => {
        const organizationId = event.target.value;
        setSelectedOrganizationId(organizationId);

        if (selectedProperty?.organization_id !== organizationId) {
            onPropertySelect(null);
        }
    };

    const handlePropertyChange = (event: SelectChangeEvent<string>) => {
        const propertyId = event.target.value;

        const property = activeOrganization?.properties.find(
            (item) => item.id === propertyId
        );

        if (!property) return;

        onPropertySelect(property);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                mb: 3,
                width: "100%",
            }}
        >
            <Box>
                <Typography variant="h5" fontWeight={700}>
                    Energy Log
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Please select an organization first, then choose a property to
                    log energy usage and view related metrics.
                </Typography>
            </Box>

            {errorText ? (
                <Alert severity="error" sx={{ width: "100%" }}>
                    {errorText}
                </Alert>
            ) : null}

            {loading ? (
                <Box sx={{ py: 2 }}>
                    <CircularProgress size={28} />
                </Box>
            ) : (
                <>
                    <Box>
                        <Typography variant="body1">
                            <strong>Organization:</strong> {selectedOrganizationName}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 0.5 }}>
                            <strong>Property:</strong> {selectedPropertyName}
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ width: "100%", maxWidth: 700 }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="organization-select-label">
                                Change Organization
                            </InputLabel>
                            <Select
                                labelId="organization-select-label"
                                value={selectedOrganizationId}
                                label="Change Organization"
                                onChange={handleOrganizationChange}
                            >
                                {groupedOrganizations.map((org) => (
                                    <MenuItem
                                        key={org.organizationId}
                                        value={org.organizationId}
                                    >
                                        {org.organizationName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth disabled={!selectedOrganizationId}>
                            <InputLabel id="property-select-label">
                                Select Property
                            </InputLabel>
                            <Select
                                labelId="property-select-label"
                                value={selectedProperty?.id ?? ""}
                                label="Select Property"
                                onChange={handlePropertyChange}
                            >
                                {(activeOrganization?.properties ?? []).map((property) => (
                                    <MenuItem key={property.id} value={property.id}>
                                        {property.property_name ||
                                            property.street ||
                                            "Unnamed Property"}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </>
            )}
        </Box>
    );
}