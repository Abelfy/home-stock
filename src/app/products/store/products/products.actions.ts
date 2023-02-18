import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';
import { Product } from 'src/app/store/models/product.model';

export const createProduct = createAction('[Products] Create Product', props<{ product: Product }>());
export const createProductSuccess = createAction('[Products] Create Product Success', props<{ product: Product }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ productId: string }>());
export const updateProduct = createAction('[Products] Update Product', props<{ product: Product }>());
export const updateProductSuccess = createAction('[Products] Update Product Success',  props<{ product: Update<Product> }>());
export const loadAllProducts = createAction('[Courses Resolver] Load All Products');
export const allProductsLoaded = createAction('[Load Products Effects] All Products Loaded', props<{ products: Array<Product> }>());
export const filterProducts = createAction('[Products] Filter Products', props<{ filter: string }>());


