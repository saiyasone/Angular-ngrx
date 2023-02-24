import { createSelector } from '@ngrx/store';
import { AppState } from '../index.store';

const selectFeature = (state: AppState) => state.cart;

export const cartItemSelector = createSelector(
  selectFeature,
  (state) => state.cartItems
);

export const photoSelector = createSelector(
  selectFeature,
  (state) => state.photo
);

export const totalSelector = createSelector(selectFeature, (state) => {
  let total = 0;
  total = state.cartItems.length;
  return total;
});
