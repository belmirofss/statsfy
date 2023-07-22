import { View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { SpotifyTimeRanges } from "../types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { Loading } from "../components/Loading";
import { Top3 } from "../components/Top3/Top3";
import { RankingList } from "../components/RankingList/RankingList";
import { Theme } from "../theme";

type TopTracksParams = {
  TopTracks: {
    timeRange: SpotifyTimeRanges;
  };
};

export const TopArtists = () => {
  const route = useRoute<RouteProp<TopTracksParams, "TopTracks">>();
  const { timeRange } = route.params;
  const { data, isLoading } = useSpotifyTopArtists({ timeRange, limit: 50 });

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
        data={[first, second, third].map((artist) => ({
          title: artist.name,
          imageUrl: artist.images[0]?.url,
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
            imageUrl: item.images[0]?.url,
          }))}
        />
      </View>
    </ScreenContainer>
  );
};
