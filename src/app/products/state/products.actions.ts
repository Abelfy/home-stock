import { createAction, props } from '@ngrx/store';
import { Product } from '../../state/models/product.model';
import { ProductInCart } from '../../state/models/product-in-cart.model';

export const addProduct = createAction('[Products] Add Product', props<{ productInCart: ProductInCart }>());
export const createProduct = createAction('[Products] Create Product', props<{ product: Product }>());
export const createProductSuccess = createAction('[Products] Create Product Success', props<{ product: Product }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ productId: string }>());
export const loadAllProducts = createAction('[Courses Resolver] Load All Products');
export const allProductsLoaded = createAction('[Load Products Effects] All Products Loaded', props<{ products: Array<Product> }>());
