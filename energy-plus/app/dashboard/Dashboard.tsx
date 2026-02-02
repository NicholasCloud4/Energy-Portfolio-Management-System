import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import AppTheme from '../../theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';
import {Theme} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
        <AppNavbar />
        <Box sx={{ display: 'flex' }}>
            <Box>
                <Toolbar />
                <SideMenu />
            </Box>
            <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Toolbar /> {/* <-- pushes main content below AppBar */}
                <Stack spacing={2} sx={{ alignItems: 'center', mx: 3, pb: 5 }}>
                    <Header />
                                    </Stack>
            </Box>
        </Box>
    </AppTheme>
  );
}
