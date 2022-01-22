import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ResumeStackNavigator, TopTracksStackNavigator, TopArtistsStackNavigator } from './StackNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: '#1ED760',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: 'white',
    height: 56
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'clearSansBold',
    paddingBottom: 4
  },
  header: () => null
}

const iconSize = 28;

export default function BottomTabNavigator() {
    return (
      <Tab.Navigator 
        screenOptions={screenOptions}
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}>
        <Tab.Screen
          name="Resume" 
          component={ResumeStackNavigator}
          options={{
            title: 'Resume',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="home-outline" size={iconSize} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="TopTracksStackNavigator" 
          component={TopTracksStackNavigator}
          options={{
            title: 'Top tracks',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="music" size={iconSize} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="TopArtistsStackNavigator" 
          component={TopArtistsStackNavigator}
          options={{
            title: 'Top artists',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="star-outline" size={iconSize} color={color} />; 
            }
          }}
        />
      </Tab.Navigator>
    );
}