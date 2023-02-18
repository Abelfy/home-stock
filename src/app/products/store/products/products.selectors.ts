import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectProductState } from '../feature.selectors';
import * as fromProducts from './products.reducer';

export const selectAllProducts = createSelector(selectProductState, (state) =>
  fromProducts.selectAll(state)
);

export const areProductsLoaded = createSelector(
  selectProductState,
  (state) => state.isLoading
);
