import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.reducer";
import * as fromShoppingList from "./shopping-list.reducer";
export const selectShoppingListState = createFeatureSelector<ShoppingListState>('shoppingList');

export const selectShoppingList = createSelector(
    selectShoppingListState,
    fromShoppingList.selectAll
  );
