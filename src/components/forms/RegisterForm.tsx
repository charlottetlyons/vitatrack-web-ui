import React from 'react';
import { Grid, Typography } from '@mui/material';
import TextInput from '../inputs/TextInput';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import HttpClient from '../HttpClient';

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit: () => void = async () => {
        const formBody = {
            firstName: 'John',
            lastName: 'Doe',
            email: '',
            password: '',
            phoneNumber: '',
        };
        // RegisterFormValidator.validate(formBody);
        HttpClient.post('http://localhost:3000/user/register', formBody);
    };

    return (
        <Form>
            <Grid item alignContent="center">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
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
                    width: '80%',
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
                direction="row"
                justifyContent="space-evenly"
                sx={{ padding: '10px' }}
            >
                <PrimaryButton text="Register" onClick={handleSubmit} />
                <SecondaryButton
                    text="Cancel"
                    onClick={() => navigate('/vitatrack/external/login')}
                />
            </Grid>
        </Form>
    );
};

export default RegisterForm;
