import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../models/product.model';

 
export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('cart');
 
export const selectProductInCart = createSelector(
  selectProducts,
  selectCollectionState,
  (products, cart) => {
    return cart.map((id) => products.find((product) => product.id === id));
  }
);

export const selectProductInCartCount = createSelector(
  selectCollectionState,
  (cart) => cart.length
);