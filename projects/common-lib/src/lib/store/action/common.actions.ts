import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  SetReadonlyMode = '[Common] SetReadonlyMode',
}

export class SetReadonlyModeAction implements Action {
  readonly type = CommonActionTypes.SetReadonlyMode;
  constructor(public payload: { readOnly: boolean }) {}
}

export type CommonActions = SetReadonlyModeAction;