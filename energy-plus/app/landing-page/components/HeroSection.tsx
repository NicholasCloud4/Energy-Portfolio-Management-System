'use client';

import * as React from 'react';
import Link from 'next/link';
import {
    Box,
    Button,
    Chip,
    Container,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

export default function HeroSection() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const usageData = [420, 465, 438, 510, 482, 540];

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default',
                color: 'text.primary',
                pt: { xs: 10, md: 14 },
                pb: { xs: 8, md: 12 },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: (theme) =>
                        `radial-gradient(circle at top left, ${theme.palette.primary.main}22 0%, transparent 28%),
                         radial-gradient(circle at 80% 10%, ${theme.palette.primary.light}18 0%, transparent 22%)`,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Stack spacing={{ xs: 6, md: 8 }}>
                    <Stack
                        direction={{ xs: 'column', lg: 'row' }}
                        spacing={{ xs: 5, md: 8 }}
                        alignItems="center"
                    >
                        <Box sx={{ flex: 1, width: '100%' }}>
                            <Stack spacing={3}>
                                <Chip
                                    label="Energy management platform"
                                    sx={{
                                        alignSelf: 'flex-start',
                                        bgcolor: 'background.paper',
                                        color: 'primary.main',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        fontWeight: 600,
                                    }}
                                />

                                <Typography
                                    variant="h1"
                                    sx={{
                                        maxWidth: 760,
                                        letterSpacing: -1,
                                    }}
                                >
                                    Monitor energy usage with a dashboard built for modern teams.
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{
                                        maxWidth: 700,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Track properties, manage organizations, and visualize energy
                                    consumption over time in one polished platform. Built to feel
                                    fast, clear, and easy to adopt.
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    <Button
                                        component={Link}
                                        href="/sign-up"
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForwardRoundedIcon />}
                                    >
                                        Get started
                                    </Button>
                                </Stack>

                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 1.5, sm: 3 }}
                                    color="text.secondary"
                                >
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <ApartmentRoundedIcon fontSize="small" color="primary" />
                                        <Typography variant="body2">
                                            Property management
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <BarChartRoundedIcon fontSize="small" color="primary" />
                                        <Typography variant="body2">Usage analytics</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <PeopleAltRoundedIcon fontSize="small" color="primary" />
                                        <Typography variant="body2">
                                            Organization controls
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box sx={{ flex: 1, width: '100%' }}>
                            <Paper
                                elevation={1}
                                sx={{
                                    p: { xs: 2, md: 3 },
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 4,
                                }}
                            >
                                <Stack spacing={2.5}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                bgcolor: '#ff5f57',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                bgcolor: '#febc2e',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                bgcolor: '#28c840',
                                            }}
                                        />
                                    </Stack>

                                    <Paper
                                        variant="outlined"
                                        sx={{
                                            p: 2.5,
                                            bgcolor: 'background.default',
                                            borderRadius: 3,
                                        }}
                                    >
                                        <Stack spacing={2.5}>
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <BoltRoundedIcon color="primary" />
                                                    <Typography variant="h6">
                                                        Energy Dashboard Preview
                                                    </Typography>
                                                </Stack>
                                                <Chip
                                                    label="Sample platform view"
                                                    color="primary"
                                                    variant="outlined"
                                                    size="small"
                                                />
                                            </Stack>

                                            <Stack spacing={1.25}>
                                                <Typography variant="body2" color="text.secondary">
                                                    Example monthly usage trend
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        height: 220,
                                                        borderRadius: 3,
                                                        border: '1px solid',
                                                        borderColor: 'divider',
                                                        bgcolor: 'background.paper',
                                                        overflow: 'hidden',
                                                        px: 1.5,
                                                        pt: 2,
                                                        background: (theme) =>
                                                            `linear-gradient(180deg, ${theme.palette.primary.main}10 0%, ${theme.palette.background.paper} 55%)`,
                                                    }}
                                                >
                                                    <LineChart
                                                        height={200}
                                                        hideLegend
                                                        xAxis={[
                                                            {
                                                                scaleType: 'point',
                                                                data: months,
                                                                disableLine: true,
                                                                disableTicks: true,
                                                                tickLabelStyle: {
                                                                    fontSize: 12,
                                                                },
                                                            },
                                                        ]}
                                                        yAxis={[
                                                            {
                                                                width: 0,
                                                                disableLine: true,
                                                                disableTicks: true,
                                                            },
                                                        ]}
                                                        series={[
                                                            {
                                                                data: usageData,
                                                                label: 'Usage',
                                                                area: true,
                                                                showMark: false,
                                                                curve: 'monotoneX',
                                                            },
                                                        ]}
                                                        margin={{
                                                            top: 10,
                                                            right: 12,
                                                            bottom: 24,
                                                            left: 12,
                                                        }}
                                                        grid={{ horizontal: true }}
                                                        sx={{
                                                            '& .MuiLineElement-root': {
                                                                strokeWidth: 3,
                                                            },
                                                            '& .MuiAreaElement-root': {
                                                                opacity: 0.14,
                                                            },
                                                            '& .MuiChartsAxis-line': {
                                                                display: 'none',
                                                            },
                                                            '& .MuiChartsAxis-tick': {
                                                                display: 'none',
                                                            },
                                                            '& .MuiChartsGrid-line': {
                                                                strokeDasharray: '4 4',
                                                                opacity: 0.35,
                                                            },
                                                            '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
                                                                fill: 'text.secondary',
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Stack>

                                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                                {[
                                                    ['Sample Properties', '18'],
                                                    ['Sample Organizations', '6'],
                                                    ['Example Alerts', '24'],
                                                ].map(([label, value]) => (
                                                    <Paper
                                                        key={label}
                                                        variant="outlined"
                                                        sx={{
                                                            flex: 1,
                                                            p: 2,
                                                            bgcolor: 'background.paper',
                                                            borderRadius: 3,
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="caption"
                                                            color="text.secondary"
                                                        >
                                                            {label}
                                                        </Typography>
                                                        <Typography variant="h5" sx={{ mt: 0.5 }}>
                                                            {value}
                                                        </Typography>
                                                    </Paper>
                                                ))}
                                            </Stack>

                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ display: 'block' }}
                                            >
                                                Preview uses illustrative sample data for product
                                                showcase purposes.
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </Stack>
                            </Paper>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}