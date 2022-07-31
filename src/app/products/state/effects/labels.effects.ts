import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { LabelsService } from 'src/app/shared/services/labels.service';
import { ProductActions } from '../actions-types';


@Injectable()
export class LabelsEffects {
  constructor(
    private _actions$: Actions,
    private _labelsService: LabelsService,
    private _toastr: ToastrService
  ) {}

  loadAllUnits$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadAllLabels),
      exhaustMap(() =>
        this._labelsService.getAllLabels().pipe(
          map((labels) => ProductActions.loadAllLabelsSuccess({ labels })),
          catchError((error) => {
            return of(ProductActions.loadAllLabelsFailure());
          })
        )
      )
    )
  );

  loadAllUnitsFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(ProductActions.loadAllLabelsFailure),
        tap(() =>
          this._toastr.error('Erreur lors de la récupération des étiquettes')
        )
      ),
    { dispatch: false }
  );
}
