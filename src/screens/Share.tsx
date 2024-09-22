import { View } from "react-native";
import { useRef, useState } from "react";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SpotifyTimeRanges } from "../types";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { useSpotifyTopTracks } from "../hooks/useSpotifyTopTracks";
import { Loading } from "../components/Loading";
import { useAlert } from "../hooks/useAlert";
import { ScreenContainer } from "../components/ScreenContainer";
import { useSpotifyAccount } from "../hooks/useSpotifyAccount";
import { IconButton, Text } from "react-native-paper";
import { Top3Artists } from "../components/Top3/Top3Artists";
import { Top3Tracks } from "../components/Top3/Top3Tracks";
import { Theme } from "../theme";
import { Button } from "../components/Button";
import { Picker } from "../components/Picker";
import { useNavigation } from "@react-navigation/native";
import { AdBanner } from "../components/AdBanner";
import { AD_BANNER_SHARE_UNIT_ID } from "../constants";

const TIME_RANGE_TEXT = {
  [SpotifyTimeRanges.SHORT]: "last 4 weeks",
  [SpotifyTimeRanges.MEDIUM]: "last 6 months",
  [SpotifyTimeRanges.LONG]: "all time",
};

export const Share = () => {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRanges>(
    SpotifyTimeRanges.SHORT
  );

  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useSpotifyTopArtists({
      timeRange,
      limit: 3,
    });

  const { data: topTracks, isLoading: isLoadingTopTracks } =
    useSpotifyTopTracks({
      timeRange,
      limit: 3,
    });

  const { data: account, isLoading: isLoadingAccount } = useSpotifyAccount();

  const alert = useAlert();
  const navigation = useNavigation();

  const viewShotRef = useRef<ViewShot>(null);

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Whoops! Sharing isn't available on your device!");
      return;
    }

    if (viewShotRef.current?.capture) {
      const uri = await viewShotRef.current.capture();

      const options = {
        mimeType: "image/jpeg",
        dialogTitle: "Share your stats",
        UTI: "image/jpeg",
      };

      await Sharing.shareAsync(uri, options);
    }
  };

  if (isLoadingTopArtists || isLoadingTopTracks || isLoadingAccount) {
    return <Loading />;
  }

  if (!topTracks || !topArtists || !account) {
    return null;
  }

  return (
    <ScreenContainer
      style={{
        padding: 0,
      }}
    >
      <View
        style={{
          padding: Theme.space.s,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Picker
          selectedValue={timeRange}
          onSelection={(value) => setTimeRange(value as SpotifyTimeRanges)}
          items={[
            {
              text: "Last 4 weeks",
              value: SpotifyTimeRanges.SHORT,
            },
            {
              text: "Last 6 months",
              value: SpotifyTimeRanges.MEDIUM,
            },
            { text: "All time", value: SpotifyTimeRanges.LONG },
          ]}
        />
        <IconButton
          icon={() => <MaterialCommunityIcons name="close" size={32} />}
          onPress={navigation.goBack}
        />
      </View>
      <ViewShot
        ref={viewShotRef}
        options={{
          format: "jpg",
          quality: 1,
        }}
      >
        <View
          style={{
            backgroundColor: Theme.colors.light,
            padding: Theme.space.s,
          }}
        >
          <View
            style={{
              marginBottom: Theme.space.s,
            }}
          >
            <Text
              variant="headlineMedium"
              style={{ fontWeight: "bold", color: Theme.colors.primary }}
            >
              {account.display_name}
            </Text>
            <Text variant="titleLarge">
              Spotify stats of {TIME_RANGE_TEXT[timeRange]}
            </Text>
          </View>

          <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
            Top tracks
          </Text>
          <Top3Tracks tracks={topTracks} />
          <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
            Top artists
          </Text>
          <Top3Artists artists={topArtists} />
        </View>
      </ViewShot>
      <View style={{ padding: Theme.space.s }}>
        <Button onPress={openShareDialog}>Share</Button>
      </View>

      <AdBanner adUnitId={AD_BANNER_SHARE_UNIT_ID} />
    </ScreenContainer>
  );
};
