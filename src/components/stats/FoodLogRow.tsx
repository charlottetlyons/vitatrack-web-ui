import { TableRow, TableCell, Typography, styled } from '@mui/material';
import React from 'react';
import { Intake } from './FoodLog';

type RowProps = {
    key: number;
    intake: Intake;
};

const StyledFoodLogRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: '10px solid black',
    border: 0,
}));

const FoodLogRow: React.FC<RowProps> = (props: RowProps) => {
    return (
        <>
            <StyledFoodLogRow key={props.key} hover>
                <TableCell>
                    <Typography variant="body1">{props.intake.name}</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">
                        {props.intake.quantity}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">
                        {props.intake.calories}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">
                        {props.intake.protein}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">
                        {props.intake.carbs}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">{props.intake.fat}</Typography>
                </TableCell>
            </StyledFoodLogRow>
        </>
    );
};

export default FoodLogRow;
