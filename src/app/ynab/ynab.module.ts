import { NgModule } from '@angular/core';
import { YnabDashboardComponent } from './dashboard/ynab-dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    YnabDashboardComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class YnabModule { }
