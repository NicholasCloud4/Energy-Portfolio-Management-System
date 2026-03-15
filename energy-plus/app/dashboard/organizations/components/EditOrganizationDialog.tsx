"use client";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";

type EditOrganizationDialogProps = {
    open: boolean;
    loading: boolean;
    value: string;
    onClose: () => void;
    onChange: (value: string) => void;
    onSubmit: () => void;
};

export default function EditOrganizationDialog({
                                                   open,
                                                   loading,
                                                   value,
                                                   onClose,
                                                   onChange,
                                                   onSubmit,
                                               }: EditOrganizationDialogProps) {
    return (
        <Dialog open={open} onClose={loading ? undefined : onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Organization</DialogTitle>
            <DialogContent>
                <Stack gap={2} sx={{ mt: 1 }}>
                    <TextField
                        autoFocus
                        label="Organization Name"
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                onSubmit();
                            }
                        }}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>
                    Cancel
                </Button>
                <Button onClick={onSubmit} disabled={loading} variant="contained">
                    {loading ? "Saving..." : "Save Changes"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}