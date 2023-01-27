import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import clearSansRegular from "./src/fonts/ClearSans-Regular.ttf";
import clearSansBold from "./src/fonts/ClearSans-Bold.ttf";
import Routes from "./src/Routes";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/contexts/Auth";

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
