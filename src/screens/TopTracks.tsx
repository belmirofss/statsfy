import { View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useSpotifyTopTracks } from "../hooks/useSpotifyTopTracks";
import { SpotifyTimeRanges } from "../types";
import { Loading } from "../components/Loading";
import { Top3 } from "../components/Top3/Top3";
import { formatArtistsToArtistNames } from "../helpers/formatArtistsToArtistNames";
import { RankingList } from "../components/RankingList/RankingList";
import { Theme } from "../theme";

type TopTracksParams = {
  TopTracks: {
    timeRange: SpotifyTimeRanges;
  };
};

export const TopTracks = () => {
  const route = useRoute<RouteProp<TopTracksParams, "TopTracks">>();
  const { timeRange } = route.params;
  const { data, isLoading } = useSpotifyTopTracks({ timeRange, limit: 50 });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  const [first, second, third, ...others] = data;

  return (
    <ScreenContainer>
      <Top3
        data={[first, second, third].map((track) => ({
          title: track.name,
          description: formatArtistsToArtistNames(track.artists),
          imageUrl: track.album.images[0].url,
        }))}
      />
      <View
        style={{
          marginTop: Theme.space.s,
        }}
      >
        <RankingList
          data={others.map((item, index) => ({
            position: index + 4,
            title: item.name,
            description: formatArtistsToArtistNames(item.artists),
            imageUrl: item.album.images[0]?.url,
          }))}
        />
      </View>
    </ScreenContainer>
  );
};
