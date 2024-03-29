import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  }, 
  {
    path : 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule), canActivate : [AuthGuard]
  },
  {
    path : 'stocks', loadChildren: () => import('./stock/stock.module').then(module => module.StockModule), canActivate : [AuthGuard]
  },
  {
    path : 'shopping-lists', loadChildren: () => import('./shopping-lists/shopping-lists.module').then(module => module.ShoppingListsModule), canActivate : [AuthGuard]
  },
  {
    path : 'administration', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule), canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
