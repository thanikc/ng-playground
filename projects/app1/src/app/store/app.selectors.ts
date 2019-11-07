import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getCompleteState = (state: any) => state;

export const getAppState = createFeatureSelector<AppState>('app');
