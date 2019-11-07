import { Injectable } from "@angular/core";
import { AbstractCustomService } from 'common-lib';

@Injectable({
  providedIn: 'root'
})
export class CustomService extends AbstractCustomService {
  constructor() {
    super();
  }

  notify(msg: string, ...messages: string[]) {
    window.alert(msg);
    for(let m of messages) {
      window.alert(m);
    }
  }
}