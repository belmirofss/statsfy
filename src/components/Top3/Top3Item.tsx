import { Dimensions, Image, View } from "react-native";
import { List, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { Theme } from "../../theme";

type Props = {
  position: "first" | "second" | "third";
  title: string;
  description?: string;
  imageUrl?: string;
};

const ONE_THIRD_SCREEN = Dimensions.get("window").width / 3;

const COLORS = {
  first: Theme.colors.gold,
  second: Theme.colors.silver,
  third: Theme.colors.bronze,
};

const ICON_SIZES = {
  first: 36,
  second: 32,
  third: 32,
};

const SIZE_MULTIPLIER = {
  first: 1.25,
  second: 0.875,
  third: 0.875,
};

const POSITION_NUMBERS = {
  first: 1,
  second: 2,
  third: 3,
};

const MARGIN_TOP_POSITIONS = {
  first: 0,
  second: 0.7,
  third: 0.7,
};

export const Top3Item = ({ title, description, imageUrl, position }: Props) => {
  const size = ONE_THIRD_SCREEN * SIZE_MULTIPLIER[position] - Theme.space.s;

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "column",
        marginTop: size * MARGIN_TOP_POSITIONS[position],
      }}
    >
      <MaterialCommunityIcons
        name="crown"
        color={COLORS[position]}
        size={ICON_SIZES[position]}
      />
      <Image
        style={{
          height: size,
          width: size,
          borderWidth: 1,
          borderRadius: 100,
          borderColor: Theme.colors.dark,
        }}
        source={
          imageUrl
            ? {
                uri: imageUrl,
              }
            : NOT_FOUND_IMG
        }
      />
      <Text
        variant="labelLarge"
        style={{
          width: size - Theme.space.xs,
          fontWeight: "bold",
          textAlign: "center",
        }}
        numberOfLines={3}
      >
        {POSITION_NUMBERS[position]}. {title}
      </Text>

      {description && (
        <Text
          variant="labelSmall"
          style={{
            width: size - Theme.space.xs,
            textAlign: "center",
          }}
          numberOfLines={3}
        >
          {description}
        </Text>
      )}
    </View>
  );
};
