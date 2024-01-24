import React from 'react';
import Form from './Form';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import TextInput from '../inputs/TextInput';

const ResetPasswordForm: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Form>
            <Grid container item direction="column" alignContent="center">
                <Grid item alignContent="center">
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            fontSize: '36px',
                        }}
                    >
                        Reset Password
                    </Typography>
                </Grid>
                <Grid item>
                    <TextInput placeholderText="Email Address" />
                </Grid>
                <Grid item sx={{ textAlign: 'center', margin: '10px 0' }}>
                    <PrimaryButton text="Confirm" />
                    <SecondaryButton
                        text="Cancel"
                        onClick={() => navigate('/vitatrack/login')}
                    />
                </Grid>
            </Grid>
        </Form>
    );
};

export default ResetPasswordForm;
