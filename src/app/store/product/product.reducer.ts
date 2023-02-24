import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.action';
import { Photo } from '../../models/photo.model';

export interface ProductState {
  loading: boolean;
  photos: Photo[];
  error: any;
}

const initialProductState: ProductState = {
  loading: false,
  photos: [],
  error: null,
};

export const ProductReducer = createReducer(
  initialProductState,
  on(ProductActions.getProducts, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(ProductActions.getProductSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      photos: action.photos,
    };
  }),
  on(ProductActions.getProductFaile, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  })
);
