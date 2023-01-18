export type SpotifyAccount = {
  country: string;
  display_name: string;
  followers: {
    total: number;
  };
  id: string;
  images: SpotifyImage[];
  product: "free" | "premium";
  email: string;
};

export type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

export type SpotifyAlbum = {
  id: string;
  name: string;
  images: SpotifyImage[];
};

export type SpotifyArtist = {
  id: string;
  name: string;
  images: SpotifyImage[];
};

export type SpotifyTrack = {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
};

export type SpotifyHistoryTrack = {
  track: SpotifyTrack;
  played_at: string;
};

export type SpotifyTimeRange = "long_term" | "medium_term" | "short_term";

export enum SpotifyModesEnum {
  TRACKS = "tracks",
  ARTISTS = "artists",
}

export enum SpotifyTimeRangesEnum {
  LONG = "long_term",
  MEDIUM = "medium_term",
  SHORT = "short_term",
}
