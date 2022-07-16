import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
//import { selectProductInCart } from 'src/app/products/state/products.selectors';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {

  //productsInCart$ = this._store.select(selectProductInCart);

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
