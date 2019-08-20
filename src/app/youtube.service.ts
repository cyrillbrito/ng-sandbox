import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ChannelListResponse } from './models/channels';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public ethosLabVideos(): Observable<any> {

    return this.http.get('https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=UCFKDEp9si4RmHFWJW1vYsMA&key=KEY_PLACEHOLDER');

  }

  public listEthosVideos(): any {


    let channelUrl = 'https://www.googleapis.com/youtube/v3/channels';
    channelUrl += '?part=contentDetails';
    channelUrl += '&id=UCFKDEp9si4RmHFWJW1vYsMA';
    channelUrl += '&key=KEY_PLACEHOLDER';

    return this.http.get<ChannelListResponse>(channelUrl).pipe(switchMap(response => {

      let playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
      playlistUrl += '?part=snippet';
      playlistUrl += '&playlistId=' + response.items[0].contentDetails.relatedPlaylists.uploads;
      playlistUrl += '&key=KEY_PLACEHOLDER';

      return this.http.get(playlistUrl);

    }), map(response => {
      console.log(response);
    }));
  }


}
