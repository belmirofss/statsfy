import React from 'react';
import { Text } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import SpotifyApi from '../services/SpotifyApi';

export default function TopArtists6Months() {
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);

    React.useEffect(() => {
        SpotifyApi.listTopArtists('medium_term', 0).then(response => setArtists(response.data.items))
    }, []);

    return (
        <RankingTopArtists artists={artists}/>
    );
}