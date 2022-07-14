import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const addProduct = createAction('[Products] Add Product', props<{ productId: string }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ productId: string }>());
export const retrieveProductList = createAction('[Products] Fetch All', props<{ products: ReadonlyArray<Product> }>());