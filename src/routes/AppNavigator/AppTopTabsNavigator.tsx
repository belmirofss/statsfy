import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { Theme } from "../../theme";
import { TopTracks } from "../../screens/TopTracks";
import { SpotifyTimeRanges } from "../../types";
import { TopArtists } from "../../screens/TopArtists";

const Tab = createMaterialTopTabNavigator();

const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarActiveTintColor: Theme.colors.primary,
  tabBarInactiveTintColor: Theme.colors.dark,
  tabBarLabelStyle: {
    fontWeight: "600",
    textTransform: "none",
    fontSize: 16,
  },
  tabBarIndicatorStyle: {
    backgroundColor: Theme.colors.primary,
  },
};

export const TopTabTracksNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.light,
      }}
    >
      <Tab.Screen
        name="TopTracksAllTime"
        component={TopTracks}
        options={{
          title: "All time",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.LONG,
        }}
      />
      <Tab.Screen
        name="TopTracks6Months"
        component={TopTracks}
        options={{
          title: "Last 6 months",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.MEDIUM,
        }}
      />
      <Tab.Screen
        name="TopTracks4Weeks"
        component={TopTracks}
        options={{
          title: "Last 4 weeks",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.SHORT,
        }}
      />
    </Tab.Navigator>
  );
};

export const TopTabArtistsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.light,
      }}
    >
      <Tab.Screen
        name="TopArtistsAllTime"
        component={TopArtists}
        options={{
          title: "All time",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.LONG,
        }}
      />
      <Tab.Screen
        name="TopArtists6Months"
        component={TopArtists}
        options={{
          title: "Last 6 months",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.MEDIUM,
        }}
      />
      <Tab.Screen
        name="TopArtists4Weeks"
        component={TopArtists}
        options={{
          title: "Last 4 weeks",
        }}
        initialParams={{
          timeRange: SpotifyTimeRanges.SHORT,
        }}
      />
    </Tab.Navigator>
  );
};
