import { Injectable } from '@angular/core';
import { Observable, of, empty, throwError } from 'rxjs';
import { Tag } from './models/test';

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

    let tags = this.get<Tag[]>('tags');

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
    }

    return tags;
  }

  public setTag(tag: Tag): void {

    const tags = this.getTags();

    const currTag = tags.find(x => x.name === tag.name);

    currTag.videos = tag.videos;

    this.set('tags', tags);
  }

  private get<T>(key: string): T {
    const str = localStorage.getItem(key);
    if (str) {
      return JSON.parse(str);
    }
  }

  private set(key: string, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
