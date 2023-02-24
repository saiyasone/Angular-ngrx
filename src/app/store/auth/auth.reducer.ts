import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.action';

export interface AuthResponseState {
  token: string;
  loading: boolean;
  errors?: any;
  isAuthenticated: boolean;
}

const initialAuthState: AuthResponseState = {
  token: '',
  isAuthenticated: false,
  loading: false,
  errors: null || undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.Login, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(AuthActions.LoginSuccess, (state, { response }) => {
    return {
      ...state,
      loading: false,
      token: response,
      isAuthenticated: true,
    };
  }),

  on(AuthActions.AutoLogin, (state) => {
    const oldState = {
      ...state,
    };
    return {
      ...state,
    };
  }),

  on(AuthActions.LoginFailure, (state, { errors }) => {
    localStorage.removeItem('token');
    return {
      ...state,
      loading: false,
      errors: errors,
      token: '',
      isAuthenticated: false,
    };
  }),

  on(AuthActions.LogOut, (state) => {
    return {
      ...state,
      token: '',
      isAuthenticated: false,
    };
  })
);
