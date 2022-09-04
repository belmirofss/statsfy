import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { Theme } from "../theme";

type Props = {
  onValueChange(value: any): void;
  items: { label: string; value: any }[];
  value: any;
  width: number;
  fontSize: number;
};

export default function Picker({
  onValueChange,
  items,
  value,
  width,
  fontSize,
}: Props) {
  const styles = StyleSheet.create({
    iconRNPicker: {
      position: "absolute",
      right: 10,
      top: fontSize * 0.65,
    },
  });

  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => onValueChange(value)}
        items={items}
        placeholder={{}}
        style={{
          inputAndroid: {
            color: Theme.colors.black,
            fontSize: fontSize,
            fontFamily: Theme.fonts.bold,
            padding: 8,
          },
          inputAndroidContainer: {
            borderWidth: 1,
            borderColor: Theme.colors.gray,
            borderRadius: 100,
            width: width,
            marginLeft: 4,
          },
        }}
        useNativeAndroidPickerStyle={false}
        value={value}
      />
      <MaterialCommunityIcons
        style={styles.iconRNPicker}
        name="chevron-down"
        color={Theme.colors.gray}
        size={Theme.fontSizes.large}
      />
    </View>
  );
}
