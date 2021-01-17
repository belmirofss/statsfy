import { ImageSpotify } from './ImageSpotify';

export interface SimplifiedArtist {
    id: string;
    name: string;
    images: ImageSpotify[];
}