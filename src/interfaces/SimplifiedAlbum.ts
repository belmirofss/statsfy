import { ImageSpotify } from './ImageSpotify';

export interface SimplifiedAlbum {
    id: string;
    name: string;
    images: ImageSpotify[];
}