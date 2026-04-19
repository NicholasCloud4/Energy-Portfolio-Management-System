import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

    const allGood = critical.length === 0 && warning.length === 0;

    return (
        <Box p={2} borderRadius={2} bgcolor="background.paper" boxShadow={1}>
            <Typography variant="h6" gutterBottom sx={{ px: 1 }}>
                Property Status Overview
            </Typography>

            {allGood ? (
                <Box display="flex" alignItems="center" gap={1} p={2}>
                    <CheckCircleIcon color="success" />
                    <Typography fontWeight="500">
                        All properties are performing well
                    </Typography>
                </Box>
            ) : (
                <Box display="flex" flexDirection="column" gap={1}>
                    {/* Critical Dropdown */}
                    {critical.length > 0 && (
                        <Accordion
                            disableGutters
                            elevation={0}
                            sx={{
                                "&:before": { display: "none" },
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 1,
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <ErrorIcon color="error" />
                                    <Typography fontWeight="600" color="error">
                                        {critical.length}{" "}
                                        {critical.length === 1
                                            ? "Property"
                                            : "Properties"}{" "}
                                        in Critical Condition
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ p: 0 }}>
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
                            </AccordionDetails>
                        </Accordion>
                    )}

                    {/* Warning Dropdown */}
                    {warning.length > 0 && (
                        <Accordion
                            disableGutters
                            elevation={0}
                            sx={{
                                "&:before": { display: "none" },
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 1,
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <WarningIcon color="warning" />
                                    <Typography
                                        fontWeight="600"
                                        sx={{ color: "warning.main" }}
                                    >
                                        {warning.length}{" "}
                                        {warning.length === 1
                                            ? "Property Needs"
                                            : "Properties Need"}{" "}
                                        Attention
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ p: 0 }}>
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
                            </AccordionDetails>
                        </Accordion>
                    )}
                </Box>
            )}
        </Box>
    );
}