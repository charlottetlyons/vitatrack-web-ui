import React from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { Layout } from './Layout';
import { AuthenticationContext } from '../context/AuthenticationContext';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const PasswordPage = React.lazy(() => import('./pages/PasswordPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const DailyStatsPage = React.lazy(() => import('./pages/DailyStatsPage'));
const AccountDetailsPage = React.lazy(
    () => import('./pages/AccountDetailsPage'),
);

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] =
        React.useState<boolean>(false);

    const router = createBrowserRouter([
        {
            path: '*',
            element: <Navigate to="/vitatrack/external/login" replace={true} />,
        },
        {
            path: '/vitatrack',
            element: <Layout />,
            children: [
                {
                    path: 'external/login',
                    element: !isAuthenticated ? (
                        <LoginPage />
                    ) : (
                        <Navigate
                            to="/vitatrack/internal/daily-stats"
                            replace={true}
                        />
                    ),
                },
                {
                    path: 'external/register',
                    element: <RegisterPage />,
                },
                {
                    path: 'external/reset-password',
                    element: <PasswordPage />,
                },
                {
                    path: 'internal/daily-stats',
                    element: isAuthenticated ? (
                        <DailyStatsPage />
                    ) : (
                        <Navigate
                            to="/vitatrack/external/login"
                            replace={true}
                        />
                    ),
                },
                {
                    path: 'internal/account-details',
                    element: isAuthenticated ? (
                        <AccountDetailsPage />
                    ) : (
                        <Navigate
                            to="/vitatrack/external/login"
                            replace={true}
                        />
                    ),
                },
                {
                    path: '*',
                    element: <ErrorPage />,
                },
            ],
        },
    ]);

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: isAuthenticated,
                setIsAuthenticated: setIsAuthenticated,
            }}
        >
            <RouterProvider router={router}></RouterProvider>
        </AuthenticationContext.Provider>
    );
};

export default App;
