import React, { createContext, useState } from 'react';
import { Props } from '../interfaces/Props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpotifyApi from '../services/SpotifyApi';
import { Alert } from 'react-native';

interface AuthContextData {
    isAuthenticated: boolean;
    authenticate: Function;
    logout: Function;
}

const ACCESS_TOKEN_KEY = '@Statsfy:access_token';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(props: Props) {

    SpotifyApi.api.interceptors.response.use(
        response => response,
        async error => {
            if (error.response.status === 401) {
                Alert.alert(
                    "Your session has expired!",
                    "To continue, please log in again",
                    [{ text: "OK", onPress: () => null }],
                    { cancelable: false }
                );

                logout();
            }
            return Promise.reject(error)
        }
    );

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = async (accessToken: string) => {
        const setToken = async (access_token: string) => {
            await AsyncStorage.setItem(ACCESS_TOKEN_KEY, access_token);
        }
        
        await setToken(accessToken);
        SpotifyApi.api.defaults.headers['Authorization'] = 'Bearer ' + accessToken;
        setIsAuthenticated(true);
    }

    const logout = () => {
        delete SpotifyApi.api.defaults.headers['Authorization'];
        AsyncStorage.clear().then(() => setIsAuthenticated(false));
    }

    React.useEffect(() => {
        AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticate, logout}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;