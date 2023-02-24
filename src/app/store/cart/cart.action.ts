import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../models/cart.model';

export const fetchCart = createAction('[FETCH_CART] fetch_cart');
export const addCart = createAction('[ADD_CART] addCart', props<CartItem>());
export const delCart = createAction(
  '[DEL_CART] delCart',
  props<{ cardId: number }>()
);
