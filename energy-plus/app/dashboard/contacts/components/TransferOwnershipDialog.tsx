import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
    Box,
} from "@mui/material";

export type Organization = {
    id: string | number;
    name: string;
    created_by: string | number;
};

export type Contact = {
    id: string | number;
    full_name: string;
    email: string;
    owner_id: string | number;
};

type TransferOwnershipDialogProps = {
    open: boolean;
    onClose: () => void;
    organizations: Organization[];
    contacts: Contact[];
    transferItem: string | number;
    setTransferItem: (value: string | number) => void;
    transferTo: string | number;
    setTransferTo: (value: string | number) => void;
    onConfirm: () => void;
};

export default function TransferOwnershipDialog({
    open,
    onClose,
    organizations,
    contacts,
    transferItem,
    setTransferItem,
    transferTo,
    setTransferTo,
    onConfirm,
}: TransferOwnershipDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Transfer Ownership</DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        pt: 1,
                    }}
                >
                    <FormControl fullWidth>
                        <InputLabel>Organization</InputLabel>
                        <Select
                            value={transferItem}
                            label="Organization"
                            onChange={(e) => setTransferItem(e.target.value)}
                        >
                            {organizations.map((org) => (
                                <MenuItem key={org.id} value={org.id}>
                                    {org.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Transfer To</InputLabel>
                        <Select
                            value={transferTo}
                            label="Transfer To"
                            onChange={(e) => setTransferTo(e.target.value)}
                        >
                            {contacts.map((contact) => (
                                <MenuItem
                                    key={contact.id}
                                    value={contact.owner_id}
                                >
                                    {contact.full_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Alert severity="warning">
                        This will transfer ownership of the organization.
                    </Alert>
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={onConfirm}>
                    Confirm Transfer
                </Button>
            </DialogActions>
        </Dialog>
    );
}
