import { ReactNode } from "react";
import { Button as PaperButton, Text } from "react-native-paper";
import { Theme } from "../theme";

type Props = {
  children: ReactNode;
  onPress: () => void;
  color?: "primary" | "secondary" | "danger";
};

const buttonColors = {
  primary: {
    buttonColor: Theme.colors.primary,
    textColor: Theme.colors.light,
  },
  secondary: {
    buttonColor: Theme.colors.gray,
    textColor: Theme.colors.dark,
  },
  danger: {
    buttonColor: Theme.colors.danger,
    textColor: Theme.colors.light,
  },
};

export const Button = ({ children, onPress, color = "primary" }: Props) => {
  const colors = buttonColors[color];

  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      buttonColor={colors.buttonColor}
    >
      <Text
        variant="titleLarge"
        style={{ fontWeight: "bold", color: colors.textColor }}
      >
        {children}
      </Text>
    </PaperButton>
  );
};
