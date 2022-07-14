import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './components/product-container/product-container.component';


const routes: Routes = [
  {
    path : '', component : ProductContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
