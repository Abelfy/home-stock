import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/state/models/product.model';
import { selectProductInCart } from '../../../state/products/products.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() products: ReadonlyArray<Product> = [];
  
  constructor(
    private _store : Store
  ) { }


  ngOnInit(): void {
  }

}
