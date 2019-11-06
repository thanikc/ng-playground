import { NgModule } from "@angular/core";
import { CommonLibModule } from 'common-lib';
import { ExtensionComponent } from './extension.component';
import { ExtensionDirective } from './extension.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ExtensionComponent, ExtensionDirective],
  imports: [
    CommonModule,
    CommonLibModule.forRoot()
  ],
  exports: [ExtensionComponent, ExtensionDirective]
})
export class ExtensionModule {}