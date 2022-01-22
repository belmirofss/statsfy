import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.spotify.com'
});

export default API;