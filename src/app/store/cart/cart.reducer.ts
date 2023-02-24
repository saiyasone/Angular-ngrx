import { createReducer, on } from '@ngrx/store';
import { Photo } from '../../models/photo.model';
import * as cartActions from './cart.action';

export interface Cart {
  total: number;
  cartItems: CartItem[];
  photo: Photo[];
}
export interface CartItem {
  id: number;
  name: string;
  img?: string;
  qty: number;
}

const initializeCart: Cart = {
  cartItems: [],
  total: 0,
  photo: [],
};

export const cartReducer = createReducer(
  initializeCart,
  on(cartActions.fetchCart, (state) => {
    const oldCart = [...state.cartItems];
    let initializeCart = [...oldCart];
    const localJson = localStorage.getItem('cart');
    if (!localJson) {
      localStorage.setItem('cart', JSON.stringify(oldCart));
    } else {
      const cartJson = JSON.parse(localJson) || oldCart;
      initializeCart = [...cartJson];
    }

    return {
      ...state,
      cartItems: initializeCart,
    };
  }),

  on(cartActions.addCart, (state, action) => {
    const oldCartItems = [...state.cartItems];
    const newCartItem = [...oldCartItems];
    const index = oldCartItems.findIndex((el) => el.id === action.id);

    if (index >= 0) {
      const updateCart = {
        ...newCartItem[index],
        qty: newCartItem[index].qty + 1,
      };

      newCartItem[index] = updateCart;
    } else {
      newCartItem.push(action);
    }

    localStorage.setItem('cart', JSON.stringify(newCartItem));
    return {
      ...state,
      cartItems: newCartItem,
    };
  }),

  on(cartActions.delCart, (state, action) => {
    const oldCart = [...state.cartItems];
    let newVal = oldCart.filter((el) => el.id !== action.cardId);
    const updatedCart = [...newVal];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return {
      ...state,
      cartItems: updatedCart,
    };
  })
);
