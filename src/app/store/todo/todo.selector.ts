import { createSelector } from '@ngrx/store';
import { AppState } from '../index.store';

const selectorFeature = (state: AppState) => state.todo;

export const totalItemSelector = createSelector(
  selectorFeature,
  (state) => state.todos.length
);

export const todoSelector = createSelector(
  selectorFeature,
  (state) => state.todos
);
