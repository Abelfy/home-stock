import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddInCartModalComponent } from 'src/app/shared/components/add-in-cart-modal/add-in-cart-modal.component';
import { ProductInCart } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';
import { Product } from '../../../state/models/product.model';
import { CreateProductComponent } from '../modals/create-product/create-product.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { isAdmin } from 'src/app/auth/state/auth.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: ReadonlyArray<Product> = [];
  @Output() add = new EventEmitter<ProductInCart>();
  @Output() create = new EventEmitter<Product>();
  @Output() filter = new EventEmitter<string>();
  
  isAdmin$ = this._store.select(isAdmin);
  filterControl : FormControl;
  url : string = environment.api;

  constructor(private _matDialog : MatDialog,private _store: Store<AppState>) {
   }

  onFilterValueChanged(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
  
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
  
  addProduct() {
    this._matDialog.open(CreateProductComponent)
      .afterClosed()
      .subscribe(( data ) => {
        if(data){
          this.create.emit(data);
        }
        
      })
  }
}
