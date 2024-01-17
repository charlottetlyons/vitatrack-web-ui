import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: 'transparent' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Box>
    );
};
