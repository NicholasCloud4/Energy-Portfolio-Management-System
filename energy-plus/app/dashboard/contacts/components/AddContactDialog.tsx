"use client";

import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack,
} from "@mui/material";

type AddContactDialogProps = {
    open: boolean;
    onCloseAction: () => void;
    onAddAction: (contact: {
        first_name: string;
        last_name: string;
        email: string;
    }) => Promise<void>;
};

const EMPTY_FORM = {
    first_name: "",
    last_name: "",
    email: "",
};

export default function AddContactDialog({
    open,
    onCloseAction,
    onAddAction,
}: AddContactDialogProps) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [saving, setSaving] = useState(false);

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleClose = () => {
        setForm(EMPTY_FORM);
        onCloseAction();
    };

    const handleSubmit = async () => {
        if (!form.first_name || !form.last_name || !form.email) return;

        setSaving(true);
        await onAddAction(form);
        setSaving(false);
        setForm(EMPTY_FORM);
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Contact</DialogTitle>

            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <TextField
                        label="First Name"
                        fullWidth
                        value={form.first_name}
                        onChange={(e) =>
                            handleChange("first_name", e.target.value)
                        }
                    />

                    <TextField
                        label="Last Name"
                        fullWidth
                        value={form.last_name}
                        onChange={(e) =>
                            handleChange("last_name", e.target.value)
                        }
                    />

                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={saving}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
