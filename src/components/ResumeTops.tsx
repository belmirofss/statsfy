import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import RNPickerSelect from 'react-native-picker-select';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import SpotifyApi from '../services/SpotifyApi';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import Podium from './Podium';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                <RNPickerSelect
                    onValueChange={(value) => setMode(value as 'tracks' | 'artists')}
                    items={[
                        { label: 'Tracks', value: 'tracks' },
                        { label: 'Artists', value: 'artists' }
                    ]}
                    placeholder={{}}
                    style={{
                        inputAndroid: {
                            color: 'black',
                            fontSize: 24,
                            fontFamily: 'clearSansBold',
                            padding: 8
                        },
                        inputAndroidContainer: {
                            borderWidth: 1,
                            borderColor: 'gainsboro',
                            borderRadius: 100,
                            width: 150,
                            marginLeft: 4
                        }
                    }}
                    useNativeAndroidPickerStyle={false}
                    value={mode}
                />
                <MaterialCommunityIcons 
                    style={styles.iconRNPicker} 
                    name="chevron-down" 
                    color="gainsboro" 
                    size={24} />
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
        fontFamily: 'clearSansBold'
    },
    subTitleText: {
        fontSize: 16,
        fontFamily: 'clearSansRegular'
    },
    iconRNPicker: {
        position: 'absolute',
        left: 165,
        top: 16
    }
})