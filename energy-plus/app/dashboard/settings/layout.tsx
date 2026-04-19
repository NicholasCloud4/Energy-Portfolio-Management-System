'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import UpdateProfile from './Components/UpdateProfile';
import ChangePassword from './Components/ChangePassword';

export default function ProfileSettings() {
    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                Profile Settings
            </Typography>

            <UpdateProfile />

            <ChangePassword />
        </Box>
    );
}