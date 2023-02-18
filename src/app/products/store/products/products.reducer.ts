import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { compareProducts, Product } from 'src/app/store/models/product.model';

import * as ProductActions from './products.actions';

export interface State extends EntityState<Product> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Product>({
  sortComparer: compareProducts
});

export const reducer = createReducer(
  adapter.getInitialState({
    isLoading: false,
  }),
  on(ProductActions.allProductsLoaded, (state, {products}) => adapter.setAll(products, { ...state, allProductsLoaded: true })),
  on(ProductActions.createProductSuccess, (state, { product }) => adapter.addOne(product, state),),
  on(ProductActions.updateProductSuccess, (state, { product }) => adapter.updateOne(product, state)),
  
);

export const { selectAll } = adapter.getSelectors();


