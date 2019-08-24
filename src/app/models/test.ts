import { YtPlaylistItem } from './playlist-items';

export interface Tag {
  name: string;
  videos: YtPlaylistItem[];
  // rule: (ytPlaylistItem: YtPlaylistItem) => boolean;

  rules: Rule[];
}

export interface Rule {
  key: string;
  comparator: number;
  value: string;
}
