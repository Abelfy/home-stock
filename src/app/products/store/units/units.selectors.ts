import { createSelector } from '@ngrx/store';

import { selectUnitState } from '../feature.selectors';
import * as fromUnits from './units.reducer';

export const selectAllUnits = createSelector(selectUnitState, (state) =>
  fromUnits.selectAll(state)
);

export const areUnitsLoaded = createSelector(
  selectUnitState,
  (state) => state.isLoading
);
