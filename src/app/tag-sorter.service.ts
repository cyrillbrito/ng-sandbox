import { Injectable } from '@angular/core';
import { YtPlaylistItem } from './models/playlist-items';
import { Tag } from './models/test';

@Injectable({
  providedIn: 'root'
})
export class TagSorterService {

  constructor() { }

  // public sort(tags: Tag[], videos: YtPlaylistItem[]): void {
  //   for (const tag of tags) {
  //     for (const video of videos) {
  //       if (tag.rule(video)) {
  //         tag.videos.push(video);
  //       }
  //     }
  //   }
  // }

  public sort2(tags: Tag[], videos: YtPlaylistItem[]): void {
    for (const tag of tags) {
      for (const rule of tag.rules) {
        for (const video of videos) {

          const value = this.readNestedProperty<string>(video, rule.key);
          if (value.includes(rule.value)) {
            tag.videos.push(video);
          }

        }
      }
    }
  }

  private readNestedProperty<T>(object: object, nestedKey: string): T {

    const keys = nestedKey.split('.');

    let value = object as any;
    for (const key of keys) {
      if (key in value) {
        value = value[key];
      } else {
        return;
      }
    }

    return value as T;
  }
}
