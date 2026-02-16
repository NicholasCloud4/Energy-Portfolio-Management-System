'use client';
import { useRouter, usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function MenuContent() {
    const router = useRouter();
    const pathname = usePathname();

    const mainListItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/dashboard/home' },
        { text: 'Profile', icon: <PersonIcon />, path: '/dashboard/profile' },
        { text: 'Users', icon: <PeopleIcon />, path: '/dashboard/users' },
        { text: 'Analytics', icon: <AnalyticsIcon />, path: '/dashboard/analytics' },
    ];

    const secondaryListItems = [
        { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/dashboard/settings' },
    ];

    const isSelected = (itemPath: string) => pathname === itemPath;

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
