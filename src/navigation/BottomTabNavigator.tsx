import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ResumeStackNavigator, TopTracksStackNavigator, TopArtistsStackNavigator } from './StackNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#1ED760',
        inactiveTintColor: 'black',
        tabStyle: {
          borderTopWidth: 0,
          backgroundColor: 'white'
        },
        labelStyle: {
          fontSize: 14,
          fontFamily: 'clearSansBold'
        }
      }}>
        <Tab.Screen
          name="Resume" 
          component={ResumeStackNavigator}
          options={{
            title: 'Resume',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="home-outline" size={24} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="TopTracksStackNavigator" 
          component={TopTracksStackNavigator}
          options={{
            title: 'Top tracks',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="music" size={24} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="TopArtistsStackNavigator" 
          component={TopArtistsStackNavigator}
          options={{
            title: 'Top artists',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="star-outline" size={24} color={color} />; 
            }
          }}
        />
      </Tab.Navigator>
    );
}