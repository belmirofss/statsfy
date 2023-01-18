import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import HeaderRight from "../components/HeaderRight";
import About from "../pages/About";
import Account from "../pages/Account/Account";
import Login from "../pages/Login";
import Resume from "../pages/Resume/Resume";
import { Theme } from "../theme";
import BottomTabNavigator from "./BottomTabNavigator";
import {
  TopTabArtistsNavigator,
  TopTabTracksNavigator,
} from "./TopTabNavigator";

const screenOptionStyle: StackNavigationOptions = {
  headerTitleAlign: "left",
  headerStyle: {
    backgroundColor: Theme.colors.white,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSizes.large,
  },
  headerLeft: () => {
    return null;
  },
  cardStyle: {
    backgroundColor: Theme.colors.white,
  },
};

const StackNavigator = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name="About"
        component={About}
        options={{
          title: "About app",
          headerRight: () => <HeaderRight showBackButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen
        name="App"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name="Account"
        component={Account}
        options={{
          title: "Account",
          headerRight: () => <HeaderRight showBackButton />,
        }}
      />
      <StackNavigator.Screen
        name="About"
        component={About}
        options={{
          title: "About the app",
          headerRight: () => <HeaderRight showBackButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

const ResumeStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen
        name="Resume"
        component={Resume}
        options={{
          title: "Resume",
          headerRight: () => <HeaderRight showAccountButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

const TopTracksStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen
        name="TopTabTracksNavigator"
        component={TopTabTracksNavigator}
        options={{
          title: "Top tracks",
          headerRight: () => <HeaderRight showAccountButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

const TopArtistsStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen
        name="TopTabArtistsNavigator"
        component={TopTabArtistsNavigator}
        options={{
          title: "Top artists",
          headerRight: () => <HeaderRight showAccountButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export {
  AuthStackNavigator,
  AppStackNavigator,
  ResumeStackNavigator,
  TopTracksStackNavigator,
  TopArtistsStackNavigator,
};
