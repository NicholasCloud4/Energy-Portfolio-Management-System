"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LoginIcon from "@mui/icons-material/Login";

import ColorModeIconDropdown from "../../theme/ColorModeIconDropdown";
import Sitemark from "./SitemarkIcon";

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
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

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
                {/* Logo / Left Section */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                                margin: " -4px 0 0 0 ",
                            },
                        }}
                    >
                        <Sitemark />
                    </Box>
                </Box>

                {/* Right Section */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 1,
                        alignItems: "center",
                    }}
                >
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

                    <ColorModeIconDropdown />
                </Box>

                {/* Mobile Section */}
                <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                    <ColorModeIconDropdown size="medium" />
                    <IconButton
                        aria-label="Menu button"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer(false)}
                        slotProps={{
                            paper: {
                                sx: {
                                    top: 0,
                                    p: 2,
                                    bgcolor: "background.default",
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>

                        <MenuItem>
                            <Button
                                component={Link}
                                href="/dashboard"
                                variant="text"
                                fullWidth
                            >
                                Dashboard
                            </Button>
                        </MenuItem>
                        <Divider sx={{ my: 2 }} />
                        <MenuItem>
                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                Sign up
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                color="primary"
                                variant="outlined"
                                fullWidth
                            >
                                Sign in
                            </Button>
                        </MenuItem>
                    </Drawer>
                </Box>
            </StyledToolbar>
        </MuiAppBar>
    );
}
