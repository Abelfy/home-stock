import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { UnitsService } from 'src/app/shared/services/units.service';
import { ProductActions } from '../actions-types';

@Injectable()
export class UnitsEffects {
  constructor(
    private _actions$: Actions,
    private _unitsService: UnitsService,
    private _toastr: ToastrService
  ) {}

  loadAllUnits$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadAllUnits),
      exhaustMap(() =>
        this._unitsService.getAllUnits().pipe(
          map((units) => ProductActions.loadAllUnitsSuccess({ units })),
          catchError((error) => {
            return of(ProductActions.loadAllUnitsFailure());
          })
        )
      )
    )
  );

  loadAllUnitsFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(ProductActions.loadAllUnitsFailure),
        tap(() =>
          this._toastr.error('Erreur lors de la récupération des unités')
        )
      ),
    { dispatch: false }
  );
}
