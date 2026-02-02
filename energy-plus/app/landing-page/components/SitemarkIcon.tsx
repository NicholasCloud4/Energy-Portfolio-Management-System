'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
      <Box
          sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Inter', 'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: 'text.primary',
              letterSpacing: 0.5,
          }}
      >
          energy+
      </Box>
  );
}
