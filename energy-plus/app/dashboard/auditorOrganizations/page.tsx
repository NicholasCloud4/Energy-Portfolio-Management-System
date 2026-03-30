"use client";

import * as React from "react";
import axios from "axios";
import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import ViewOrganizationsReadOnly from "./components/ViewOrganizationsReadOnly";
import PropertyMetricsDialog from "./components/PropertyMetricsDialog";

type OrganizationRow = {
    id: string;
    name: string | null;
    slug: string | null;
    created_by: string | null;
    created_at: string | null;
};

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

type OrganizationWithProperties = OrganizationRow & {
    properties: PropertyRow[];
};

export default function AuditorOrganizationsPage() {
    const [organizations, setOrganizations] = React.useState<OrganizationRow[]>([]);
    const [properties, setProperties] = React.useState<PropertyRow[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [pageError, setPageError] = React.useState("");

    const [selectedProperty, setSelectedProperty] = React.useState<PropertyRow | null>(null);
    const [metricsOpen, setMetricsOpen] = React.useState(false);

    const loadData = React.useCallback(async () => {
        setPageError("");
        setLoading(true);

        try {
            const response = await axios.get("/api/auditor/organizations", {
                headers: { "Cache-Control": "no-cache" },
            });

            const result = response.data as {
                organizations?: OrganizationRow[];
                properties?: PropertyRow[];
            };

            setOrganizations(result.organizations ?? []);
            setProperties(result.properties ?? []);
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to load organizations.";

            console.error("Auditor organizations load error:", error);
            setOrganizations([]);
            setProperties([]);
            setPageError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        void loadData();
    }, [loadData]);

    const groupedOrganizations = React.useMemo(() => {
        const propertyMap = new Map<string, PropertyRow[]>();

        for (const property of properties) {
            const current = propertyMap.get(property.organization_id) ?? [];
            current.push(property);
            propertyMap.set(property.organization_id, current);
        }

        return [...organizations]
            .sort((left, right) =>
                (left.name ?? "").localeCompare(right.name ?? "", undefined, {
                    sensitivity: "base",
                }),
            )
            .map<OrganizationWithProperties>((organization) => ({
                ...organization,
                properties: propertyMap.get(organization.id) ?? [],
            }));
    }, [organizations, properties]);

    const handleViewMetrics = (property: PropertyRow) => {
        setSelectedProperty(property);
        setMetricsOpen(true);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 2 }}>
            <Stack gap={3}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        Organizations
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        View organizations, properties, and energy metrics.
                    </Typography>
                </Box>

                {pageError ? <Alert severity="error">{pageError}</Alert> : null}

                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
                        <CircularProgress />
                    </Box>
                ) : !groupedOrganizations.length ? (
                    <Box
                        sx={{
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 3,
                            p: 5,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            No organizations found
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            There are no organizations available to display.
                        </Typography>
                    </Box>
                ) : (
                    <Stack gap={3}>
                        {groupedOrganizations.map((organization) => (
                            <ViewOrganizationsReadOnly
                                key={organization.id}
                                organization={organization}
                                onViewMetrics={handleViewMetrics}
                            />
                        ))}
                    </Stack>
                )}
            </Stack>

            <PropertyMetricsDialog
                open={metricsOpen}
                property={selectedProperty}
                onClose={() => {
                    setMetricsOpen(false);
                    setSelectedProperty(null);
                }}
            />
        </Container>
    );
}