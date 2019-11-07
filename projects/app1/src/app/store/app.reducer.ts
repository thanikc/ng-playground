import { AppState } from './app.state';
import { Action } from '@ngrx/store';

export const initialAppState: AppState = {
  someFlag: false
};

export function appReducer(state = initialAppState, action: Action): AppState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
