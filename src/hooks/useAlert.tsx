import { Alert } from "react-native";

export default function useAlert() {
  const alert = (title: string) =>
    Alert.alert(title, "", [{ text: "OK", onPress: () => null }], {
      cancelable: false,
    });

  return alert;
}
