import React from "react";
import { Image, StyleSheet } from "react-native";
import { Theme } from "../../theme";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { SpotifyImage } from "../../types";

type Props = {
  image?: SpotifyImage;
};

export default function AccountImage({ image }: Props) {
  return (
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
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    width: 125,
    height: 125,
    borderColor: Theme.colors.black,
    borderWidth: 2,
  },
});
