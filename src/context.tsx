import { createContext, ReactNode, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { ACCESS_TOKEN_KEY } from "./contants";
import API from "./api";
import { useAlert } from "./hooks/userAlert";

type AppContextData = {
  isAuthenticated: boolean;
  adShowed: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
  markAdAsShowed: () => void;
};

const AppContext = createContext<AppContextData>({} as AppContextData);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adShowed, setAdShowed] = useState(false);

  const alert = useAlert();

  const authenticate = async (token: string) => {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    API.defaults.headers.common["Authorization"] = "Bearer " + token;
    setIsAuthenticated(true);
  };

  const markAdAsShowed = () => setAdShowed(true);

  const logout = () => {
    delete API.defaults.headers.common["Authorization"];
    SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY).then(() =>
      setIsAuthenticated(false)
    );
  };

  useEffect(() => {
    API.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          alert("Your session has expired! To continue, log in again.");
          logout();
        }
        return Promise.reject(error);
      }
    );

    logout();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        adShowed,
        authenticate,
        logout,
        markAdAsShowed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
