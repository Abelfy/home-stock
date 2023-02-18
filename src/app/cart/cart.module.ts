import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { reducer } from './state/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListEffects } from './state/cart.effects';



@NgModule({
  declarations: [
    CartListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', reducer),
    EffectsModule.forFeature([ShoppingListEffects]),
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
