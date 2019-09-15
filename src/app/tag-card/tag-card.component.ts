import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tag } from '../models/test';
import { YtPlaylistItem } from '../models/playlist-items';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.css']
})
export class TagCardComponent implements OnChanges, OnInit {

  @Input()
  public tag: Tag;

  public videos: YtPlaylistItem[];

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
  }

  public ngOnInit(): void {
    this.videos = this.tag.videos.filter(x => !x.watched && !x.dismissed);

    setInterval(() => {
      const vvs = this.tag.videos.map(x => ({ name: x.snippet.title, watched: x.watched }));
      console.log(this.tag.name, vvs);
    }, 5000);
  }

  public watched(index: number, video: YtPlaylistItem): void {
    video.watched = true;
    this.videos.splice(index, 1);
  }
}
