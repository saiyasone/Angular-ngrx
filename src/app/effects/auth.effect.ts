import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, exhaustMap } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as authActions from '../store/auth/auth.action';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.Login),
      switchMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            localStorage.setItem('token', data.accessToken);
            return authActions.LoginSuccess({
              response: data.accessToken,
            });
          }),
          catchError((error) =>
            of(
              authActions.LoginFailure({
                errors: error,
              })
            )
          )
        );
      })
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.AutoLogin),
      switchMap(() => {
        const user = this.authService.autoLogin();
        if (!!user) {
          return of(authActions.LoginSuccess({ response: user }));
        }
        return of(
          authActions.LoginFailure({
            errors: null,
          })
        );
      })
    )
  );

  Logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.LogOut),
        map(() => {
          this.authService.logout();
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
