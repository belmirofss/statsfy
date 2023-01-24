import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import Loading from "../../components/Loading";
import RountedButton from "../../components/RoundedButton";
import useSpotifyRecentlyPlayed from "../../hooks/useSpotifyRecentlyPlayed";
import useSpotifyTopsData from "../../hooks/useSpotifyTopsData";
import { Theme } from "../../theme";
import { SpotifyModesEnum, SpotifyTimeRangesEnum } from "../../types";
import MyStatsModal from "./MyStatsModal";
import RecentlyPlayedList from "./RecentlyPlayedList";
import ResumeTops from "./ResumeTops";

export default function Resume() {
  const [selectedMode, setSelectedModel] = useState<SpotifyModesEnum>(
    SpotifyModesEnum.TRACKS
  );
  const [myStatsModalIsVisible, setMyStatsModalIsVisible] = useState(false);

  const {
    tracks,
    artists,
    isLoading: isLoadingTopsData,
  } = useSpotifyTopsData({ timeRange: SpotifyTimeRangesEnum.SHORT });

  const { recentlyPlayed, isLoading: isLoadingRecentlyPlayed } =
    useSpotifyRecentlyPlayed();

  if (isLoadingTopsData || isLoadingRecentlyPlayed) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={myStatsModalIsVisible}
          onRequestClose={() => setMyStatsModalIsVisible(false)}
        >
          <View style={styles.wrapperMyStatsModal}>
            <MyStatsModal close={() => setMyStatsModalIsVisible(false)} />
          </View>
        </Modal>

        <RountedButton
          onPress={() => setMyStatsModalIsVisible(true)}
          label="Share"
          type="primary"
        />

        <View style={styles.section}>
          <ResumeTops
            selectedMode={selectedMode}
            onSelectedModeChanges={(newSelectedModel) =>
              setSelectedModel(newSelectedModel)
            }
            tracks={tracks}
            artists={artists}
          />
        </View>

        <View style={styles.section}>
          <RecentlyPlayedList recentlyPlayed={recentlyPlayed} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  wrapperMyStatsModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.blackWithTransparency,
  },
  section: {
    marginTop: 12,
  },
});
