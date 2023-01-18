import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import React from "react";
import TopArtists from "../pages/TopArtists";
import TopTracks from "../pages/TopTracks";
import { Theme } from "../theme";
import { SpotifyTimeRanges } from "../types";

const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarActiveTintColor: Theme.colors.primary,
  tabBarInactiveTintColor: Theme.colors.black,
  tabBarLabelStyle: {
    fontSize: Theme.fontSizes.medium,
    fontFamily: Theme.fonts.bold,
    textTransform: "none",
  },
  tabBarIndicatorStyle: {
    backgroundColor: Theme.colors.primary,
  },
  lazy: true,
  lazyPreloadDistance: 1,
};

const Tab = createMaterialTopTabNavigator();

const TopTabArtistsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.white,
      }}
    >
      <Tab.Screen
        name="TopArtistsAllTime"
        component={() => <TopArtists timeRange={SpotifyTimeRanges.LONG} />}
        options={{
          title: "All time",
        }}
      />
      <Tab.Screen
        name="TopArtists6Months"
        component={() => <TopArtists timeRange={SpotifyTimeRanges.MEDIUM} />}
        options={{
          title: "Last 6 months",
        }}
      />
      <Tab.Screen
        name="TopArtists4Weeks"
        component={() => <TopArtists timeRange={SpotifyTimeRanges.SHORT} />}
        options={{
          title: "Last 4 weeks",
        }}
      />
    </Tab.Navigator>
  );
};

const TopTabTracksNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.white,
      }}
    >
      <Tab.Screen
        name="TopTracksAllTime"
        component={() => <TopTracks timeRange={SpotifyTimeRanges.LONG} />}
        options={{
          title: "All time",
        }}
      />
      <Tab.Screen
        name="TopTracks6Months"
        component={() => <TopTracks timeRange={SpotifyTimeRanges.MEDIUM} />}
        options={{
          title: "Last 6 months",
        }}
      />
      <Tab.Screen
        name="TopTracks4Weeks"
        component={() => <TopTracks timeRange={SpotifyTimeRanges.SHORT} />}
        options={{
          title: "Last 4 weeks",
        }}
      />
    </Tab.Navigator>
  );
};

export { TopTabTracksNavigator, TopTabArtistsNavigator };
