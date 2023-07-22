import { createStackNavigator } from "@react-navigation/stack";
import { AppBottomTabsNavigator } from "./AppBottomTabsNavigator";
import { About } from "../../screens/About";
import { Account } from "../../screens/Account";
import { Share } from "../../screens/Share";
import { Theme } from "../../theme";

const StackNavigator = createStackNavigator();

export const AppNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="AppBottomTabsNavigator"
        component={AppBottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen name="About" component={About} />
      <StackNavigator.Screen name="Account" component={Account} />
      <StackNavigator.Screen
        name="Share"
        component={Share}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: Theme.colors.light,
          },
        }}
      />
    </StackNavigator.Navigator>
  );
};
