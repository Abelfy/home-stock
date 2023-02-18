import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureState } from "./feature.reducer";

export const selectFeatureState = createFeatureSelector<FeatureState>('security');
export const selectRoleState = createSelector(selectFeatureState, (featureState) => featureState.roles);
export const selectPermissionState = createSelector(selectFeatureState, (featureState) => featureState.permissions);