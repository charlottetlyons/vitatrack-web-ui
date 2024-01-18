import React from 'react';
import { Grid } from '@mui/material';
import { ExternalPage } from './templates/ExternalPage';
import RegisterForm from '../forms/RegisterForm';

const RegisterPage: React.FC = () => {
    return (
        <ExternalPage>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignContent="center"
            >
                <RegisterForm />
            </Grid>
        </ExternalPage>
    );
};

export default RegisterPage;
