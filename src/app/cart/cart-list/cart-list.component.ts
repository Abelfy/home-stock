import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { ShoppingList } from 'src/app/shopping-lists/state/shopping-list';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';
import { CartActions, CartSelectors } from '../state';

import * as fromCart from '../state/cart.reducer';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  
  shoppingList$ = this._store.select(CartSelectors.selectCart);
  isLoading$ = this._store.select(CartSelectors.selectCartLoading);
  url = environment.api;

  constructor(private _store: Store<fromCart.State>) {}
  

  onRemove(productId: string): void {
    this._store.dispatch(
      CartActions.removeProductToCart({ productId })
    );
  }

  save(shoppingList : ShoppingList): void {
      //this._cartStore.saveList(shoppingList)
  }
}
