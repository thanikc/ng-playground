import { Directive, Host, Self, Optional } from "@angular/core";
import { CommonLibComponent } from "common-lib";

@Directive({
  selector: '[ext]'
})
export class ExtensionDirective {
  constructor(@Host() @Self() @Optional() public host: CommonLibComponent) {
    console.log(host);
  }
}
