import React from 'react';
import { Grid } from '@mui/material';
import DailyStatsSection from '../stats/DailyStatsSection';
import DropDownTextInput from '../inputs/DropDownTextInput';
import TextInput from '../inputs/TextInput';
import AddIntakeButton from '../buttons/AddIntakeButton';

const AddIntakeForm: React.FC = () => {
    return (
        <DailyStatsSection
            sx={{
                height: '100%',
                alignItems: 'center',
            }}
        >
            <Grid
                container
                spacing={1}
                alignContent="center"
                justifyContent="space-between"
                height={1}
            >
                <Grid item xs={6}>
                    <DropDownTextInput />
                </Grid>
                <Grid item xs={4}>
                    <TextInput placeholderText="Quantity" />
                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <AddIntakeButton />
                </Grid>
            </Grid>
        </DailyStatsSection>
    );
};

export default AddIntakeForm;
