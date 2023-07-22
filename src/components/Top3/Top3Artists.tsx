import { Top3 } from "./Top3";
import { SpotifyArtist } from "../../types";

type Props = {
  artists: SpotifyArtist[];
};

export const Top3Artists = ({ artists }: Props) => {
  return (
    <Top3
      data={artists?.map((artist) => ({
        title: artist.name,
        imageUrl: artist.images[0].url,
      }))}
    />
  );
};
