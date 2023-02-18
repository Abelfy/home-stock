import { createAction, props } from '@ngrx/store';
import { Label } from '../../../store/models/label.model';

export const loadAllLabels = createAction('[Labels] Fetch All');
export const loadAllLabelsSuccess = createAction( '[Labels Effect] Fetch All Success', props<{ labels: Array<Label> }>());
export const loadAllLabelsFailure = createAction('[Labels Effect] Fetch All Failure');
