import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, concatMap, map, of } from 'rxjs';
import { PermissionsActions } from '.';
import { PermissionsService } from '../../services/permissions.service';
import { RolesService } from '../../services/roles.service';

@Injectable()
export class PermissionsEffects {
  constructor(
    private _actions$: Actions,
    private _permissionsService: PermissionsService,
    private _toastr: ToastrService
  ) {}

  $loadAllPermissions = createEffect(() =>
    this._actions$.pipe(
      ofType(PermissionsActions.loadAllPermissions),
      concatMap(() =>
        this._permissionsService.getAllPermissions().pipe(
          map((permissions) => PermissionsActions.loadAllPermissionsSuccess({ permissions })),
          catchError((error) => {
            this._toastr.error(error.message, 'Error', {});
            return of(PermissionsActions.loadAllPermissionsFailure());
          })
        )
      )
    )
  );
}
