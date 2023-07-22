import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Theme } from "../theme";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: Theme.colors.light,
        height: "100%",
      }}
    >
      <ActivityIndicator size="large" color={Theme.colors.primary} />
    </View>
  );
};
