"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import type { User } from "@supabase/supabase-js";
import { supabaseClient } from "@/lib/supabaseClient";

import { Box, Button, Container, Typography } from "@mui/material";
import { Add, SwapHoriz } from "@mui/icons-material";

import ContactsTable from "./components/ContactsTable";
import AddContactDialog from "./components/AddContactDialog";
import TransferOwnershipDialog from "./components/TransferOwnershipDialog";

import type { Contact, Profile, Organization } from "./types";

export default function Contacts() {
    const [user, setUser] = useState<User | null>(null);

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [availableUsers, setAvailableUsers] = useState<Profile[]>([]);
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [transferTo, setTransferTo] = useState<string>("");
    const [transferItem, setTransferItem] = useState<string>("");

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
    const handleAddContact = async (selectedUser: Profile) => {
        if (!user) return;

        const { error } = await supabaseClient.from("contacts").insert([
            {
                owner_id: user.id,
                email: selectedUser.email,
                first_name: selectedUser.first_name,
                last_name: selectedUser.last_name,
            },
        ]);

        if (error) {
            console.error(error);
            return;
        }

        await fetchContacts();
        setShowAddModal(false);
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
            console.error("Could not find profile for email");
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

    /* ---------------- FILTER USERS ---------------- */
    const filteredUsers = useMemo(() => {
        return availableUsers.filter((u) => {
            const fullName = `${u.first_name} ${u.last_name}`;

            const notAlreadyContact = !contacts.some(
                (c) => c.email === u.email,
            );

            const matchesSearch =
                fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (u.email ?? "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            return notAlreadyContact && matchesSearch;
        });
    }, [availableUsers, contacts, searchTerm]);

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

            <ContactsTable contacts={contacts} />

            <AddContactDialog
                open={showAddModal}
                onClose={() => setShowAddModal(false)}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredUsers={filteredUsers}
                onAdd={handleAddContact}
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
        </Container>
    );
}
