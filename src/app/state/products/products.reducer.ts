import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { addProduct, createProduct, createProductSuccess, retrieveProductList } from './products.actions';

export const initialState : ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(retrieveProductList, (state, { products }) => products),
  on(createProductSuccess, (state, { product }) => [...state, product]),
);
