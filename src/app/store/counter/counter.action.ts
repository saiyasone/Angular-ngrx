import { createAction } from '@ngrx/store';

export const increase = createAction('[INCREASE] Increase');
export const decrease = createAction('[DECREASE] Decrease');
export const reset = createAction('[RESET] Reset');
