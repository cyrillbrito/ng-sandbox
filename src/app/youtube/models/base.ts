
export interface YtBase {
  kind: string;
  etag: string;
}

export interface ListResponse<T> extends YtBase {
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
  items: T[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

