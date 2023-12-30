import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExternalPage } from './templates/ExternalPage';

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
        </ExternalPage>
    );
};

export default LoginPage;
