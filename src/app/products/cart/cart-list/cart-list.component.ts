import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ShoppingList } from 'src/app/shopping-lists/state/shopping-list';
import { AppState } from 'src/app/state/app.state';
import { environment } from 'src/environments/environment';
import {
  ShoppingListActions,
  ShoppingListSelectors
} from '../state/action-types';
import { CartStore } from './cart.store';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers : [CartStore]
})
export class CartListComponent implements OnInit {
  //shoppingList$ = this._store.select(ShoppingListSelectors.selectShoppingList);
  shoppingList$ = this._cartStore.shoppingList$;
  isLoading$ = this._cartStore.isLoading$;
  url: string = environment.api;

  

  constructor(private _store: Store<AppState>, private readonly _cartStore : CartStore) {}

  ngOnInit(): void {
    this._cartStore.init();
  }

  onRemove(productId: string): void {
    this._store.dispatch(
      ShoppingListActions.removeProductToList({ productId })
    );
  }

  save(shoppingList : ShoppingList): void {
      this._cartStore.saveList(shoppingList)
  }


}
