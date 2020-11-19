import { NgModule } from '@angular/core';
import { YoutubeDashboardComponent } from './dashboard/youtube-dashboard.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    YoutubeDashboardComponent,
    TagCardComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class YoutubeModule { }
