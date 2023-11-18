import axios from "axios";
import { SPOTIFY_API_ENDPOINT } from "./constants";

const API = axios.create({
  baseURL: SPOTIFY_API_ENDPOINT,
});

export default API;