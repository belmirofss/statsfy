import { useQuery } from "react-query";
import API from "../api";
import { SpotifyHistoryTrack, SpotifyItemsResponse } from "../types";

export const useSpotifyRecentlyPlayed = () => {
  return useQuery(
    ["RECENTLY_PLAYED"],
    () =>
      API.get<SpotifyItemsResponse<SpotifyHistoryTrack>>("v1/me/player/recently-played", {
        params: {
          limit: 15,
          offset: 0,
        },
      }),
    {
      select: (response) => response.data.items,
    }
  );
};
