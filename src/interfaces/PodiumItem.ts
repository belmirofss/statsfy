import { Image } from './Image';

export interface PodiumItem {
    id: string;
    title: string;
    image: Image;
    subTitle?: string;
}