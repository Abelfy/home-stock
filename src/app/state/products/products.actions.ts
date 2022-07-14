import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { ProductInCart } from '../models/product-in-cart.model';

export const addProduct = createAction('[Products] Add Product', props<{ productInCart: ProductInCart }>());
export const createProduct = createAction('[Products] Create Product', props<{ product: Product }>());
export const createProductSuccess = createAction('[Products] Create Product Success', props<{ product: Product }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ productId: string }>());
export const retrieveProductList = createAction('[Products] Fetch All', props<{ products: ReadonlyArray<Product> }>());