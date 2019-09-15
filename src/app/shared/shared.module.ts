import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule, NbSpinnerModule, NbActionsModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
    // NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
    // NbThemeModule
  ]
})
export class SharedModule { }
