import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import API from "../api/api";
import useAlert from "../hooks/useAlert";

type AuthContextData = {
  isAuthenticated: boolean;
  authenticate: (accessToken: string) => void;
  logout: () => void;
};

const ACCESS_TOKEN_KEY = "@Statsfy:Access_Token";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const alert = useAlert();

  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        alert("Your session has expired! To continue, please log in again.");
        logout();
      }
      return Promise.reject(error);
    }
  );

  const setToken = async (access_token: string) => {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, access_token);
  };

  const authenticate = async (accessToken: string) => {
    await setToken(accessToken);
    API.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    setIsAuthenticated(true);
  };

  const logout = () => {
    delete API.defaults.headers.common["Authorization"];
    AsyncStorage.clear().then(() => setIsAuthenticated(false));
  };

  useEffect(() => {
    AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
