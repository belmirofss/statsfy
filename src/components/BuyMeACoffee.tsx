import { Image } from "react-native";
import { Banner } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import { BUY_ME_A_COFFEE_URL } from "../contants";
import { Theme } from "../theme";
import BUY_ME_A_COFFEEE from "../images/buy_me_a_coffee.png";

export const BuyMeACoffe = () => {
  const open = async () =>
    await WebBrowser.openBrowserAsync(BUY_ME_A_COFFEE_URL);

  return (
    <Banner
      visible
      actions={[
        {
          label: "Buy me a coffee",
          onPress: open,
        },
      ]}
      icon={() => (
        <Image
          source={BUY_ME_A_COFFEEE}
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
      We do not show ads. If you've enjoyed using this app, consider buying me a
      coffee as a token of appreciation.
    </Banner>
  );
};
