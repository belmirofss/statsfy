import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

import Login from '../pages/Login';
import Resume from '../pages/Resume';
import Top from '../pages/Top';
import BottomTabNavigator from './BottomTabNavigator';

const screenOptionStyle: StackNavigationOptions  = {
    headerTitleAlign: 'left',
    headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: '#1ED760',
        fontWeight: 'bold',
        fontSize: 24
    },
    headerLeft: () => { return null }
};

const MainStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle} initialRouteName="Login">
            <StackNavigator.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <StackNavigator.Screen
                name="Auth"
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </StackNavigator.Navigator>
    );
};


const ResumeStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="Resume"
                component={Resume}
                options={{
                    title: 'Resume'
                }}
            />
        </StackNavigator.Navigator>
    );
}

const TopStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="Top"
                component={Top}
                options={{
                    title: 'Top tracks and artists'
                }}
            />
        </StackNavigator.Navigator>
    );
}

const StatsStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="Stats"
                component={Top}
                options={{
                    title: 'Stats'
                }}
            />
        </StackNavigator.Navigator>
    );
}

const AccountStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="Account"
                component={Top}
                options={{
                    title: 'Account'
                }}
            />
        </StackNavigator.Navigator>
    );
}

export { 
    MainStackNavigator, 
    ResumeStackNavigator,
    StatsStackNavigator,
    TopStackNavigator,
    AccountStackNavigator
};
