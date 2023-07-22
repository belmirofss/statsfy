import { useQuery } from "react-query";
import {
  SpotifyArtist,
  SpotifyTimeRanges,
  SpotifyItemsResponse,
} from "../types";
import API from "../api";

type Props = {
  timeRange: SpotifyTimeRanges;
  limit?: number;
};

export const useSpotifyTopArtists = ({ timeRange, limit = 50 }: Props) => {
  return useQuery(
    ["TOP_ARTISTS", timeRange, limit],
    () =>
      API.get<SpotifyItemsResponse<SpotifyArtist>>("v1/me/top/artists", {
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
