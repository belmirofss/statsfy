import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify-api";
import { SpotifyTimeRanges, SpotifyTrack } from "../types";

type Props = {
  timeRange: SpotifyTimeRanges;
  limit?: number;
};

export default function useSpotifyTopTracks({ timeRange, limit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTracks([]);
    SpotifyApi.listTopTracks(timeRange, limit).then((response) => {
      setTracks(response.data.items);
      setIsLoading(false);
    });
  }, [timeRange, limit]);

  return {
    isLoading,
    tracks,
  };
}
