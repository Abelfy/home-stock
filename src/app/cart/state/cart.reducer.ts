import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ProductInList } from 'src/app/store/models/product-in-cart.model';
import { CartActions } from '.';

export interface State extends EntityState<ProductInList> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<ProductInList>({
  selectId: (productInList: ProductInList) => {
    return productInList.product.id
  }
});

export const initialCartState = adapter.getInitialState({
  isLoading: false,
});

export const reducer = createReducer(
  initialCartState,
  on(CartActions.addProductToCart, (state, { product }) =>
    adapter.addOne(product, state)
  ),
  on(CartActions.removeProductToCart, (state, { productId }) => adapter.removeOne(productId, state))
);

export const { selectAll } = adapter.getSelectors();