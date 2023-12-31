import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExternalPage } from './templates/ExternalPage';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import TextInput from '../inputs/TextInput';

const LoginPage: React.FC = () => {
    return (
        <ExternalPage>
            <Typography variant="h1">VitaTrack</Typography>
            <Typography variant="h2">Login</Typography>
            <Typography variant="subtitle1">Track your Life</Typography>
            <Typography variant="body1">Content</Typography>
            <Typography variant="body2">Placeholder Text</Typography>
            <Typography variant="button">Login</Typography>
            <Link to="/vitatrack/error">Forks</Link>
            <PrimaryButton text="Login" />
            <SecondaryButton text="Register" />
            <TextInput placeholderText="Email Address" />
        </ExternalPage>
    );
};

export default LoginPage;
