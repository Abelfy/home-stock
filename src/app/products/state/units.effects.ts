import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { UnitsService } from 'src/app/shared/services/units.service';
import { UnitsActions } from './actions-types';

@Injectable()
export class UnitsEffects {
  constructor(
    private _actions$: Actions,
    private _unitsService: UnitsService,
    private _toastr: ToastrService
  ) {}

  loadAllUnits$ = createEffect(() =>
    this._actions$.pipe(
      ofType(UnitsActions.loadAllUnits),
      exhaustMap(() =>
        this._unitsService.getAllUnits().pipe(
          map((units) => UnitsActions.loadAllUnitsSuccess({ units })),
          catchError((error) => {
            return of(UnitsActions.loadAllUnitsFailure());
          })
        )
      )
    )
  );

  loadAllUnitsFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(UnitsActions.loadAllUnitsFailure),
        tap(() =>
          this._toastr.error('Erreur lors de la récupération des unités')
        )
      ),
    { dispatch: false }
  );
}
