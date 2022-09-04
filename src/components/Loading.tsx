import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Theme } from "../theme";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Theme.colors.white,
    height: "100%",
  },
});
