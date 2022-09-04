import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appInfo from "../../app.json";
import LogoImage from "../components/LogoImage";
import { Theme } from "../theme";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All your data is saved solely and exclusively on your device.
      </Text>

      <View style={styles.wrapperText}>
        <Text style={styles.text}>
          The app will never save or collect any information about you or your
          account.
        </Text>

        <Text style={styles.text}>
          This app has no relationship or affliction with Spotify.
        </Text>

        <View style={styles.wrapperLogoImage}>
          <LogoImage size="small" />
        </View>

        <Text style={styles.versionText}>Version: {appInfo.expo.version}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  wrapperLogoImage: {
    marginTop: 16,
  },
  wrapperText: {
    marginTop: 4,
  },
  title: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSizes.extraLarge,
  },
  text: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSizes.medium,
    marginTop: 6,
  },
  versionText: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSizes.extraSmall,
    marginTop: 24,
    textAlign: "center",
  },
});
