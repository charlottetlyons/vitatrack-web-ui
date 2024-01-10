import React from 'react';
import { Container, Paper } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

export const ExternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Container>
            <Paper elevation={0} sx={{ borderRadius: '15px' }}>
                {props.children}
            </Paper>
        </Container>
    );
};
