import { Injectable } from '@angular/core';
import { Observable, of, empty, throwError } from 'rxjs';
import { Tag, StorageTag } from './models/test';
import { YtPlaylistItem } from './models/playlist-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getChannels(): string[] {

    let channels = this.get<string[]>('channels');

    if (!channels) {
      channels = [
        'UCFKDEp9si4RmHFWJW1vYsMA'
      ];
      this.set('channels', channels);
    }

    return channels;
  }

  public getTags(): Tag[] {

    let tags: StorageTag[] = this.get<StorageTag[]>('tags');


    if (!tags) {
      tags = [
        {
          name: 'all',
          videos: [],
          rules: [{ key: 'snippet.title', comparator: 0, value: '' }]
        },
        {
          name: 'Plays',
          videos: [],
          rules: [{ key: 'snippet.title', comparator: 0, value: 'Plays' }]
        },
        {
          name: 'Team Canada',
          videos: [],
          rules: [{ key: 'snippet.title', comparator: 0, value: 'Canada' }]
        }
      ];
      this.set('tags', tags);
    } else {

      const allVideos = this.getVideos();

      for (const tag of tags) {
        const videos = [];
        for (const videoId of tag.videos) {
          const video = allVideos.find(x => x.id === videoId);
          videos.push(video);
        }
        // @ts-ignore
        tag.videos = videos;
      }
    }

    return tags as unknown as Tag[];
  }

  public getVideos(): YtPlaylistItem[] {

    let videos = this.get<YtPlaylistItem[]>('videos');

    if (!videos) {
      videos = [];
    }

    return videos;
  }

  public setVideos(videos: YtPlaylistItem[]): void {
    this.set('videos', videos);
  }

  public setTag(tag: Tag): void {

    const tags = this.getTags();

    const currTag = tags.find(x => x.name === tag.name);

    (currTag as unknown as StorageTag).videos = tag.videos.map(x => x.id);

    this.set('tags', tags);
  }

  public setTags(tags: Tag[]): void {
    for (const tag of tags) {
      this.setTag(tag);
    }
  }

  private get<T>(key: string): T {
    const str = localStorage.getItem(key);
    if (str) {
      return JSON.parse(str);
    } else {
      // @ts-ignore
      return;
    }
  }

  private set(key: string, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
