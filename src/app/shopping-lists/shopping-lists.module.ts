import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListsReducer } from './state/shopping-lists.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListsEffects } from './state/shopping-lists.effects';
import { ShoppingListsRoutingModule } from './shopping-lists.routing.module';
import { ShoppingListsResolver } from './state/shopping-lists.resolver';



@NgModule({
  declarations: [
    ShoppingListsComponent,
    ListDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListsRoutingModule,
    StoreModule.forFeature('shoppingLists', shoppingListsReducer),
    EffectsModule.forFeature([ShoppingListsEffects])
  ],providers:[ShoppingListsResolver]
})
export class ShoppingListsModule { }
