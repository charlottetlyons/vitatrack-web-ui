import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import TextInput from '../inputs/TextInput';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Form>
            <Grid container item direction="column" alignContent="center">
                <Grid item>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            marginBottom: '10px',
                        }}
                    >
                        Login
                    </Typography>
                </Grid>
                <Grid item>
                    <TextInput placeholderText="Email Address" />
                    <TextInput placeholderText="Password" />
                </Grid>
                <Grid item sx={{ textAlign: 'center', margin: '10px 0' }}>
                    <PrimaryButton text="Login" />
                    <SecondaryButton
                        text="Register"
                        onClick={() => navigate('/vitatrack/register')}
                    />
                </Grid>
                <Grid item sx={{ textAlign: 'center' }}>
                    <Link href="/reset-password">Forgot Password?</Link>
                </Grid>
            </Grid>
        </Form>
    );
};

export default LoginForm;
