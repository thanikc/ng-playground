import { Directive, Optional } from "@angular/core";
import { CommonLibComponent } from "common-lib";

@Directive({
  selector: '[ext]'
})
export class ExtensionDirective {
  constructor(@Optional() public host: CommonLibComponent) {
    console.log('ExtensionDirective.host', host);
  }
}
