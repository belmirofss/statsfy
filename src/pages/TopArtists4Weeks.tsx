import React from 'react';
import { Text } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import SpotifyApi from '../services/SpotifyApi';

export default function TopArtists4Weeks() {
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);

    React.useEffect(() => {
        SpotifyApi.listTopArtists('short_term', 0).then(response => setArtists(response.data.items))
    }, []);

    return (
        <RankingTopArtists artists={artists}/>
    );
}