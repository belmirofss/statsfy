import React from 'react';
import Loading from '../components/Loading';
import RankingTopTracks from '../components/RankingTopTracks';
import { SimplifiedTrack } from '../interfaces/SimplifiedTrack';
import SpotifyApi from '../services/SpotifyApi';

export default function TopTracks4Weeks() {
    const [tracks, setTracks] = React.useState<SimplifiedTrack[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
        SpotifyApi.listTopTracks('short_term').then(response => {
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
        <RankingTopTracks tracks={tracks}/>
    );
}