import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { LabelResolver } from './resolvers/label.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { UnitResolver } from './resolvers/unit.resolver';


const routes: Routes = [
  {
    path : '', component : ProductContainerComponent,
    resolve : {
      products : ProductResolver,
      units : UnitResolver,
      labels : LabelResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
