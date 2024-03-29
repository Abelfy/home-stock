import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingListsState } from "./shopping-lists.reducers";
import * as fromShoppingLists from './shopping-lists.reducers';

export const selectShoppingListsState = createFeatureSelector<ShoppingListsState>('shoppingLists');
export const selectAllShoppingLists = createSelector(
    selectShoppingListsState,
    fromShoppingLists.selectAll
  );

export const selectShoppingListById = (id: string) => createSelector(
  selectAllShoppingLists,
  (shoppingLists) => shoppingLists.find(shoppingList => shoppingList.id === id)

)
export const areAllShoppingListsLoaded = createSelector(
    selectShoppingListsState,
    state => state.allShoppingListsLoaded
)