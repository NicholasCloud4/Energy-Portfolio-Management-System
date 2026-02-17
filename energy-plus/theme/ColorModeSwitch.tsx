"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useColorScheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 28,
    padding: 4,
    "& .MuiSwitch-switchBase": {
        padding: 2,
        margin: 4,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(22px)",
        },
    },
    "& .MuiSwitch-thumb": {
        width: 24,
        height: 24,
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001a4d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        transition: "all 0.3s ease",
    },
    "& .MuiSwitch-track": {
        borderRadius: 20,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[600] : theme.palette.grey[400],
        opacity: 1,
    },
}));

export default function ColorModeSwitch(props: React.ComponentProps<typeof Switch>) {
    const { mode, setMode } = useColorScheme();

    if (!mode) return null;

    return (
        <ThemeSwitch
            checked={mode === "dark"}
            onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
            icon={<WbSunnyIcon sx={{ fontSize: 16, color: "#fff" }} />}
            checkedIcon={<DarkModeIcon sx={{ fontSize: 16, color: "#fff" }} />}
            {...props}
        />
    );
}