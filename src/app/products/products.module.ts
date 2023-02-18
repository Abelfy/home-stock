import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { CreateProductComponent } from './components/modals/create-product/create-product.component';
import { EffectsModule } from '@ngrx/effects';
import { UpdateProductComponent } from './components/modals/update-product/update-product.component';
import { ProductEffects } from './store/effects/product.effects';
import { ProductResolver } from './resolvers/product.resolver';
import { CartModule } from '../cart/cart.module';
import { LabelsEffects } from './store/effects/labels.effects';
import { UnitsEffects } from './store/effects/units.effects';
import { reducers } from './store/feature.reducer';
import { UnitResolver } from './resolvers/unit.resolver';
import { LabelResolver } from './resolvers/label.resolver';




@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductEffects,LabelsEffects,UnitsEffects]),
    SharedModule,
    CartModule
  ],
  providers : [
    ProductResolver,
    UnitResolver,
    LabelResolver
  ]
})
export class ProductsModule { }
