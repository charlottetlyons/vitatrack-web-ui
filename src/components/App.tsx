import {
    type ThemeOptions,
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';
import { CssBaseline, Paper, Typography } from '@mui/material';
import React from 'react';

const App: React.FC = () => {
    const defaultTheme: ThemeOptions = {
        palette: {
            text: {
                primary: '#D9D7CF',
            },
            background: {
                default: '#D9D7CF',
                paper: '#A1AC78',
            },
        },

        typography: {
            fontWeightRegular: 400,
            fontFamily: [
                'Inria Serif, Times New Roman, serif',
                'Livvic, Arial, sans-serif',
            ].join(','),
            h1: {
                fontFamily: 'Inria Serif',
                color: '#D9D7CF',
                fontSize: '102px',
            },
            h2: {
                fontFamily: 'Inria Serif',
                color: '#D9D7CF',
                fontSize: '72px',
            },
            subtitle1: {
                fontFamily: 'Inria Serif',
                color: '#D4E38F',
                fontSize: '30px',
            },
            body1: {
                fontFamily: 'Livvic',
                color: '#382A2E',
                fontSize: '16px',
            },
            body2: {
                fontFamily: 'Livvic',
                color: '#A6A295',
                fontSize: '30px',
            },
            button: {
                fontFamily: 'Livvic',
                color: '#D9D7CF',
                fontSize: '16px',
            },
        },
    };

    const customTheme = createTheme(defaultTheme);

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Paper elevation={0}>
                <Typography variant="h1">VitaTrack</Typography>
                <Typography variant="h2">Login</Typography>
                <Typography variant="subtitle1">Track your Life</Typography>
                <Typography variant="body1">Content</Typography>
                <Typography variant="body2">Placeholder Text</Typography>
                <Typography variant="button">Login</Typography>
            </Paper>
        </ThemeProvider>
    );
};

export default App;
