import { createReducer, on } from "@ngrx/store";
import { Unit } from "../models/unit.model";
import { retrieveUnits } from "./units.actions";

export const initialState : ReadonlyArray<Unit> = [];

export const unitsReducer = createReducer(
    initialState,
    on(retrieveUnits, (state, { units }) => units)
)