import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from "expo-auth-session";
import { ScreenContainer } from "../components/ScreenContainer";
import { Button } from "../components/Button";
import { Theme } from "../theme";
import { Logo } from "../components/Logo";
import { useAppContext } from "../hooks/useAppContext";
import {
  AD_INTERTITIAL_UNIT_ID,
  SPOTIFY_AUTHORIZATION_ENDPOINT,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_SCOPES,
  SPOTIFY_TOKEN_ENDPOINT,
} from "../constants";
import { InterstitialAd, TestIds } from "react-native-google-mobile-ads";

WebBrowser.maybeCompleteAuthSession();

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : AD_INTERTITIAL_UNIT_ID;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {});

const discovery = {
  authorizationEndpoint: SPOTIFY_AUTHORIZATION_ENDPOINT,
  tokenEndpoint: SPOTIFY_TOKEN_ENDPOINT,
};

export const Login = () => {
  const { authenticate } = useAppContext();
  const navigation = useNavigation();

  const [_, response, submitLogin] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: SPOTIFY_CLIENT_ID,
      scopes: SPOTIFY_SCOPES,
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: SPOTIFY_REDIRECT_URI,
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      authenticate(access_token);
    }
  }, [response]);

  useEffect(() => {
    // Pre-load interstitial ad
    interstitial.load();
  }, []);

  return (
    <ScreenContainer style={{ justifyContent: "flex-end", gap: Theme.space.s }}>
      <Logo />

      <View style={{ gap: Theme.space.xs }}>
        <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
          Hello! Are you looking for your stats?
        </Text>
        <Text variant="titleMedium">
          Connect with your Spotify account to see your stats
        </Text>
      </View>

      <View style={{ gap: Theme.space.xs }}>
        <Button
          onPress={() => {
            submitLogin(); // should be called directly, and not passed as arg
          }}
        >
          Connect with Spotify
        </Button>
        <Button color="secondary" onPress={() => navigation.navigate("About")}>
          About the app
        </Button>
      </View>
    </ScreenContainer>
  );
};
