import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from '@mui/material/styles/styled';

const DailyStatsPage: React.FC = () => {
    const StyledPaper = styled(Paper)`
        border-radius: 10px;
    `;

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
                <StyledPaper>
                    <Typography variant="h2">January 1st, 2024</Typography>
                </StyledPaper>
            </Grid>
            <Grid item container columnSpacing={2}>
                <Grid item xs={4}>
                    <StyledPaper>
                        <Typography variant="h2">Add Food Inputs</Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={8}>
                    <StyledPaper>
                        <Typography variant="h2">Daily Metrics</Typography>
                    </StyledPaper>
                </Grid>
            </Grid>
            <Grid item>
                <StyledPaper>
                    <Typography variant="h2" sx={{ height: '100%' }}>
                        Log
                    </Typography>
                </StyledPaper>
            </Grid>
        </Grid>
    );
};

export default DailyStatsPage;
