import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YnabDashboardComponent } from './ynab/ynab-dashboard/ynab-dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'ynab', component: YnabDashboardComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
