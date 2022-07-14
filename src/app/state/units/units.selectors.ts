import { createFeatureSelector } from "@ngrx/store";
import { Unit } from "../models/unit.model";

export const selectUnits = createFeatureSelector<ReadonlyArray<Unit>>('units');