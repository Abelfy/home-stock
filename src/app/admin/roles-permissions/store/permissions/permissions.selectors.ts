import { createSelector } from '@ngrx/store';
import { selectPermissionState } from '../feature.selectors';
import * as fromRoles from './permissions.reducer';

export const selectAllPermissions = createSelector(
  selectPermissionState,
  fromRoles.selectAll
);


// TODO : Rename this selector
export const areProductsLoaded = createSelector(
  selectPermissionState,
  (state) => state.isLoading
);
