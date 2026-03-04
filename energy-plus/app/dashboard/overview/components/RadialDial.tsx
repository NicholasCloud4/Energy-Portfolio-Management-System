import { Box, Typography, CircularProgress, alpha } from "@mui/material";

interface ScoreDialProps {
    value: number;
    size?: number;
}

export default function RadialDial({ value, size = 120 }: ScoreDialProps) {
    // Determine colors based on value
    const getColors = () => {
        let baseColor = "#4caf50"; // green
        if (value <= 50)
            baseColor = "#f44336"; // red
        else if (value <= 74) baseColor = "#ffb300"; // yellow

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
                value={value}
                size={size}
                thickness={5}
                sx={{
                    color: colors.main,
                }}
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
                    margin: "0px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: colors.main }}
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    );
}
