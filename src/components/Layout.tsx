import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { Outlet, useLocation, Location } from 'react-router-dom';
import { externalTheme, internalTheme } from '../themes/Themes';

export const Layout: React.FC = () => {
    const location: Location = useLocation();
    const theme = createTheme(
        location.pathname.includes('internal') ? internalTheme : externalTheme,
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ backgroundColor: 'transparent' }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Box>
        </ThemeProvider>
    );
};
