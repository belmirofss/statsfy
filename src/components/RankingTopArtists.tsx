import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import SpotifyApi from '../services/SpotifyApi';
import Loading from './Loading';
import Podium from './Podium';
import RankingPosition from './RankingPosition';

interface RankingTopArtistsProps {
    timeRange: 'long_term' | 'medium_term' | 'short_term';
}

export default function RankingTopArtists(props: RankingTopArtistsProps) {

    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.listTopArtists(props.timeRange).then(response => {
            setArtists(response.data.items);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <Loading />
        );
    }
    
    return (
        <View style={styles.container}>
            <Podium data={artists.map(item => ({
                id: item.id,
                title: item.name,
                image: item.images[0]
            }))}/>

            <View style={{marginTop: 8}}>
                { 
                    artists.slice(3).map((item, index) => {
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
});