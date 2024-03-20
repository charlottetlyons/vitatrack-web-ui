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

type AddFoodFormProps = {
    setShowAddFoodForm: (show: boolean) => void;
};

const AddFoodForm: React.FC<AddFoodFormProps> = (props: AddFoodFormProps) => {
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
                    <Grid item container justifyContent="space-evenly">
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
                    </Grid>
                    <Grid item container justifyContent="center" padding={2}>
                        <SecondaryButton text="Add Image" />
                    </Grid>
                </Grid>
                <Grid item>
                    <PrimaryButton
                        text="Add"
                        onClick={() => props.setShowAddFoodForm(false)}
                    />
                    <SecondaryButton
                        text="Cancel"
                        onClick={() => props.setShowAddFoodForm(false)}
                    />
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default AddFoodForm;
