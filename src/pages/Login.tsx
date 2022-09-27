import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from "expo-auth-session";
import AuthContext from "../contexts/Auth";
import { useNavigation } from "@react-navigation/native";
import RountedButton from "../components/RoundedButton";
import LogoImage from "../components/LogoImage";
import { Theme } from "../theme";
import Constants from "expo-constants";
import { AdMobInterstitial } from "expo-ads-admob";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Login() {
  const { authenticate } = useContext(AuthContext);
  const navigation = useNavigation();

  const [_, response, submitLogin] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "049fe9081d41496db42660d5035b8346",
      scopes: [
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "app-remote-control",
        "playlist-modify-public",
        "user-modify-playback-state",
        "playlist-modify-private",
        "user-follow-modify",
        "user-read-currently-playing",
        "user-follow-read",
        "user-library-modify",
        "user-read-playback-position",
        "playlist-read-private",
        "user-read-email",
        "user-read-private",
        "user-library-read",
        "playlist-read-collaborative",
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: "com.yabcompany.statsfy://redirect",
      }),
    },
    discovery
  );

  const showAd = async () => {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };

  useEffect(() => {
    const testID = "ca-app-pub-3940256099942544/1033173712";
    const productionID = "ca-app-pub-6575307967199593/9387604814";
    const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;
    AdMobInterstitial.setAdUnitID(adUnitID).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      authenticate(access_token);
      showAd();
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <LogoImage size="large" />

      <Text style={styles.title}>Hello! Looking for your stats?</Text>

      <Text style={styles.subTitle}>
        Please log in with your Spotify account to see your stats
      </Text>

      <View style={styles.wrapperLoginButton}>
        <RountedButton
          onPress={() => submitLogin()}
          label="Log in with Spotify"
          type="primary"
        />
      </View>

      <View style={styles.wrapperAboutTheAppButton}>
        <RountedButton
          onPress={() => navigation.navigate("About" as never)}
          label="About the app"
          type="neutral"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  title: {
    marginTop: 24,
    fontSize: Theme.fontSizes.extraLarge,
    fontFamily: Theme.fonts.bold,
  },
  subTitle: {
    fontSize: Theme.fontSizes.medium,
    marginTop: 8,
    fontFamily: Theme.fonts.regular,
  },
  wrapperLoginButton: {
    width: "100%",
    marginTop: 24,
  },
  wrapperAboutTheAppButton: {
    width: "100%",
    marginTop: 8,
  },
});
