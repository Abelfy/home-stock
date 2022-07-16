import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, of } from 'rxjs';

import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';
import { AppState } from '../../state/app.state';
import { User } from '../../state/models/user.model';
import { AuthActions } from './action-types';
import { LogIn, LogInFailure, LogInSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {

  logIn$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.LogIn),
      switchMap(({ email, password }) => 
        this._authService.login(email, password).pipe(
          map(data => {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('expires', data.expires);
            localStorage.setItem('refresh_token', data.refresh_token);
          }),
          switchMap(noop => this._authService.me().pipe(
              map(user => LogInSuccess({ user : user }) 
                )),
            ),
            catchError(error => {
              error.error.errors.forEach(error => {
                this._toastr.error(error.message, 'Erreur');
              })
              return of(LogInFailure({ error }))
            })
          )
        )
      )
  );

  logInSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.LogInSuccess),
        map((action) => {
          this._router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logInFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.LogInSuccess),
        map((action) => {})
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.LogOut),
        tap((action) => {
          localStorage.removeItem('user');
          this._router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _store: Store<AppState>,
    private _router: Router,
    private _toastr: ToastrService
  ) {}
}
