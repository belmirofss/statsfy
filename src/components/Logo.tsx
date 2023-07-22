import { Image } from "react-native";
import LOGO_IMG from "../images/logo_statsfy.png";

type Props = {
  size?: "mini" | "small" | "large";
};

const sizes = {
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

export const Logo = ({ size = "large" }: Props) => {
  return <Image style={sizes[size]} source={LOGO_IMG} />;
};
