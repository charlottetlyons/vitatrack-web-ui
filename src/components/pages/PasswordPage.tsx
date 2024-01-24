import { Grid } from '@mui/material';
import React from 'react';
import { ExternalPage } from './templates/ExternalPage';
import ResetPasswordForm from '../forms/ResetPasswordForm';

const PasswordPage: React.FC = () => {
    return (
        <ExternalPage>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignContent="center"
            >
                <ResetPasswordForm />
            </Grid>
        </ExternalPage>
    );
};

export default PasswordPage;
