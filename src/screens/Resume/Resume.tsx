import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScreenContainer } from "../../components/ScreenContainer";
import { SpotifyModes, SpotifyTimeRanges } from "../../types";
import { Picker } from "../../components/Picker";
import { Theme } from "../../theme";
import { useSpotifyTopArtists } from "../../hooks/useSpotifyTopArtists";
import { useSpotifyTopTracks } from "../../hooks/useSpotifyTopTracks";
import { Loading } from "../../components/Loading";
import { useSpotifyRecentlyPlayed } from "../../hooks/useSpotifyRecentlyPlayed";
import { ResumeRecentlyPlayedList } from "./ResumeRecentlyPlayedList";
import { Button } from "../../components/Button";
import { Top3Tracks } from "../../components/Top3/Top3Tracks";
import { Top3Artists } from "../../components/Top3/Top3Artists";
import { useNavigation } from "@react-navigation/native";
import { AdBanner } from "../../components/AdBanner";
import { AD_BANNER_RESUME_UNIT_ID } from "../../constants";

export const Resume = () => {
  const navigation = useNavigation();

  const [selectedMode, setSelectedMode] = useState<SpotifyModes>(
    SpotifyModes.TRACKS
  );

  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useSpotifyTopArtists({
      timeRange: SpotifyTimeRanges.SHORT,
      limit: 3,
    });

  const { data: topTracks, isLoading: isLoadingTopTracks } =
    useSpotifyTopTracks({
      timeRange: SpotifyTimeRanges.SHORT,
      limit: 3,
    });

  const { data: recentlyPlayed, isLoading: isLoadingRecentlyPlayed } =
    useSpotifyRecentlyPlayed();

  if (isLoadingTopArtists || isLoadingTopTracks || isLoadingRecentlyPlayed) {
    return <Loading />;
  }

  if (!topTracks || !topArtists || !recentlyPlayed) {
    return null;
  }

  return (
    <ScreenContainer>
      <Button onPress={() => navigation.navigate("Share")}>Share</Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: Theme.space.xs,
          marginTop: Theme.space.s,
        }}
      >
        <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
          Top{" "}
        </Text>
        <Picker
          selectedValue={selectedMode}
          onSelection={(value) => setSelectedMode(value as SpotifyModes)}
          items={[
            {
              value: SpotifyModes.TRACKS,
              text: "Tracks",
            },
            {
              value: SpotifyModes.ARTISTS,
              text: "Artists",
            },
          ]}
        />
      </View>
      <Text variant="titleLarge">Last 4 weeks</Text>
      {selectedMode === SpotifyModes.TRACKS && (
        <Top3Tracks tracks={topTracks} />
      )}
      {selectedMode === SpotifyModes.ARTISTS && (
        <Top3Artists artists={topArtists} />
      )}

      <AdBanner adUnitId={AD_BANNER_RESUME_UNIT_ID} />

      <Text
        variant="headlineMedium"
        style={{
          fontWeight: "bold",
          marginTop: Theme.space.s,
          marginBottom: Theme.space.xs,
        }}
      >
        Recently played
      </Text>
      <ResumeRecentlyPlayedList recentlyPlayed={recentlyPlayed} />
    </ScreenContainer>
  );
};
