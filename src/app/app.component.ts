import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { StorageService } from './storage.service';
import { TagSorterService } from './tag-sorter.service';
import { switchMap, map } from 'rxjs/operators';
import { Tag } from './models/test';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'ng-sandbox';

  public tags: Tag[];

  public constructor(
    private youtubeService: YoutubeService,
    private storageService: StorageService,
    private tagSorterService: TagSorterService
  ) { }

  public ngOnInit(): void {

    this.storageService.tags().pipe(
      switchMap(tags => {
        this.tags = tags;
        return this.storageService.channels();
      }),
      switchMap(channels => {
        return this.youtubeService.channelUploads(channels[0]);
      }),
      map(videos => {
        this.tagSorterService.sort(this.tags, videos);
      })
    ).subscribe();
  }
}
