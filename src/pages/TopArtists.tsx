import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loading from "../components/Loading";
import Podium from "../components/Podium/Podium";
import RankingPosition from "../components/RankingPosition";
import useSpotifyTopArtists from "../hooks/useSpotifyTopArtists";
import { SpotifyTimeRanges } from "../types";

type Props = {
  timeRange: SpotifyTimeRanges;
};

export default function TopArtists({ timeRange }: Props) {
  const { artists, isLoading } = useSpotifyTopArtists({ timeRange });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Podium
          data={artists.map((item) => ({
            id: item.id,
            title: item.name,
            image: item.images[0],
          }))}
        />

        <View style={styles.wrapperRanking}>
          {artists.slice(3).map((item, index) => (
            <RankingPosition
              key={item.id}
              title={item.name}
              image={item.images[0]}
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
