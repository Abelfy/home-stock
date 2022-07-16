import { createReducer, on } from '@ngrx/store';
import { ProductInCart } from '../models/product-in-cart.model';
import { addProduct, removeProduct } from '../../products/state/products.actions';
 
export const initialState: ReadonlyArray<ProductInCart> = [];
 
export const cartReducer = createReducer(
  initialState,
  on(removeProduct, (state, { productId }) => state.filter((productInCart) => productInCart.productId !== productId)),
  on(addProduct, (state, { productInCart }) => {
    if (state.indexOf(productInCart) > -1) return state;
 
    return [...state, productInCart];
  })
);