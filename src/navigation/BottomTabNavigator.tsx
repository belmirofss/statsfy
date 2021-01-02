  
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ResumeStackNavigator, TopStackNavigator, AccountStackNavigator, StatsStackNavigator } from './StackNavigator'
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
          fontWeight: 'bold'
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
          name="Tops" 
          component={TopStackNavigator}
          options={{
            title: 'Top',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="podium-gold" size={24} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="Stats" 
          component={StatsStackNavigator}
          options={{
            title: 'Stats',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="chart-line-variant" size={24} color={color} />; 
            }
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountStackNavigator}
          options={{
            title: 'Account',
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="account-settings-outline" size={24} color={color} />; 
            }
          }}
        />
      </Tab.Navigator>
    );
}