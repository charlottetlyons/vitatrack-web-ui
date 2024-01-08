import React from 'react';
import { Grid, Typography } from '@mui/material';
import TextInput from '../inputs/TextInput';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const LoginForm: React.FC = () => {
    return (
        <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container item direction="column" alignContent="center">
                <Typography variant="h2">Login</Typography>
                <TextInput placeholderText="Email Address" />
                <TextInput placeholderText="Password" />
            </Grid>
            <Grid item>
                <PrimaryButton text="Login" />
                <SecondaryButton text="Register" />
            </Grid>
        </Grid>
    );
};

export default LoginForm;
