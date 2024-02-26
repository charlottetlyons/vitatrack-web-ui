import { Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';

const DailyStatsHeader: React.FC = () => {
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <KeyboardArrowLeftIcon fontSize="large" />
                    <Typography variant="h2" component="span">
                        January 1st, 2024
                    </Typography>
                    <KeyboardArrowRightIcon fontSize="large" />
                </Grid>
            </Grid>
            <Grid item padding={3}>
                <MenuIcon fontSize="large" />
            </Grid>
        </Grid>
    );
};

export default DailyStatsHeader;
