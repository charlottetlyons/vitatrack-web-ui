import React from 'react';
import { Grid } from '@mui/material';
import DailyStatsSection from '../stats/DailyStatsSection';
import DropDownTextInput from '../inputs/DropDownTextInput';
import TextInput from '../inputs/TextInput';
import AddIntakeButton from '../buttons/AddIntakeButton';

const AddIntakeForm: React.FC = () => {
    return (
        <DailyStatsSection>
            <Grid container direction="row" padding={1}>
                <Grid item xs={6}>
                    <DropDownTextInput />
                </Grid>
                <Grid item xs={4}>
                    <TextInput placeholderText="Quantity" />
                </Grid>
                <Grid item xs={2}>
                    <AddIntakeButton />
                </Grid>
            </Grid>
        </DailyStatsSection>
    );
};

export default AddIntakeForm;
