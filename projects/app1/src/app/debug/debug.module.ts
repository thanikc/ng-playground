import { NgModule } from "@angular/core";
import { DebugService } from './debug.service';

@NgModule({
  providers: [DebugService]
})
export class DebugModule {
  constructor(private service: DebugService) {
    (window as any).debug = this.service;
  }
}