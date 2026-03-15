"use client";

import * as React from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type AdminUser = {
    id: string;
    name: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email: string;
    created_at?: string | null;
    last_sign_in_at?: string | null;
};

type Notice = {
    type: "success" | "error";
    message: string;
} | null;

function toErrorMessage(err: unknown, fallback: string) {
    if (axios.isAxiosError(err)) {
        const apiMessage = (err.response?.data as { error?: string } | undefined)
            ?.error;
        return apiMessage || err.message || fallback;
    }
    if (err instanceof Error) {
        return err.message;
    }
    return fallback;
}

export default function UsersContent() {
    const isMountedRef = React.useRef(false);
    const [users, setUsers] = React.useState<AdminUser[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [deletingId, setDeletingId] = React.useState<string | null>(null);
    const [editingId, setEditingId] = React.useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [gridReady, setGridReady] = React.useState(false);
    const [notice, setNotice] = React.useState<Notice>(null);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const isEditing = Boolean(editingId);

    React.useEffect(() => {
        isMountedRef.current = true;
        setGridReady(true);
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setEditingId(null);
        setDialogOpen(false);
    };

    const loadUsers = React.useCallback(async () => {
        if (isMountedRef.current) {
            setLoading(true);
        }
        try {
            const response = await axios.get<{ users?: AdminUser[] }>(
                "/api/admin/users",
                {
                    headers: { "Cache-Control": "no-cache" },
                },
            );

            if (isMountedRef.current) {
                setUsers(response.data.users ?? []);
            }
        } catch (err: unknown) {
            if (isMountedRef.current) {
                setNotice({
                    type: "error",
                    message: toErrorMessage(err, "Could not load users."),
                });
            }
        } finally {
            if (isMountedRef.current) {
                setLoading(false);
            }
        }
    }, []);

    React.useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !username.trim() ||
            !email ||
            (!isEditing && !password)
        ) {
            setNotice({
                type: "error",
                message:
                    "First name, last name, username, and email are required. Password is required only for new users.",
            });
            return;
        }

        setSaving(true);

        try {
            const endpoint = "/api/admin/users";
            const method = isEditing ? "PUT" : "POST";
            const derivedName = `${firstName.trim()} ${lastName.trim()}`.trim();
            const body = isEditing
                ? {
                    id: editingId,
                    name: derivedName,
                    username: username.trim(),
                    first_name: firstName.trim(),
                    last_name: lastName.trim(),
                    email,
                    ...(password ? { password } : {}),
                }
                : {
                    name: derivedName,
                    username: username.trim(),
                    first_name: firstName.trim(),
                    last_name: lastName.trim(),
                    email,
                    password,
                };

            if (method === "PUT") {
                await axios.put(endpoint, body);
            } else {
                await axios.post(endpoint, body);
            }

            if (!isMountedRef.current) return;
            clearForm();
            setNotice({
                type: "success",
                message: isEditing ? "User updated." : "User created.",
            });
            await loadUsers();
        } catch (err: unknown) {
            if (isMountedRef.current) {
                setNotice({
                    type: "error",
                    message: toErrorMessage(err, "Could not save user."),
                });
            }
        } finally {
            if (isMountedRef.current) {
                setSaving(false);
            }
        }
    };

    const startEdit = (user: AdminUser) => {
        setEditingId(user.id);
        setEmail(user.email || "");
        setPassword("");
        const [first = "", ...rest] = (user.name || "").split(" ");
        setUsername(user.username || "");
        setFirstName(user.first_name || first);
        setLastName(user.last_name || rest.join(" "));
        setDialogOpen(true);
    };

    const startCreate = () => {
        setEditingId(null);
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setDialogOpen(true);
    };

    const onDialogClose = (
        _event: object,
        reason?: "backdropClick" | "escapeKeyDown",
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        clearForm();
    };

    const onDelete = async (id: string) => {
        setDeletingId(id);
        try {
            await axios.delete("/api/admin/users", { data: { id } });

            if (editingId === id && isMountedRef.current) {
                clearForm();
            }

            if (!isMountedRef.current) return;
            setNotice({ type: "success", message: "User deleted." });
            await loadUsers();
        } catch (err: unknown) {
            if (isMountedRef.current) {
                setNotice({
                    type: "error",
                    message: toErrorMessage(err, "Could not delete user."),
                });
            }
        } finally {
            if (isMountedRef.current) {
                setDeletingId(null);
            }
        }
    };

    const columns: GridColDef<AdminUser>[] = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 160,
            valueGetter: (_, row) => row.name || "N/A",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1.2,
            minWidth: 220,
            valueGetter: (_, row) => row.email || "N/A",
        },
        {
            field: "created_at",
            headerName: "Created",
            flex: 1,
            minWidth: 220,
            valueGetter: (_, row) =>
                row.created_at ? new Date(row.created_at).toLocaleString() : "N/A",
            sortable: false,
        },
        {
            field: "last_sign_in_at",
            headerName: "Last Sign In",
            flex: 1,
            minWidth: 220,
            valueGetter: (_, row) =>
                row.last_sign_in_at
                    ? new Date(row.last_sign_in_at).toLocaleString()
                    : "Never",
            sortable: false,
        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 200,
            flex: 0.8,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            align: "right",
            headerAlign: "right",
            renderCell: params => (
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                    sx={{ width: "100%" }}
                >
                    <Button size="small" onClick={() => startEdit(params.row)}>
                        Edit
                    </Button>
                    <Button
                        size="small"
                        color="error"
                        onClick={() => onDelete(params.row.id)}
                        disabled={deletingId === params.row.id}
                    >
                        {deletingId === params.row.id ? "Deleting..." : "Delete"}
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <Stack spacing={5}>
            <Typography
                variant="h3"
                sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" }, fontWeight: 700 }}
            >
                Admin User Management
            </Typography>

            <Card variant="outlined">
                <CardContent sx={{ p: 4 }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 2.5 }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontSize: { xs: "1.6rem", md: "1.9rem" } }}
                        >
                            All Users
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={startCreate}
                                sx={{ fontSize: "1rem" }}
                            >
                                Create User
                            </Button>
                            <Button
                                variant="text"
                                size="large"
                                onClick={loadUsers}
                                sx={{ fontSize: "1rem" }}
                            >
                                Refresh
                            </Button>
                        </Stack>
                    </Stack>

                    <Box sx={{ width: "100%" }}>
                        {gridReady ? (
                            <DataGrid
                                autoHeight
                                rows={users}
                                columns={columns}
                                loading={loading}
                                getRowId={row => row.id}
                                disableRowSelectionOnClick
                                rowHeight={72}
                                columnHeaderHeight={72}
                                pageSizeOptions={[5, 10, 25]}
                                initialState={{
                                    pagination: {
                                        paginationModel: { pageSize: 10, page: 0 },
                                    },
                                }}
                                sx={{
                                    fontSize: 17,
                                    "& .MuiDataGrid-columnHeaders": {
                                        fontSize: 18,
                                        fontWeight: 700,
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    },
                                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                    },
                                    "& .MuiDataGrid-columnHeaderTitleContainerContent": {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    },
                                    "& .MuiDataGrid-cell": {
                                        py: 1.2,
                                        display: "flex",
                                        alignItems: "center",
                                    },
                                    "& .MuiButton-root": { fontSize: "0.95rem" },
                                }}
                            />
                        ) : (
                            <Box sx={{ height: 280 }} />
                        )}
                    </Box>
                </CardContent>
            </Card>

            <Dialog open={dialogOpen} onClose={onDialogClose} fullWidth maxWidth="md">
                <Paper elevation={0} sx={{ p: 2, minHeight: 520 }}>
                    <Box
                        sx={{ display: "flex", justifyContent: "flex-end", px: 1, pt: 1 }}
                    >
                        <IconButton aria-label="Close user form" onClick={clearForm}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box component="form" onSubmit={onSubmit} autoComplete="off">
                        <DialogContent>
                            <Typography
                                variant="h5"
                                sx={{ mb: 3, fontSize: { xs: "1.6rem", md: "1.9rem" } }}
                            >
                                {isEditing ? "Edit User" : "Create User"}
                            </Typography>
                            <input
                                type="text"
                                name="fake-username"
                                autoComplete="username"
                                style={{ display: "none" }}
                            />
                            <input
                                type="password"
                                name="fake-password"
                                autoComplete="new-password"
                                style={{ display: "none" }}
                            />
                            <Stack spacing={3}>
                                <TextField
                                    label="Username"
                                    name={isEditing ? "username" : "create-user-username"}
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    autoComplete="off"
                                    required
                                    fullWidth
                                    size="medium"
                                    sx={{
                                        "& .MuiInputBase-input": { fontSize: "1.2rem", py: 1.8 },
                                    }}
                                />
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <TextField
                                        label="First Name"
                                        name={isEditing ? "first_name" : "create-user-first-name"}
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        autoComplete="off"
                                        required
                                        fullWidth
                                        size="medium"
                                        sx={{
                                            "& .MuiInputBase-input": { fontSize: "1.2rem", py: 1.8 },
                                        }}
                                    />
                                    <TextField
                                        label="Last Name"
                                        name={isEditing ? "last_name" : "create-user-last-name"}
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        autoComplete="off"
                                        required
                                        fullWidth
                                        size="medium"
                                        sx={{
                                            "& .MuiInputBase-input": { fontSize: "1.2rem", py: 1.8 },
                                        }}
                                    />
                                </Stack>
                                <TextField
                                    label="Email"
                                    type="email"
                                    name={isEditing ? "email" : "create-user-email"}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="off"
                                    required
                                    fullWidth
                                    size="medium"
                                    sx={{
                                        "& .MuiInputBase-input": { fontSize: "1.2rem", py: 1.8 },
                                    }}
                                />
                                <TextField
                                    label={
                                        isEditing
                                            ? "Password (leave blank to keep current)"
                                            : "Password"
                                    }
                                    type="password"
                                    name={isEditing ? "password" : "create-user-password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    required={!isEditing}
                                    fullWidth
                                    size="medium"
                                    sx={{
                                        "& .MuiInputBase-input": { fontSize: "1.2rem", py: 1.8 },
                                    }}
                                />
                            </Stack>
                        </DialogContent>
                        <DialogActions sx={{ px: 3, pb: 2 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={clearForm}
                                sx={{ px: 3, fontSize: "1rem" }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={saving}
                                sx={{ px: 3, fontSize: "1rem" }}
                            >
                                {saving
                                    ? "Saving..."
                                    : isEditing
                                        ? "Update User"
                                        : "Create User"}
                            </Button>
                        </DialogActions>
                    </Box>
                </Paper>
            </Dialog>

            <Snackbar
                open={Boolean(notice)}
                autoHideDuration={4000}
                onClose={() => setNotice(null)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    severity={notice?.type ?? "success"}
                    onClose={() => setNotice(null)}
                    variant="filled"
                >
                    {notice?.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}