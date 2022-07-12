import { createSelector, createFeatureSelector } from '@ngrx/store';

 
export const selectProducts = createFeatureSelector<ReadonlyArray<any>>('products');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectBookCollection = createSelector(
  selectProducts,
  selectCollectionState,
  (products, collection) => {
    return collection.map((id) => products.find((product) => product.id === id));
  }
);