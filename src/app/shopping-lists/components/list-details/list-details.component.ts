import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

import { ProductInList } from 'src/app/store/models/product-in-cart.model';
import { ShoppingList } from '../../state/shopping-list';

@Component({
  selector: 'app-list-details[shoppingList]',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit {
  @Input() shoppingList: ShoppingList;

  @Output() updateList: EventEmitter<ShoppingList> = new EventEmitter();

  boughtProducts: Array<ProductInList> = [];

  constructor() {}

  ngOnInit(): void {
    this.shoppingList.product.map((productInList) => {
      if (productInList.bought) {
        this.boughtProducts.push(productInList);
      }
    });
  }

  onSelectionChange(event: MatSelectionListChange): void {
    let newshoppingList = this.shoppingList;
    newshoppingList.product.forEach((productInList) => {
      debugger;
      if (
        productInList.products_id.id === event.options[0].value.products_id.id
      ) {
        productInList.bought = true;
      }
      return productInList;
    });
    console.log(newshoppingList);
    this.updateList.emit(newshoppingList);
  }
}
