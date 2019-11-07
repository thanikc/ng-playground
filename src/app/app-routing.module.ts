import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLibModule, CommonLibComponent } from 'projects/common-lib/src/public-api';

const routes: Routes = [
  { path: '', component: CommonLibComponent },
  { path: 'oauth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonLibModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
