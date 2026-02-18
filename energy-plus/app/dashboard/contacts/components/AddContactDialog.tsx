import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Paper,
    Typography,
} from "@mui/material";

export type Profile = {
    id: string;
    full_name: string;
    email: string;
};

type AddContactDialogProps = {
    open: boolean;
    onClose: () => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    filteredUsers: Profile[];
    onAdd: (user: Profile) => void;
};

export default function AddContactDialog({
    open,
    onClose,
    searchTerm,
    setSearchTerm,
    filteredUsers,
    onAdd,
}: AddContactDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Existing User</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    margin="dense"
                    label="Search users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2 }}
                />

                {filteredUsers.map((user) => (
                    <Paper
                        key={user.id}
                        sx={{ p: 2, mb: 1, cursor: "pointer" }}
                        onClick={() => onAdd(user)}
                    >
                        <Typography>{user.full_name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}
                        </Typography>
                    </Paper>
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
