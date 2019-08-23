import { YtPlaylistItem } from './playlist-items';

export interface Tag {
  name: string;
  videos: YtPlaylistItem[];
  rule: (ytPlaylistItem: YtPlaylistItem) => boolean;
}
