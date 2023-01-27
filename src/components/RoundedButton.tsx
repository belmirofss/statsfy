import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../theme";

type Props = {
  label: string;
  type: "primary" | "warn" | "neutral";
  onPress: () => void;
};

export default function RountedButton({ label, type, onPress }: Props) {
  const getStyle = (): { background: string; color: string } => {
    if (type === "primary") {
      return {
        background: Theme.colors.primary,
        color: Theme.colors.white,
      };
    }

    if (type === "warn") {
      return {
        background: Theme.colors.warn,
        color: Theme.colors.white,
      };
    }

    return {
      background: Theme.colors.gray,
      color: Theme.colors.black,
    };
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: getStyle().background,
      paddingHorizontal: 8,
      paddingVertical: 12,
      width: "100%",
      borderRadius: 100,
    },
    text: {
      textAlign: "center",
      color: getStyle().color,
      fontSize: 20,
      fontFamily: Theme.fonts.bold,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
