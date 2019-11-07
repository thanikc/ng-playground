import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonLibModule } from 'common-lib';
import { AppComponent } from './app.component';
import { CustomService } from './services/custom.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CommonLibModule.forRoot(CustomService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
