import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { compareProducts, Product } from 'src/app/state/models/product.model';
import { ProductActions } from './actions-types';


export interface ProductsState extends EntityState<Product> {
  allProductsLoaded: boolean;
}

export const adapter = createEntityAdapter<Product>({
  sortComparer: compareProducts
});

export const initialProductsState = adapter.getInitialState({
  allProductsLoaded: false
});

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.allProductsLoaded, (state, { products }) => adapter.setAll(products, {...state, allProductsLoaded: true})),
  on(ProductActions.createProductSuccess, (state, { product }) => adapter.addOne(product, state)),
  on(ProductActions.updateProductSuccess, (state, { product }) => adapter.updateOne(product, state)),
);

export const { selectAll } = adapter.getSelectors();
