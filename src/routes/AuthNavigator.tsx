import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { About } from "../screens/About";

const StackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen name="About" component={About} />
    </StackNavigator.Navigator>
  );
};
