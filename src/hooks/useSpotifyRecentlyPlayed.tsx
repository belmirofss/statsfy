import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify-api";
import { SpotifyHistoryTrack } from "../types";

export default function useSpotifyRecentlyPlayed() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyHistoryTrack[]>(
    []
  );

  useEffect(() => {
    setIsLoading(true);
    SpotifyApi.listRecentlyPlayedTracks().then((response) => {
      setRecentlyPlayed(response.data.items);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    recentlyPlayed,
  };
}
