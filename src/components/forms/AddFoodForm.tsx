import { Dialog, Grid } from '@mui/material';
import React from 'react';

const AddFoodForm: React.FC = () => {
    return (
        <Dialog open={true}>
            <Grid container>Food go in mouth</Grid>
        </Dialog>
    );
};

export default AddFoodForm;
