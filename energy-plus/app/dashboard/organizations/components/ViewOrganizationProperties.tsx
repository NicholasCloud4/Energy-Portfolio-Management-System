"use client";

import {
    Box,
    Button,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import { PropertyRow } from "./types";

function buildPropertyLabel(property: PropertyRow) {
    if (property.street?.trim()) {
        return property.street.trim();
    }

    const cityState = [property.city, property.state].filter(Boolean).join(", ");

    if (cityState) {
        return cityState;
    }

    return `Property ${property.id.slice(0, 8)}`;
}

function buildPropertyLocation(property: PropertyRow) {
    const cityStateZip = [property.city, property.state, property.zip]
        .filter((value) => value !== null && value !== undefined && value !== "")
        .join(", ");

    return cityStateZip || "Location unavailable";
}

type ViewOrganizationPropertiesProps = {
    properties: PropertyRow[];
    onReassign: (property: PropertyRow) => void;
};

export default function ViewOrganizationProperties({
                                                       properties,
                                                       onReassign,
                                                   }: ViewOrganizationPropertiesProps) {
    if (!properties.length) {
        return (
            <Box
                sx={{
                    border: "1px dashed",
                    borderColor: "divider",
                    borderRadius: 2,
                    px: 2,
                    py: 3,
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    No properties assigned to this organization.
                </Typography>
            </Box>
        );
    }

    return (
        <Stack divider={<Divider flexItem />}>
            {properties.map((property) => (
                <Stack
                    key={property.id}
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    gap={2}
                    sx={{ py: 2 }}
                >
                    <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {buildPropertyLabel(property)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {buildPropertyLocation(property)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {property.property_type ?? "Type unavailable"}
                            {property.sq_ft ? ` • ${property.sq_ft.toLocaleString()} sq ft` : ""}
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "stretch", sm: "center" }}
                        gap={1}
                    >
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => onReassign(property)}
                        >
                            Change Organization
                        </Button>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
}