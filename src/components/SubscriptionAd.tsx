import { Image } from "react-native";
import { Banner, Text } from "react-native-paper";
import { Theme } from "../theme";
import LOGO_STATSFY from "../images/icon_statsfy.png";
import { usePaywall } from "../hooks/usePaywall";
import { useAppContext } from "../hooks/useAppContext";

export const SubscriptionAd = () => {
  const { isSubscribed } = useAppContext();
  const { handlePaywall } = usePaywall();

  if (isSubscribed) {
    return null;
  }

  return (
    <Banner
      visible
      actions={[
        {
          label: "I do not want ads!",
          onPress: handlePaywall,
        },
      ]}
      icon={() => (
        <Image
          source={LOGO_STATSFY}
          style={{
            width: 75,
            height: 75,
          }}
        />
      )}
      style={{
        backgroundColor: Theme.colors.light,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>No ads anymore!</Text>
      <Text>
        {" "}
        If you've enjoyed using this app and do not want to see ads anymore,
        consider paying our small annual subscription!
      </Text>
    </Banner>
  );
};
