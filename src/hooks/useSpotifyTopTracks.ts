import { useQuery } from "react-query";
import {
  SpotifyTimeRanges,
  SpotifyItemsResponse,
  SpotifyTrack,
} from "../types";
import API from "../api";

type Props = {
  timeRange: SpotifyTimeRanges;
  limit?: number;
};

export const useSpotifyTopTracks = ({ timeRange, limit = 50 }: Props) => {
  return useQuery(
    ["TOP_TRACKS", timeRange, limit],
    () =>
      API.get<SpotifyItemsResponse<SpotifyTrack>>("v1/me/top/tracks", {
        params: {
          limit,
          offset: 0,
          time_range: timeRange,
        },
      }),
    {
      select: (response) => response.data.items,
    }
  );
};
