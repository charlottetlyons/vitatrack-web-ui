import { Grid } from '@mui/material';
import React from 'react';
import DailyStatsSection from '../stats/DailyStatsSection';
import DailyMetrics from '../stats/DailyMetrics';
import AddIntakeForm from '../forms/AddIntakeForm';
import FoodLog from '../stats/FoodLog';
import DailyStatsHeader from '../stats/DailyStatsHeader';
import { InternalPage } from './templates/InternalPage';

const DailyStatsPage: React.FC = () => {
    return (
        <InternalPage>
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
                    <DailyStatsSection>
                        <DailyStatsHeader />
                    </DailyStatsSection>
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
        </InternalPage>
    );
};

export default DailyStatsPage;
