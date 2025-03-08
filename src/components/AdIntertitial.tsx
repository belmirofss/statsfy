import { useEffect, useState } from "react";
import { Snackbar, Portal } from "react-native-paper";
import { useInterstitialAd, TestIds } from "react-native-google-mobile-ads";
import { useAppContext } from "../hooks/useAppContext";
import { AD_INTERTITIAL_UNIT_ID } from "../constants";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : AD_INTERTITIAL_UNIT_ID;

export const AdIntertitial = () => {
  const [visible, setVisible] = useState(false);
  const { adShowed, markAdAsShowed, isSubscribed } = useAppContext();
  const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    if (isLoaded && !adShowed) {
      setVisible(true);
    }
  }, [isLoaded, adShowed]);

  useEffect(() => {
    load();
  }, [load]);

  const showAd = () => {
    show();
    markAdAsShowed();
    setVisible(false);
  };

  if (isSubscribed) {
    return null;
  }

  return (
    <Portal>
      <Snackbar
        visible={visible}
        onDismiss={showAd}
        action={{
          label: "Ok",
          onPress: showAd,
        }}
        duration={3000}
      >
        Showing ad in 3 seconds. Ad helps us to mantain the app.
      </Snackbar>
    </Portal>
  );
};
