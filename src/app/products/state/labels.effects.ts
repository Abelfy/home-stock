import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { LabelsService } from 'src/app/shared/services/labels.service';
import { LabelsActions } from './actions-types';


@Injectable()
export class LabelsEffects {
  constructor(
    private _actions$: Actions,
    private _labelsService: LabelsService,
    private _toastr: ToastrService
  ) {}

  loadAllUnits$ = createEffect(() =>
    this._actions$.pipe(
      ofType(LabelsActions.loadAllLabels),
      exhaustMap(() =>
        this._labelsService.getAllLabels().pipe(
          map((labels) => LabelsActions.loadAllLabelsSuccess({ labels })),
          catchError((error) => {
            return of(LabelsActions.loadAllLabelsFailure());
          })
        )
      )
    )
  );

  loadAllUnitsFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(LabelsActions.loadAllLabelsFailure),
        tap(() =>
          this._toastr.error('Erreur lors de la récupération des unités')
        )
      ),
    { dispatch: false }
  );
}
