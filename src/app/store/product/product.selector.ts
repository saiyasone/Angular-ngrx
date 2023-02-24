import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

const productFeatureSelector = createFeatureSelector<ProductState>('product');

export const loadingSelector = createSelector(
  productFeatureSelector,
  (state) => state.loading
);
export const productsSelector = createSelector(
  productFeatureSelector,
  (state) => state.photos
);
