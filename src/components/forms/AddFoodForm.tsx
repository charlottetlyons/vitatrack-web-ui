import {
    Dialog,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import React from 'react';
import TextInput from '../inputs/TextInput';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const AddFoodForm: React.FC = () => {
    return (
        <Dialog open={true}>
            <Grid container direction="column" alignItems="center" padding={5}>
                <Grid item>
                    <Typography variant="h2">Add Food</Typography>
                </Grid>
                <Grid item>
                    <TextInput placeholderText="Name" />
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <TextInput placeholderText="Serving Size" />
                        </Grid>
                        <Grid item>
                            <TextInput placeholderText="Metric" />
                        </Grid>
                    </Grid>

                    <TextInput placeholderText="Calories" />
                    <TextInput placeholderText="Protein" />
                    <TextInput placeholderText="Carbs" />
                    <TextInput placeholderText="Fat" />
                    <RadioGroup row>
                        <FormControlLabel
                            value="private"
                            control={<Radio />}
                            label="Private"
                        />
                        <FormControlLabel
                            value="public"
                            control={<Radio />}
                            label="Public"
                        />
                    </RadioGroup>
                    <SecondaryButton text="Add Image" />
                </Grid>
                <Grid item>
                    <PrimaryButton text="Add" />
                    <SecondaryButton text="Cancel" />
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default AddFoodForm;
