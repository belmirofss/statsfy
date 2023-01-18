import React from "react";
import { StyleSheet, View } from "react-native";
import { SpotifyImage } from "../../types";
import PodiumItem from "./PodiumItem";

export type PodiumItem = {
  title: string;
  image: SpotifyImage;
  subTitle?: string;
};

type Props = {
  data: PodiumItem[];
};

export default function Podium({ data }: Props) {
  const [second, first, third] = data;

  if (!first || !second || !third) {
    return null;
  }

  return (
    <View style={styles.container}>
      <PodiumItem
        position={2}
        title={second.title}
        subTitle={second.subTitle}
        image={second.image}
      />

      <PodiumItem
        position={1}
        title={first.title}
        subTitle={first.subTitle}
        image={first.image}
      />

      <PodiumItem
        position={3}
        title={third.title}
        subTitle={third.subTitle}
        image={third.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
