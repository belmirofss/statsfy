import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import TopArtistsAllTime from '../pages/TopArtistsAllTime';
import TopArtists6Months from '../pages/TopArtists6Months';
import TopArtists4Weeks from '../pages/TopArtists4Weeks';
import TopTracksAllTime from '../pages/TopTracksAllTime';
import TopTracks6Months from '../pages/TopTracks6Months';
import TopTracks4Weeks from '../pages/TopTracks4Weeks';

const tabBarOptions: MaterialTopTabBarOptions = {
    activeTintColor: '#1ED760',
    inactiveTintColor: 'black',
    labelStyle: {
        fontSize: 14,
        fontFamily: 'clearSansBold',
        textTransform: 'none'
    },
    indicatorStyle: {
        backgroundColor: '#1ED760'
    }
}

const TopTabArtistsNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
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
        <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
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
