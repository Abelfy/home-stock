import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { Product } from 'src/app/state/models/product.model';
import { ProductActions, ProductSelectors } from '../../state/actions-types';
import { ShoppingListActions } from '../../cart/state/action-types';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products$ = this._store.select(ProductSelectors.selectAllProducts);
  loading$ = true;
  
  onAdd(productInCart : ProductInList) {
    this._store.dispatch(ShoppingListActions.addProductToList({ product : productInCart }));
  }

  onRemove(productId : string) {
    this._store.dispatch(ProductActions.removeProduct({ productId }));
  }

  onCreate(product : Product) {
    this._store.dispatch(ProductActions.createProduct({ product }));
  }

  onFilter(filter : string) {
    
  }

  onUpdate(product : Product) {
    this._store.dispatch(ProductActions.updateProduct({ product }));
  }

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    /* this._store.dispatch(UnitsActions.loadAllUnits());
    this._store.dispatch(LabelsActions.loadAllLabels()); */    
  }

}
