import React, { useState, useEffect } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import RecentlyPlayedList from "./RecentlyPlayedList";
import ResumeTops from "./ResumeTops";
import MyStatsModal from "./MyStatsModal";
import RountedButton from "../../components/RoundedButton";
import useSpotifyRecentlyPlayed from "../../hooks/useSpotifyRecentlyPlayed";
import { SpotifyModes, SpotifyTimeRanges } from "../../types";
import useSpotifyTopsData from "../../hooks/useSpotifyTopsData";
import { Theme } from "../../theme";
import Loading from "../../components/Loading";

export default function Resume() {
  const [selectedMode, setSelectedModel] = useState<SpotifyModes>(
    SpotifyModes.TRACKS
  );
  const [myStatsModalIsVisible, setMyStatsModalIsVisible] = useState(false);

  const {
    tracks,
    artists,
    isLoading: isLoadingTopsData,
  } = useSpotifyTopsData({ timeRange: SpotifyTimeRanges.SHORT });

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
