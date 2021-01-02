import { SimplifiedAlbum } from './SimplifiedAlbum';
import { SimplifiedArtist } from './SimplifiedArtist';

export interface SimplifiedTrack {
    id: string;
    name: string;
    artists: SimplifiedArtist[];
    album: SimplifiedAlbum;
}