import { createReducer, on } from "@ngrx/store";
import { Label } from "../models/label.model";
import { retrieveLabels } from "./labels.actions";

export const initialState : ReadonlyArray<Label> = [];

export const labelsReducer = createReducer(
    initialState,
    on(retrieveLabels, (state, { labels }) => labels)
)