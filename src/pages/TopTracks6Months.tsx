import React from 'react';

import RankingTopTracks from '../components/RankingTopTracks';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import SpotifyApi from '../services/SpotifyApi';

export default function TopTracks6Months() {
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);

    React.useEffect(() => {
        SpotifyApi.listTopTracks('medium_term', 0).then(response => setTracks(response.data.items))
    }, []);

    return (
        <RankingTopTracks tracks={tracks}/>
    );
}