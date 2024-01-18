import React from 'react';
import { Container, Paper } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

export const ExternalPage: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Container
            sx={{
                width: '30%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-52.5%)',
            }}
        >
            <Paper elevation={0} sx={{ borderRadius: '15px' }}>
                {props.children}
            </Paper>
        </Container>
    );
};
