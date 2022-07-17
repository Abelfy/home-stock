import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, tap } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ShoppingListActions } from './action-types';

@Injectable()
export class ShoppingListEffects {
  constructor(
    private actions$: Actions,
    private shoppingListService: CartService,
    private toastr : ToastrService,
    private router: Router
  ) {}

  checkOutList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingListActions.checkOutList),
      switchMap((action) =>
        this.shoppingListService
          .createShoppingList(action.products)
          .pipe(map((data) => ShoppingListActions.checkOutListSuccess(data)))
      )
    )
  );

  checkOutListSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ShoppingListActions.checkOutListSuccess),
        tap(() => {
            this.toastr.success('Votre liste de courses a été créée avec succès');
            this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
