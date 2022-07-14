import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductInCart } from '../models/product-in-cart.model';
import { Product } from '../models/product.model';
import { selectUnits } from '../units/units.selectors';

 
export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
export const selectCartState = createFeatureSelector<ReadonlyArray<ProductInCart>>('cart');
 
export const selectProductInCart = createSelector(
  selectProducts,
  selectCartState,
  selectUnits,
  (products, cart, units) => {
    return cart.map((productInCart) => {
      return { 
        product : products.find((product) => product.id === productInCart.productId),
        quantity : productInCart.quantity,
        unit : units.find((unit) => unit.id === productInCart.unitId),
      }});
  }
);

export const selectProductInCartCount = createSelector(
  selectCartState,
  (cart) => cart.length
);