import React from 'react';
import DailyStatsSection from './DailyStatsSection';
import {
    Paper,
    Table,
    styled,
} from '@mui/material';
import FoodLogHeader from './FoodLogHeader';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '10px',
    borderRadius: '10px',
}));

const FoodLog: React.FC = () => {
    return (
        <DailyStatsSection sx={{ height: '100%' }}>
            <StyledPaper>
                <Table>
                    <FoodLogHeader />
                </Table>
            </StyledPaper>
        </DailyStatsSection>
    );
};

export default FoodLog;
