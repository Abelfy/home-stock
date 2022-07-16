import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { ProductActions } from './actions-types';
import { createProduct, createProductSuccess } from './products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private _actions$: Actions,
    private _productsSrv: ProductsService,
    private _toastr: ToastrService
  ) {}

  loadProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      concatMap(() =>
        this._productsSrv.getProducts().pipe(
          map((products) => ProductActions.allProductsLoaded({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType(createProduct),
      mergeMap((action) => {
        console.log(action);
        return this._productsSrv.createProduct(action.product).pipe(
          map((newProduct) => {
            console.log(newProduct);
            this._toastr.success('Produit créé avec succès');
            return createProductSuccess({ product: newProduct });
          }),
          catchError((error) => {
            this._toastr.error(error, 'Erreur lors de la création du produit');
            return EMPTY;
          })
        );
      })
    )
  );
}
