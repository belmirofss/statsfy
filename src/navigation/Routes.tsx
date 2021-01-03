  
import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { AppStackNavigator, AuthStackNavigator } from './StackNavigator';

export default function Routes() {
    const {isAuthenticated} = useContext(AuthContext);

    if (isAuthenticated) {
        return (
            <AppStackNavigator />
        );
    }

    return (
        <AuthStackNavigator />
    );
}