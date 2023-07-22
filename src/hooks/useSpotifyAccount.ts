import { useQuery } from "react-query";
import { SpotifyAccount } from "../types";
import API from "../api";

export const useSpotifyAccount = () => {
  return useQuery(["ACCOUNT"], () => API.get<SpotifyAccount>("v1/me"), {
    select: (response) => response.data,
  });
};
