import { TableRow, TableCell, Divider, Typography } from '@mui/material';
import React from 'react';
import { Intake } from './FoodLog';

type RowProps = {
    key: number;
    intake: Intake;
};

const FoodLogRow: React.FC<RowProps> = (props: RowProps) => {
    return (
        <>
            <TableRow key={props.key}>
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
            </TableRow>
        </>
    );
};

export default FoodLogRow;
