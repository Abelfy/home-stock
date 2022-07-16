import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductContainerComponent } from './components/product-container/product-container.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products.reducer';
import { CreateProductComponent } from './components/modals/create-product/create-product.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/state/auth.effects';
import { ProductEffects } from './state/product.effects';
import { ProductResolver } from './state/products.resolver';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ],
  providers : [
    ProductResolver
  ]
})
export class ProductsModule { }
