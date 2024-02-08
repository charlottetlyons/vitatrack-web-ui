import React from 'react';
import DailyStatsSection from './DailyStatsSection';
import { Paper, styled } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '10px',
    borderRadius: '10px',
}));

const FoodLog: React.FC = () => {
    return (
        <DailyStatsSection sx={{ height: '100%' }}>
            <StyledPaper>Log</StyledPaper>
        </DailyStatsSection>
    );
};

export default FoodLog;
