import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify-api";
import { SpotifyAccount } from "../types";

export default function useSpotifyAccountInfo() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [spotifyAccountInfo, setSpotifyAccountInfo] =
    useState<SpotifyAccount>();

  useEffect(() => {
    setIsLoading(true);
    SpotifyApi.getCurrentUserProfile().then((response) => {
      setSpotifyAccountInfo(response.data);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    spotifyAccountInfo,
  };
}
