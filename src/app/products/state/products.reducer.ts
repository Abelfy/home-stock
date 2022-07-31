import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Label } from 'src/app/state/models/label.model';
import { compareProducts, Product } from 'src/app/state/models/product.model';
import { Unit } from 'src/app/state/models/unit.model';

import { ProductActions } from './actions-types';


export interface ProductsState extends EntityState<Product> {
  allProductsLoaded: boolean;
}

export interface LabelsState extends EntityState<Label> {
  allLabelsLoaded: boolean;
}

export interface UnitsState extends EntityState<Unit> {
  allUnitsLoaded: boolean;
}

export interface FeatureState {
  products: ProductsState;
  labels: LabelsState;
  units: UnitsState;
}

export const productsAdapter = createEntityAdapter<Product>({
  sortComparer: compareProducts
});
export const labelsAdapter = createEntityAdapter<Label>();

export const unitsAdapter = createEntityAdapter<Unit>();

export const initialState : FeatureState  = {
  products : productsAdapter.getInitialState({
    allProductsLoaded: false,
    uiFilter: ''
  }),
  labels : labelsAdapter.getInitialState({
    allLabelsLoaded: false,
  }),
  units : unitsAdapter.getInitialState({
    allUnitsLoaded: false,
  }),
}

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.allProductsLoaded, (state, {products}) => ({...state,products: productsAdapter.setAll(products, { ...state.products, allProductsLoaded: true })})),
  on(ProductActions.createProductSuccess, (state, { product }) => ({...state,products: productsAdapter.addOne(product, state.products),})),
  on(ProductActions.updateProductSuccess, (state, { product }) => ({...state,products: productsAdapter.updateOne(product, state.products)})),
  on(ProductActions.loadAllLabelsSuccess, (state, { labels }) => ({...state, labels : labelsAdapter.setAll(labels, {...state.labels,allLabelsLoaded: true})})),
  on(ProductActions.loadAllUnitsSuccess, (state, { units }) => ({...state, units : unitsAdapter.setAll(units, {...state.units,allUnitsLoaded: true})})),
);

export const { selectAll : SelectAllProduct, } = productsAdapter.getSelectors();
export const { selectAll : SelectAllLabels } = labelsAdapter.getSelectors();
export const { selectAll : SelectAllUnits } = unitsAdapter.getSelectors();
