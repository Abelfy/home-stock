import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LabelsState, productsReducer, unitsAdapter  } from "./products.reducer";

export const selectUnits = createFeatureSelector<LabelsState>('products');

export const selectAllUnits = createSelector(
    selectUnits,
    state => unitsAdapter.getSelectors().selectAll
);