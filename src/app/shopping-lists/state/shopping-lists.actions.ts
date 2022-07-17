import { createAction, props } from "@ngrx/store";

export const loadAllShoppingLists = createAction('[Shopping Lists] Load All Shopping Lists');
export const allShoppingListsLoaded = createAction('[Shopping Lists] Load All Shopping Lists Success', props<{ shoppingLists: any[] }>());
export const allShoppingListsLoadError = createAction('[Shopping Lists] Load All Shopping Lists Error', props<{ shoppingLists: any[] }>());
