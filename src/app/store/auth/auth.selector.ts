import { createSelector } from '@ngrx/store';
import { AppState } from '../index.store';

const selectFeature = (state: AppState) => state.auth;

export const tokenSelector = createSelector(
  selectFeature,
  (state) => state.token
);

export const isAuthenticatedSelector = createSelector(
  selectFeature,
  (state) => state.isAuthenticated
);
