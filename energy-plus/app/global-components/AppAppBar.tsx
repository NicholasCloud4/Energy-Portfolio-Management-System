"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

import NavbarBreadcrumbs from "../dashboard/components/NavbarBreadcrumbs";
import ColorModeIconDropdown from "../../theme/ColorModeSwitch";
import Sitemark from "./SitemarkIcon";
import { supabaseClient } from "@/lib/supabaseClient";
import { usePathname, useRouter } from "next/navigation";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 64,
    backdropFilter: "blur(20px)",
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.7)`
        : alpha(theme.palette.background.default, 0.7),
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
    padding: "0 16px",
}));

export default function AppAppBar() {
    const [user, setUser] = React.useState<any>(null);
    const [profile, setProfile] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [loggingOut, setLoggingOut] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isLandingPage = pathname === "/landing-page";

    const fetchUserProfile = async (userId: string) => {
        const { data, error } = await supabaseClient
            .from("profiles")
            .select("first_name, last_name, email, avatar_url")
            .eq("id", userId)
            .single();

        if (!error && data) {
            setProfile(data);
        } else {
            console.error("Error fetching profile:", error);
            setProfile(null);
        }
    };

    React.useEffect(() => {
        const loadUserSession = async () => {
            const { data } = await supabaseClient.auth.getSession();
            const sessionUser = data.session?.user ?? null;

            setUser(sessionUser);
            if (sessionUser) {
                await fetchUserProfile(sessionUser.id);
            }
            setLoading(false);
        };

        loadUserSession();

        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
            (_event, session) => {
                const sessionUser = session?.user ?? null;

                setUser(sessionUser);
                if (sessionUser) {
                    fetchUserProfile(sessionUser.id);
                } else {
                    setProfile(null);
                }
            }
        );

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        setLoggingOut(true);
        await supabaseClient.auth.signOut();
        setUser(null);
        setProfile(null);
        console.log("User logged out");
        router.push("/sign-in");
    };

    return (
        <MuiAppBar
            position="fixed"
            enableColorOnDark
            elevation={0}
            sx={{
                top: 0,
                left: 0,
                right: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <StyledToolbar variant="dense" disableGutters>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {!user || isLandingPage ? <Sitemark /> : null}

                    {user && !isLandingPage && (
                        <Box sx={{ display: { xs: "none", md: "flex" }, margin: "-4px 0 0 0" }}>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={15}
                                height={22}
                                priority
                            />
                        </Box>
                    )}

                    {user && !isLandingPage && <NavbarBreadcrumbs />}
                </Box>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
                    {loading ? (
                        <CircularProgress color="inherit" size={24} />
                    ) : loggingOut ? (
                        <CircularProgress color="inherit" size={24} />
                    ) : user && profile ? (
                        <>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
                                <Avatar
                                    alt={`${profile.first_name} ${profile.last_name}`}
                                    src={profile.avatar_url || ""}
                                    sx={{ width: 36, height: 36 }}
                                />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: "16px" }}>
                                        {profile.first_name} {profile.last_name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                        {profile.email}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button color="primary" variant="outlined" size="small" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                href="/sign-in"
                                color="primary"
                                variant="outlined"
                                size="small"
                                startIcon={<LoginIcon />}
                            >
                                Sign in
                            </Button>
                            <Button
                                component={Link}
                                href="/sign-up"
                                color="primary"
                                variant="contained"
                                size="small"
                            >
                                Sign up
                            </Button>
                        </>
                    )}
                    <ColorModeIconDropdown />
                </Box>

                <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                    <ColorModeIconDropdown size="medium" />
                </Box>
            </StyledToolbar>
        </MuiAppBar>
    );
}