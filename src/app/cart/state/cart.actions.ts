import { createAction, props } from "@ngrx/store";
import { ProductInList } from "src/app/store/models/product-in-cart.model";

export const addProductToCart = createAction('[Cart] Add Product to list', props<{ product: ProductInList }>());
export const removeProductToCart = createAction('[Cart] Remove Product from list', props<{ productId: string }>());
export const checkOutCart = createAction('[Cart] CheckOut List', props<{ products: ProductInList[] }>());
export const checkOutCartSuccess = createAction('[Cart] CheckOut List Success', props<{ products: ProductInList[] }>());