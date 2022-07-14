import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../state/models/product.model';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss']
})
export class ProductCollectionComponent implements OnInit {

  @Input() products: ReadonlyArray<Product> = [];
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
