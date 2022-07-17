import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingListsResolver } from './state/shopping-lists.resolver';


const routes: Routes = [
  {
    path : '', component : ShoppingListsComponent,
    resolve : {
      products : ShoppingListsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListsRoutingModule { }
