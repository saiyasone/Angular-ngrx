import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.action';

export interface counterState {
  counter: number;
  total: number;
}

const initialState: counterState = {
  counter: 0,
  total: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(counterActions.increase, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(counterActions.decrease, (state) => {
    const oldState = {
      ...state,
    };
    if (state.counter <= 0) {
      return oldState;
    }

    return { ...oldState, counter: state.counter - 1 };
  }),
  on(counterActions.reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
