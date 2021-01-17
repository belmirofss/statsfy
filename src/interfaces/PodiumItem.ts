import { ImageSpotify } from './ImageSpotify';

export interface PodiumItem {
    id: string;
    title: string;
    image: ImageSpotify;
    subTitle?: string;
}