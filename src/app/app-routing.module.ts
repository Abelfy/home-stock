import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule), canActivate : [AuthGuard]
  },
  {
    path : 'stocks', loadChildren: () => import('./stock/stock.module').then(module => module.StockModule)
  },
  {
    path : 'cart', loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
