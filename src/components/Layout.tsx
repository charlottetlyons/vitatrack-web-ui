import React, { Suspense } from 'react';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <Paper elevation={0}>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Paper>
    );
};
