import React from 'react';
import { Grid } from '@mui/material';
import { ExternalPage } from './templates/ExternalPage';
import LoginForm from '../forms/LoginForm';
import Logo from '../Logo';

const LoginPage: React.FC = () => {
    return (
        <ExternalPage>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignContent="center"
                sx={{ margin: 'auto' }}
            >
                <Logo />
                <LoginForm />
            </Grid>
        </ExternalPage>
    );
};

export default LoginPage;
