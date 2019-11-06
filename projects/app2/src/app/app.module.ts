import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonLibModule } from 'common-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
