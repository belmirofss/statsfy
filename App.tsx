import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./src/contexts/auth";
import clearSansBold from "./src/fonts/ClearSans-Bold.ttf";
import clearSansRegular from "./src/fonts/ClearSans-Regular.ttf";
import Routes from "./src/Routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    clearSansRegular,
    clearSansBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar hidden />
    </NavigationContainer>
  );
}
