import { Top3 } from "./Top3";
import { formatArtistsToArtistNames } from "../../helpers/formatArtistsToArtistNames";
import { SpotifyTrack } from "../../types";

type Props = {
  tracks: SpotifyTrack[];
};

export const Top3Tracks = ({ tracks }: Props) => {
  return (
    <Top3
      data={tracks.map((track) => ({
        title: track.name,
        description: formatArtistsToArtistNames(track.artists),
        imageUrl: track.album.images[0].url,
      }))}
    />
  );
};
