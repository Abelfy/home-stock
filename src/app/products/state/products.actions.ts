import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';
import { Product } from 'src/app/state/models/product.model';

export const createProduct = createAction('[Products] Create Product', props<{ product: Product }>());
export const createProductSuccess = createAction('[Products] Create Product Success', props<{ product: Product }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ productId: string }>());
export const updateProduct = createAction('[Products] Update Product', props<{ product: Product }>());
export const updateProductSuccess = createAction('[Products] Update Product Success',  props<{ product: Update<Product> }>());
export const loadAllProducts = createAction('[Courses Resolver] Load All Products');
export const allProductsLoaded = createAction('[Load Products Effects] All Products Loaded', props<{ products: Array<Product> }>());
export const filterProducts = createAction('[Products] Filter Products', props<{ filter: string }>());

import { Label } from "../../state/models/label.model";

export const loadAllLabels = createAction("[Labels] Fetch All");
export const loadAllLabelsSuccess = createAction("[Labels Effect] Fetch All Success", props<{ labels: Array<Label> }>());
export const loadAllLabelsFailure = createAction("[Labels Effect] Fetch All Failure");

import { Unit } from "../../state/models/unit.model";

export const loadAllUnits = createAction("[Units] Fetch All");
export const loadAllUnitsSuccess = createAction("[Units Effect] Fetch All Success", props<{ units: Array<Unit> }>());
export const loadAllUnitsFailure = createAction("[Units Effect] Fetch All Failure");