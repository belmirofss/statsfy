import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'https://api.spotify.com'
});

const SpotifyApi = {
    api,
    listTopTracks: (timeRange: 'long_term' | 'medium_term' | 'short_term'): Promise<AxiosResponse<any>> => {
        return api.get('v1/me/top/tracks', {
            params: {
                limit: 50,
                offset: 0,
                time_range: timeRange
            }
        })
    },
    listTopArtists: (timeRange: 'long_term' | 'medium_term' | 'short_term'): Promise<AxiosResponse<any>> => {
        return api.get('v1/me/top/artists', {
            params: {
                limit: 50,
                offset: 0,
                time_range: timeRange
            }
        })
    }
}

export default SpotifyApi;