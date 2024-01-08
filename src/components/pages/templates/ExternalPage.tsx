import React from 'react';
import { Grid, Paper } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

const Margin: React.FC = () => {
    return (
        <Grid
            item
            xs={3}
            sx={{
                borderRadius: '0',
            }}
        />
    );
};

export const ExternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Grid container>
            <Margin />
            <Grid item xs={6} alignContent="center">
                <Paper elevation={0} sx={{ borderRadius: '15px' }}>
                    {props.children}
                </Paper>
            </Grid>
            <Margin />
        </Grid>
    );
};
