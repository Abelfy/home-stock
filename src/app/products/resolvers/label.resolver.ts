import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { Label } from 'src/app/store/models/label.model';
import { LabelActions, LabelSelectors } from '../store';
import { FeatureState } from '../store/feature.reducer';

@Injectable({
  providedIn: 'root'
})
export class LabelResolver implements Resolve<Label[]> {
  loading = false;
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Label[]> {
    return this._store.pipe(
      select(LabelSelectors.selectAllLabels),
      tap((labels) => {
        if (!labels.length && this.loading === false) {
          this.loading = true;
          this._store.dispatch(LabelActions.loadAllLabels());
        }
      }),
      filter((labels : Label[]) => !!labels.length),
      first(),
      finalize(() => (this.loading = false))
    );
  }
  constructor(private _store: Store<FeatureState>) {
  }
}
