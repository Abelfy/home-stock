import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ShoppingListsActions } from "./action-types";
import { ShoppingList } from "./shopping-list";

export interface ShoppingListsState extends EntityState<ShoppingList> {
    allShoppingListsLoaded: boolean;
}
export const adapter = createEntityAdapter<ShoppingList>();
export const initialShoppingListsState: ShoppingListsState = adapter.getInitialState({
    allShoppingListsLoaded : false
})

export const shoppingListsReducer = createReducer(
    initialShoppingListsState,
    on(ShoppingListsActions.allShoppingListsLoaded, (state, action) => adapter.setAll(action.shoppingLists, {...state, allShoppingListsLoaded: true})),
    
)

export const  { selectAll } = adapter.getSelectors();