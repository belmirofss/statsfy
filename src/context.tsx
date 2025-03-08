import { createContext, ReactNode, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
  ACCESS_TOKEN_KEY,
  ENTITLEMENT_IDENTIFIER,
  RC_GOOGLE_PUBLIC_KEY,
} from "./constants";
import API from "./api";
import { useAlert } from "./hooks/useAlert";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";
import { AxiosResponse, AxiosError } from "axios";
import { useSpotifyAccount } from "./hooks/useSpotifyAccount";

type AppContextData = {
  isAuthenticated: boolean;
  adShowed: boolean;
  isSubscribed: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
  markAdAsShowed: () => void;
  markAsSubscribed: () => void;
};

const AppContext = createContext<AppContextData>({} as AppContextData);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [tokenIsSaved, setTokenIsSaved] = useState(false);
  const [adShowed, setAdShowed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [purchasesIsConfigured, setPurchasesIsConfigured] = useState(false);

  const { data, isSuccess } = useSpotifyAccount({
    enabled: tokenIsSaved,
  });

  const alert = useAlert();

  const authenticate = async (token: string) => {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    API.defaults.headers.common["Authorization"] = "Bearer " + token;
    setTokenIsSaved(true);
  };

  const markAdAsShowed = () => setAdShowed(true);
  const markAsSubscribed = () => setIsSubscribed(true);

  const logout = () => {
    delete API.defaults.headers.common["Authorization"];
    SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY).then(() =>
      setTokenIsSaved(false)
    );
  };

  useEffect(() => {
    API.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        if (error?.response?.status === 401) {
          alert("Your session has expired! To continue, connect again.");
          logout();
        }
        return Promise.reject(error);
      }
    );

    logout();
  }, []);

  useEffect(() => {
    const setup = async () => {
      if (!isSuccess) {
        return;
      }

      if (Platform.OS == "android") {
        await Purchases.configure({
          apiKey: RC_GOOGLE_PUBLIC_KEY,
          appUserID: data.id,
        });
      }

      const customerInfo = await Purchases.getCustomerInfo();

      if (
        typeof customerInfo.entitlements.active[ENTITLEMENT_IDENTIFIER] !==
        "undefined"
      ) {
        markAsSubscribed();
      }

      setPurchasesIsConfigured(true);
    };

    setup().catch(() => setPurchasesIsConfigured(true));
  }, [isSuccess, data]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: tokenIsSaved && purchasesIsConfigured,
        isSubscribed,
        adShowed,
        authenticate,
        logout,
        markAdAsShowed,
        markAsSubscribed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
