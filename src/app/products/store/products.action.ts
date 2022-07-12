import { createAction } from '@ngrx/store';

export const increment = createAction('[Products Component] Increment');
export const decrement = createAction('[Products Component] Decrement');
export const reset = createAction('[Products Component] Reset');
export const retrievedProductList = createAction('[Products Component] retrievedProductList', (payload: any) => ({ payload }));