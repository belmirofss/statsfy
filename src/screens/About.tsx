import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScreenContainer } from "../components/ScreenContainer";
import { Logo } from "../components/Logo";
import { Theme } from "../theme";
import appInfo from "../../app.json";

export const About = () => {
  return (
    <ScreenContainer style={{ gap: Theme.space.s }}>
      <View style={{ gap: Theme.space.xs }}>
        <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
          All your data is saved exclusively on your device.
        </Text>
        <Text variant="titleMedium">
          Statsfy will never save or collect any information about you or your
          account.
        </Text>
        <Text variant="titleMedium">
          Statsfy is independent and has no relationship with Spotify.
        </Text>
      </View>
      <Logo size="small" />
      <Text
        variant="labelLarge"
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        Version: {appInfo.expo.version}
      </Text>
    </ScreenContainer>
  );
};
