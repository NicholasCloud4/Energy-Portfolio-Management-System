"use client";

import * as React from "react";
import axios from "axios";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Stack,
    Typography,
} from "@mui/material";

import { supabaseClient } from "@/lib/supabaseClient";

import AddPropertyDialog from "./components/AddPropertyDialog";
import ChangeOrganizationDialog from "./components/ChangeOrganizationDialog";
import CreateOrganizationDialog from "./components/CreateOrganizationDialog";
import EditOrganizationDialog from "./components/EditOrganizationDialog";
import ViewOrganizations from "./components/ViewOrganizations";
import {
    JurisdictionRow,
    NewPropertyForm,
    Notice,
    OrganizationRow,
    OrganizationWithProperties,
    PropertyRow,
} from "./components/types";

function createEmptyPropertyForm(organizationId: string): NewPropertyForm {
    return {
        organization_id: organizationId,
        jurisdiction_id: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        sq_ft: "",
        property_type: "Residential",
    };
}

export default function OrganizationsPage() {
    const [organizations, setOrganizations] = React.useState<OrganizationRow[]>([]);
    const [properties, setProperties] = React.useState<PropertyRow[]>([]);
    const [jurisdictions, setJurisdictions] = React.useState<JurisdictionRow[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [pageError, setPageError] = React.useState("");
    const [notice, setNotice] = React.useState<Notice>(null);

    const [createOpen, setCreateOpen] = React.useState(false);
    const [createLoading, setCreateLoading] = React.useState(false);
    const [newOrganizationName, setNewOrganizationName] = React.useState("");

    const [editOpen, setEditOpen] = React.useState(false);
    const [editLoading, setEditLoading] = React.useState(false);
    const [organizationToEdit, setOrganizationToEdit] = React.useState<OrganizationRow | null>(null);
    const [editOrganizationName, setEditOrganizationName] = React.useState("");

    const [propertyDialogOpen, setPropertyDialogOpen] = React.useState(false);
    const [propertyDialogLoading, setPropertyDialogLoading] = React.useState(false);
    const [activeOrganization, setActiveOrganization] = React.useState<OrganizationRow | null>(null);
    const [propertyForm, setPropertyForm] = React.useState<NewPropertyForm>(
        createEmptyPropertyForm(""),
    );

    const [reassignOpen, setReassignOpen] = React.useState(false);
    const [reassignLoading, setReassignLoading] = React.useState(false);
    const [selectedProperty, setSelectedProperty] = React.useState<PropertyRow | null>(null);
    const [reassignOrganizationId, setReassignOrganizationId] = React.useState("");

    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [deleteLoading, setDeleteLoading] = React.useState(false);
    const [organizationToDelete, setOrganizationToDelete] = React.useState<OrganizationWithProperties | null>(null);

    const [currentUserId, setCurrentUserId] = React.useState<string | null>(null);

    const loadData = React.useCallback(async () => {
        setPageError("");
        setLoading(true);

        try {
            const [organizationsResponse, jurisdictionsResponse] = await Promise.all([
                axios.get("/api/organizations", {
                    headers: { "Cache-Control": "no-cache" },
                }),
                axios.get("/api/jurisdictions", {
                    headers: { "Cache-Control": "no-cache" },
                }),
            ]);

            const organizationsResult = organizationsResponse.data as {
                organizations?: OrganizationRow[];
                properties?: PropertyRow[];
            };
            const jurisdictionsResult = jurisdictionsResponse.data as {
                jurisdictions?: JurisdictionRow[];
            };

            setOrganizations(organizationsResult.organizations ?? []);
            setProperties(organizationsResult.properties ?? []);
            setJurisdictions(jurisdictionsResult.jurisdictions ?? []);
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to load organizations.";

            console.error("Organizations load error:", error);
            setOrganizations([]);
            setProperties([]);
            setJurisdictions([]);
            setPageError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        void loadData();
    }, [loadData]);

    React.useEffect(() => {
        const loadCurrentUser = async () => {
            const { data } = await supabaseClient.auth.getUser();
            setCurrentUserId(data.user?.id ?? null);
        };

        void loadCurrentUser();
    }, []);

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

    const availableReassignmentTargets = organizations.filter(
        (organization) => organization.id !== selectedProperty?.organization_id,
    );

    const resetEditState = () => {
        setEditOpen(false);
        setOrganizationToEdit(null);
        setEditOrganizationName("");
    };

    const resetPropertyDialogState = () => {
        setPropertyDialogOpen(false);
        setActiveOrganization(null);
        setPropertyForm(createEmptyPropertyForm(""));
    };

    const resetDeleteState = () => {
        setDeleteOpen(false);
        setOrganizationToDelete(null);
    };

    const handleCreateOrganization = async () => {
        const name = newOrganizationName.trim();

        if (!name) {
            setNotice({ type: "error", message: "Organization name is required." });
            return;
        }

        if (
            organizations.some(
                (organization) =>
                    (organization.name ?? "").trim().toLowerCase() === name.toLowerCase(),
            )
        ) {
            setNotice({
                type: "error",
                message: "An organization with that name already exists.",
            });
            return;
        }

        setCreateLoading(true);

        try {
            const response = await axios.post("/api/organizations", {
                name,
                createdBy: currentUserId,
            });

            const result = response.data as { organization?: OrganizationRow };

            if (!result.organization) {
                throw new Error("Failed to create organization.");
            }

            setOrganizations((current) =>
                [...current, result.organization!].sort((left, right) =>
                    (left.name ?? "").localeCompare(right.name ?? "", undefined, {
                        sensitivity: "base",
                    }),
                ),
            );
            setNewOrganizationName("");
            setCreateOpen(false);
            setNotice({ type: "success", message: "Organization created successfully." });
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to create organization.";

            setNotice({ type: "error", message });
        } finally {
            setCreateLoading(false);
        }
    };

    const handleAddProperty = async () => {
        if (!activeOrganization) {
            return;
        }

        if (!propertyForm.jurisdiction_id.trim()) {
            setNotice({ type: "error", message: "Jurisdiction is required." });
            return;
        }

        if (propertyForm.street.trim().length <= 2) {
            setNotice({ type: "error", message: "Street is required." });
            return;
        }

        const parsedZip = propertyForm.zip.trim() ? Number(propertyForm.zip) : null;
        const parsedSquareFeet = propertyForm.sq_ft.trim() ? Number(propertyForm.sq_ft) : null;

        if (parsedZip !== null && !Number.isFinite(parsedZip)) {
            setNotice({ type: "error", message: "ZIP must be a valid number." });
            return;
        }

        if (parsedSquareFeet !== null && !Number.isFinite(parsedSquareFeet)) {
            setNotice({ type: "error", message: "Square feet must be a valid number." });
            return;
        }

        setPropertyDialogLoading(true);

        try {
            const response = await axios.post("/api/properties", {
                organization_id: activeOrganization.id,
                jurisdiction_id: propertyForm.jurisdiction_id.trim(),
                street: propertyForm.street.trim(),
                city: propertyForm.city.trim() || null,
                state: propertyForm.state.trim() || null,
                zip: parsedZip,
                sq_ft: parsedSquareFeet,
                property_type: propertyForm.property_type.trim() || null,
            });

            const result = response.data as { property?: PropertyRow };

            if (!result.property) {
                throw new Error("Failed to add property.");
            }

            setProperties((current) => [result.property!, ...current]);
            resetPropertyDialogState();
            setNotice({ type: "success", message: "Property added successfully." });
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to add property.";

            setNotice({ type: "error", message });
        } finally {
            setPropertyDialogLoading(false);
        }
    };

    const handleReassignProperty = async () => {
        if (!selectedProperty) {
            return;
        }

        if (!reassignOrganizationId) {
            setNotice({ type: "error", message: "Select a destination organization." });
            return;
        }

        if (reassignOrganizationId === selectedProperty.organization_id) {
            setNotice({ type: "error", message: "Choose a different organization." });
            return;
        }

        setReassignLoading(true);

        try {
            const response = await axios.patch("/api/properties", {
                propertyId: selectedProperty.id,
                organizationId: reassignOrganizationId,
            });

            const result = response.data as { property?: PropertyRow };

            if (!result.property) {
                throw new Error("Failed to reassign property.");
            }

            setProperties((current) =>
                current.map((property) =>
                    property.id === result.property!.id ? result.property! : property,
                ),
            );
            setSelectedProperty(null);
            setReassignOrganizationId("");
            setReassignOpen(false);
            setNotice({ type: "success", message: "Property reassigned successfully." });
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to reassign property.";

            setNotice({ type: "error", message });
        } finally {
            setReassignLoading(false);
        }
    };

    const handleDeleteOrganization = async () => {
        if (!organizationToDelete) {
            return;
        }

        if (organizationToDelete.properties.length > 0) {
            setNotice({
                type: "error",
                message:
                    "This organization cannot be deleted because it still has assigned properties.",
            });
            resetDeleteState();
            return;
        }

        setDeleteLoading(true);

        try {
            await axios.delete("/api/organizations", {
                data: {
                    organizationId: organizationToDelete.id,
                },
            });

            setOrganizations((current) =>
                current.filter((organization) => organization.id !== organizationToDelete.id),
            );
            resetDeleteState();
            setNotice({ type: "success", message: "Organization deleted successfully." });
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to delete organization.";

            setNotice({ type: "error", message });
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleEditOrganization = async () => {
        const name = editOrganizationName.trim();

        if (!organizationToEdit) {
            return;
        }

        if (!name) {
            setNotice({ type: "error", message: "Organization name is required." });
            return;
        }

        if (
            organizations.some(
                (organization) =>
                    organization.id !== organizationToEdit.id &&
                    (organization.name ?? "").trim().toLowerCase() === name.toLowerCase(),
            )
        ) {
            setNotice({
                type: "error",
                message: "An organization with that name already exists.",
            });
            return;
        }

        setEditLoading(true);

        try {
            const response = await axios.patch("/api/organizations", {
                organizationId: organizationToEdit.id,
                name,
            });

            const result = response.data as { organization?: OrganizationRow };

            if (!result.organization) {
                throw new Error("Failed to update organization.");
            }

            setOrganizations((current) =>
                current
                    .map((organization) =>
                        organization.id === result.organization!.id
                            ? result.organization!
                            : organization,
                    )
                    .sort((left, right) =>
                        (left.name ?? "").localeCompare(right.name ?? "", undefined, {
                            sensitivity: "base",
                        }),
                    ),
            );
            resetEditState();
            setNotice({ type: "success", message: "Organization updated successfully." });
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.error || error.message
                : error instanceof Error
                    ? error.message
                    : "Failed to update organization.";

            setNotice({ type: "error", message });
        } finally {
            setEditLoading(false);
        }
    };

    return (
        <Container maxWidth="xl" sx={{ py: 2 }}>
            <Stack gap={3}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "center" }}
                    gap={2}
                >
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            Organizations
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Create organizations, assign properties, and move properties between groups.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        startIcon={<AddBusinessIcon />}
                        onClick={() => setCreateOpen(true)}
                    >
                        Create Organization
                    </Button>
                </Stack>

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
                            No organizations yet
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Create your first organization to start grouping properties.
                        </Typography>
                        <Button variant="contained" onClick={() => setCreateOpen(true)}>
                            Create Organization
                        </Button>
                    </Box>
                ) : (
                    <Stack gap={3}>
                        {groupedOrganizations.map((organization) => (
                            <ViewOrganizations
                                key={organization.id}
                                organization={organization}
                                deleting={
                                    deleteLoading &&
                                    organizationToDelete?.id === organization.id
                                }
                                onEdit={() => {
                                    setOrganizationToEdit(organization);
                                    setEditOrganizationName(organization.name ?? "");
                                    setEditOpen(true);
                                }}
                                onAddProperty={() => {
                                    setActiveOrganization(organization);
                                    setPropertyForm(createEmptyPropertyForm(organization.id));
                                    setPropertyDialogOpen(true);
                                }}
                                onDelete={() => {
                                    setOrganizationToDelete(organization);
                                    setDeleteOpen(true);
                                }}
                                onReassign={(property) => {
                                    setSelectedProperty(property);
                                    setReassignOrganizationId(property.organization_id);
                                    setReassignOpen(true);
                                }}
                            />
                        ))}
                    </Stack>
                )}
            </Stack>

            <CreateOrganizationDialog
                open={createOpen}
                loading={createLoading}
                value={newOrganizationName}
                onClose={() => setCreateOpen(false)}
                onChange={setNewOrganizationName}
                onSubmit={() => void handleCreateOrganization()}
            />

            <EditOrganizationDialog
                open={editOpen}
                loading={editLoading}
                value={editOrganizationName}
                onClose={resetEditState}
                onChange={setEditOrganizationName}
                onSubmit={() => void handleEditOrganization()}
            />

            <AddPropertyDialog
                open={propertyDialogOpen}
                loading={propertyDialogLoading}
                organization={activeOrganization}
                jurisdictions={jurisdictions}
                form={propertyForm}
                onClose={resetPropertyDialogState}
                onChange={(field, value) =>
                    setPropertyForm((current) => ({ ...current, [field]: value }))
                }
                onSubmit={() => void handleAddProperty()}
            />

            <ChangeOrganizationDialog
                open={reassignOpen}
                loading={reassignLoading}
                property={selectedProperty}
                organizations={availableReassignmentTargets}
                selectedOrganizationId={reassignOrganizationId}
                onClose={() => {
                    setSelectedProperty(null);
                    setReassignOrganizationId("");
                    setReassignOpen(false);
                }}
                onChange={setReassignOrganizationId}
                onSubmit={() => void handleReassignProperty()}
            />

            <Dialog open={deleteOpen} onClose={deleteLoading ? undefined : resetDeleteState}>
                <DialogTitle>Delete Organization?</DialogTitle>
                <DialogContent>
                    <Typography>
                        {organizationToDelete?.properties.length
                            ? "This organization cannot be deleted because it still has assigned properties."
                            : "This organization has no properties. Delete it permanently?"}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={resetDeleteState} disabled={deleteLoading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => void handleDeleteOrganization()}
                        color="error"
                        variant="contained"
                        disabled={deleteLoading || Boolean(organizationToDelete?.properties.length)}
                    >
                        {deleteLoading ? "Deleting..." : "Delete Organization"}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={Boolean(notice)}
                autoHideDuration={4000}
                onClose={() => setNotice(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert severity={notice?.type ?? "success"} onClose={() => setNotice(null)}>
                    {notice?.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}