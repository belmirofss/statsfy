import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RankingTopArtistsProps } from '../interfaces/RankingTopArtistsProps';
import Podium from './Podium';
import RankingPosition from './RankingPosition';

export default function RankingTopArtists(props: RankingTopArtistsProps) {
    return (
        <View style={styles.container}>
            <Podium data={props.artists.map(item => ({
                id: item.id,
                title: item.name,
                image: item.images[0]
            }))}/>

            { 
                props.artists.slice(3).map((item, index) => {
                    return (
                        <RankingPosition
                            key={index}
                            title={item.name} 
                            id={item.id} 
                            image={item.images[0]}
                            position={index + 4} 
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