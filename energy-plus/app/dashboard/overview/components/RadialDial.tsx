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
                value={displayValue}
                size={120}
                thickness={5}
                sx={{ color: colors.main }}
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
                    bgcolor: colors.light,
                    borderRadius: "50%",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: colors.main,
                        textAlign: "center",
                    }}
                >
                    {hasData ? displayValue : "No Usage Data"}
                </Typography>
            </Box>
        </Box>
    );
}
