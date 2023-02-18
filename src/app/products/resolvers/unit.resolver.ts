import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { Unit } from 'src/app/store/models/unit.model';
import { UnitActions, UnitSelectors } from '../store';
import { FeatureState } from '../store/feature.reducer';

@Injectable({
  providedIn: 'root',
})
export class UnitResolver implements Resolve<Unit[]> {

  loading = false;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Unit[]> {
    return this._store.pipe(
      select(UnitSelectors.selectAllUnits),
      tap((units) => {
        if (!units.length && this.loading === false) {
          this.loading = true;
          this._store.dispatch(UnitActions.loadAllUnits());
        }
      }),
      filter((units: Unit[]) => !!units.length),
      first(),
      finalize(() => (this.loading = false))
    );
  }
  constructor(private _store: Store<FeatureState>) {}
}
