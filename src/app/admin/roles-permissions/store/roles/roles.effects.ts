import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, concatMap, map, of } from 'rxjs';
import { RolesActions } from '.';
import { RolesService } from '../../services/roles.service';

@Injectable()
export class RolesEffects {
  constructor(
    private _actions$: Actions,
    private _rolesService: RolesService,
    private _toastr: ToastrService
  ) {}

  $loadAllRoles = createEffect(() =>
    this._actions$.pipe(
      ofType(RolesActions.loadAllRoles),
      concatMap(() =>
        this._rolesService.getAllRoles().pipe(
          map((roles) => RolesActions.loadAllRolesSuccess({ roles   })),
          catchError((error) => {
            return of(RolesActions.loadAllRolesFailure());
          })
        )
      )
    )
  );
}
