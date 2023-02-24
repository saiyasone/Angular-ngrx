import { createAction, props } from '@ngrx/store';
import { Photo } from '../../models/photo.model';

export const getProducts = createAction('[GET_PRODUCTS] get_products');
export const getProduct = createAction(
  '[GET_PRODUCT] get_product',
  props<{ id: string }>()
);
export const getProductSuccess = createAction(
  '[GET_PRODUCT_SUCCESS] get_product_success',
  props<{ photos: Photo[] }>()
);
export const getProductFaile = createAction(
  '[GET_PRODUCT_SUCCESS] get_product_success',
  props<{ error: any }>()
);
