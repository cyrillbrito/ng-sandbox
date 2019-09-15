import { YtPlaylistItem } from './playlist-items';

export interface StorageTag {
  name: string;
  videos: string[];
  rules: Rule[];
}

export interface Tag {
  name: string;
  videos: YtPlaylistItem[];
  rules: Rule[];
}

export interface Rule {
  key: string;
  comparator: number;
  value: string;
}
