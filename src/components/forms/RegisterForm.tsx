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
        >
            <Grid container item direction="column" alignContent="center">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        top: '50%',
                        transform: 'translate(0, -10px)',
                        padding: '0 10px',
                        marginTop: '25px',
                    }}
                >
                    Register
                </Typography>
                <TextInput placeholderText="First Name" />
                <TextInput placeholderText="Last Name" />
                <TextInput placeholderText="Email Address" />
                <TextInput placeholderText="Password" />
                <TextInput placeholderText="Confirm Password" />
                <TextInput placeholderText="Phone Number" />
                <Grid item sx={{ margin: '10px 0' }}>
                    <PrimaryButton text="Register" />
                    <SecondaryButton
                        text="Cancel"
                        onClick={() => navigate('/vitatrack/login')}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RegisterForm;
