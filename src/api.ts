import axios from "axios";
import { SPOTIFY_API_ENDPOINT } from "./contants";

const API = axios.create({
  baseURL: SPOTIFY_API_ENDPOINT,
});

export default API;