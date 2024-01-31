import { Paper, Typography, styled } from '@mui/material';
import React from 'react';

type DailyStatsSectionProps = {
    children?: React.ReactNode;
};

const StyledPaper = styled(Paper)`
    border-radius: 10px;
    text-wrap: nowrap;
    height: 100%;
`;

const DailyStatsSection: React.FC<DailyStatsSectionProps> = (
    props: DailyStatsSectionProps,
) => {
    return (
        <StyledPaper>
            <Typography variant="h2">{props.children}</Typography>
        </StyledPaper>
    );
};

export default DailyStatsSection;
