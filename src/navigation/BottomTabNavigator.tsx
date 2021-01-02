  
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ResumeStackNavigator, TopStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Resume" 
          component={ResumeStackNavigator}
          options={{
            title: 'Resume'
          }}
        />
        <Tab.Screen 
          name="Tops" 
          component={TopStackNavigator}
          options={{
            title: 'Top tracks and artists'
          }}
        />
      </Tab.Navigator>
    );
}