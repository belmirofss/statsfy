import { SpotifyTimeRangesEnum } from "../types";
import useSpotifyTopArtists from "./useSpotifyTopArtists";
import useSpotifyTopTracks from "./useSpotifyTopTracks";

type Props = {
  timeRange: SpotifyTimeRangesEnum;
};

export default function useSpotifyTopsData({ timeRange }: Props) {
  const { tracks, isLoading: isLoadingTracks } = useSpotifyTopTracks({
    timeRange,
    limit: 3,
  });
  const { artists, isLoading: isLoadingArtists } = useSpotifyTopArtists({
    timeRange,
    limit: 3,
  });

  return {
    isLoading: isLoadingTracks || isLoadingArtists,
    tracks,
    artists,
  };
}
