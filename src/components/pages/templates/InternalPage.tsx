import React from 'react';
import { PageProps } from '../../../types/PageTypes';
import { Grid } from '@mui/material';

export const InternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Grid
            container
            direction="column"
            rowSpacing={2}
            sx={{
                width: '98.5%',
                margin: 'auto',
            }}
        >
            {props.children}
        </Grid>
    );
};
