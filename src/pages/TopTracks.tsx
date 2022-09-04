import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loading from "../components/Loading";
import Podium from "../components/Podium/Podium";
import RankingPosition from "../components/RankingPosition";
import useSpotifyTopTracks from "../hooks/useSpotifyTopTracks";
import { SpotifyTimeRanges } from "../types";

type Props = {
  timeRange: SpotifyTimeRanges;
};

export default function TopTracks({ timeRange }: Props) {
  const { tracks, isLoading } = useSpotifyTopTracks({ timeRange });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Podium
          data={tracks.map((item) => ({
            id: item.id,
            title: item.name,
            subTitle: item.artists.map((item) => item.name).join(", "),
            image: item.album.images[0],
          }))}
        />

        <View style={styles.wrapperRanking}>
          {tracks.slice(3).map((item, index) => (
            <RankingPosition
              key={item.id}
              title={item.name}
              subTitle={item.artists.map((item) => item.name).join(", ")}
              image={item.album.images[0]}
              position={index + 4}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
  },
  wrapperRanking: {
    marginTop: 8,
  },
});
