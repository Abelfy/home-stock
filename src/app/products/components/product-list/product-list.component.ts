import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddInCartModalComponent } from 'src/app/products/components/modals/add-in-cart-modal/add-in-cart-modal.component';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';
import { Product } from '../../../state/models/product.model';
import { CreateProductComponent } from '../modals/create-product/create-product.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { isAdmin } from 'src/app/auth/state/auth.selectors';
import { UpdateProductComponent } from '../modals/update-product/update-product.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() add = new EventEmitter<ProductInList>();
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() filter = new EventEmitter<string>();

  expandedElement: Product | null;
  
  isAdmin$ = this._store.select(isAdmin);
  filterControl : FormControl;
  url : string = environment.api;

  displayedColumns = ['status','name', 'marque', 'etiquette', 'actions'];

  constructor(private _matDialog : MatDialog,private _store: Store<AppState>) {
   }

  onFilterValueChanged(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
  
  addToCart(product : Product) {
    const dialog = this._matDialog.open(AddInCartModalComponent,{
      data: {
        product,
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
          console.log(data);
          this.create.emit(data);
        }
        
      })
  }

  updateProduct(product : Product) {
    this._matDialog.open(UpdateProductComponent, {
      data : product
    })
      .afterClosed()
      .subscribe(( data ) => {
        if(data){
          console.log(data);
          this.update.emit(data);
        }
        
      })
  }
}
