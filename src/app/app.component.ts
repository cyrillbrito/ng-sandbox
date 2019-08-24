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

  public tags: Tag[];

  public loading = true;

  public constructor(
    private youtubeService: YoutubeService,
    private storageService: StorageService,
    private tagSorterService: TagSorterService
  ) { }

  public ngOnInit(): void {

    this.tags = this.storageService.getTags();
    const channels = this.storageService.getChannels();


    this.youtubeService.channelUploads(channels[0]).subscribe(videos => {
      this.tagSorterService.sort2(this.tags, videos);
      this.loading = false;
    });
  }
}
