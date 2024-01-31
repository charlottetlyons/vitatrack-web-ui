import React from 'react';
import { Grid, Typography } from '@mui/material';

const Logo: React.FC = () => {
    return (
        <Grid item container direction="column" justifyContent="center">
            <Typography variant="h1">VitaTrack</Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    letterSpacing: '15px',
                    transform: 'translate(10px, -25px)',
                }}
            >
                Track your Life
            </Typography>
        </Grid>
    );
};

export default Logo;
