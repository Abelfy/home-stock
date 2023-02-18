import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { UnitsService } from 'src/app/shared/services/units.service';
import { ProductActions } from '..';
import { loadAllUnits, loadAllUnitsFailure, loadAllUnitsSuccess } from '../units/units.actions';

@Injectable()
export class UnitsEffects {
  constructor(
    private _actions$: Actions,
    private _unitsService: UnitsService,
    private _toastr: ToastrService
  ) {}

  loadAllUnits$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadAllUnits),
      exhaustMap(() =>
        this._unitsService.getAllUnits().pipe(
          map((units) => loadAllUnitsSuccess({ units })),
          catchError((error) => {
            return of(loadAllUnitsFailure());
          })
        )
      )
    )
  );

  loadAllUnitsFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(loadAllUnitsFailure),
        tap(() =>
          this._toastr.error('Erreur lors de la récupération des unités')
        )
      ),
    { dispatch: false }
  );
}
