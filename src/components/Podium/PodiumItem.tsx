import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { Theme } from "../../theme";
import { SpotifyImage } from "../../types";

type Props = {
  position: number;
  image: SpotifyImage;
  title: string;
  subTitle?: string;
};

export default function PodiumItem({
  position,
  image,
  title,
  subTitle,
}: Props) {
  const pieceOfWidth = Dimensions.get("window").width / 3;
  const gap = 14;
  const size =
    position == 1 ? pieceOfWidth * 1.25 - gap : pieceOfWidth * 0.875 - gap;
  const color =
    position == 1
      ? Theme.colors.gold
      : position == 2
      ? Theme.colors.silver
      : Theme.colors.bronze;

  return (
    <View
      style={{
        ...styles.container,
        marginTop: position == 1 ? 0 : size * 0.5,
      }}
    >
      <MaterialCommunityIcons
        name="crown"
        size={Theme.fontSizes.extraLarge}
        color={color}
      />
      <Text style={styles.position}>{position}</Text>
      <Image
        style={{
          ...styles.image,
          height: size,
          width: size,
        }}
        source={
          image
            ? {
                uri: image.url,
              }
            : NOT_FOUND_IMG
        }
      />

      <Text
        style={{
          ...styles.title,
          width: size - gap,
        }}
        numberOfLines={3}
      >
        {title || "-"}
      </Text>

      {subTitle && (
        <Text
          style={{
            ...styles.subtitle,
            width: size - gap,
          }}
          numberOfLines={3}
        >
          {subTitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  position: {
    fontSize: Theme.fontSizes.medium,
    marginBottom: 6,
    textAlign: "center",
    fontFamily: Theme.fonts.bold,
  },
  image: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Theme.colors.black,
  },
  title: {
    fontSize: Theme.fontSizes.small,
    marginTop: 6,
    textAlign: "center",
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.black,
  },
  subtitle: {
    fontSize: Theme.fontSizes.extraSmall,
    textAlign: "center",
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.black,
  },
});
