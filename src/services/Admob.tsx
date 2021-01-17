import Constants from 'expo-constants';

import { AdMobInterstitial } from 'expo-ads-admob';

const testID = 'ca-app-pub-3940256099942544/1033173712';
const productionId  = 'ca-app-pub-6575307967199593/6314123145';

const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;

const Admob = {
    showInterstitial: async () => {
        await AdMobInterstitial.setAdUnitID(adUnitID);
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }
}

export default Admob;