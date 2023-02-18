import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCart from "./cart.reducer";

export const selectCartState = createFeatureSelector<fromCart.State>('cart');

export const selectCart = createSelector(
    selectCartState,
    fromCart.selectAll
  );

  export const selectCartLoading = createSelector(
    selectCartState,
    (state) => state.isLoading
  );