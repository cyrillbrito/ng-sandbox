import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { YnabModule } from './ynab/ynab.module';
import { YoutubeModule } from './youtube/youtube.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { VoltorbComponent } from './voltorb/voltorb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VoltorbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    HttpClientModule,
    YoutubeModule,
    YnabModule,
    SharedModule,
    // NbLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
