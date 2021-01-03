import React, { createContext, useState } from 'react';
import { Props } from '../interfaces/Props';

interface AuthContextData {
    isAuthenticated: boolean;
    authenticate: Function;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(props: Props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = () => {
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticate}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;