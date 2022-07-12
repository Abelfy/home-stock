import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, retrievedProductList } from './products.action';

export const initialState : ReadonlyArray<any> = [];

export const productsReducer = createReducer(
  initialState,
  on(reset, (state) => []),
  on(retrievedProductList, (state) => {
    console.log('%cHello products.reducer.ts line:12 ', 'background: green; color: white; display: block;');
    return state
})
);
