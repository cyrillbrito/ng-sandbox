import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoltorbComponent } from './voltorb/voltorb.component';
import { YnabDashboardComponent } from './ynab/dashboard/ynab-dashboard.component';
import { YoutubeDashboardComponent } from './youtube/dashboard/youtube-dashboard.component';

const routes: Routes = [
  { path: 'youtube', component: YoutubeDashboardComponent },
  { path: 'ynab', component: YnabDashboardComponent },
  { path: 'voltorb', component: VoltorbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
