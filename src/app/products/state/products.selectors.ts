import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductInCart } from '../../state/models/product-in-cart.model';
import { Product } from '../../state/models/product.model';
import { selectUnits } from '../../state/units/units.selectors';
import { adapter, ProductsState } from './products.reducer';
import * as fromProducts from './products.reducer';

 
export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectCartState = createFeatureSelector<ReadonlyArray<ProductInCart>>('cart');
 

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAll
);


/* export const selectProductInCart = createSelector(
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
); */

export const selectProductInCartCount = createSelector(
  selectCartState,
  (cart) => cart.length
);

export const selectFilterProducts = createSelector(
  selectAllProducts,
  (products, filter) => {
    return { products : products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase())
    )}
  }
);
