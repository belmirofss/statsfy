import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RankingTopTracksProps } from '../interfaces/RankingTopTracksProps';
import Podium from './Podium';
import RankingPosition from './RankingPosition';

export default function RankingTopTracks(props: RankingTopTracksProps) {
    return (
        <View style={styles.container}>
            <Podium data={props.tracks.map(item => ({
                id: item.id,
                title: item.name,
                subTitle: item.artists.map(item => item.name).join(', '),
                image: item.album.images[0]
            }))}/>

            { 
                props.tracks.slice(2).map((item, index) => {
                    return (
                        <RankingPosition
                            key={index}
                            title={item.name} 
                            id={item.id} 
                            subTitle={item.artists.map(item => item.name).join(', ')}
                            image={item.album.images[0]}
                            position={index + 1} 
                        />
                    )
                }) 
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'white'
    }
});