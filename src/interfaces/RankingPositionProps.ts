import { Image } from './Image';

export interface RankingPositionProps {
    position: number;
    title: string;
    image: Image;
    subTitle?: string;
    id: string;
}