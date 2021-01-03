import React from 'react';
import { Text } from 'react-native';
import Loading from '../components/Loading';
import RankingTopArtists from '../components/RankingTopArtists';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import SpotifyApi from '../services/SpotifyApi';

export default function TopArtists4Weeks() {
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.listTopArtists('short_term').then(response => {
            setArtists(response.data.items);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <RankingTopArtists artists={artists}/>
    );
}