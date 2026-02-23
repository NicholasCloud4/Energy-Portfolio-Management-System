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
    onAddAction: (email: string) => Promise<void>;
};

export default function AddContactDialog({
    open,
    onCloseAction,
    onAddAction,
}: AddContactDialogProps) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    const handleClose = () => {
        setEmail("");
        setError("");
        onCloseAction();
    };

    const handleSubmit = async () => {
        if (!email) {
            setError("Email is required");
            return;
        }

        setSaving(true);
        setError("");

        try {
            await onAddAction(email);
            handleClose();
        } catch (err: any) {
            setError(err.message || "User not found");
        } finally {
            setSaving(false);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Contact by Email</DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!error}
                        helperText={error}
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
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}
