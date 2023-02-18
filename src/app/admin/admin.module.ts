import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './roles-permissions/store/feature.reducer';
import { RolesEffects } from './roles-permissions/store/roles/roles.effects';
import { PermissionsEffects } from './roles-permissions/store/permissions/permissions.effects';


@NgModule({
  declarations: [
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    StoreModule.forFeature('security', reducers),
    EffectsModule.forFeature([RolesEffects,PermissionsEffects]),
  ]
})
export class AdminModule { }
