import { View } from "react-native";
import { SpotifyHistoryTrack } from "../../types";
import { ResumeRecentlyPlayedListItem } from "./ResumeRecentlyPlayedListItem";
import { formatArtistsToArtistNames } from "../../helpers/formatArtistsToArtistNames";

type Props = {
  recentlyPlayed: SpotifyHistoryTrack[];
};

export const ResumeRecentlyPlayedList = ({ recentlyPlayed }: Props) => {
  return (
    <View
      style={{
        marginTop: 8,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {recentlyPlayed.map((item) => (
        <ResumeRecentlyPlayedListItem
          key={item.track.id}
          title={item.track.name}
          date={item.played_at}
          description={formatArtistsToArtistNames(item.track.artists)}
          imageUrl={item.track.album.images[0]?.url}
        />
      ))}
    </View>
  );
};
