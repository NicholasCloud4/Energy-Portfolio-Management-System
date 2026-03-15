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
    TextField,
    Typography,
} from "@mui/material";

import { JurisdictionRow, NewPropertyForm, OrganizationRow } from "./types";

const US_STATES_PLUS_DC = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
] as const;

type AddPropertyDialogProps = {
    open: boolean;
    loading: boolean;
    organization: OrganizationRow | null;
    jurisdictions: JurisdictionRow[];
    form: NewPropertyForm;
    onClose: () => void;
    onChange: (field: keyof NewPropertyForm, value: string) => void;
    onSubmit: () => void;
};

export default function AddPropertyDialog({
                                              open,
                                              loading,
                                              organization,
                                              jurisdictions,
                                              form,
                                              onClose,
                                              onChange,
                                              onSubmit,
                                          }: AddPropertyDialogProps) {
    return (
        <Dialog open={open} onClose={loading ? undefined : onClose} fullWidth maxWidth="sm">
            <DialogTitle>Add Property</DialogTitle>
            <DialogContent>
                <Stack gap={2} sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        {organization
                            ? `Create a property under ${organization.name ?? "this organization"}.`
                            : "Choose an organization before adding a property."}
                    </Typography>

                    <TextField label="Organization" value={organization?.name ?? ""} disabled />

                    <FormControl fullWidth required>
                        <InputLabel id="organization-property-jurisdiction-label">
                            Jurisdiction
                        </InputLabel>
                        <Select
                            labelId="organization-property-jurisdiction-label"
                            label="Jurisdiction"
                            value={form.jurisdiction_id}
                            onChange={(event) =>
                                onChange("jurisdiction_id", event.target.value)
                            }
                        >
                            {jurisdictions.map((jurisdiction) => (
                                <MenuItem key={jurisdiction.id} value={jurisdiction.id}>
                                    {jurisdiction.name ?? jurisdiction.slug ?? jurisdiction.id}
                                    {jurisdiction.type ? ` (${jurisdiction.type})` : ""}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {!jurisdictions.length ? (
                        <Typography variant="caption" color="text.secondary">
                            No jurisdictions available. Add jurisdiction records before creating properties.
                        </Typography>
                    ) : null}

                    <TextField
                        label="Street"
                        value={form.street}
                        onChange={(event) => onChange("street", event.target.value)}
                        required
                    />

                    <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                        <TextField
                            label="City"
                            value={form.city}
                            onChange={(event) => onChange("city", event.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="State"
                            value={form.state}
                            onChange={(event) => onChange("state", event.target.value)}
                            select
                            fullWidth
                            SelectProps={{ native: true }}
                        >
                            <option value=""></option>
                            {US_STATES_PLUS_DC.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </TextField>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                        <TextField
                            label="ZIP"
                            value={form.zip}
                            onChange={(event) => onChange("zip", event.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Square Feet"
                            value={form.sq_ft}
                            onChange={(event) => onChange("sq_ft", event.target.value)}
                            fullWidth
                        />
                    </Stack>

                    <TextField
                        label="Property Type"
                        value={form.property_type}
                        onChange={(event) => onChange("property_type", event.target.value)}
                        select
                        SelectProps={{ native: true }}
                    >
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Office">Office</option>
                    </TextField>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>
                    Cancel
                </Button>
                <Button onClick={onSubmit} disabled={loading} variant="contained">
                    {loading ? "Saving..." : "Save Property"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}