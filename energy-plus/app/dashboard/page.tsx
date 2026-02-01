'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppAppBar from '../global-components/AppAppBar';
import Dashboard from './Dashboard';

export default function Page() {
  return (
      <>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Box sx={{ p: 2 }}>
          <Dashboard disableCustomTheme={false} />
        </Box>
      </>
  );
}
