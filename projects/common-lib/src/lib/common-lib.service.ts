import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonState } from './store/state/common.state';
import { SetReadonlyModeAction } from './store/action/common.actions';
import { Observable } from 'rxjs';
import { getReadOnlyMode } from './store/selector/common.selectors';

@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  constructor(private store: Store<CommonState>) { }

  setReadOnly(readOnly: boolean) {
    this.store.dispatch(new SetReadonlyModeAction({ readOnly }));
  }

  getReadOnly(): Observable<boolean> {
    return this.store.select(getReadOnlyMode);
  }
}
