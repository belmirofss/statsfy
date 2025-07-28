import { useRef } from "react";
import { Platform, View } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from "react-native-google-mobile-ads";
import { Theme } from "../theme";

type Props = {
  adUnitId: string;
};

export const AdBanner = ({ adUnitId }: Props) => {
  const bannerRef = useRef<BannerAd>(null);

  const _adUnitId = __DEV__ ? TestIds.BANNER : adUnitId;

  // (iOS) WKWebView can terminate if app is in a "suspended state",
  // resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is
  // foregrounded
  // (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === "ios" && bannerRef.current?.load();
  });

  return (
    <View style={{ marginVertical: Theme.space.m }}>
      <BannerAd
        ref={bannerRef}
        unitId={_adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};
