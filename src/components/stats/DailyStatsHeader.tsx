import { Grid, Typography, styled } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FloatingActionButton from '../buttons/FloatingActionButton';
import MenuButton from '../buttons/MenuButton';

const StyledKeyboardArrowLeftIcon = styled(KeyboardArrowLeftIcon)(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
    }),
);

const StyledKeyboardArrowRightIcon = styled(KeyboardArrowRightIcon)(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
    }),
);

const DailyStatsHeader: React.FC = () => {
    return (
        <Grid container item justifyContent="space-between" alignItems="center">
            <Grid item>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <FloatingActionButton
                        size="small"
                        styleOverride={{
                            backgroundColor: 'transparent',
                        }}
                    >
                        <StyledKeyboardArrowLeftIcon />
                    </FloatingActionButton>
                    <Typography variant="h2" component="span">
                        January 1st, 2024
                    </Typography>
                    <FloatingActionButton
                        size="small"
                        styleOverride={{
                            backgroundColor: 'transparent',
                        }}
                    >
                        <StyledKeyboardArrowRightIcon />
                    </FloatingActionButton>
                </Grid>
            </Grid>
            <Grid item padding={3}>
                <MenuButton />
            </Grid>
        </Grid>
    );
};

export default DailyStatsHeader;
