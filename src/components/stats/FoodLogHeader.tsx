import {
    TableHead,
    TableRow,
    TableCell,
    Typography,
    styled,
} from '@mui/material';
import React from 'react';

const StyledFoodLogHeader = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: '2px solid black',
}));

const FoodLogHeader: React.FC = () => {
    return (
        <StyledFoodLogHeader>
            <TableRow>
                <TableCell>
                    <Typography variant="body2">Food</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2">Quantity</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2">Calories</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2">Protein</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2">Carbs</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2">Fat</Typography>
                </TableCell>
            </TableRow>
        </StyledFoodLogHeader>
    );
};

export default FoodLogHeader;
