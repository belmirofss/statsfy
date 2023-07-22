import { SpotifyArtist } from "../types";

export const formatArtistsToArtistNames = (artists: SpotifyArtist[]): string => artists.map((item) => item.name).join(", ")