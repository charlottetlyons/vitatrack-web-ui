import {
    TableRow,
    TableCell,
    Typography,
    styled,
    Grid,
    Box,
} from '@mui/material';
import React from 'react';
import { Intake } from './FoodLog';
import DeleteEditButtonGroup from './FoodLogRowEditButtonGroup';

type RowProps = {
    key: number;
    intake: Intake;
};

const StyledFoodLogRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: '10px solid black',
    border: 0,
    '&.MuiTableRow-hover:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const FoodLogRow: React.FC<RowProps> = (props: RowProps) => {
    return (
        <StyledFoodLogRow key={props.key} hover>
            <TableCell>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                >
                    <Grid container item xs={3} justifyContent="flex-start">
                        <DeleteEditButtonGroup />
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            component="img"
                            src={props.intake.imageSrc}
                            sx={{
                                width: '90%',
                                height: '60px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body2">
                            {props.intake.name}
                        </Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{props.intake.quantity}</Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body1">
                    {props.intake.calories} cal
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{props.intake.protein}g</Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{props.intake.carbs}g</Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{props.intake.fat}g</Typography>
            </TableCell>
        </StyledFoodLogRow>
    );
};

export default FoodLogRow;
