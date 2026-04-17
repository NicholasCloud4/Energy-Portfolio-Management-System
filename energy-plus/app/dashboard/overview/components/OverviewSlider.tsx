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
                        minWidth: 320,
                        height: 300,
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "background.paper",
                        borderRadius: 4,
                        border: "1px solid rgba(255,255,255,0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: 6,
                        },
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            gap: 2,
                            p: 3,
                            "&:last-child": { pb: 3 },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                textAlign: "center",
                                lineHeight: 1.2,
                            }}
                        >
                            {org.name}
                        </Typography>

                        <Box sx={{ transform: "scale(1.2)" }}>
                            <RadialDial value={org.score} />
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}
