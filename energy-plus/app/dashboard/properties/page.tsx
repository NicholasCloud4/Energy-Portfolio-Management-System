"use client";

import * as React from "react";
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Drawer,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    CircularProgress,
    Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { supabaseClient } from "../../../lib/supabaseClient";
import AddPropertyButton from "./components/AddProppertyButton";

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

type PropertyType = "Commercial" | "Residential" | "Office";

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
    created_at?: string | null;
};

type PropertyForm = {
    organization_id: string;
    jurisdiction_id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    sq_ft: string;
    property_type: PropertyType;
};

const emptyForm: PropertyForm = {
    organization_id: "",
    jurisdiction_id: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    sq_ft: "",
    property_type: "Residential",
};

export default function PropertiesPage() {
    const [rows, setRows] = React.useState<PropertyRow[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [formOpen, setFormOpen] = React.useState(false);
    const [formMode, setFormMode] = React.useState<"add" | "edit">("add");
    const [editingId, setEditingId] = React.useState<string | null>(null);
    const [form, setForm] = React.useState<PropertyForm>(emptyForm);
    const [saving, setSaving] = React.useState(false);

    const [viewOpen, setViewOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<PropertyRow | null>(null);

    const [errorText, setErrorText] = React.useState("");

    const loadProperties = React.useCallback(async () => {
        setErrorText("");
        setLoading(true);

        const { data, error } = await supabaseClient
            .from("properties")
            .select(
                "id,organization_id,jurisdiction_id,street,city,state,zip,sq_ft,property_type,created_at"
            )
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Load properties error:", error.message);
            setRows([]);
            setErrorText(error.message);
            setLoading(false);
            return;
        }

        setRows((data ?? []) as PropertyRow[]);
        setLoading(false);
    }, []);

    React.useEffect(() => {
        loadProperties();
    }, [loadProperties]);

    const openView = (row: PropertyRow) => {
        setSelected(row);
        setViewOpen(true);
    };

    const closeView = () => {
        setViewOpen(false);
        setSelected(null);
    };

    const openAdd = () => {
        setErrorText("");
        setFormMode("add");
        setEditingId(null);
        setForm(emptyForm);
        setFormOpen(true);
    };

    const openEdit = (row: PropertyRow) => {
        setErrorText("");
        setFormMode("edit");
        setEditingId(row.id);
        setForm({
            organization_id: row.organization_id ?? "",
            jurisdiction_id: row.jurisdiction_id ?? "",
            street: row.street ?? "",
            city: row.city ?? "",
            state: row.state ?? "",
            zip: row.zip?.toString() ?? "",
            sq_ft: row.sq_ft?.toString() ?? "",
            property_type: (row.property_type as PropertyType) || "Residential",
        });
        setFormOpen(true);
    };

    const closeForm = () => {
        setFormOpen(false);
        setEditingId(null);
        setForm(emptyForm);
    };

    const onChange =
        (key: keyof PropertyForm) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setForm((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                }));
            };

    const canSave =
        form.organization_id.trim().length > 10 &&
        form.street.trim().length > 2 &&
        form.property_type.length > 0;

    const buildPayload = () => ({
        organization_id: form.organization_id.trim(),
        jurisdiction_id: form.jurisdiction_id.trim() || null,
        street: form.street.trim() || null,
        city: form.city.trim() || null,
        state: form.state.trim() || null,
        zip: form.zip.trim() ? Number(form.zip) : null,
        sq_ft: form.sq_ft.trim() ? Number(form.sq_ft) : null,
        property_type: form.property_type,
    });

    const addProperty = async () => {
        if (!canSave) return;

        setErrorText("");
        setSaving(true);

        const payload = buildPayload();

        const { data, error } = await supabaseClient
            .from("properties")
            .insert(payload)
            .select(
                "id,organization_id,jurisdiction_id,street,city,state,zip,sq_ft,property_type,created_at"
            )
            .single();

        if (error) {
            console.error("Insert error:", error.message);
            setErrorText(error.message);
            setSaving(false);
            return;
        }

        setRows((prev) => [data as PropertyRow, ...prev]);
        setSaving(false);
        closeForm();
    };

    const updateProperty = async () => {
        if (!canSave || !editingId) return;

        setErrorText("");
        setSaving(true);

        const payload = buildPayload();

        const { data, error } = await supabaseClient
            .from("properties")
            .update(payload)
            .eq("id", editingId)
            .select(
                "id,organization_id,jurisdiction_id,street,city,state,zip,sq_ft,property_type,created_at"
            )
            .single();

        if (error) {
            console.error("Update error:", error.message);
            setErrorText(error.message);
            setSaving(false);
            return;
        }

        setRows((prev) =>
            prev.map((row) => (row.id === editingId ? (data as PropertyRow) : row))
        );

        if (selected?.id === editingId) {
            setSelected(data as PropertyRow);
        }

        setSaving(false);
        closeForm();
    };

    const handleSave = async () => {
        if (formMode === "add") {
            await addProperty();
        } else {
            await updateProperty();
        }
    };

    const removeProperty = async (row: PropertyRow) => {
        const ok = confirm(
            `Delete "${row.street ?? "(no street)"}"? This cannot be undone.`
        );
        if (!ok) return;

        setErrorText("");

        setRows((prev) => prev.filter((p) => p.id !== row.id));

        const { error } = await supabaseClient
            .from("properties")
            .delete()
            .eq("id", row.id);

        if (error) {
            console.error("Delete error:", error.message);
            setErrorText(error.message);
            await loadProperties();
        }

        if (selected?.id === row.id) closeView();
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ pt: 14, pb: 6 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "100%", maxWidth: 980 }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            justifyContent="space-between"
                            gap={2}
                            sx={{ mb: 2 }}
                        >
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                    Properties
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    View, add, and remove properties tied to your organization.
                                </Typography>
                            </Box>

                            <AddPropertyButton onClick={openAdd} />
                        </Stack>

                        {errorText ? (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {errorText}
                            </Alert>
                        ) : null}

                        <Divider sx={{ mb: 2 }} />

                        {loading ? (
                            <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
                                <CircularProgress />
                            </Box>
                        ) : rows.length === 0 ? (
                            <Box
                                sx={{
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    p: 4,
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    No properties yet
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Add your first property to start tracking energy usage.
                                </Typography>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                }}
                            >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Street</TableCell>
                                            <TableCell>City</TableCell>
                                            <TableCell>State</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell align="right">Sq Ft</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.id} hover>
                                                <TableCell>{row.street ?? "—"}</TableCell>
                                                <TableCell>{row.city ?? "—"}</TableCell>
                                                <TableCell>{row.state ?? "—"}</TableCell>
                                                <TableCell>{row.property_type ?? "—"}</TableCell>
                                                <TableCell align="right">{row.sq_ft ?? "—"}</TableCell>

                                                <TableCell align="right">
                                                    <button onClick={() => openEdit(row)}>Edit</button>
                                                    <IconButton
                                                        aria-label="delete"
                                                        onClick={() => removeProperty(row)}
                                                        title="Delete property"
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>

            <Dialog open={formOpen} onClose={closeForm} fullWidth maxWidth="sm">
                <DialogTitle>
                    {formMode === "add" ? "Add Property" : "Edit Property"}
                </DialogTitle>

                <DialogContent sx={{ pt: 1 }}>
                    <Stack gap={2} sx={{ mt: 1 }}>
                        <TextField
                            label="Organization ID (uuid)"
                            value={form.organization_id}
                            onChange={onChange("organization_id")}
                            required
                            autoFocus
                            helperText="Must match an existing organization_id in Supabase."
                        />

                        <TextField
                            label="Jurisdiction ID (uuid)"
                            value={form.jurisdiction_id}
                            onChange={onChange("jurisdiction_id")}
                            helperText="Optional unless your database requires it."
                        />

                        <TextField
                            label="Street"
                            value={form.street}
                            onChange={onChange("street")}
                            required
                        />

                        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                            <TextField
                                label="City"
                                value={form.city}
                                onChange={onChange("city")}
                                fullWidth
                            />

                            <TextField
                                label="State"
                                value={form.state}
                                onChange={onChange("state")}
                                select
                                fullWidth
                                SelectProps={{ native: true }}
                            >
                                <option value=""></option>
                                {US_STATES_PLUS_DC.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </TextField>
                        </Stack>

                        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                            <TextField
                                label="ZIP"
                                value={form.zip}
                                onChange={onChange("zip")}
                                fullWidth
                            />

                            <TextField
                                label="Square Feet (sq_ft)"
                                value={form.sq_ft}
                                onChange={onChange("sq_ft")}
                                fullWidth
                            />
                        </Stack>

                        <TextField
                            label="Property Type"
                            value={form.property_type}
                            onChange={onChange("property_type")}
                            select
                            SelectProps={{ native: true }}
                        >
                            <option value="Commercial">Commercial</option>
                            <option value="Residential">Residential</option>
                            <option value="Office">Office</option>
                        </TextField>
                    </Stack>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mt: 2 }}
                    >
                        Note: If you get a foreign key or RLS error, your Organization ID must
                        match a real organization the logged-in user is allowed to access.
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={closeForm} disabled={saving}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        disabled={!canSave || saving}
                    >
                        {saving
                            ? formMode === "add"
                                ? "Saving..."
                                : "Updating..."
                            : formMode === "add"
                                ? "Save"
                                : "Update"}
                    </Button>
                </DialogActions>
            </Dialog>

            <Drawer anchor="right" open={viewOpen} onClose={closeView}>
                <Box sx={{ width: { xs: 320, sm: 420 }, p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Property Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        View info for the selected property.
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    {selected ? (
                        <Stack gap={1.25}>
                            <Field label="Street" value={selected.street ?? "—"} />
                            <Field label="City" value={selected.city ?? "—"} />
                            <Field label="State" value={selected.state ?? "—"} />
                            <Field label="ZIP" value={selected.zip?.toString() ?? "—"} />
                            <Field label="Sq Ft" value={selected.sq_ft?.toString() ?? "—"} />
                            <Field label="Property Type" value={selected.property_type ?? "—"} />
                            <Field label="Organization ID" value={selected.organization_id} />

                            <Divider sx={{ my: 2 }} />

                            <Stack direction="row" gap={1}>
                                <Button
                                    variant="outlined"
                                    onClick={() => openEdit(selected)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => removeProperty(selected)}
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                                <Button variant="contained" onClick={closeView}>
                                    Close
                                </Button>
                            </Stack>
                        </Stack>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            No property selected.
                        </Typography>
                    )}
                </Box>
            </Drawer>
        </>
    );
}

function Field({ label, value }: { label: string; value: string }) {
    return (
        <Box>
            <Typography variant="caption" color="text.secondary">
                {label}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {value}
            </Typography>
        </Box>
    );
}