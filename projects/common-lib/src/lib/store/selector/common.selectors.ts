import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommonState } from '../state/common.state';

export const getCommonState = createFeatureSelector<CommonState>('common');

export const getReadOnlyMode = createSelector(
  getCommonState,
  s => s.readOnlyMode
);