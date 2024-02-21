import { Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';

const DailyStatsHeader: React.FC = () => {
    return (
        <Grid item container>
            <Grid
                item
                container
                direction="row"
                alignItems="center"
                justifyItems="center"
                xs={4}
            >
                <Grid item xs={2}>
                    <KeyboardArrowLeftIcon />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h2">
                        January 1st, 2024
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <KeyboardArrowRightIcon />
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={8}
                alignContent="center"
                justifyContent="flex-end"
                padding={3}
            >
                <MenuIcon />
            </Grid>
        </Grid>
    );
};

export default DailyStatsHeader;
