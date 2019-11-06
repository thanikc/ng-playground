import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLibComponent, CommonLibModule } from 'common-lib';

const routes: Routes = [
  { path: '', component: CommonLibComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonLibModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
