import { createFeatureSelector } from "@ngrx/store";
import { Label } from "../models/label.model";

export const selectLabels = createFeatureSelector<ReadonlyArray<Label>>('labels');