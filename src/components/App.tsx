import React from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { Layout } from './Layout';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const PasswordPage = React.lazy(() => import('./pages/PasswordPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const DailyStatsPage = React.lazy(() => import('./pages/DailyStatsPage'));

const App: React.FC = () => {
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
                    element: <LoginPage />,
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
                    element: <DailyStatsPage />,
                },
                {
                    path: '*',
                    element: <ErrorPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
