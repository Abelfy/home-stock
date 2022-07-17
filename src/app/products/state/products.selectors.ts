import { createSelector, createFeatureSelector } from '@ngrx/store';
import {  ProductsState } from './products.reducer';
import * as fromProducts from './products.reducer';

 
export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAll
);

export const areProductsLoaded = createSelector(
  selectProductsState,
  state => state.allProductsLoaded
)

