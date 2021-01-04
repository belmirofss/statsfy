import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RankingTopTracksProps } from '../interfaces/RankingTopTracksProps';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import SpotifyApi from '../services/SpotifyApi';
import Loading from './Loading';
import Podium from './Podium';
import RankingPosition from './RankingPosition';

export default function RankingTopTracks(props: RankingTopTracksProps) {
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.listTopTracks(props.timeRange).then(response => {
            setTracks(response.data.items);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <Podium data={tracks.map(item => ({
                id: item.id,
                title: item.name,
                subTitle: item.artists.map(item => item.name).join(', '),
                image: item.album.images[0]
            }))}/>

            <View style={{marginTop: 8}}>
                { 
                    tracks.slice(3).map((item, index) => {
                        return (
                            <RankingPosition
                                key={index}
                                title={item.name} 
                                id={item.id} 
                                subTitle={item.artists.map(item => item.name).join(', ')}
                                image={item.album.images[0]}
                                position={index + 4} 
                            />
                        )
                    }) 
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
});