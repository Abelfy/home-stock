import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsSrv: ProductsService
  ) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType('[Products] Fetch All'),
      mergeMap(() =>
        this.productsSrv.getProducts().pipe(
          map(products => ({ type: '[Products] Fetch All Success', payload: products })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
