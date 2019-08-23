import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tag } from './models/test';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public channels(): Observable<string[]> {
    return of([
      'UCFKDEp9si4RmHFWJW1vYsMA'
    ]);
  }

  public tags(): Observable<Tag[]> {
    return of([
      {
        name: 'all',
        videos: [],
        rule: () => true
      },
      {
        name: 'Plays',
        videos: [],
        rule: v => v.snippet.title.includes('Etho Plays Minecraft')
      },
      {
        name: 'Team Canada',
        videos: [],
        rule: v => v.snippet.title.includes('Team Canada')
      }
    ] as Tag[]);
  }
}
