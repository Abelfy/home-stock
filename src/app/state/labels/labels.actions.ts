import { createAction, props } from "@ngrx/store";
import { Label } from "../models/label.model";

export const retrieveLabels = createAction("[Labels] Fetch All", props<{ labels: ReadonlyArray<Label> }>());