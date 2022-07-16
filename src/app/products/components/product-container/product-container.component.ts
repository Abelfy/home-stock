import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { retrieveLabels } from 'src/app/state/labels/labels.actions';
import { ProductInCart } from 'src/app/state/models/product-in-cart.model';
import { Product } from 'src/app/state/models/product.model';
import { retrieveUnits } from 'src/app/state/units/units.actions';
import { ProductsService } from '../../services/products.service';
import { ProductActions, ProductSelectors } from '../../state/actions-types';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products$ = this._store.select(ProductSelectors.selectAllProducts);
  
  onAdd(productInCart : ProductInCart) {
    this._store.dispatch(ProductActions.addProduct({ productInCart }));
  }

  onRemove(productId : string) {
    this._store.dispatch(ProductActions.removeProduct({ productId }));
  }

  onCreate(product : Product) {
    this._store.dispatch(ProductActions.createProduct({ product }));
  }

  onFilter(filter : string) {
    //this.products$=this._store.select(selectFilterProducts(filter));
  }

  constructor(
    private _productsService: ProductsService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    //this._productsService.getProducts().subscribe(products => this._store.dispatch(retrieveProductList({ products })));
    this._productsService.getUnits().subscribe(units => this._store.dispatch(retrieveUnits({ units })));
    this._productsService.getLabels().subscribe(labels => this._store.dispatch(retrieveLabels({ labels })));
  }

}
