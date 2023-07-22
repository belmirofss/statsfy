import { useAppContext } from "../hooks/useAppContext";
import { AppNavigator } from "./AppNavigator/AppNavigator";
import { AuthNavigator } from "./AuthNavigator";

export const Routes = () => {
  const { isAuthenticated } = useAppContext();

  if (isAuthenticated) {
    return <AppNavigator />;
  }

  return <AuthNavigator />;
};
