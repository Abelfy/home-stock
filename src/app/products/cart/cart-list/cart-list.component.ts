import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';
import {
  ShoppingListActions,
  ShoppingListSelectors,
} from '../state/action-types';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  shoppingList$ = this._store.select(ShoppingListSelectors.selectShoppingList);

  url: string = environment.api;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}

  onRemove(productId: string): void {
    this._store.dispatch(
      ShoppingListActions.removeProductToList({ productId })
    );
  }

  save(): void {
    this._store
      .select(ShoppingListSelectors.selectShoppingList)
      .pipe(take(1))
      .subscribe((shoppingList) =>
        this._store.dispatch(
          ShoppingListActions.checkOutList({ products: shoppingList })
        )
      );
  }
}
