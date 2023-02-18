import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { ProductInList } from "src/app/store/models/product-in-cart.model";
import { ShoppingList } from "./shopping-list";

export const loadAllShoppingLists = createAction('[Shopping Lists] Load All Shopping Lists');
export const allShoppingListsLoaded = createAction('[Shopping Lists] Load All Shopping Lists Success', props<{ shoppingLists: ShoppingList[] }>());
export const allShoppingListsLoadError = createAction('[Shopping Lists] Load All Shopping Lists Error', props<{ shoppingLists: ShoppingList[] }>());
export const updateShoppingList = createAction('[Shopping Lists] Update Shopping List', props<{ shoppingList: Update<ProductInList> }>());
