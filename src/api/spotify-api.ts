import { AxiosResponse } from "axios";
import { SpotifyTimeRange } from "../types";
import API from "./api";

const SpotifyApi = {
  listTopTracks: (
    timeRange: SpotifyTimeRange,
    limit: number = 50
  ): Promise<AxiosResponse<any>> => {
    return API.get("v1/me/top/tracks", {
      params: {
        limit,
        offset: 0,
        time_range: timeRange,
      },
    });
  },
  listTopArtists: (
    timeRange: SpotifyTimeRange,
    limit: number = 50
  ): Promise<AxiosResponse<any>> => {
    return API.get("v1/me/top/artists", {
      params: {
        limit,
        offset: 0,
        time_range: timeRange,
      },
    });
  },
  listRecentlyPlayedTracks: (): Promise<AxiosResponse<any>> => {
    return API.get("v1/me/player/recently-played", {
      params: {
        limit: 15,
        offset: 0,
      },
    });
  },
  getCurrentUserProfile: (): Promise<AxiosResponse<any>> => {
    return API.get("v1/me");
  },
};

export default SpotifyApi;
