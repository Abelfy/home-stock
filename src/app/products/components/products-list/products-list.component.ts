import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { selectProducts } from '../../store/product.selectors';
import { retrievedProductList } from '../../store/products.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  product$ = this.store.select(selectProducts);
  constructor( private productsSrv : ProductsService, private store: Store<{products : Array<any>}>) {
   }

  ngOnInit(): void {
    this.productsSrv.getProducts().subscribe(products => this.store.dispatch(retrievedProductList(products)));
  }
}
