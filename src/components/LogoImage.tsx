import LOGO_IMG from "../images/logo_statsfy.png";
import { Image, ImageStyle, StyleProp } from "react-native";

type Props = {
  size: "mini" | "small" | "large";
};

export default function LogoImage({ size }: Props) {
  const styles: {
    mini: StyleProp<ImageStyle>;
    small: StyleProp<ImageStyle>;
    large: StyleProp<ImageStyle>;
  } = {
    mini: {
      width: 100,
      height: 32,
    },
    small: {
      width: 150,
      height: 48,
    },
    large: {
      width: 250,
      height: 80,
    },
  };

  return <Image style={styles[size]} source={LOGO_IMG} />;
}
