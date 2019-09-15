import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule, NbSpinnerModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { TagCardComponent } from './tag-card/tag-card.component';
import { YnabModule } from './ynab/ynab.module';

@NgModule({
  declarations: [
    AppComponent,
    TagCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbSpinnerModule,
    NbActionsModule,
    YnabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
