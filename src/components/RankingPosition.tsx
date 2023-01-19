import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import NOT_FOUND_IMG from "../images/not_found.png";
import { Theme } from "../theme";
import { SpotifyImage } from "../types";

type Props = {
  position: number;
  title: string;
  image: SpotifyImage;
  subTitle?: string;
};

export default function RankingPosition({
  position,
  title,
  image,
  subTitle,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPosition}>
        <Text style={styles.position}>{position}</Text>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.image}
          source={
            image
              ? {
                  uri: image.url,
                }
              : NOT_FOUND_IMG
          }
        />

        <View style={styles.wrapperTitleAndSubTitle}>
          <Text style={styles.title} numberOfLines={2}>
            {title || "-"}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
  },
  content: {
    flexDirection: "row",
    height: 100,
    flex: 1,
    alignItems: "center",
    paddingRight: 24,
    paddingLeft: 12,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: Theme.colors.gray,
    borderRadius: 100,
  },
  wrapperTitleAndSubTitle: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  wrapperPosition: {
    width: 36,
    justifyContent: "center",
  },
  position: {
    display: "flex",
    fontSize: Theme.fontSizes.medium,
    textAlign: "center",
    fontFamily: Theme.fonts.bold,
    width: 36,
    justifyContent: "center",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Theme.colors.black,
  },
  title: {
    fontSize: Theme.fontSizes.small,
    fontFamily: Theme.fonts.bold,
  },
  subTitle: {
    fontSize: Theme.fontSizes.extraSmall,
    fontFamily: Theme.fonts.regular,
  },
});
