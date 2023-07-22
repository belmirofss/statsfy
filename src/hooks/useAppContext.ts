import { useContext } from "react";
import AppContext from "../context";

export const useAppContext = () => {
  const { isAuthenticated, authenticate, logout } = useContext(AppContext);

  return {
    isAuthenticated,
    authenticate,
    logout,
  };
};
