import { createAction, props } from "@ngrx/store";
import { ProductInList } from "src/app/state/models/product-in-cart.model";

export const addProductToList = createAction('[Product List] Add Product to list', props<{ product: ProductInList }>());
export const removeProductToList = createAction('[Cart] Remove Product from list', props<{ productId: string }>());
export const checkOutList = createAction('[Cart] CheckOut List', props<{ products: ProductInList[] }>());
export const checkOutListSuccess = createAction('[Cart Effects] CheckOut List Success', props<{ products: ProductInList[] }>());