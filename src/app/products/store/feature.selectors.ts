import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureState } from "./feature.reducer";

export const selectFeatureState = createFeatureSelector<FeatureState>('products');
export const selectProductState = createSelector(selectFeatureState, (featureState) => featureState.products);
export const selectUnitState = createSelector(selectFeatureState, (featureState) => featureState.units);
export const selectLabelState = createSelector(selectFeatureState, (featureState) => featureState.labels);