import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { productsInListReducer } from './state/shopping-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListEffects } from './state/shopping-list.effects';



@NgModule({
  declarations: [
    CartListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('shoppingList', productsInListReducer),
    EffectsModule.forFeature([ShoppingListEffects]),
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
