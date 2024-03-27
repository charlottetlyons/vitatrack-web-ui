import React from 'react';

export type AuthenticationContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthenticationContext = React.createContext<
    AuthenticationContextType | undefined
>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});
