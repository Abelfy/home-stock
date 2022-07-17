import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { ShoppingListActions } from './action-types';

export interface ShoppingListState extends EntityState<ProductInList> {
  allProductsLoaded: boolean;
}

export const adapter = createEntityAdapter<ProductInList>({
  selectId: (productInList: ProductInList) => {
    console.log(productInList);
    return productInList.product.id
  }
});

export const initialShoppingListState = adapter.getInitialState({
  allProductsLoaded: false,
});

export const productsInListReducer = createReducer(
  initialShoppingListState,
  on(ShoppingListActions.addProductToList, (state, { product }) =>
    adapter.addOne(product, state)
  ),
  on(ShoppingListActions.removeProductToList, (state, { productId }) => adapter.removeOne(productId, state))
);

export const { selectAll } = adapter.getSelectors();