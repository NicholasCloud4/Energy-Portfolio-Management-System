'use client';

import Stack from '@mui/material/Stack';
import CustomDatePicker from './CustomDatePicker';
import Search from './Search';
import React from "react";

export default function Header() {
    return (
        <Stack
            direction="row"
            sx={{
                display: { xs: 'none', md: 'flex' },
                width: '100%',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'flex-end',
                maxWidth: { sm: '100%', md: '1700px' },
                pt: 1.5,
            }}
            spacing={2}
        >
            <Stack direction="row" sx={{ gap: 1 }}>
                <Search />
                <CustomDatePicker />
            </Stack>
        </Stack>
    );
}