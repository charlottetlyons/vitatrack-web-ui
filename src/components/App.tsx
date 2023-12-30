import {
    type ThemeOptions,
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import {
    Navigate,
    Router,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { Layout } from './Layout';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const App: React.FC = () => {
    const router: Router = createBrowserRouter([
        {
            path: '*',
            element: <Navigate to="/vitatrack/login" replace={true} />,
        },
        {
            path: '/vitatrack',
            element: <Layout />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />,
                },
                {
                    path: '*',
                    element: <ErrorPage />,
                },
            ],
        },
    ]);

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
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    );
};

export default App;
