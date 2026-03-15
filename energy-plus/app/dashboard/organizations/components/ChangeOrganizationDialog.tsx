"use client";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

import { OrganizationRow, PropertyRow } from "./types";

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

type ChangeOrganizationDialogProps = {
    open: boolean;
    loading: boolean;
    property: PropertyRow | null;
    organizations: OrganizationRow[];
    selectedOrganizationId: string;
    onClose: () => void;
    onChange: (organizationId: string) => void;
    onSubmit: () => void;
};

export default function ChangeOrganizationDialog({
                                                     open,
                                                     loading,
                                                     property,
                                                     organizations,
                                                     selectedOrganizationId,
                                                     onClose,
                                                     onChange,
                                                     onSubmit,
                                                 }: ChangeOrganizationDialogProps) {
    return (
        <Dialog open={open} onClose={loading ? undefined : onClose} fullWidth maxWidth="sm">
            <DialogTitle>Reassign Property</DialogTitle>
            <DialogContent>
                <Stack gap={2} sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        {property
                            ? `Move ${buildPropertyLabel(property)} to a different organization.`
                            : "Select a property to continue."}
                    </Typography>

                    <FormControl fullWidth>
                        <InputLabel id="organization-reassign-label">
                            Destination Organization
                        </InputLabel>
                        <Select
                            labelId="organization-reassign-label"
                            label="Destination Organization"
                            value={selectedOrganizationId}
                            onChange={(event) => onChange(event.target.value)}
                        >
                            {organizations.map((organization) => (
                                <MenuItem key={organization.id} value={organization.id}>
                                    {organization.name ?? organization.id}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {!organizations.length ? (
                        <Typography variant="caption" color="text.secondary">
                            Create another organization before reassigning this property.
                        </Typography>
                    ) : null}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>
                    Cancel
                </Button>
                <Button
                    onClick={onSubmit}
                    disabled={loading || !organizations.length}
                    variant="contained"
                >
                    {loading ? "Updating..." : "Change Organization"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}