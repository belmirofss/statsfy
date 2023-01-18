import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker from "../../components/Picker";
import Podium, { PodiumItem } from "../../components/Podium/Podium";
import { Theme } from "../../theme";
import { SpotifyArtist, SpotifyModes, SpotifyTrack } from "../../types";

type Props = {
  tracks: SpotifyTrack[];
  artists: SpotifyArtist[];
  selectedMode: SpotifyModes;
  onSelectedModeChanges: (selectedMode: SpotifyModes) => void;
};

export default function ResumeTops({
  tracks,
  artists,
  selectedMode,
  onSelectedModeChanges,
}: Props) {
  let podiumData: PodiumItem[];

  if (selectedMode === SpotifyModes.ARTISTS) {
    podiumData = artists.map((item) => ({
      id: item.id,
      title: item.name,
      image: item.images[0],
    }));
  } else {
    podiumData = tracks.map((item) => ({
      id: item.id,
      title: item.name,
      subTitle: item.artists.map((item) => item.name).join(", "),
      image: item.album.images[0],
    }));
  }

  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Top</Text>
        <Picker
          onValueChange={(value) =>
            onSelectedModeChanges(value as SpotifyModes)
          }
          items={[
            { label: "Tracks", value: SpotifyModes.TRACKS },
            { label: "Artists", value: SpotifyModes.ARTISTS },
          ]}
          value={selectedMode}
          width={150}
          fontSize={Theme.fontSizes.large}
        />
      </View>

      <Text style={styles.subTitle}>Last 4 weeks</Text>

      <Podium data={podiumData} />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: 200,
  },
  wrapperTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: Theme.fontSizes.large,
    fontFamily: Theme.fonts.bold,
  },
  subTitle: {
    fontSize: Theme.fontSizes.medium,
    fontFamily: Theme.fonts.regular,
  },
});
