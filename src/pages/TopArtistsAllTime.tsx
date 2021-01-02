import React from 'react';
import RankingTopArtists from '../components/RankingTopArtists';
import { SimplifiedArtist } from '../interfaces/SimplifiedArtist';
import SpotifyApi from '../services/SpotifyApi';

export default function TopArtistsAllTime() {
    const [artists, setArtists] = React.useState<SimplifiedArtist[]>([]);

    React.useEffect(() => {
        SpotifyApi.listTopArtists('long_term', 0).then(response => setArtists(response.data.items))
    }, []);

    return (
        <RankingTopArtists artists={artists}/>
    );
}