import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Permission } from '../models/permission.model';

import * as PermissionsActions from './permissions.actions';

export interface State extends EntityState<Permission> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Permission>();

export const reducer = createReducer(
  adapter.getInitialState({
    isLoading: false,
  }),
  on(PermissionsActions.loadAllPermissions, (state) => ({...state, isLoading: true})),
  on(PermissionsActions.loadAllPermissionsSuccess, (state, { permissions }) => adapter.setAll(permissions, {...state, isLoading: true}),),
  
);

export const { selectAll } = adapter.getSelectors();


