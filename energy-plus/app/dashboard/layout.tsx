'use client';

import { CssBaseline, Box, Toolbar } from '@mui/material';
import AppAppBar from '../global-components/AppAppBar';
import SideMenu from './components/SideMenu';
import AppTheme from '../../theme/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations
} from './theme/customizations';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppTheme themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Toolbar />
                    <SideMenu />
                </Box>
                <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <Toolbar />
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </AppTheme>
    );
}
