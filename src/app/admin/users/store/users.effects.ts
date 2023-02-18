import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, concatMap, EMPTY, map, of, switchMap } from 'rxjs';
import { UsersActions } from '.';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private _usersSrv: UsersService,
    private _toastr: ToastrService
  ) {}

  $loadUsers = createEffect(() =>
    this._actions$.pipe(
      ofType(UsersActions.loadAllUsers),
      concatMap(() => 
        this._usersSrv.getUsers().pipe(
          map((users) => UsersActions.loadAllUsersSuccess({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
