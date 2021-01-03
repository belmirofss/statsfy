import React from 'react';

import { useFonts } from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";

import clearSansRegular from './src/fonts/ClearSans-Regular.ttf';
import clearSansBold from './src/fonts/ClearSans-Bold.ttf';

import { MainStackNavigator } from './src/navigation/StackNavigator';

export default function App() {  
  const [fontsLoaded] = useFonts({
    clearSansRegular,
    clearSansBold,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
  );
}

