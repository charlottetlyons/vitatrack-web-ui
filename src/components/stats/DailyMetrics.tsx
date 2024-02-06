import React from 'react';
import DailyStatsSection from './DailyStatsSection';
import { Grid, Typography } from '@mui/material';

const DailyMetrics: React.FC = () => {
    return (
        <DailyStatsSection>
            <Grid container direction="row" padding={1}>
                <Grid
                    item
                    container
                    xs={3}
                    direction="column"
                    justifyContent="center"
                >
                    <Typography variant="h3" align="center">
                        Calories
                    </Typography>
                    <Typography variant="h4" align="center">
                        100
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    direction="column"
                    justifyContent="center"
                >
                    <Typography variant="h3" align="center">
                        Protein
                    </Typography>
                    <Typography variant="h4" align="center">
                        100
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    direction="column"
                    justifyContent="center"
                >
                    <Typography variant="h3" align="center">
                        Carbs
                    </Typography>
                    <Typography variant="h4" align="center">
                        100
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    direction="column"
                    justifyContent="center"
                >
                    <Typography variant="h3" align="center">
                        Fat
                    </Typography>
                    <Typography variant="h4" align="center">
                        100
                    </Typography>
                </Grid>
            </Grid>
        </DailyStatsSection>
    );
};

export default DailyMetrics;
