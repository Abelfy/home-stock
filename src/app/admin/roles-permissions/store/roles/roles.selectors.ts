import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRoleState } from '../feature.selectors';
import * as fromRoles from './roles.reducer';

export const selectAllRoles = createSelector(
  selectRoleState,
  fromRoles.selectAll
);

// TODO : Rename this selector
export const areProductsLoaded = createSelector(
  selectRoleState,
  (state) => state.isLoading
);
