"use client";

import { Container, Stack, Typography } from "@mui/material";

export default function AuditorLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Auditor Dashboard
                </Typography>
                {children}
            </Stack>
        </Container>
    );
}