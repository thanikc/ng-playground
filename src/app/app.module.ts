import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.modules';
import { NcovComponent } from './ncov/ncov.component';
import { NcovService } from './ncov/ncov.service';



@NgModule({
  declarations: [
    AppComponent, NcovComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    ...MaterialModules
  ],
  providers: [ NcovService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
