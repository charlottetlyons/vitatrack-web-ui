import { Paper, styled } from '@mui/material';
import React from 'react';

type DailyStatsSectionProps = {
    children?: React.ReactNode;
    sx?: object;
};

const StyledPaper = styled(Paper)`
    border-radius: 10px;
    text-wrap: nowrap;
    padding: 15px;
`;

const DailyStatsSection: React.FC<DailyStatsSectionProps> = (
    props: DailyStatsSectionProps,
) => {
    return (
        <StyledPaper sx={props.sx} elevation={0}>
            {props.children}
        </StyledPaper>
    );
};

export default DailyStatsSection;
