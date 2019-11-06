import { NgModule } from "@angular/core";
import { CommonLibModule } from 'common-lib';
import { ExtensionComponent } from './extension.component';
import { ExtensionDirective } from './extension.directive';

@NgModule({
  declarations: [ExtensionComponent, ExtensionDirective],
  imports: [
    CommonLibModule
  ],
  exports: [ExtensionComponent, ExtensionDirective]
})
export class ExtensionModule {}