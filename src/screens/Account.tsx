import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../components/Loading";
import { ScreenContainer } from "../components/ScreenContainer";
import { useSpotifyAccount } from "../hooks/useSpotifyAccount";
import { Text } from "react-native-paper";
import NOT_FOUND_IMG from "../images/not_found.png";
import { Theme } from "../theme";
import { Button } from "../components/Button";
import { useAppContext } from "../hooks/useAppContext";
import { BuyMeACoffe } from "../components/BuyMeACoffee";

export const Account = () => {
  const { data, isLoading } = useSpotifyAccount();
  const navigation = useNavigation();
  const { logout } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <ScreenContainer style={{ gap: Theme.space.m }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            borderRadius: 100,
            width: 125,
            height: 125,
            borderColor: Theme.colors.darkWithTransparency,
            borderWidth: 1,
            marginBottom: Theme.space.xs,
          }}
          source={data.images[0] ? { uri: data.images[0].url } : NOT_FOUND_IMG}
        />
        <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
          [{data.country.toUpperCase()}] {data.display_name}
        </Text>
        <Text variant="titleSmall">
          {data.email} | {data.product} account
        </Text>
      </View>
      <View style={{ gap: Theme.space.xs }}>
        <View style={{ marginBottom: Theme.space.s }}>
          <BuyMeACoffe />
        </View>

        <Button color="secondary" onPress={() => navigation.navigate("About")}>
          About the app
        </Button>
        <Button color="danger" onPress={logout}>
          Log out
        </Button>
      </View>
    </ScreenContainer>
  );
};
