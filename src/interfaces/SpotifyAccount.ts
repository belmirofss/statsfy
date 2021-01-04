import { Image } from './Image';

export interface SpotifyAccount {
    country: string;
    display_name: string;
    followers: {
        total: number
    },
    id: string;
    images: Image[];
    product: "free" | "premium";
}