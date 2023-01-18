import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Theme } from "../theme";
import {
  ResumeStackNavigator,
  TopArtistsStackNavigator,
  TopTracksStackNavigator,
} from "./StackNavigator";

const ICON_SIZE = 28;

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Theme.colors.primary,
  tabBarInactiveTintColor: Theme.colors.black,
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: Theme.colors.white,
    height: Theme.headerSize,
  },
  tabBarLabelStyle: {
    fontSize: Theme.fontSizes.small,
    fontFamily: Theme.fonts.bold,
    paddingBottom: 4,
  },
  lazy: true,
  header: () => null,
};

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.white,
      }}
    >
      <Tab.Screen
        name="Resume"
        component={ResumeStackNavigator}
        options={{
          title: "Resume",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="home-outline"
                size={ICON_SIZE}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TopTracksStackNavigator"
        component={TopTracksStackNavigator}
        options={{
          title: "Top tracks",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="music"
                size={ICON_SIZE}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TopArtistsStackNavigator"
        component={TopArtistsStackNavigator}
        options={{
          title: "Top artists",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="star-outline"
                size={ICON_SIZE}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
