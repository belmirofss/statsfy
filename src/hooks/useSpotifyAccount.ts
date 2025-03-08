import { useQuery } from "react-query";
import { SpotifyAccount } from "../types";
import API from "../api";

type Props = {
  enabled?: boolean;
};

export const useSpotifyAccount = ({ enabled = true }: Props = {}) => {
  return useQuery(["ACCOUNT"], () => API.get<SpotifyAccount>("v1/me"), {
    select: (response) => response.data,
    enabled,
  });
};
