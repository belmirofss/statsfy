import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../../components/Loading";
import RountedButton from "../../components/RoundedButton";
import AuthContext from "../../contexts/auth";
import useSpotifyAccountInfo from "../../hooks/useSpotifyAccountInfo";
import { Theme } from "../../theme";
import AccountImage from "./AccountImage";

export default function Account() {
  const { spotifyAccountInfo, isLoading } = useSpotifyAccountInfo();

  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {spotifyAccountInfo && (
        <View style={styles.wrapperSpotifyAccountInfo}>
          <AccountImage image={spotifyAccountInfo.images[0]} />

          <Text style={styles.nameText}>
            [{spotifyAccountInfo.country.toUpperCase()}]{" "}
            {spotifyAccountInfo.display_name}
          </Text>
          <Text style={styles.emailText}>
            {spotifyAccountInfo.email} | {spotifyAccountInfo.product} account
          </Text>
        </View>
      )}

      <View style={styles.wrapperAboutTheAppButton}>
        <RountedButton
          onPress={() => navigation.navigate("About" as never)}
          type="neutral"
          label="About the app"
        />
      </View>

      <View style={styles.wrapperLogoutButton}>
        <RountedButton
          onPress={authContext.logout}
          type="warn"
          label="Log out"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  wrapperSpotifyAccountInfo: {
    alignItems: "center",
    flexDirection: "column",
  },
  nameText: {
    fontSize: Theme.fontSizes.small,
    marginTop: 6,
    textAlign: "center",
    fontFamily: Theme.fonts.bold,
    width: "100%",
  },
  emailText: {
    fontSize: Theme.fontSizes.small,
    textAlign: "center",
    fontFamily: Theme.fonts.regular,
    width: "100%",
  },
  wrapperLogoutButton: {
    marginTop: 8,
  },
  wrapperAboutTheAppButton: {
    marginTop: 48,
  },
});
