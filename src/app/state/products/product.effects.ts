import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../../products/services/products.service';
import { createProduct, createProductSuccess } from './products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsSrv: ProductsService,
    private toastr: ToastrService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Products] Fetch All'),
      mergeMap(() =>
        this.productsSrv.getProducts().pipe(
          map((products) => ({
            type: '[Products] Fetch All Success',
            payload: products,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      mergeMap((action) => {
        console.log(action);
        return this.productsSrv.createProduct(action.product).pipe(
          map((newProduct) => {
            console.log(newProduct);
            this.toastr.success('Produit créé avec succès');
            return createProductSuccess({ product: newProduct });
          }),
          catchError((error) => {
            this.toastr.error(error, 'Erreur lors de la création du produit');
            return EMPTY;
          })
        );
      })
    )
  );
}
