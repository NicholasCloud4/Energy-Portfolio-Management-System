"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import RadialDial from "./RadialDial";

type Organization = {
    id: string;
    name: string;
    score: number;
};

type Props = {
    organizations: Organization[];
};

export default function OverviewSlider({ organizations }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                overflowX: "auto",
                gap: 3,
                py: 3,
                px: 1,
                "&::-webkit-scrollbar": { height: "6px" },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                },
            }}
        >
            {organizations.map((org) => (
                <Card
                    key={org.id}
                    elevation={2}
                    sx={{
                        minWidth: 240,
                        height: 200,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "Paper",
                        borderRadius: 3,
                        border: "2px solid transparent",
                        transition: "all 0.3s ease",
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 500,
                                letterSpacing: "0.5px",
                                textAlign: "center",
                            }}
                        >
                            {org.name}
                        </Typography>
                        <RadialDial value={org.score} />
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}
