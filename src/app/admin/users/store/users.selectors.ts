import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUsers from './users.reducer';

export const selectUserState = createFeatureSelector<fromUsers.State> ('users');

export const selectAllUsers = createSelector(selectUserState, fromUsers.selectAll);

export const areProductsLoaded = createSelector(
    selectUserState,
  (state) => state.isLoading
);