import { createAction, props } from "@ngrx/store";
import { Unit } from "../models/unit.model";

export const retrieveUnits = createAction("[Units] Fetch All", props<{ units: ReadonlyArray<Unit> }>());