import { Injectable, InjectionToken } from '@angular/core';

export abstract class AbstractCustomService {
  abstract notify(msg: string, ...messages: string[]): void;
}

@Injectable({
  providedIn: 'root'
})
export class DefaultCustomService extends AbstractCustomService {
  constructor() {
    super();
  }

  notify(msg: string, ...messages: string[]): void {
    console.log(msg, messages);
  }
}

export const CUSTOM_SERVICE = new InjectionToken<AbstractCustomService>('CUSTOM_SERVICE');