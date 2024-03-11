import React, { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import DailyStatsSection from '../stats/DailyStatsSection';
import DropDownTextInput from '../inputs/DropDownTextInput';
import TextInput from '../inputs/TextInput';
import AddIntakeButton from '../buttons/AddIntakeButton';
import AddFoodForm from './AddFoodForm';

const AddIntakeForm: React.FC = () => {
    const [showAddFoodForm, setShowAddFoodForm] = useState(false);

    const handleAddFoodButton = useCallback((): void => {
        setShowAddFoodForm(true);
    }, [setShowAddFoodForm]);

    return (
        <DailyStatsSection
            sx={{
                display: 'flex',
                height: '100%',
                alignItems: 'center',
            }}
        >
            {showAddFoodForm && <AddFoodForm />}
            <Grid
                container
                direction={'row'}
                spacing={1}
                alignContent="center"
                height={1}
            >
                <Grid item xs={6}>
                    <DropDownTextInput
                        options={['Banana', 'Grapes', 'Ears']}
                        onAdornmentClick={handleAddFoodButton}
                    />
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
                        justifyContent: 'center',
                    }}
                >
                    <AddIntakeButton />
                </Grid>
            </Grid>
        </DailyStatsSection>
    );
};

export default AddIntakeForm;
