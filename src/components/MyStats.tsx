import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loading from './Loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ViewShot from "react-native-view-shot";
import logo from '../images/logo_statsfy.png';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import { SpotifyAccount } from '../interfaces/SpotifyAccount';
import SpotifyApi from '../services/SpotifyApi';
import Podium from './Podium';

import * as Sharing from 'expo-sharing'; 
import Admob from '../services/Admob';

export default function MyStats(props: {
    onClose: Function
}) {
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);
    const [spotifyAccountInfo, setSpotifyAccountInfo] = React.useState<SpotifyAccount>({} as SpotifyAccount);
    
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const viewShotRef = React.useRef<any>(null);

    const viewDimensions = {
        height: 0,
        width: 0
    }

    const openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert(
                "Uh oh, sharing isn't available on your device!",
                "",
                [{ text: "OK", onPress: () => null }],
                { cancelable: false }
            );
          return;
        }

        const uri = await viewShotRef.current?.capture();
    
        const options = {
            mimeType: 'image/jpeg',
            dialogTitle: 'Share your stats',
            UTI: 'image/jpeg',
        };

        await Sharing.shareAsync(uri, options);

        Admob.showInterstitial();
    };

    React.useEffect(() => {
        setIsLoading(true);

        Promise.all([
            SpotifyApi.getCurrentUserProfile().then(response => setSpotifyAccountInfo(response.data)),
            SpotifyApi.listTopTracks('short_term', 3).then(response => setTracks(response.data.items)),
            SpotifyApi.listTopArtists('short_term', 3).then(response => setArtists(response.data.items))
        ]).then(() => setIsLoading(false))
    }, []);

    if (isLoading) {
        return (
            <View style={{ height: '80%', width: 250}}>
                <Loading />
            </View>
        )
    }

    return (
        <View style={{height: '80%', borderRadius: 8, padding: 2, backgroundColor: 'white'}}>
            <ScrollView>
                <View style={styles.container}>
                    <ViewShot ref={viewShotRef} options={{
                        format: 'jpg',
                        quality: 1,
                        height: viewDimensions.height,
                        width: viewDimensions.width
                    }}>
                        <View 
                            style={{backgroundColor: 'white', padding: 16}} 
                            onLayout={(event) => { 
                                viewDimensions.width = event.nativeEvent.layout.width;
                                viewDimensions.height = event.nativeEvent.layout.height;
                             }}>
                            <View>
                                <Text style={styles.nameText}>{spotifyAccountInfo.display_name}</Text>
                                <Text style={styles.sectionSubTitle}>Spotify stats last 4 weeks</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Top tracks</Text>

                                <Podium 
                                    data={tracks.map(item => ({
                                        id: item.id,
                                        title: item.name,
                                        subTitle: item.artists.map(item => item.name).join(', '),
                                        image: item.album.images[0]
                                    }))}/>
                            </View>
                            
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Top artists</Text>

                                <Podium 
                                    data={artists.map(item => ({
                                        id: item.id,
                                        title: item.name,
                                        image: item.images[0]
                                    }))}/>
                            </View>

                            <View style={{marginTop: 32}}>
                                <Image
                                    style={styles.logoImage}
                                    source={logo}
                                />
                            </View>
                        </View>
                    </ViewShot>

                    <View style={styles.wrapperButtons}>
                        <TouchableOpacity style={styles.shareMyStatsButton} onPress={() => openShareDialogAsync()}>
                            <MaterialCommunityIcons name="share" size={24} color="white" />
                            <Text style={styles.shareMyStatsText}>Share</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.closeModalButton} onPress={() => props.onClose()}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    section: {
        marginTop: 8
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'clearSansBold'
    },
    sectionSubTitle: {
        fontSize: 16,
        fontFamily: 'clearSansRegular'
    },
    logoImage: {
        width: 100, 
        height: 32
    },
    nameText: {
        fontSize: 32,
        fontFamily: 'clearSansBold',
        color: '#1ED760'
    },
    wrapperButtons: {
        marginTop: 16,
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    shareMyStatsButton: {
        backgroundColor: '#1ED760',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    shareMyStatsText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'clearSansBold',
        marginLeft: 4
    },
    closeModalButton: {
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 100,
        marginTop: 8
    },
    closeModalText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'clearSansBold',
    }
});