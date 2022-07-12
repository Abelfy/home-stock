import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'login', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path : 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule)
  },
  {
    path : 'stocks', loadChildren: () => import('./stock/stock.module').then(module => module.StockModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
