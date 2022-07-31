import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';

export const selectFeatureState =
  createFeatureSelector<fromProducts.FeatureState>('products');

export const selectAllProducts = createSelector(selectFeatureState, (state) =>
  fromProducts.SelectAllProduct(state.products)
);

export const selectAllUnits = createSelector(selectFeatureState, (state) =>
  fromProducts.SelectAllUnits(state.units)
);

export const selectAllLabels = createSelector(selectFeatureState, (state) =>
  fromProducts.SelectAllLabels(state.labels)
);

export const areProductsLoaded = createSelector(
  selectFeatureState,
  (state) => state.products.allProductsLoaded
);

export const areLabelsLoaded = createSelector(
  selectFeatureState,
  (state) => state.labels.allLabelsLoaded
);

export const areUnitsLoaded = createSelector(
  selectFeatureState,
  (state) => state.units.allUnitsLoaded
);

export const areDataLoaded = createSelector(selectFeatureState, (state) => ({
  loaded:
    state.units.allUnitsLoaded &&
    state.labels.allLabelsLoaded &&
    state.products.allProductsLoaded,
}));
