'use client';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { usePathname } from 'next/navigation';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const pathname = usePathname() || '/dashboard/home';

  // Default /dashboard to /dashboard/home
  const path = pathname === '/dashboard' ? '/dashboard/home' : pathname;

  const pathParts = path.split('/').filter(Boolean); // removes empty strings

  const breadcrumbs = pathParts.map((part, index) => {
    const label = part.charAt(0).toUpperCase() + part.slice(1);
    return (
        <Typography
            key={index}
            variant="body1"
            sx={{
              color: index === pathParts.length - 1 ? 'text.primary' : 'text.secondary',
              fontWeight: index === pathParts.length - 1 ? 600 : 400,
            }}
        >
          {label}
        </Typography>
    );
  });

  return (
      <StyledBreadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextRoundedIcon fontSize="small" />}
      >
        {breadcrumbs}
      </StyledBreadcrumbs>
  );
}
