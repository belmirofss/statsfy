import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

import Login from '../pages/Login';
import Resume from '../pages/Resume';

import HeaderRight from '../components/HeaderRight';

import BottomTabNavigator from './BottomTabNavigator';
import { TopTabArtistsNavigator, TopTabTracksNavigator } from './TopTabNavigator';
import Account from '../pages/Account';
import About from '../pages/About';

const screenOptionStyle: StackNavigationOptions  = {
    headerTitleAlign: 'left',
    headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: '#1ED760',
        fontFamily: 'clearSansBold',
        fontSize: 24
    },
    headerLeft: () => { return null },
    cardStyle: {
        backgroundColor: 'white'
    }
};


const AuthStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <StackNavigator.Screen
                name="About"
                component={About}
                options={{
                    title: 'About app',
                    headerRight: () => <HeaderRight showBackButton/>
                }}
            />
        </StackNavigator.Navigator>
    );
};

const AppStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="App"
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <StackNavigator.Screen
                name="Account"
                component={Account}
                options={{
                    title: 'Account',
                    headerRight: () => <HeaderRight showBackButton/>
                }}
            />
            <StackNavigator.Screen
                name="About"
                component={About}
                options={{
                    title: 'About the app',
                    headerRight: () => <HeaderRight showBackButton/>
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
                    title: 'Resume',
                    headerRight: () => <HeaderRight showAccountButton/>
                }}
            />
        </StackNavigator.Navigator>
    );
}

const TopTracksStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="TopTabTracksNavigator"
                component={TopTabTracksNavigator}
                options={{
                    title: 'Top tracks',
                    headerRight: () => <HeaderRight showAccountButton/>
                }}
            />
        </StackNavigator.Navigator>
    );
}

const TopArtistsStackNavigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen
                name="TopTabArtistsNavigator"
                component={TopTabArtistsNavigator}
                options={{
                    title: 'Top artists',
                    headerRight: () => <HeaderRight showAccountButton/>
                }}
            />
        </StackNavigator.Navigator>
    );
}

export { 
    AuthStackNavigator,
    AppStackNavigator, 
    ResumeStackNavigator,
    TopTracksStackNavigator,
    TopArtistsStackNavigator
};
