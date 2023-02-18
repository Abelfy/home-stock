import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ProductInList } from 'src/app/store/models/product-in-cart.model';
import { Product } from 'src/app/store/models/product.model';
import { ProductActions, ProductSelectors } from '../../store';
import { CartActions } from '../../../cart/state';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products : Product[];
  loading$ = true;
  
  onAdd(productInCart : ProductInList) {
    this._store.dispatch(CartActions.addProductToCart({ product : productInCart }));
  }

  onRemove(productId : string) {
    this._store.dispatch(ProductActions.removeProduct({ productId }));
  }

  onCreate(product : Product) {
    this._store.dispatch(ProductActions.createProduct({ product }));
  }

  /* onFilter(filter : string) {
    this.products$ = this._store.select(ProductSelectors.selectAllProducts).pipe(
      map((products) => products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase())))
    );
  } */

  onUpdate(product : Product) {
    this._store.dispatch(ProductActions.updateProduct({ product }));
  }

  constructor(
    private _route : ActivatedRoute,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.products = this._route.snapshot.data.products
  }

}
