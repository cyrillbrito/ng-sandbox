import { YtBase } from './base';

export interface YtPlaylistItem extends YtBase {
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
}

export interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceID;
}

export interface ResourceID {
  kind: string;
  videoId: string;
}

export interface Thumbnails {
  default: Image;
  medium: Image;
  high: Image;
  standard: Image;
  maxres: Image;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Status {
  privacyStatus: string;
}
