import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../../theme";
import { SpotifyHistoryTrack } from "../../types";
import RecentlyPlayedListItem from "./RecentlyPlayedListItem";

type Props = {
  recentlyPlayed: SpotifyHistoryTrack[];
};

export default function RecentlyPlayedList({ recentlyPlayed }: Props) {
  return (
    <>
      <Text style={styles.title}>Recently played</Text>
      <View style={styles.wrapperItems}>
        {recentlyPlayed.map((item) => (
          <RecentlyPlayedListItem
            key={item.track.id}
            title={item.track.name}
            date={item.played_at}
            subTitle={item.track.artists.map((item) => item.name).join(", ")}
            image={item.track.album.images[0]}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapperItems: {
    marginTop: 8,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: Theme.fontSizes.large,
    fontFamily: Theme.fonts.bold,
  },
});
