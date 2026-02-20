"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import type { Contact } from "../types";

type Props = {
    contacts: Contact[];
    onRemoveAction: (contactId: string) => void;
};

export default function ContactsTable({ contacts, onRemoveAction }: Props) {
    if (!contacts.length) {
        return <Typography color="text.secondary">No contacts yet.</Typography>;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell>
                                {contact.first_name} {contact.last_name}
                            </TableCell>

                            <TableCell>{contact.email}</TableCell>

                            <TableCell align="right">
                                <IconButton
                                    color="error"
                                    onClick={() => onRemoveAction(contact.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
