import { createSelector } from "@ngrx/store";
import { selectLabelState } from "../feature.selectors";
import * as fromLabels from "./labels.reducer";

export const selectAllLabels = createSelector(selectLabelState, (state) =>
    fromLabels.selectAll(state)
);

export const areLabelsLoaded = createSelector(
    selectLabelState,
    (state) => state.isLoading
  ); 