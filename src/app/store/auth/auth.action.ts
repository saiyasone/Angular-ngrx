import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[LOGIN] login',
  props<{
    email: string;
    password: string;
  }>()
);
export const LoginSuccess = createAction(
  '[LOGIN_SUCCESS] login_success',
  props<{ response: string }>()
);
export const LoginFailure = createAction(
  '[LOGIN_FAILURE] login_failure',
  props<{ errors: any }>()
);
export const AutoLogin = createAction('[AUTO_LOGIN] auto_login');
export const LogOut = createAction('[LOG_OUT] log_out');
