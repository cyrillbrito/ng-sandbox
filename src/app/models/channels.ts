
export interface ChannelListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: string;
  etag: string;
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

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
