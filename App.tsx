import React from 'react';

import { useFonts } from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";

import clearSansRegular from './src/fonts/ClearSans-Regular.ttf';
import clearSansBold from './src/fonts/ClearSans-Bold.ttf';
import Routes from './src/navigation/Routes';

import { AuthProvider } from './src/contexts/auth';

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

