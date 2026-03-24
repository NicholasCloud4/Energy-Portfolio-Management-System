'use client';

import Grid from '@mui/material/Grid';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import { Box, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export function FeatureSection() {
  const features = [
    {
      icon: <StorageRoundedIcon color="primary" />,
      title: 'Property management',
      description:
          'Manage multiple buildings and properties from a single interface designed for teams and administrators.',
    },
    {
      icon: <InsightsRoundedIcon color="primary" />,
      title: 'Energy analytics',
      description:
          'Visualize consumption trends over time and quickly identify spikes, inefficiencies, or anomalies.',
    },
    {
      icon: <SecurityRoundedIcon color="primary" />,
      title: 'Organization controls',
      description:
          'Assign roles, manage teams, and keep energy data organized across departments or organizations.',
    },
  ];

  return (
      <Box
          component="section"
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.paper',
          }}
      >
        <Container maxWidth="xl">
          <Stack spacing={6}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h2">
                Everything you need to monitor energy usage
              </Typography>

              <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 650, mx: 'auto' }}
              >
                EnergyPlus provides a clear platform for tracking energy data,
                analyzing trends, and coordinating across teams managing
                multiple properties.
              </Typography>
            </Stack>

            <Grid container spacing={4}>
              {features.map((feature) => (
                  <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
                    <Paper
                        elevation={1}
                        sx={{
                          p: 4,
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'divider',
                          bgcolor: 'background.default',
                        }}
                    >
                      <Stack spacing={2}>
                        {feature.icon}

                        <Typography variant="h5">
                          {feature.title}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                          {feature.description}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
  );
}