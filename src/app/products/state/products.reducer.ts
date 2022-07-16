import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../../state/models/product.model';
import { ProductActions } from './actions-types';

export interface ProductsState extends EntityState<Product> {

}

export const adapter = createEntityAdapter<Product>(

);

export const initialProductsState = adapter.getInitialState();

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.allProductsLoaded, (state, { products }) => adapter.setAll(products, state)),
  on(ProductActions.createProductSuccess, (state, { product }) => adapter.addOne(product, state)),
);

export const { selectAll } = adapter.getSelectors();