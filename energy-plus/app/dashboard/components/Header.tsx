import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../../theme/ColorModeIconDropdown';

import Search from './Search';
import React from "react";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
          <MenuButton
              component={IconButton}
              aria-label="Open notifications"
          >
              <NotificationsIcon />
          </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
