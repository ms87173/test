import * as fromRootReducer  from "../reducers"
import { createSelector } from "@ngrx/store";

export const getQuestionnaireState = (state: fromRootReducer.AppState) => state.questionnaire;

export const getCurrentTask = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentTask
)
