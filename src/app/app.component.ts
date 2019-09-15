import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { StorageService } from './storage.service';
import { TagSorterService } from './tag-sorter.service';
import { Tag } from './models/test';
import { YtPlaylistItem } from './models/playlist-items';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  public tags: Tag[];
  private channels: string[];

  private videos: YtPlaylistItem[];

  public loading = true;

  public constructor(
    private youtubeService: YoutubeService,
    private storageService: StorageService,
    private tagSorterService: TagSorterService
  ) { }

  public ngOnInit(): void {

    this.tags = this.storageService.getTags();
    this.channels = this.storageService.getChannels();
    this.videos = this.storageService.getVideos();

    setInterval(() => console.log(this.tags), 5000);

    this.loading = false;
  }

  public getNewVideos(): void {
    this.youtubeService.channelUploads(this.channels[0]).subscribe(videos => {

      this.tagSorterService.sort2(this.tags, videos);
      this.videos.push(...videos);

      this.storageService.setVideos(this.videos);
      this.storageService.setTags(this.tags);
    });
  }

  print() {
    console.log(this.tags);
  }
}
