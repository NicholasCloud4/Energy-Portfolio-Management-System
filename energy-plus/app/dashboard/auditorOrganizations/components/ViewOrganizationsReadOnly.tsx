"use client";

import * as React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

type PropertyRow = {
    id: string;
    organization_id: string;
    jurisdiction_id: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: number | null;
    sq_ft: number | null;
    property_type: string | null;
    created_at: string | null;
};

type OrganizationWithProperties = {
    id: string;
    name: string | null;
    slug: string | null;
    created_by: string | null;
    created_at: string | null;
    properties: PropertyRow[];
};

interface ViewOrganizationsReadOnlyProps {
    organization: OrganizationWithProperties;
    onViewMetrics: (property: PropertyRow) => void;
}

export default function ViewOrganizationsReadOnly({
                                                      organization,
                                                      onViewMetrics,
                                                  }: ViewOrganizationsReadOnlyProps) {
    const propertyCount = organization.properties.length;

    return (
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    gap={2}
                >
                    <Box>
                        <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {organization.name ?? "Untitled Organization"}
                            </Typography>

                            <Chip
                                label={`${propertyCount} ${propertyCount === 1 ? "property" : "properties"}`}
                                size="small"
                                color={propertyCount ? "primary" : "default"}
                            />
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                {!propertyCount ? (
                    <Typography variant="body2" color="text.secondary">
                        No properties assigned to this organization.
                    </Typography>
                ) : (
                    <Stack gap={2}>
                        {organization.properties.map((property) => (
                            <Box
                                key={property.id}
                                sx={{
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 3,
                                    px: 3,
                                    py: 2.5,
                                }}
                            >
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    justifyContent="space-between"
                                    alignItems={{ xs: "flex-start", md: "center" }}
                                    gap={2}
                                >
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            {property.street || "Unnamed Property"}
                                        </Typography>

                                        <Typography variant="body1" color="text.secondary">
                                            {[property.city, property.state, property.zip]
                                                .filter(Boolean)
                                                .join(", ")}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 0.5 }}
                                        >
                                            {[property.property_type, property.sq_ft ? `${property.sq_ft.toLocaleString()} sq ft` : null]
                                                .filter(Boolean)
                                                .join(" • ")}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        //color="primary"
                                        sx={{ textTransform: "none", borderRadius: 2 }}
                                        onClick={() => onViewMetrics(property)}
                                    >
                                        View Metrics
                                    </Button>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}