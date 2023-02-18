import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { Product } from 'src/app/store/models/product.model';
import { ProductActions, ProductSelectors } from '../store';
import { FeatureState } from '../store/feature.reducer';

@Injectable()
export class ProductResolver implements Resolve<Product[]> {

  loading = false;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this._store.pipe(
      select(ProductSelectors.selectAllProducts),
      tap((products) => {
        if (!products.length && this.loading === false) {
          this.loading = true;
          this._store.dispatch(ProductActions.loadAllProducts());
        }
      }),
      filter((products : Product[]) => !!products.length),
      first(),
      finalize(() => (this.loading = false))
    );
  }

  constructor(private _store: Store<FeatureState>) {}
}
