import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';
import { Permission } from '../models/permission.model';


export const createPermission = createAction('[Permissions] Create Permission', props<{ permission: Permission }>());
export const createPermissionSuccess = createAction('[Permissions] Create Permission (Success)', props<{ permission: Permission }>());
export const createPermissionFailure = createAction('[Permissions] Create Permission (Failure)');

export const deletePermission = createAction('[Permissions] Remove Permissions', props<{ permissionId: number }>());
export const deletePermissionSuccess = createAction('[Permissions] Remove Permissions (Success)', props<{ permissionId: number }>());
export const deletePermissionFailure = createAction('[Permissions] Remove Permissions (Failure)');

export const updateProduct = createAction('[Permissions] Update Permissions', props<{ permission: Permission }>());
export const updatePermissionSuccess = createAction('[Permissions] Update Permissions (Success)',  props<{ permission: Update<Permission> }>());
export const updatePermissionFailure = createAction('[Permissions] Update Permissions (Failure)');

export const loadAllPermissions = createAction('[Permissions] Load All Permissions');
export const loadAllPermissionsSuccess = createAction('[Permissions] All Permissions Loaded (Success)', props<{ permissions: Array<Permission> }>());
export const loadAllPermissionsFailure = createAction('[Permissions] All Permissions Loaded (Failure)');

export const filterPermissions = createAction('[Permissions] Filter Permissions', props<{ filter: string }>());


