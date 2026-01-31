"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BoltIcon from "@mui/icons-material/Bolt";

export default function SitemarkIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.0,
        fontFamily: "'Inter', 'Roboto', sans-serif",
        fontWeight: 700,
        fontSize: 24,
        color: "text.primary",
        letterSpacing: 0.5,
        p: 1,
        m: 1,
      }}
      onClick={() => (window.location.href = "/landing-page")}
    >
      <BoltIcon sx={{ fontSize: 22 }} aria-hidden />
      energy+
    </Box>
  );
}
