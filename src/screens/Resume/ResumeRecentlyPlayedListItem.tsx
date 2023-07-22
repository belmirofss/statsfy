import { View, Dimensions, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Theme } from "../../theme";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { Text } from "react-native-paper";
import { calculateTimestampDiffToNow } from "../../helpers/calculateTimestampDiffToNow";

type Props = {
  imageUrl?: string;
  title: string;
  description: string;
  date: string;
};

const CARD_SIZE = Dimensions.get("window").width / 3 - Theme.space.s;

export const ResumeRecentlyPlayedListItem = ({
  imageUrl,
  title,
  description,
  date,
}: Props) => {
  return (
    <View
      style={{
        height: CARD_SIZE,
        width: CARD_SIZE,
        marginBottom: Theme.space.xs,
      }}
    >
      <ImageBackground
        source={imageUrl ? { uri: imageUrl } : NOT_FOUND_IMG}
        style={{
          justifyContent: "flex-end",
          flexDirection: "column",
          flex: 1,
        }}
        imageStyle={{
          borderColor: Theme.colors.darkWithTransparency,
          borderRadius: Theme.roundness,
          borderWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Theme.colors.darkWithTransparency,
            paddingHorizontal: 4,
            paddingVertical: 2,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            position: "absolute",
            left: 8,
            top: 8,
          }}
        >
          <MaterialCommunityIcons
            name="progress-clock"
            size={12}
            color={Theme.colors.light}
          />
          <Text
            variant="labelSmall"
            style={{
              color: Theme.colors.light,
              marginLeft: 2,
            }}
          >
            {calculateTimestampDiffToNow(date)}
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            padding: 8,
            borderRadius: Theme.roundness,
          }}
        >
          <Text
            variant="labelMedium"
            style={{
              fontWeight: "bold",
              color: Theme.colors.light,
              textShadowColor: Theme.colors.darkWithTransparency,
              textShadowOffset: {
                width: -1,
                height: 1,
              },
              textShadowRadius: 5,
            }}
            numberOfLines={2}
          >
            {title || "-"}
          </Text>
          <Text
            variant="labelSmall"
            style={{
              color: Theme.colors.light,
              textShadowColor: Theme.colors.darkWithTransparency,
              textShadowOffset: {
                width: -1,
                height: 1,
              },
              textShadowRadius: 5,
            }}
            numberOfLines={2}
          >
            {description || ""}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
