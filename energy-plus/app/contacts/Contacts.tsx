"use client";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    Alert,
    Chip,
} from "@mui/material";
import { Add, SwapHoriz } from "@mui/icons-material";

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Sarah Chen",
            email: "sarah.chen@example.com",
            phone: "+1 (555) 234-5678",
            role: "Property Manager",
            properties: 3,
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            email: "m.rodriguez@example.com",
            phone: "+1 (555) 876-5432",
            role: "Owner",
            properties: 7,
        },
        {
            id: 3,
            name: "Aisha Patel",
            email: "aisha.p@example.com",
            phone: "+1 (555) 345-6789",
            role: "Admin",
            properties: 2,
        },
        {
            id: 4,
            name: "James O'Connor",
            email: "james.oconnor@example.com",
            phone: "+1 (555) 567-8901",
            role: "Coordinator",
            properties: 5,
        },
    ]);

    const [availableUsers] = useState([
        {
            id: 5,
            name: "Emily Zhang",
            email: "emily.z@example.com",
            role: "Consultant",
        },
        {
            id: 6,
            name: "David Kim",
            email: "d.kim@example.com",
            role: "Analyst",
        },
        {
            id: 7,
            name: "Sofia Martinez",
            email: "sofia.m@example.com",
            role: "Manager",
        },
        {
            id: 8,
            name: "Alex Johnson",
            email: "alex.j@example.com",
            role: "Coordinator",
        },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [transferFrom, setTransferFrom] = useState("");
    const [transferTo, setTransferTo] = useState("");
    const [transferItem, setTransferItem] = useState("");

    const handleAddContact = (user) => {
        const newContact = {
            ...user,
            phone: "+1 (555) xxx-xxxx",
            properties: 0,
        };
        setContacts([...contacts, newContact]);
        setShowAddModal(false);
        setSearchTerm("");
    };

    const handleTransferOwnership = () => {
        setShowTransferModal(false);
        setTransferFrom("");
        setTransferTo("");
        setTransferItem("");
    };

    const filteredUsers = availableUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contacts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage your network • {contacts.length} contacts
                </Typography>
            </Box>

            <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setShowAddModal(true)}
                >
                    Add Existing User
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SwapHoriz />}
                    onClick={() => setShowTransferModal(true)}
                >
                    Transfer Ownership
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell align="right">Properties</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow key={contact.id} hover>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                                <TableCell>
                                    <Chip label={contact.role} size="small" />
                                </TableCell>
                                <TableCell align="right">
                                    {contact.properties}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add User Dialog */}
            <Dialog
                open={showAddModal}
                onClose={() => setShowAddModal(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Add Existing User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Search users"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name or email..."
                        sx={{ mb: 2 }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        {filteredUsers.map((user) => (
                            <Paper
                                key={user.id}
                                sx={{
                                    p: 2,
                                    cursor: "pointer",
                                    "&:hover": { bgcolor: "action.hover" },
                                }}
                                onClick={() => handleAddContact(user)}
                            >
                                <Typography variant="subtitle1">
                                    {user.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {user.email}
                                </Typography>
                                <Chip
                                    label={user.role}
                                    size="small"
                                    sx={{ mt: 1 }}
                                />
                            </Paper>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Transfer Ownership Dialog */}
            <Dialog
                open={showTransferModal}
                onClose={() => setShowTransferModal(false)}
                maxWidth="sm"
                fullWidth
            >
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
                            <InputLabel>Transfer From</InputLabel>
                            <Select
                                value={transferFrom}
                                label="Transfer From"
                                onChange={(e) =>
                                    setTransferFrom(e.target.value)
                                }
                            >
                                {contacts.map((contact) => (
                                    <MenuItem
                                        key={contact.id}
                                        value={contact.id}
                                    >
                                        {contact.name} - {contact.properties}{" "}
                                        properties
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
                                        value={contact.id}
                                    >
                                        {contact.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel>Property / Organization</InputLabel>
                            <Select
                                value={transferItem}
                                label="Property / Organization"
                                onChange={(e) =>
                                    setTransferItem(e.target.value)
                                }
                            >
                                <MenuItem value="downtown">
                                    Downtown Plaza - Property
                                </MenuItem>
                                <MenuItem value="riverside">
                                    Riverside Towers - Property
                                </MenuItem>
                                <MenuItem value="tech">
                                    Tech Hub Complex - Property
                                </MenuItem>
                                <MenuItem value="harbor">
                                    Harbor View Organization
                                </MenuItem>
                                <MenuItem value="metro">
                                    Metropolitan Group
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <Alert severity="warning">
                            This action will transfer all ownership rights and
                            cannot be undone. Please confirm the details before
                            proceeding.
                        </Alert>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowTransferModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleTransferOwnership}
                    >
                        Confirm Transfer
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
