import { Injectable } from '@angular/core';
import { YtPlaylistItem } from './models/playlist-items';
import { Tag } from './models/test';

@Injectable({
  providedIn: 'root'
})
export class TagSorterService {

  constructor() { }

  public sort(tags: Tag[], videos: YtPlaylistItem[]): void {
    for (const tag of tags) {
      for (const video of videos) {
        if (tag.rule(video)) {
          tag.videos.push(video);
        }
      }
    }
  }
}
