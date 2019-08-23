import { YtBase } from './base';

export interface Channel extends YtBase {
  id: string;
  contentDetails: ContentDetails;
}

export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

export interface RelatedPlaylists {
  uploads: string;
  watchHistory: string;
  watchLater: string;
}
