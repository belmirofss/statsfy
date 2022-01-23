import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SpotifyAccount } from '../interfaces/SpotifyAccount';
import SpotifyApi from '../services/SpotifyApi';
import Loading from './Loading';
import notFound from '../images/not_found.png';

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
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={spotifyAccountInfo.images[0] ? {
                    uri: spotifyAccountInfo.images[0].url
                } : notFound}
            />

            <Text style={styles.nameText}>[{spotifyAccountInfo.country.toUpperCase()}] { spotifyAccountInfo.display_name }</Text>
            <Text style={styles.emailText}>{spotifyAccountInfo.email} | {spotifyAccountInfo.product} account</Text>
        </View>
    );
}

const widthWindow = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    loadingContainer: {
        height: 170
    },
    profileImage: {
        borderRadius: 100,
        width: 125,
        height: 125,
        borderColor: 'whitesmoke',
        borderWidth: 1
    },
    nameText: {
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
        width: widthWindow
    },
    emailText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'clearSansRegular',
        color: 'gray',
        width: widthWindow
    }
})