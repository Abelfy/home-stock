import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from '../products/products.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const cartReducer = createReducer(
  initialState,
  on(removeProduct, (state, { productId }) => state.filter((id) => id !== productId)),
  on(addProduct, (state, { productId }) => {
    if (state.indexOf(productId) > -1) return state;
 
    return [...state, productId];
  })
);