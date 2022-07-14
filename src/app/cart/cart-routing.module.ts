import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '', component : CartContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
