import { Box, Typography, CircularProgress, alpha } from "@mui/material";

interface ScoreDialProps {
    value?: number;
}

export default function RadialDial({ value }: ScoreDialProps) {
    const hasData = value !== undefined && value !== null && value > 0;
    const displayValue = hasData ? value : 0;

    const getColors = () => {
        let baseColor = "#4caf50"; // green
        if (displayValue <= 50)
            baseColor = "#f44336"; // red
        else if (displayValue <= 74) baseColor = "#ffb300"; // yellow

        return {
            main: baseColor,
            light: alpha(baseColor, 0.1),
        };
    };

    const colors = getColors();

    return (
        <Box sx={{ position: "relative", display: "inline-flex" }}>
            {/* The Outer Progress Ring */}
            <CircularProgress
                variant="determinate"
                value={hasData ? displayValue : 100}
                size={120}
                thickness={5}
                sx={(theme) => ({
                    color: hasData
                        ? colors.main
                        : theme.palette.mode === "light"
                          ? theme.palette.grey[400]
                          : theme.palette.grey[600],
                })}
            />

            {/* The Inner Circle and Text */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: hasData ? colors.light : "transparent",
                    borderRadius: "50%",
                }}
            >
                <Typography
                    variant="h6"
                    sx={(theme) => ({
                        fontWeight: 600,
                        color: hasData
                            ? colors.main
                            : theme.palette.mode === "dark"
                              ? theme.palette.grey[900] // Change from 900 to 300 (or 100) for visibility
                              : theme.palette.text.secondary,
                        textAlign: "center",
                    })}
                >
                    {hasData ? displayValue : "No Usage Data"}
                </Typography>
            </Box>
        </Box>
    );
}
