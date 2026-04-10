import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type PropertyScore = {
    property_id: string;
    property_name: string;
    score: number;
    address: string;
};

type Props = {
    properties: PropertyScore[];
};

export default function GeneralStatus({ properties }: Props) {
    // Group properties by their status
    const critical = properties
        .filter((p) => p.score <= 50)
        .sort((a, b) => a.score - b.score);

    const warning = properties
        .filter((p) => p.score >= 51 && p.score <= 74)
        .sort((a, b) => a.score - b.score);

    return (
        <Box p={3} borderRadius={2} bgcolor="background.paper" boxShadow={1}>
            {/*SUMMARY SECTION (Shows both if both exist) */}
            <Box display="flex" flexDirection="column" gap={1.5} mb={2}>
                {critical.length > 0 && (
                    <Box display="flex" alignItems="center" gap={1}>
                        <ErrorIcon color="error" />
                        <Typography fontWeight="500">
                            {critical.length}{" "}
                            {critical.length === 1
                                ? "property is"
                                : "properties are"}{" "}
                            in critical condition
                        </Typography>
                    </Box>
                )}

                {warning.length > 0 && (
                    <Box display="flex" alignItems="center" gap={1}>
                        <WarningIcon color="warning" />
                        <Typography fontWeight="500">
                            {warning.length}{" "}
                            {warning.length === 1
                                ? "property needs"
                                : "properties need"}{" "}
                            attention
                        </Typography>
                    </Box>
                )}

                {critical.length === 0 && warning.length === 0 && (
                    <Box display="flex" alignItems="center" gap={1}>
                        <CheckCircleIcon color="success" />
                        <Typography fontWeight="500">
                            All properties are performing well
                        </Typography>
                    </Box>
                )}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* INDIVIDUAL PROPERTY LISTS */}
            <Box>
                {/* Critical List */}
                {critical.length > 0 && (
                    <>
                        <Typography
                            color="error"
                            fontWeight="bold"
                            variant="subtitle2"
                            gutterBottom
                        >
                            CRITICAL CONDITION
                        </Typography>
                        <List dense>
                            {critical.map((p) => (
                                <ListItem key={p.property_id} divider>
                                    <ListItemText
                                        primary={p.property_name}
                                        secondary={`${p.address} — Score: ${p.score}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}

                {/* Warning List */}
                {warning.length > 0 && (
                    <Box mt={3}>
                        <Typography
                            sx={{ color: "warning.main" }}
                            fontWeight="bold"
                            variant="subtitle2"
                            gutterBottom
                        >
                            NEEDS ATTENTION
                        </Typography>
                        <List dense>
                            {warning.map((p) => (
                                <ListItem key={p.property_id} divider>
                                    <ListItemText
                                        primary={p.property_name}
                                        secondary={`${p.address} — Score: ${p.score}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
