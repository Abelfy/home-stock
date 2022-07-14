import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductCollectionComponent } from './components/product-collection/product-collection.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../state/products/products.reducer';



@NgModule({
  declarations: [
    ProductCollectionComponent,
    ProductContainerComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    SharedModule
  ]
})
export class ProductsModule { }
