import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import TopArtistsAllTime from '../pages/TopArtistsAllTime';
import TopArtists6Months from '../pages/TopArtists6Months';
import TopArtists4Weeks from '../pages/TopArtists4Weeks';
import TopTracksAllTime from '../pages/TopTracksAllTime';
import TopTracks6Months from '../pages/TopTracks6Months';
import TopTracks4Weeks from '../pages/TopTracks4Weeks';
import { StyleProp, ViewStyle } from 'react-native';

const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarActiveTintColor: '#1ED760',
    tabBarInactiveTintColor: 'black',
    tabBarLabelStyle: {
        fontSize: 14,
        fontFamily: 'clearSansBold',
        textTransform: 'none'
    },
    tabBarIndicatorStyle: {
        backgroundColor: '#1ED760'
    }
}

const Tab = createMaterialTopTabNavigator();

const TopTabArtistsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="TopArtistsAllTime" 
                component={TopArtistsAllTime} 
                options={{
                    title: 'All time',
                }}
            />
            <Tab.Screen 
                name="TopArtists6Months" 
                component={TopArtists6Months}
                options={{
                    title: 'Last 6 months',
                }}
            />
            <Tab.Screen 
                name="TopArtists4Weeks" 
                component={TopArtists4Weeks}
                options={{
                    title: 'Last 4 weeks',
                }}
            />
        </Tab.Navigator>
    );
}

const TopTabTracksNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="TopTracksAllTime" 
                component={TopTracksAllTime} 
                options={{
                    title: 'All time',
                }}
            />
            <Tab.Screen 
                name="TopTracks6Months" 
                component={TopTracks6Months}
                options={{
                    title: 'Last 6 months',
                }}
            />
            <Tab.Screen 
                name="TopTracks4Weeks" 
                component={TopTracks4Weeks}
                options={{
                    title: 'Last 4 weeks',
                }}
            />
        </Tab.Navigator>
    );
}

export {
    TopTabTracksNavigator,
    TopTabArtistsNavigator
};
