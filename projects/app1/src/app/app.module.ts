import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtensionModule } from './extension/extension.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    ExtensionModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
