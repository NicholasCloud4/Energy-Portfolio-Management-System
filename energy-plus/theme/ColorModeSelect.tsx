// Dropdown component for selecting the app’s color theme.
// Uses MUI’s useColorScheme hook to read and update the current mode.
// Allows the user to switch between system, light, and dark themes.
// When a new option is selected, the theme mode is updated across the app.

import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      SelectDisplayProps={{
        // @ts-ignore
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
