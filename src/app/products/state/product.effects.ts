import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Product } from 'src/app/state/models/product.model';
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

  updateProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.updateProduct),
      mergeMap((action) => {
        return this._productsSrv.updateProduct(action.product).pipe(
          map((product) => {
            const updateProduct : Update<Product> ={
              id: product.id,
              changes: product
            }
            return ProductActions.updateProductSuccess({ product : updateProduct});
          }),
          catchError((error) => {
            this._toastr.error(
              error,
              'Erreur lors de la modification du produit'
            );
            return EMPTY;
          })
        );
      })
    )
  );
}
