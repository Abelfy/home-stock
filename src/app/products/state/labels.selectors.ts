import { createFeatureSelector, createSelector } from "@ngrx/store";
import { labelsAdapter, LabelsState } from "./products.reducer";

export const selectLabels = createFeatureSelector<LabelsState>('labels');

export const selectAllLabels = createSelector(
    selectLabels,
    state => labelsAdapter.getSelectors().selectAll
)

export const areLabelsLoaded = createSelector(
    selectLabels,
    (state: LabelsState) => state.allLabelsLoaded
)