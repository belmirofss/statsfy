import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Theme } from "../theme";

type Props = {
  showBackButton?: boolean;
  showAccountButton?: boolean;
};

export default function HeaderRight({
  showBackButton,
  showAccountButton,
}: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={Theme.fontSizes.extraLarge}
          />
        </TouchableOpacity>
      )}

      {showAccountButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Account" as never)}
        >
          <MaterialCommunityIcons
            name="account"
            size={Theme.fontSizes.extraLarge}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 14,
  },
  button: {
    width: 36,
    justifyContent: "center",
  },
});
