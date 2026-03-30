"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";

import RadialDial from "../../AuditorOverview/components/RadialDial";
import Graph from "../../AuditorOverview/components/Graph";
import EnergyUsageTable from "../../AuditorOverview/components/EnergyUsageTable";

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

interface PropertyMetricsDialogProps {
    open: boolean;
    property: PropertyRow | null;
    onClose: () => void;
}

export default function PropertyMetricsDialog({
                                                  open,
                                                  property,
                                                  onClose,
                                              }: PropertyMetricsDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle>
                {property
                    ? `${property.street ?? "Property"}${property.city ? `, ${property.city}` : ""}`
                    : "Property Metrics"}
            </DialogTitle>

            <DialogContent dividers>
                {!property ? (
                    <Typography color="text.secondary">
                        No property selected.
                    </Typography>
                ) : (
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <RadialDial property={property} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 8 }}>
                            <Graph property={property} />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <EnergyUsageTable property={property} />
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    );
}