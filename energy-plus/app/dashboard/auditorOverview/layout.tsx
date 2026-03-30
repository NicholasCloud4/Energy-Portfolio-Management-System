"use client";

import * as React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import JurisdictionSelect from "../auditor/components/JurisdictionSelect";
import SelectOrganizations, {
    Organization,
} from "./components/SelectOrganizations";
import SelectProperties, {
    Property,
} from "./components/SelectProperties";
import RadialDial from "./components/RadialDial";
import EnergyUsageTable from "./components/EnergyUsageTable";
import Graph from "./components/Graph";

export default function AuditorOverviewPage() {
    const [jurisdictionId, setJurisdictionId] = React.useState<string>("");
    const [jurisdictionName, setJurisdictionName] = React.useState<string>("");

    const [selectedOrganization, setSelectedOrganization] =
        React.useState<Organization | null>(null);
    const [selectedProperty, setSelectedProperty] =
        React.useState<Property | null>(null);

    const handleChangeJurisdiction = () => {
        setJurisdictionId("");
        setJurisdictionName("");
        setSelectedOrganization(null);
        setSelectedProperty(null);
    };

    const handleOrganizationSelect = (organization: Organization) => {
        setSelectedOrganization(organization);
        setSelectedProperty(null);
    };

    const handlePropertySelect = (property: Property) => {
        setSelectedProperty(property);
    };

    if (!jurisdictionId) {
        return (
            <JurisdictionSelect
                onSelectJurisdiction={(id: string, name: string) => {
                    setJurisdictionId(id);
                    setJurisdictionName(name);
                }}
            />
        );
    }

    return (
        <Stack spacing={3}>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Auditor Overview
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {jurisdictionName
                        ? `Current jurisdiction: ${jurisdictionName}`
                        : "No jurisdiction selected"}
                </Typography>

                <Button variant="outlined" onClick={handleChangeJurisdiction}>
                    Change Jurisdiction
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SelectOrganizations
                        jurisdictionId={jurisdictionId}
                        selectedOrganization={selectedOrganization}
                        onOrganizationSelect={handleOrganizationSelect}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SelectProperties
                        selectedOrganizationId={selectedOrganization?.id ?? null}
                        selectedProperty={selectedProperty}
                        onPropertySelect={handlePropertySelect}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <RadialDial property={selectedProperty} />
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Graph property={selectedProperty} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EnergyUsageTable property={selectedProperty} />
                </Grid>
            </Grid>
        </Stack>
    );
}