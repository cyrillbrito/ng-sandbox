import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../models/test';
import { YtPlaylistItem } from '../models/playlist-items';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.css']
})
export class TagCardComponent implements OnInit {

  @Input()
  public tag: Tag;

  public videos: YtPlaylistItem[];

  constructor() { }

  public ngOnInit(): void {
    this.videos = this.tag.videos.filter(x => !x.watched && !x.dismissed);
  }

  public watched(index: number, video: YtPlaylistItem): void {
    video.watched = true;
    this.videos.splice(index, 1);
  }


}
