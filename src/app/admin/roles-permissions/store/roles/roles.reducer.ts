import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Role } from '../models/role.model';
import * as RolesActions from './roles.actions';

export interface State extends EntityState<Role> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Role>();

export const reducer = createReducer(
  adapter.getInitialState({
    isLoading: false,
  }),
  on(RolesActions.loadAllRoles, (state) => ({...state, isLoading: true})),
  on(RolesActions.loadAllRolesSuccess, (state, { roles }) => adapter.setAll(roles, {...state, isLoading: true}),),
);

export const { selectAll } = adapter.getSelectors();


