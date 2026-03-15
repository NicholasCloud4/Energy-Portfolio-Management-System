"use client";

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import ViewOrganizationProperties from "./ViewOrganizationProperties";
import { OrganizationWithProperties, PropertyRow } from "./types";

type ViewOrganizationsProps = {
    organization: OrganizationWithProperties;
    deleting: boolean;
    onEdit: () => void;
    onAddProperty: () => void;
    onDelete: () => void;
    onReassign: (property: PropertyRow) => void;
};

export default function ViewOrganizations({
                                              organization,
                                              deleting,
                                              onEdit,
                                              onAddProperty,
                                              onDelete,
                                              onReassign,
                                          }: ViewOrganizationsProps) {
    const propertyCount = organization.properties.length;
    const canDelete = propertyCount === 0;

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

                    <CardActions sx={{ p: 0, alignItems: "flex-start" }}>
                        <Stack direction={{ xs: "column", sm: "row" }} gap={1}>
                            <Button variant="outlined" onClick={onEdit}>
                                Edit Organization
                            </Button>
                            <Button variant="contained" onClick={onAddProperty}>
                                Add Property
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                disabled={!canDelete || deleting}
                                onClick={onDelete}
                            >
                                {deleting ? "Deleting..." : "Delete Organization"}
                            </Button>
                        </Stack>
                    </CardActions>
                </Stack>

                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 1.5, display: "block" }}
                >
                    {canDelete
                        ? "This organization has no properties and can be deleted after confirmation."
                        : "This organization cannot be deleted because it still has assigned properties. Move or remove all properties before deleting this organization."}
                </Typography>

                <Box sx={{ mt: 3 }}>
                    <ViewOrganizationProperties
                        properties={organization.properties}
                        onReassign={onReassign}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}