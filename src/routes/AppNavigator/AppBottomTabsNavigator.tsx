import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../theme";
import { Resume } from "../../screens/Resume/Resume";
import {
  TopTabArtistsNavigator,
  TopTabTracksNavigator,
} from "./AppTopTabsNavigator";
import { HeaderRight } from "../../components/HeaderRight";

const Tab = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const ICON_SIZE = 28;

const ButtomTabResumeNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 5,
          shadowColor: Theme.colors.dark,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        cardStyle: {
          backgroundColor: Theme.colors.light,
        },
        headerRight: HeaderRight,
      }}
    >
      <StackNavigator.Screen name="Resume" component={Resume} />
    </StackNavigator.Navigator>
  );
};

const ButtomTabTopTracksNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerRight: HeaderRight,
      }}
    >
      <StackNavigator.Screen
        name="TopTabTracksNavigator"
        component={TopTabTracksNavigator}
        options={{
          title: "Top tracks",
        }}
      />
    </StackNavigator.Navigator>
  );
};

const ButtomTabTopArtistsNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerRight: HeaderRight,
      }}
    >
      <StackNavigator.Screen
        name="TopTabArtistsNavigator"
        component={TopTabArtistsNavigator}
        options={{
          title: "Top artists",
        }}
      />
    </StackNavigator.Navigator>
  );
};

export const AppBottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor: Theme.colors.dark,
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          paddingBottom: Theme.space.xs / 2,
        },
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: Theme.colors.light,
      }}
    >
      <Tab.Screen
        name="ButtomTabResume"
        component={ButtomTabResumeNavigator}
        options={{
          title: "Resume",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={ICON_SIZE}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ButtomTabTopTracks"
        component={ButtomTabTopTracksNavigator}
        options={{
          title: "Top tracks",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="music"
                color={color}
                size={ICON_SIZE}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ButtomTabTopArtists"
        component={ButtomTabTopArtistsNavigator}
        options={{
          title: "Top artists",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="star-outline"
                color={color}
                size={ICON_SIZE}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
