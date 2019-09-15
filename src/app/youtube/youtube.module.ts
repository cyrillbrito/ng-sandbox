import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeDashboardComponent } from './dashboard/youtube-dashboard.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    YoutubeDashboardComponent,
    TagCardComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class YoutubeModule { }
