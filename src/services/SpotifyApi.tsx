import axios from 'axios';

const SpotifyApi = axios.create({
    baseURL: 'https://api.spotify.com'
});

export default SpotifyApi;