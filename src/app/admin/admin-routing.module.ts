import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';

const routes: Routes = [
  {
    path : '', component : AdminNavigationComponent, canActivate : [AuthGuard],
    children : [
      {
        path : 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule), canActivate : [AuthGuard]
      },
      {
        path : 'roles-permissions', loadChildren: () => import('./roles-permissions/roles-permissions.module').then(module => module.RolesPermissionsModule), canActivate : [AuthGuard]
      },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
