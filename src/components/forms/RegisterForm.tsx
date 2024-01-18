import React from 'react';
import { Grid, Typography } from '@mui/material';
import TextInput from '../inputs/TextInput';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginBottom="30px"
            width="50%"
        >
            <Grid item alignContent="center">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        top: '50%',
                        margin: '25px',
                    }}
                >
                    Register
                </Typography>
            </Grid>
            <Grid
                container
                item
                direction="column"
                alignContent="center"
                sx={{
                    width: '100%',
                }}
            >
                <TextInput placeholderText="First Name" />
                <TextInput placeholderText="Last Name" />
                <TextInput placeholderText="Email Address" />
                <TextInput placeholderText="Password" />
                <TextInput placeholderText="Confirm Password" />
                <TextInput placeholderText="Phone Number" />
            </Grid>
            <Grid
                item
                container
                justifyContent="space-evenly"
                sx={{ padding: '15px' }}
            >
                <PrimaryButton text="Register" />
                <SecondaryButton
                    text="Cancel"
                    onClick={() => navigate('/vitatrack/login')}
                />
            </Grid>
        </Grid>
    );
};

export default RegisterForm;
