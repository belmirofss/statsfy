import "expo-dev-client";
import { useCallback } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  configureFonts,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import clearSansRegular from "./src/fonts/ClearSans-Regular.ttf";
import { AppProvider } from "./src/context";
import { Routes } from "./src/routes/Routes";
import { Theme } from "./src/theme";

const theme = {
  ...DefaultTheme,
  roundness: Theme.roundness,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.colors.primary,
  },
  fonts: configureFonts({
    config: {
      fontFamily: Theme.font,
    },
  }),
};

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    clearSansRegular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <AppProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </AppProvider>
          <StatusBar hidden />
        </PaperProvider>
      </QueryClientProvider>
    </View>
  );
}
