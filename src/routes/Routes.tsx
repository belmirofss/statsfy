  
import React, { useContext } from 'react';
import AuthContext from '../contexts/Auth';
import { AppStackNavigator, AuthStackNavigator } from '../navigation/StackNavigator';

export default function Routes() {

    const {isAuthenticated} = useContext(AuthContext);

    if (isAuthenticated) {
        return <AppStackNavigator />;
    }

    return <AuthStackNavigator />;
}