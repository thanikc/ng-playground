import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { DebugModule } from './debug/debug.module';
import { ExtensionModule } from './extension/extension.module';
import { appReducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    ExtensionModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([]),
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
