"use client";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

type CreateOrganizationDialogProps = {
    open: boolean;
    loading: boolean;
    value: string;
    onClose: () => void;
    onChange: (value: string) => void;
    onSubmit: () => void;
};

export default function CreateOrganizationDialog({
                                                     open,
                                                     loading,
                                                     value,
                                                     onClose,
                                                     onChange,
                                                     onSubmit,
                                                 }: CreateOrganizationDialogProps) {
    return (
        <Dialog open={open} onClose={loading ? undefined : onClose} fullWidth maxWidth="sm">
            <DialogTitle>Create Organization</DialogTitle>
            <DialogContent>
                <Stack gap={2} sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Add a new organization to group related properties.
                    </Typography>
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
                    {loading ? "Saving..." : "Create Organization"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}