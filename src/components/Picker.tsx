import { ComponentProps, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Menu, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../theme";

type Props = {
  selectedValue: string;
  items: {
    value: string;
    text: string;
  }[];
  onSelection: (value: string) => void;
};

export const Picker = ({
  selectedValue: _selectedValue,
  items,
  onSelection,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(_selectedValue);
  const [visible, setVisible] = useState(false);

  const label = items.find((item) => item.value == selectedValue)?.text;

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <View style={{ marginBottom: -Theme.space.xs }}>
          <Button
            onPress={() => setVisible(true)}
            style={{}}
            contentStyle={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: Theme.colors.gray,
              flexDirection: "row-reverse",
            }}
            icon={() => (
              <MaterialCommunityIcons
                name="chevron-down"
                size={32}
                color={Theme.colors.gray}
              />
            )}
          >
            <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
              {label}
            </Text>
          </Button>
        </View>
      }
      overlayAccessibilityLabel="Close picker"
      contentStyle={{
        borderRadius: Theme.roundness,
        backgroundColor: Theme.colors.light,
      }}
    >
      {items.map((item) => (
        <Menu.Item
          onPress={() => {
            setSelectedValue(item.value);
            onSelection(item.value);
            setVisible(false);
          }}
          title={item.text}
          key={item.value}
        />
      ))}
    </Menu>
  );
};
