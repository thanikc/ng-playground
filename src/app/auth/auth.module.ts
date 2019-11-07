import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLibModule } from 'projects/common-lib/src/public-api';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  declarations: [CallbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonLibModule
  ]
})
export class AuthModule { }
