import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify-api";
import { SpotifyArtist, SpotifyTimeRangesEnum } from "../types";

type Props = {
  timeRange: SpotifyTimeRangesEnum;
  limit?: number;
};

export default function useSpotifyTopArtists({ timeRange, limit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [artists, setArtists] = useState<SpotifyArtist[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setArtists([]);
    SpotifyApi.listTopArtists(timeRange, limit).then((response) => {
      setArtists(response.data.items);
      setIsLoading(false);
    });
  }, [timeRange, limit]);

  return {
    isLoading,
    artists,
  };
}
