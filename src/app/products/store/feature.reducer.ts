import { combineReducers } from "@ngrx/store";
import * as fromProducts from './products/products.reducer';
import * as fromLabels from './labels/labels.reducer';
import * as fromUnits from './units/units.reducer';

export interface FeatureState {
    products: fromProducts.State;
    labels: fromLabels.State;
    units: fromUnits.State;
  }

export const reducers = combineReducers({
    products: fromProducts.reducer,
    labels: fromLabels.reducer,
    units : fromUnits.reducer
})