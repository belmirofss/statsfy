import React, { createContext, useState } from 'react';
import { Props } from '../interfaces/Props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpotifyApi from '../services/SpotifyApi';

interface AuthContextData {
    isAuthenticated: boolean;
    authenticate: Function;
    logout: Function;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(props: Props) {

    SpotifyApi.api.interceptors.response.use(
        response => response,
        async error => {
            if (error.response.status === 401) {
                logout();
            }
            return Promise.reject(error)
        }
    );

    const loadToken = async () => {
        const access_token = await AsyncStorage.getItem('@Statsfy:access_token');
        if (access_token ) {
          authenticate(access_token);
        }
    }

    const setToken = async (access_token: string) => {
        await AsyncStorage.setItem('@Statsfy:access_token', access_token);
    }

    const authenticate = async (accessToken: string) => {
        await setToken(accessToken);
        SpotifyApi.api.defaults.headers['Authorization'] = 'Bearer ' + accessToken;
        setIsAuthenticated(true);
    }

    const logout = () => {
        delete SpotifyApi.api.defaults.headers['Authorization'];
        AsyncStorage.clear().then(() => setIsAuthenticated(false));
    }

    React.useEffect(() => {
        loadToken();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticate, logout}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;