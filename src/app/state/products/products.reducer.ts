import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { retrieveProductList } from './products.actions';

export const initialState : ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(retrieveProductList, (state, { products }) => products)
);
