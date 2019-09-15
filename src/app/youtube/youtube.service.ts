import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Channel } from './models/channels';
import { environment } from 'src/environments/environment';
import { ListResponse } from './models/base';
import { YtPlaylistItem } from './models/playlist-items';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public channelUploads(channelId: string): Observable<YtPlaylistItem[]> {
    return this.channels(channelId).pipe(
      switchMap(response => {
        const playlistId = response.items[0].contentDetails.relatedPlaylists.uploads;
        return this.playlistItems(playlistId);
      }),
      map(response => response.items)
    );
  }

  public channels(channelId: string): Observable<ListResponse<Channel>> {

    let url = 'https://www.googleapis.com/youtube/v3/channels';
    url += '?part=contentDetails';
    url += '&id=' + channelId;
    url += '&key=' + environment.googleApiKey;

    return this.http.get<ListResponse<any>>(url);
  }

  public playlistItems(playlistId: string): Observable<ListResponse<YtPlaylistItem>> {

    let url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    url += '?part=snippet';
    url += '&playlistId=' + playlistId;
    url += "&maxResults=30";
    url += '&key=' + environment.googleApiKey;

    return this.http.get<ListResponse<any>>(url);
  }
}
