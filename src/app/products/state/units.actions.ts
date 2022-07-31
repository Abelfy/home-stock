import { createAction, props } from "@ngrx/store";
import { Unit } from "../../state/models/unit.model";

export const loadAllUnits = createAction("[Units] Fetch All");
export const loadAllUnitsSuccess = createAction("[Units Effect] Fetch All Success", props<{ units: Array<Unit> }>());
export const loadAllUnitsFailure = createAction("[Units Effect] Fetch All Failure");
