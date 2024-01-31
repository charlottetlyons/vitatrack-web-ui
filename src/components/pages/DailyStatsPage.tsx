import { Grid } from '@mui/material';
import React from 'react';
import DailyStatsSection from '../stats/DailyStatsSection';
import DailyMetrics from '../stats/DailyMetrics';

const DailyStatsPage: React.FC = () => {
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
            <Grid item>
                <DailyStatsSection>January 1st, 2024</DailyStatsSection>
            </Grid>
            <Grid item container columnSpacing={2}>
                <Grid item xs={4}>
                    <DailyStatsSection>Add Food Inputs</DailyStatsSection>
                </Grid>
                <Grid item xs={8}>
                    <DailyMetrics />
                </Grid>
            </Grid>
            <Grid item>
                <DailyStatsSection>Log</DailyStatsSection>
            </Grid>
        </Grid>
    );
};

export default DailyStatsPage;
