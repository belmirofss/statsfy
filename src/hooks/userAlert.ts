import { Alert } from "react-native";

export const useAlert = () => {
  const alert = (title: string) =>
    Alert.alert(title, "", [{ text: "OK", onPress: () => null }], {
      cancelable: false,
    });

  return alert;
};
