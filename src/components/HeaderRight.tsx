import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

export const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Appbar.Action
        icon="account"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};
