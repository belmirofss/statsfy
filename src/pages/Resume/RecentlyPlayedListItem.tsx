import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { SpotifyImage } from "../../types";
import { calculateTimestampDiffToNow } from "../../utils";
import { Theme } from "../../theme";

type Props = {
  image: SpotifyImage;
  title: string;
  subTitle: string;
  date: string;
};

export default function RecentlyPlayedListItem({
  image,
  title,
  subTitle,
  date,
}: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image ? { uri: image.url } : NOT_FOUND_IMG}
        style={styles.containerImageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.wrapperTimer}>
          <MaterialCommunityIcons
            name="progress-clock"
            size={Theme.fontSizes.extraSmall}
            color={Theme.colors.white}
          />
          <Text style={styles.timerText}>
            {calculateTimestampDiffToNow(date)}
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.linearGradient}
        >
          <Text style={styles.titleText} numberOfLines={3}>
            {title || "-"}
          </Text>
          <Text style={styles.subTitleText} numberOfLines={2}>
            {subTitle || " "}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const cardSize = Dimensions.get("window").width / 3 - 14;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    height: cardSize,
    width: cardSize,
  },
  containerImageBackground: {
    justifyContent: "flex-end",
    flexDirection: "column",
    flex: 1,
  },
  linearGradient: {
    padding: 8,
    borderRadius: 8,
  },
  image: {
    borderRadius: 8,
  },
  titleText: {
    fontSize: Theme.fontSizes.extraSmall,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.white,
    textShadowColor: Theme.colors.blackWithTransparency,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 5,
  },
  subTitleText: {
    fontSize: Theme.fontSizes.mini,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
    textShadowColor: Theme.colors.blackWithTransparency,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 5,
  },
  wrapperTimer: {
    flexDirection: "row",
    backgroundColor: Theme.colors.blackWithTransparency,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: "absolute",
    left: 8,
    top: 8,
  },
  timerText: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.mini,
    marginLeft: 2,
    fontFamily: Theme.fonts.regular,
  },
});
