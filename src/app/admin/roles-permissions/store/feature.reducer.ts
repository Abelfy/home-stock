import { combineReducers } from "@ngrx/store";
import * as fromRoles from './roles/roles.reducer';
import * as fromPermissions from './permissions/permissions.reducer';

export interface FeatureState {
    roles: fromRoles.State;
    permissions: fromPermissions.State;
  }

export const reducers = combineReducers({
    roles: fromRoles.reducer,
    permissions: fromPermissions.reducer,
})