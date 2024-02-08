import { Grid } from '@mui/material';
import React from 'react';
import DailyStatsSection from '../stats/DailyStatsSection';
import DailyMetrics from '../stats/DailyMetrics';
import AddIntakeForm from '../forms/AddIntakeForm';
import FoodLog from '../stats/FoodLog';

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
                    <AddIntakeForm />
                </Grid>
                <Grid item xs={8}>
                    <DailyMetrics />
                </Grid>
            </Grid>
            <Grid item>
                <FoodLog />
            </Grid>
        </Grid>
    );
};

export default DailyStatsPage;
