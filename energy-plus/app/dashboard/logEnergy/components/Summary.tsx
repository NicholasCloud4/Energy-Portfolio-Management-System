"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { Property } from "./SelectProperty";

interface SummaryProps {
    property: Property | null;
    score: number | null;
}

export default function Summary({ property, score }: SummaryProps) {
    const address = property
        ? [property.street, property.city, property.state, property.zip]
            .filter(Boolean)
            .join(", ")
        : "N/A";

    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Property Summary
                </Typography>

                {property ? (
                    <>
                        <Typography>
                            <strong>Name:</strong> {property.property_name || "N/A"}
                        </Typography>

                        <Typography sx={{ mt: 1 }}>
                            <strong>Address:</strong> {address}
                        </Typography>

                        <Typography sx={{ mt: 1 }}>
                            <strong>Type:</strong> {property.property_type || "N/A"}
                        </Typography>

                        <Typography sx={{ mt: 1 }}>
                            <strong>Energy Score:</strong> {score && score > 0 ? score : "N/A"}
                        </Typography>
                    </>
                ) : (
                    <Typography color="text.secondary">
                        Select a property to display information.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}