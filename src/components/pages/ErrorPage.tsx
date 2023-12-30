import React from 'react';
import { Typography } from '@mui/material';
import { InternalPage } from './templates/InternalPage';

const ErrorPage: React.FC = () => {
    return (
        <InternalPage>
            <Typography variant="h1">Error 404</Typography>
        </InternalPage>
    );
};

export default ErrorPage;
