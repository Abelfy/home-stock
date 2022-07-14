import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductInCart } from 'src/app/state/models/product-in-cart.model';
import { Product } from 'src/app/state/models/product.model';
import { addProduct, createProduct, removeProduct, retrieveProductList } from 'src/app/state/products/products.actions';
import { selectProductInCart, selectProducts } from 'src/app/state/products/products.selectors';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products$ = this.store.select(selectProducts);
  
  onAdd(productInCart : ProductInCart) {
    this.store.dispatch(addProduct({ productInCart }));
  }

  onRemove(productId : string) {
    this.store.dispatch(removeProduct({ productId }));
  }

  onCreate(product : Product) {
    this.store.dispatch(createProduct({ product }));
  }

  constructor(
    private productsService: ProductsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => this.store.dispatch(retrieveProductList({ products })));
  }

}
