import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartRoutingModule } from './cart-routing.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../state/cart/collection.reducer';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartContainerComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    //StoreModule.forFeature('cart', cartReducer),
    SharedModule
  ]
})
export class CartModule { }
