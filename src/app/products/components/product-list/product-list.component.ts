import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInCartModalComponent } from 'src/app/shared/components/add-in-cart-modal/add-in-cart-modal.component';
import { ProductInCart } from 'src/app/state/models/product-in-cart.model';
import { Product } from '../../../state/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: ReadonlyArray<Product> = [];
  @Output() add = new EventEmitter<ProductInCart>();
  displayedColumns: string[] = ['status', 'name', 'marque', 'date_created', 'date_updated', 'etiquette', 'actions'];

  constructor(private _matDialog : MatDialog) { }

  addToCart(productId : string) {
    const dialog = this._matDialog.open(AddInCartModalComponent,{
      data: {
        productId,
      }
    })
    dialog.afterClosed().subscribe(( data ) => { 
      this.add.emit(data);
    })
  }
}
