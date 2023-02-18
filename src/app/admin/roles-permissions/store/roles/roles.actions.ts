import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';
import { Role } from '../models/role.model';


export const createRole = createAction('[Roles] Create Role', props<{ role: Role }>());
export const createRoleSuccess = createAction('[Roles] Create Product (Success)', props<{ role: Role }>());
export const createRoleFailure = createAction('[Roles] Create Product (Failure)');

export const deleteRole = createAction('[Roles] Remove Product', props<{ roleId: number }>());
export const deleteRoleSuccess = createAction('[Roles] Remove Product (Success)', props<{ roleId: number }>());
export const deleteRoleFailure = createAction('[Roles] Remove Product (Failure)');

export const updateProduct = createAction('[Roles] Update Product', props<{ role: Role }>());
export const updateRoleSuccess = createAction('[Roles] Update Product (Success)',  props<{ role: Update<Role> }>());
export const updateRoleFailure = createAction('[Roles] Update Product (Failure)');

export const loadAllRoles = createAction('[Roles] Load All Roles');
export const loadAllRolesSuccess = createAction('[Roles] All Roles Loaded (Success)', props<{ roles: Array<Role> }>());
export const loadAllRolesFailure = createAction('[Roles] All Roles Loaded (Failure)');

export const filterRoles = createAction('[Roles] Filter Roles', props<{ filter: string }>());


