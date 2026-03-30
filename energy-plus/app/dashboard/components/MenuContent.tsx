"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { supabaseClient } from "@/lib/supabaseClient";

type AccountType = "user" | "admin" | "auditor";

type MenuItemType = {
    text: string;
    icon: React.ReactNode;
    path: string;
};

export default function MenuContent() {
    const router = useRouter();
    const pathname = usePathname();

    const [accountType, setAccountType] = useState<AccountType | null>(null);

    useEffect(() => {
        async function loadAccountType() {
            const {
                data: { user },
            } = await supabaseClient.auth.getUser();

            if (!user) {
                setAccountType("user");
                return;
            }

            const { data, error } = await supabaseClient
                .from("profiles")
                .select("account_type")
                .eq("id", user.id)
                .single();

            if (error || !data) {
                setAccountType("user");
                return;
            }

            setAccountType(data.account_type as AccountType);
        }

        loadAccountType();
    }, []);

    const mainListItemsByRole: Record<AccountType, MenuItemType[]> = {
        admin: [
            { text: "Users", icon: <PeopleIcon />, path: "/dashboard/users" },
        ],

        user: [
            { text: "Overview", icon: <HomeIcon />, path: "/dashboard/overview" },
            { text: "Organizations", icon: <PersonIcon />, path: "/dashboard/organizations" },
            { text: "Properties", icon: <AnalyticsIcon />, path: "/dashboard/properties" },
            { text: "Log Energy", icon: <FlashOnIcon />, path: "/dashboard/logEnergy" },
            { text: "Contacts", icon: <ContactsIcon />, path: "/dashboard/contacts" },
        ],

        auditor: [
            { text: "Overview", icon: <HomeIcon />, path: "/dashboard/auditorOverview" },
            { text: "Organizations", icon: <PersonIcon />, path: "/dashboard/auditorOrganizations" },
            { text: "Properties", icon: <AnalyticsIcon />, path: "/dashboard/properties" },
            { text: "Users", icon: <PeopleIcon />, path: "/dashboard/users" },
        ],
    };

    const secondaryListItems: MenuItemType[] = [
        { text: "Settings", icon: <SettingsRoundedIcon />, path: "/dashboard/settings" },
    ];

    const isSelected = (itemPath: string) => pathname === itemPath;

    if (!accountType) return null;

    const mainListItems = mainListItemsByRole[accountType];

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}