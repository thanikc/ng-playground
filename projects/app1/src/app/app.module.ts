import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtensionModule } from './extension/extension.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { DebugModule } from './debug/debug.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    ExtensionModule,
    StoreModule.forRoot({ app: appReducer }),
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
