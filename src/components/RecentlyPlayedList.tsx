import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayHistoryTrack } from '../interfaces/PlayHistoryTrack';
import SpotifyApi from '../services/SpotifyApi';
import ListPosition from './ListPosition';
import Loading from './Loading';

export default function RecentlyPlayedList() {

    const [history, setHistory] = React.useState<PlayHistoryTrack[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.listRecentlyPlayedTracks().then(
            response => {
                setHistory(response.data.items);
                setIsLoading(false);
            }
        );
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Loading />
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.titleText}>Recently played</Text>
            <View style={styles.containerItems}>
                {
                    history.map((item, index) => {
                        return (
                            <ListPosition
                                key={index}
                                title={item.track.name}
                                date={item.played_at}
                                subTitle={item.track.artists.map(item => item.name).join(', ')}
                                image={item.track.album.images[0]}
                            />
                        )
                    }) 
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerItems: {
        marginTop: 8,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    loadingContainer: {
        height: 300
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'clearSansBold',
    }
});