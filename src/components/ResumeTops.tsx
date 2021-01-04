import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import {Picker} from '@react-native-picker/picker';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import SpotifyApi from '../services/SpotifyApi';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import Podium from './Podium';

const PodiumToShow = (props: { 
    mode: 'tracks' | 'artists' 
}) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);

    React.useEffect(() => {
        setIsLoading(true);
    }, [props.mode]);    

    if (isLoading) {
        if (props.mode === 'tracks') {
            SpotifyApi.listTopTracks('short_term', 3).then(response => {
                setTracks(response.data.items);
                setIsLoading(false);
            });
        } else if (props.mode === 'artists') {
            SpotifyApi.listTopArtists('short_term', 3).then(response => {
                setArtists(response.data.items);
                setIsLoading(false);
            });
        }

        return (
            <View style={styles.loadingContainer}>
                <Loading />
            </View>
        )
    }

    if (props.mode === 'tracks') {
        return (
            <View>
                <Podium data={tracks.map(item => ({
                    id: item.id,
                    title: item.name,
                    subTitle: item.artists.map(item => item.name).join(', '),
                    image: item.album.images[0]
                }))}/>
            </View>
        );
    }

    if (props.mode === 'artists') {
        return (
            <View>
                <Podium data={artists.map(item => ({
                    id: item.id,
                    title: item.name,
                    image: item.images[0]
                }))}/>
            </View>
        )
    }

    return null;
}

export default function ResumeTops() {

    const [mode, setMode] = React.useState<'tracks' | 'artists'>('tracks');

    return (
        <View>
            <View style={styles.wrapperTitle}>
                <Text style={styles.titleText}>Top</Text>
                <Picker
                    style={styles.pickerTracksOrArtists}
                    itemStyle={styles.pickerItem}
                    selectedValue={mode} 
                    onValueChange={(value) => setMode(value as 'tracks' | 'artists')}>
                    <Picker.Item label="Tracks" value="tracks" />
                    <Picker.Item label="Artists" value="artists" />
                </Picker>
            </View>
            
            <Text style={styles.subTitleText}>
                Last 4 weeks
            </Text>

            <PodiumToShow mode={mode}/>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: 200
    },
    wrapperTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'clearSansBold',
    },
    subTitleText: {
        fontSize: 16,
        fontFamily: 'clearSansRegular'
    },
    pickerTracksOrArtists: {
        marginLeft: 4,
        fontSize: 24,
        fontFamily: 'clearSansBold',
        width: 150,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    pickerItem: {
        color: 'black'
    }
})