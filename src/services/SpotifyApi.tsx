import { AxiosResponse } from 'axios';
import API from './API';



const SpotifyApi = {
    listTopTracks: (timeRange: 'long_term' | 'medium_term' | 'short_term', limit: number = 50): Promise<AxiosResponse<any>> => {
        return API.get('v1/me/top/tracks', {
            params: {
                limit,
                offset: 0,
                time_range: timeRange
            }
        });
    },
    listTopArtists: (timeRange: 'long_term' | 'medium_term' | 'short_term', limit: number = 50): Promise<AxiosResponse<any>> => {
        return API.get('v1/me/top/artists', {
            params: {
                limit,
                offset: 0,
                time_range: timeRange
            }
        });
    },
    listRecentlyPlayedTracks: (): Promise<AxiosResponse<any>> => {
        return API.get('v1/me/player/recently-played', {
            params: {
                limit: 50,
                offset: 0
            }
        });
    },
    getCurrentUserProfile: (): Promise<AxiosResponse<any>> => {
        return API.get('v1/me');
    }
}

export default SpotifyApi;