import React from 'react';
import { Paper, Typography } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

export const InternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Paper elevation={0}>
            <Typography variant="h2">Internal</Typography>
            {props.children}
        </Paper>
    );
};
