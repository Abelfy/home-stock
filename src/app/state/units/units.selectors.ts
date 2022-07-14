import { createFeatureSelector } from "@ngrx/store";
import { Unit } from "../models/units.model";

export const selectUnits = createFeatureSelector<ReadonlyArray<Unit>>('units');