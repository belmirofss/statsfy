import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";
import { useAppContext } from "./useAppContext";
import { ENTITLEMENT_IDENTIFIER } from "../constants";

export const usePaywall = () => {
  const { markAsSubscribed } = useAppContext();

  const handlePaywall = async () => {
    const paywallResult: PAYWALL_RESULT =
      await RevenueCatUI.presentPaywallIfNeeded({
        requiredEntitlementIdentifier: ENTITLEMENT_IDENTIFIER,
      });

    if (
      [PAYWALL_RESULT.PURCHASED, PAYWALL_RESULT.RESTORED].includes(
        paywallResult
      )
    ) {
      return markAsSubscribed();
    }
  };

  return { handlePaywall };
};
