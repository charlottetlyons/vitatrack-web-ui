import React from 'react';
import { Container, Paper, SxProps, Theme } from '@mui/material';
import { PageProps } from '../../../types/PageTypes';

export const ExternalPage: React.FC<PageProps> = (props: PageProps) => {
    const containerStyle: SxProps<Theme> = (theme: Theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-52.5%)',
        width: '30%',
        [theme.breakpoints.down('lg')]: {
            width: '70%',
        },
    });

    return (
        <Container sx={containerStyle}>
            <Paper
                elevation={0}
                sx={{
                    borderRadius: '15px',
                    justifyContent: 'center',
                    padding: '20px 20px',
                }}
            >
                {props.children}
            </Paper>
        </Container>
    );
};
