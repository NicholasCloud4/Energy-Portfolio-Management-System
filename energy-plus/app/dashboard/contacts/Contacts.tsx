"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import type { User } from "@supabase/supabase-js";
import { supabaseClient } from "@/lib/supabaseClient";

import { Box, Button, Container, Typography } from "@mui/material";
import { Add, SwapHoriz } from "@mui/icons-material";

import ContactsTable from "./components/ContactsTable";
import AddContactDialog, { Profile } from "./components/AddContactDialog";
import TransferOwnershipDialog, {
    Organization,
    Contact,
} from "./components/TransferOwnershipDialog";

export default function Contacts() {
    const [user, setUser] = useState<User | null>(null);

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [availableUsers, setAvailableUsers] = useState<Profile[]>([]);
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [transferTo, setTransferTo] = useState<string | number>("");
    const [transferItem, setTransferItem] = useState<string | number>("");

    /* Fetch */
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

    const fetchUsers = useCallback(async () => {
        const { data, error } = await supabaseClient
            .from("profiles")
            .select("id, full_name, email");

        if (error) {
            console.error(error);
            return;
        }

        setAvailableUsers(data ?? []);
    }, []);

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

    /* Get logged in user */
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabaseClient.auth.getUser();
            setUser(data.user ?? null);
        };
        getUser();
    }, []);

    /* Load data when user is ready */
    useEffect(() => {
        if (!user) return;

        const loadData = async () => {
            await fetchContacts();
            await fetchUsers();
            await fetchOrganizations();
        };
        loadData();
    }, [user, fetchContacts, fetchUsers, fetchOrganizations]);

    /* Handlers */
    const handleAddContact = async (selectedUser: Profile) => {
        if (!user) return;

        const { error } = await supabaseClient.from("contacts").insert([
            {
                owner_id: user.id,
                email: selectedUser.email,
                full_name: selectedUser.full_name,
            },
        ]);

        if (error) {
            console.error(error);
            return;
        }

        await fetchContacts();
        setShowAddModal(false);
    };

    const handleTransferOwnership = async () => {
        if (!user || !transferTo || !transferItem) return;

        const { error } = await supabaseClient
            .from("organizations")
            .update({ created_by: transferTo })
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

    /* Filter users for Add Contact modal */
    const filteredUsers = useMemo(() => {
        return availableUsers.filter((u) => {
            const notAlreadyContact = !contacts.some(
                (c) => c.email === u.email,
            );
            const matchesSearch =
                u.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                u.email.toLowerCase().includes(searchTerm.toLowerCase());

            return notAlreadyContact && matchesSearch;
        });
    }, [availableUsers, contacts, searchTerm]);

    /* UI */
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

            {/* Contacts Table */}
            <ContactsTable contacts={contacts} />

            {/* Add Contact Modal */}
            <AddContactDialog
                open={showAddModal}
                onClose={() => setShowAddModal(false)}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredUsers={filteredUsers}
                onAdd={handleAddContact}
            />

            {/* Transfer Ownership Modal */}
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
