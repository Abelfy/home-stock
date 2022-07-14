import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductContainerComponent } from './components/product-container/product-container.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../state/products/products.reducer';
import { CreateProductComponent } from './components/modals/create-product/create-product.component';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    //StoreModule.forFeature('products', productsReducer),
    SharedModule
  ]
})
export class ProductsModule { }
