import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'https://api.spotify.com'
});

api.interceptors.request.use(
    async config => {
        const code = await AsyncStorage.getItem('access_token');
        config.headers.Authorization = 'Bearer ' + code;
        return config;
    }
)

const SpotifyApi = {
    listTopTracks: (timeRange: 'long_term' | 'medium_term' | 'short_term'): Promise<AxiosResponse<any>> => {
        return api.get('v1/me/top/tracks', {
            params: {
                limit: 20,
                offset: 0,
                time_range: timeRange
            }
        })
    }
}

export default SpotifyApi;