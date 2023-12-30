import React from 'react';
import { Paper, Typography } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

export const ExternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Paper elevation={0}>
            <Typography variant="h2">External</Typography>
            {props.children}
        </Paper>
    );
};
