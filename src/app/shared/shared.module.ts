import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule, NbSpinnerModule, NbActionsModule, NbAlertModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbActionsModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
  ],
  exports: [
    CommonModule,
    NbActionsModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
  ]
})
export class SharedModule { }
