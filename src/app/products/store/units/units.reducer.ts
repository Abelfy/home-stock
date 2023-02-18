import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Unit } from 'src/app/store/models/unit.model';
import {
  loadAllUnits,
  loadAllUnitsFailure,
  loadAllUnitsSuccess,
} from './units.actions';

export interface State extends EntityState<Unit> {
  isLoading: boolean;
}
export const adapter = createEntityAdapter<Unit>();

export const initialState: State = adapter.getInitialState({
  isLoading: false,
});

export const reducer = createReducer(
  initialState,
  on(loadAllUnits, (state) =>
    adapter.setAll([], { ...state, isLoading: true })
  ),
  on(loadAllUnitsSuccess, (state, { units }) =>
    adapter.setAll(units, { ...state, isLoading: false })
  ),
  on(loadAllUnitsFailure, (state) =>
    adapter.setAll([], { ...state, isLoading: false })
  )
);
export const { selectAll } = adapter.getSelectors();
