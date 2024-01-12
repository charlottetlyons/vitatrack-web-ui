import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
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
            marginBottom="30px"
        >
            <Grid container item direction="column" alignContent="center">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        top: '50%',
                        transform: 'translate(0, -10px)',
                        padding: '0 10px',
                    }}
                >
                    Login
                </Typography>
                <TextInput placeholderText="Email Address" />
                <TextInput placeholderText="Password" />
                <Grid item sx={{ margin: '10px 0' }}>
                    <PrimaryButton text="Login" />
                    <SecondaryButton text="Register" />
                </Grid>
                <Grid item sx={{ textAlign: 'center' }}>
                    <Link href="/reset-password">Forgot Password?</Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LoginForm;
