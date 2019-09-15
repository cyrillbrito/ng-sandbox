import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YnabDashboardComponent } from './ynab/dashboard/ynab-dashboard.component';
import { YoutubeDashboardComponent } from './youtube/dashboard/youtube-dashboard.component';

const routes: Routes = [
  { path: 'youtube', component: YoutubeDashboardComponent },
  { path: 'ynab', component: YnabDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
