import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { Layout } from './Layout';
import defaultTheme from '../themes/DefaultTheme';
import RegisterPage from './pages/RegisterPage';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const PasswordPage = React.lazy(() => import('./pages/PasswordPage'));

const App: React.FC = () => {
    const router = createBrowserRouter([
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
                    path: 'register',
                    element: <RegisterPage />,
                },
                {
                    path: 'reset-password',
                    element: <PasswordPage />,
                },
                {
                    path: '*',
                    element: <ErrorPage />,
                },
            ],
        },
    ]);

    const customTheme = createTheme(defaultTheme);

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    );
};

export default App;
