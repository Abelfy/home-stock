import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductContainerComponent } from './components/product-container/product-container.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { CreateProductComponent } from './components/modals/create-product/create-product.component';
import { EffectsModule } from '@ngrx/effects';
import { UpdateProductComponent } from './components/modals/update-product/update-product.component';
import { ProductEffects } from './state/effects/product.effects';
import { ProductResolver } from './state/products.resolver';
import { productsReducer } from './state/products.reducer';
import { CartModule } from './cart/cart.module';
import { LabelsEffects } from './state/effects/labels.effects';
import { UnitsEffects } from './state/effects/units.effects';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductEffects,LabelsEffects,UnitsEffects]),
    SharedModule
  ],
  providers : [
    ProductResolver
  ]
})
export class ProductsModule { }
