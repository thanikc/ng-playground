import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { getCompleteState } from '../store/app.selectors';
import { take } from 'rxjs/operators'
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class DebugService {
  constructor(private store: Store<AppState>) {}

  logStore() {
    this.store.select(getCompleteState).pipe(take(1)).subscribe(s => console.log(s));
  } 
}