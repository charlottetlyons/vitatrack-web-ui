import React from 'react';
import { Grid } from '@mui/material';
import DailyStatsSection from '../stats/DailyStatsSection';
import DropDownTextInput from '../inputs/DropDownTextInput';
import TextInput from '../inputs/TextInput';

const AddIntakeForm: React.FC = () => {
    return (
        <DailyStatsSection>
            <Grid container direction="row" padding={1}>
                <Grid item xs={8}>
                    <DropDownTextInput />
                </Grid>
                <Grid item xs={4}>
                    <TextInput placeholderText="Quantity" />
                </Grid>
            </Grid>
        </DailyStatsSection>
    );
};

export default AddIntakeForm;
