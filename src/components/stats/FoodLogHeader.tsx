import { TableHead, TableRow, TableCell, Typography } from '@mui/material';
import React from 'react';

const FoodLogHeader: React.FC = () => {
    return (
        <TableHead>
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
        </TableHead>
    );
};

export default FoodLogHeader;
