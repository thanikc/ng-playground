import { Action } from '@ngrx/store';
import { FeatureConfig } from '../../models/feature-config';

export enum CommonActionTypes {
  SetReadonlyMode = '[Common] SetReadonlyMode',
  SetReadonlyModeSucess = '[Common] SetReadonlyModeSuccess',
  GetFeatures = '[Features] GetFeatures',
  GetFeaturesSuccess = '[Features] GetFeaturesSuccess',
}

export class SetReadonlyModeAction implements Action {
  readonly type = CommonActionTypes.SetReadonlyMode;
  constructor(public payload: { readOnly: boolean }) {}
}

export class SetReadonlyModeSuccessAction implements Action {
  readonly type = CommonActionTypes.SetReadonlyModeSucess;
  constructor() {}
}

export class GetFeaturesAction implements Action {
  readonly type = CommonActionTypes.GetFeatures;
}

export class GetFeaturesSuccessAction implements Action {
  readonly type = CommonActionTypes.GetFeaturesSuccess;
  constructor(public payload: { features: FeatureConfig[] }) {}
}


export type CommonActions = SetReadonlyModeAction | SetReadonlyModeSuccessAction | GetFeaturesAction | GetFeaturesSuccessAction;