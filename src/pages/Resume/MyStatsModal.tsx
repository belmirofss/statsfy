import React, { useRef, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Loading from "../../components/Loading";
import ViewShot from "react-native-view-shot";
import Podium from "../../components/Podium/Podium";
import Picker from "../../components/Picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Sharing from "expo-sharing";
import { SpotifyTimeRanges } from "../../types";
import useSpotifyTopsData from "../../hooks/useSpotifyTopsData";
import useSpotifyAccountInfo from "../../hooks/useSpotifyAccountInfo";
import { Theme } from "../../theme";
import LogoImage from "../../components/LogoImage";
import RountedButton from "../../components/RoundedButton";
import useAlert from "../../hooks/useAlert";

type Props = {
  close: () => void;
};

export default function MyStatsModal({ close }: Props) {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRanges>(
    SpotifyTimeRanges.SHORT
  );

  const {
    tracks,
    artists,
    isLoading: isLoadingTopsData,
  } = useSpotifyTopsData({ timeRange });
  const { spotifyAccountInfo, isLoading: isLoadingAccountInfo } =
    useSpotifyAccountInfo();
  const alert = useAlert();

  const viewShotRef = useRef<any>();

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Uh oh, sharing isn't available on your device!");
      return;
    }

    if (viewShotRef.current) {
      const uri = await viewShotRef.current.capture();

      const options = {
        mimeType: "image/jpeg",
        dialogTitle: "Share your stats",
        UTI: "image/jpeg",
      };

      await Sharing.shareAsync(uri, options);
    }
  };

  if (isLoadingTopsData || isLoadingAccountInfo) {
    return (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Picker
            onValueChange={(value) => setTimeRange(value as SpotifyTimeRanges)}
            items={[
              {
                label: "Stats of last 4 weeks",
                value: SpotifyTimeRanges.SHORT,
              },
              {
                label: "Stats of last 6 months",
                value: SpotifyTimeRanges.MEDIUM,
              },
              { label: "Stats of alltime", value: SpotifyTimeRanges.LONG },
            ]}
            value={timeRange}
            width={250}
            fontSize={Theme.fontSizes.medium}
          />

          <TouchableOpacity onPress={close}>
            <MaterialCommunityIcons
              name="close"
              size={Theme.fontSizes.extraLarge}
              color={Theme.colors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperViewShow}>
          <ViewShot
            ref={viewShotRef}
            options={{
              format: "jpg",
              quality: 1,
            }}
          >
            <View style={styles.wrapperCaptureContent}>
              <Text style={styles.nameText}>
                {spotifyAccountInfo?.display_name || "My Spotify Stats"}
              </Text>
              <Text style={styles.sectionSubTitle}>
                Spotify stats of{" "}
                {timeRange === "short_term"
                  ? "last 4 weeks"
                  : timeRange === "medium_term"
                  ? "last 6 months"
                  : "all time"}
              </Text>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top tracks</Text>

                <Podium
                  data={tracks.map((item) => ({
                    id: item.id,
                    title: item.name,
                    subTitle: item.artists.map((item) => item.name).join(", "),
                    image: item.album.images[0],
                  }))}
                />
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top artists</Text>

                <Podium
                  data={artists.map((item) => ({
                    id: item.id,
                    title: item.name,
                    image: item.images[0],
                  }))}
                />
              </View>

              <View style={styles.wrapperLogo}>
                <LogoImage size="mini" />
              </View>
            </View>
          </ViewShot>

          <View style={styles.wrapperShareButton}>
            <RountedButton
              label="Share"
              type="primary"
              onPress={openShareDialogAsync}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: "90%",
    minWidth: "100%",
  },
  container: {
    height: "90%",
    borderRadius: 8,
    padding: 2,
    backgroundColor: Theme.colors.white,
    minWidth: "100%",
  },
  wrapperCaptureContent: {
    backgroundColor: "white",
    padding: 16,
  },
  wrapperLogo: {
    marginTop: 32,
  },
  wrapperViewShow: {
    alignItems: "center",
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: Theme.fontSizes.large,
    fontFamily: Theme.fonts.bold,
  },
  sectionSubTitle: {
    fontSize: Theme.fontSizes.medium,
    fontFamily: Theme.fonts.regular,
  },
  nameText: {
    fontSize: Theme.fontSizes.extraLarge,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.primary,
  },
  wrapperShareButton: {
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
