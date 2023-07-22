import { ReactNode } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ViewStyleProp } from "../types";
import { Theme } from "../theme";

type Props = {
  children: ReactNode;
  style?: ViewStyleProp;
};

export const ScreenContainer = ({ children, style = {} }: Props) => {
  const containerStyle = StyleSheet.compose(
    {
      flex: 1,
      padding: Theme.space.s,
    },
    style
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={containerStyle}>{children}</View>
    </ScrollView>
  );
};
