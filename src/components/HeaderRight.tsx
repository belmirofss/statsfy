import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";
import { Theme } from "../theme";
import { useAppContext } from "../hooks/useAppContext";
import { usePaywall } from "../hooks/usePaywall";

export const HeaderRight = () => {
  const navigation = useNavigation();
  const { isSubscribed } = useAppContext();
  const { handlePaywall } = usePaywall();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!isSubscribed && (
        <Button mode="contained" onPress={handlePaywall}>
          <Text
            variant="bodySmall"
            style={{ fontWeight: "bold", color: Theme.colors.light }}
          >
            Get rid of ads
          </Text>
        </Button>
      )}

      <Appbar.Action
        icon="account"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};
