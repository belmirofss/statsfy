import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SpotifyAccount } from '../interfaces/SpotifyAccount';
import SpotifyApi from '../services/SpotifyApi';
import Loading from './Loading';

export default function SpotifyAccountInfo() {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [spotifyAccountInfo, setSpotifyAccountInfo] = React.useState<SpotifyAccount>({} as SpotifyAccount);

    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.getCurrentUserProfile().then(response => {
            setSpotifyAccountInfo(response.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Loading />
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.titleText}>Your Spotify account</Text>

            <View style={styles.wrapperInfos}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: 200
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'clearSansBold',
    },
    wrapperInfos: {
        marginTop: 8
    }
})