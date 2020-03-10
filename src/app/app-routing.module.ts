import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLibComponent, CommonLibModule } from 'projects/common-lib/src/public-api';
import { NcovComponent } from './ncov/ncov.component';

const routes: Routes = [
  { path: '', component: CommonLibComponent },
  { path: 'oauth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'ncov', component: NcovComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonLibModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
