import React from 'react';
import FloatingActionButton from '../buttons/FloatingActionButton';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid/Grid';

const FoodLogRowEditButtonGroup: React.FC = () => {
    return (
        <Grid container item xs={3} justifyContent="flex-start">
            <FloatingActionButton
                size="small"
                styleOverride={{
                    backgroundColor: 'transparent',
                }}
            >
                <CloseIcon />
            </FloatingActionButton>
            <FloatingActionButton
                size="small"
                styleOverride={{
                    backgroundColor: 'transparent',
                }}
            >
                <ModeEditOutlineIcon />
            </FloatingActionButton>
        </Grid>
    );
};

export default FoodLogRowEditButtonGroup;
