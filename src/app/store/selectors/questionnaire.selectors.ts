import * as fromRootReducer from '../reducers';
import { createSelector } from '@ngrx/store';

export const getQuestionnaireState = (state: fromRootReducer.AppState) => state.questionnaire;

export const getCurrentTask = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentTask

);

export const getCurrentQuestionnaireConfig = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentQuestionnaireConfig

);

export const getCurrentQuestionnaireDelta = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentQuestionnaireDelta

);
export const getMergedCurrentTaskWithDelta = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getMergedCurrentTaskWithDelta

);
export const getCurrentQuestionId = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentQuestionId

);

export const getCurrentQuestionnaireErrors = createSelector(
    getQuestionnaireState,
    fromRootReducer.questionnaireReducer.getCurrentQuestionnaireErrors

);

