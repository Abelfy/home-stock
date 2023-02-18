import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Label } from 'src/app/store/models/label.model';
import { loadAllLabelsSuccess } from './labels.actions';


export interface State extends EntityState<Label> {
  isLoading: boolean;
}
export const adapter = createEntityAdapter<Label>();

export const reducer = createReducer(
  adapter.getInitialState({
    isLoading: false,
  }),
  on(loadAllLabelsSuccess, (state, { labels }) => adapter.setAll(labels, {...state,isLoading: true})),
)

export const { selectAll } = adapter.getSelectors();
