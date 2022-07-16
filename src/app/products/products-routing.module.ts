import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductResolver } from './state/products.resolver';


const routes: Routes = [
  {
    path : '', component : ProductContainerComponent,
    resolve : {
      products : ProductResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
