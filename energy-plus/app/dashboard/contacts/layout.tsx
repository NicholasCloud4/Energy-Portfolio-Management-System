"use client";
import { useEffect, useState, useCallback } from "react";
import type { User } from "@supabase/supabase-js";
import { supabaseClient } from "@/lib/supabaseClient";

import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import { Add, SwapHoriz } from "@mui/icons-material";

import ContactsTable from "./components/ContactsTable";
import AddContactDialog from "./components/AddContactDialog";
import TransferOwnershipDialog from "./components/TransferOwnershipDialog";

import type { Contact, Profile, Organization } from "./components/types";

export default function Layout() {
    const [user, setUser] = useState<User | null>(null);

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [availableUsers, setAvailableUsers] = useState<Profile[]>([]);
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);

    const [transferTo, setTransferTo] = useState<string>("");
    const [transferItem, setTransferItem] = useState<string>("");

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState<string | null>(null);

    /* ---------------- FETCH CONTACTS ---------------- */
    const fetchContacts = useCallback(async () => {
        if (!user) return;

        const { data, error } = await supabaseClient
            .from("contacts")
            .select("*")
            .eq("owner_id", user.id);

        if (error) {
            console.error(error);
            return;
        }

        setContacts(data ?? []);
    }, [user]);

    /* ---------------- FETCH USERS ---------------- */
    const fetchUsers = useCallback(async () => {
        const { data, error } = await supabaseClient
            .from("profiles")
            .select("id, first_name, last_name, email")
            .not("email", "is", null);

        if (error) {
            console.error(error);
            return;
        }

        setAvailableUsers(data ?? []);
    }, []);

    /* ---------------- FETCH ORGS ---------------- */
    const fetchOrganizations = useCallback(async () => {
        if (!user) return;

        const { data, error } = await supabaseClient
            .from("organizations")
            .select("id, name, created_by")
            .eq("created_by", user.id);

        if (error) {
            console.error(error);
            return;
        }

        setOrganizations(data ?? []);
    }, [user]);

    /* ---------------- AUTH ---------------- */
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabaseClient.auth.getUser();
            setUser(data.user ?? null);
        };
        getUser();
    }, []);

    /* ---------------- LOAD DATA ---------------- */
    useEffect(() => {
        if (!user) return;

        const loadData = async () => {
            await fetchContacts();
            await fetchUsers();
            await fetchOrganizations();
        };

        loadData();
    }, [user, fetchContacts, fetchUsers, fetchOrganizations]);

    /* ---------------- ADD CONTACT ---------------- */
    const handleAddContact = async (email: string) => {
        if (!user) {
            throw new Error("You must be signed in");
        }

        try {
            const normalizedEmail = email.trim().toLowerCase();

            if (!normalizedEmail) {
                throw new Error("Email is required");
            }

            const profile = availableUsers.find(
                (u) => u.email?.toLowerCase() === normalizedEmail
            );

            if (!profile) {
                throw new Error("User not found");
            }

            if (profile.id === user.id) {
                throw new Error("You cannot add yourself");
            }

            const existingContact = contacts.find(
                (c) => c.email?.toLowerCase() === normalizedEmail
            );

            if (existingContact) {
                throw new Error("Contact already exists");
            }

            const fullName = `${profile.first_name ?? ""} ${profile.last_name ?? ""}`.trim();

            const { error } = await supabaseClient.from("contacts").insert({
                owner_id: user.id,
                email: profile.email,
                first_name: profile.first_name,
                last_name: profile.last_name,
                full_name: fullName,
            });

            if (error) {
                throw new Error(error.message);
            }

            await fetchContacts();
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw err;
            }
            throw new Error("Failed to add contact");
        }
    };

    /* ---------------- REMOVE CONTACT ---------------- */

    const handleRequestRemoveContact = (contactId: string) => {
        setContactToDelete(contactId);
        setConfirmOpen(true);
    };

    const handleRemoveContact = async () => {
        if (!user || !contactToDelete) return;

        const { error } = await supabaseClient
            .from("contacts")
            .delete()
            .eq("id", contactToDelete)
            .eq("owner_id", user.id);

        if (error) {
            console.error(error);
            return;
        }

        setContacts((prev) => prev.filter((c) => c.id !== contactToDelete));
        setConfirmOpen(false);
        setContactToDelete(null);
    };

    /* EMAIL → PROFILE LOOKUP */
    const getProfileIdByEmail = useCallback(
        (email: string) => {
            const profile = availableUsers.find((u) => u.email === email);
            return profile?.id ?? null;
        },
        [availableUsers],
    );

    /* ---------------- TRANSFER OWNERSHIP ---------------- */
    const handleTransferOwnership = async () => {
        if (!user || !transferTo || !transferItem) return;

        const targetProfileId = getProfileIdByEmail(transferTo);

        if (!targetProfileId) {
            console.error("Could not find profile");
            return;
        }

        const { error } = await supabaseClient
            .from("organizations")
            .update({ created_by: targetProfileId })
            .eq("id", transferItem)
            .eq("created_by", user.id);

        if (error) {
            console.error(error);
            return;
        }

        await fetchOrganizations();
        setShowTransferModal(false);
        setTransferItem("");
        setTransferTo("");
    };

    /* ---------------- UI ---------------- */
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4">Contacts</Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage your contacts
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

            <ContactsTable
                contacts={contacts}
                onRemoveAction={handleRequestRemoveContact}
            />

            <AddContactDialog
                open={showAddModal}
                onCloseAction={() => setShowAddModal(false)}
                onAddAction={handleAddContact}
            />

            <TransferOwnershipDialog
                open={showTransferModal}
                onClose={() => setShowTransferModal(false)}
                organizations={organizations}
                contacts={contacts}
                transferItem={transferItem}
                setTransferItem={setTransferItem}
                transferTo={transferTo}
                setTransferTo={setTransferTo}
                onConfirm={handleTransferOwnership}
            />

            <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
                <DialogTitle>Remove Contact?</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to remove this contact? This action cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleRemoveContact}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}