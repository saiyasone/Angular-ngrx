import { counterReducer } from '../store/counter/counter.reducer';
import { authReducer, AuthResponseState } from './auth/auth.reducer';
import { Cart, cartReducer } from './cart/cart.reducer';
import { counterState } from './counter/counter.reducer';
import { ProductReducer, ProductState } from './product/product.reducer';
import { todoReducer, todoState } from './todo/todo.reducer';

export interface AppState {
  counter: counterState;
  todo: todoState;
  cart: Cart;
  product: ProductState;
  auth: AuthResponseState;
}

export const AppReducer = {
  counter: counterReducer,
  todo: todoReducer,
  cart: cartReducer,
  product: ProductReducer,
  auth: authReducer,
};
