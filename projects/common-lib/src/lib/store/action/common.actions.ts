import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  SetReadonlyMode = '[Common] SetReadonlyMode',
  SetReadonlyModeSucess = '[Common] SetReadonlyModeSuccess'
}

export class SetReadonlyModeAction implements Action {
  readonly type = CommonActionTypes.SetReadonlyMode;
  constructor(public payload: { readOnly: boolean }) {}
}

export class SetReadonlyModeSuccessAction implements Action {
  readonly type = CommonActionTypes.SetReadonlyModeSucess;
  constructor() {}
}


export type CommonActions = SetReadonlyModeAction | SetReadonlyModeSuccessAction;