import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/modals/user-details/user-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/users.effects';
import { reducer } from './store/users.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersFormComponent } from './components/modals/users-form/users-form.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
