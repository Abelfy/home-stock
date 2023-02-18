import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RolePermissionsAssignmentComponent } from './components/role-permissions-assignment/role-permissions-assignment.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';



@NgModule({
  declarations: [
    RolesListComponent,
    RolePermissionsAssignmentComponent
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    SharedModule,
  ]
})
export class RolesPermissionsModule { }
