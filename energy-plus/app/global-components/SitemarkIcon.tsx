"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

export default function SitemarkIcon() {
    return (
        <Link href="/landing-page" passHref style={{ textDecoration: "none" }}>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontFamily: "'Inter', 'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                color: "text.primary",
                letterSpacing: 0.5,
                p: 1,
                m: 1,
                cursor: "pointer",
            }}
        >
            <Image
                src="/logo.png"
                alt="Logo"
                width={15}
                height={22}
                priority
                style={{ display:"block", margin: " 6px 8px 0 0", }}
            />
            energy+
        </Box>
        </Link>
    );
}
