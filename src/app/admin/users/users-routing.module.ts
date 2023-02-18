import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { RolesResolver  } from '../roles-permissions/resolvers/roles/roles.resolver';

const routes: Routes = [
  {
    path : '', component : UserListComponent,
    resolve : { users : UsersResolver , roles : RolesResolver },
    canActivate : [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : [AuthGuard, UsersService]
})
export class UsersRoutingModule { }
