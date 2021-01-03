import React from 'react';

import RankingTopTracks from '../components/RankingTopTracks';

import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';

import SpotifyApi from '../services/SpotifyApi';

export default function TopTracksAllTime() {
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);

    React.useEffect(() => {
        SpotifyApi.listTopTracks('long_term').then(response => setTracks(response.data.items))
    }, []);

    return (
        <RankingTopTracks tracks={tracks}/>
    );
}

