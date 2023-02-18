import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';

import { RolesListComponent } from './components/roles-list/roles-list.component';
import { PermissionsResolver } from './resolvers/permissions/permissions.resolver';
import { RolesResolver } from './resolvers/roles/roles.resolver';

const routes: Routes = [
  {
    path: '',
    component: RolesListComponent,
    resolve: { roles: RolesResolver, permissions: PermissionsResolver },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesPermissionsRoutingModule {}
