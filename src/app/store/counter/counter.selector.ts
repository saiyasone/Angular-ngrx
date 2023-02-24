import { createSelector } from '@ngrx/store';
import { AppState } from '../index.store';
import { counterState } from './counter.reducer';

const selectCounterFeature = (state: AppState) => state.counter;

export const getCounterSelector = createSelector(
  selectCounterFeature,
  (countState: counterState) => {
    return countState.counter;
  }
);
