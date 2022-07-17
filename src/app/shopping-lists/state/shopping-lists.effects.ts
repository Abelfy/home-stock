import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, concatMap, EMPTY, map } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';
import { ShoppingListsService } from '../services/shopping-lists.service';
import { ShoppingListsActions } from './action-types';

@Injectable()
export class ShoppingListsEffects {
  constructor(
    private _actions$: Actions,
    private _shoppingListsSrv: ShoppingListsService,
    private _toastr: ToastrService
  ) {}

  loadAllShoppingLists$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ShoppingListsActions.loadAllShoppingLists),
      concatMap(() =>
        this._shoppingListsSrv.getShoppingLists().pipe(
          map((shoppingLists) =>
            ShoppingListsActions.allShoppingListsLoaded({ shoppingLists })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
