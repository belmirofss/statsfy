import { ImageSpotify } from './ImageSpotify';

export interface SpotifyAccount {
    country: string;
    display_name: string;
    followers: {
        total: number
    },
    id: string;
    images: ImageSpotify[];
    product: "free" | "premium";
    email: string;
}