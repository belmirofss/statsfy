import React from 'react';

import { useFonts } from 'expo-font';


import clearSansRegular from './src/fonts/ClearSans-Regular.ttf';
import clearSansBold from './src/fonts/ClearSans-Bold.ttf';

export default function App() {
  const [fontsLoaded] = useFonts({
    clearSansRegular,
    clearSansBold,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    
  );
}

