import { ActionTypes, QuesitonnaireActions } from '../actions/questionnaire.actions';
import { Task, QuestionaireDeltaResponse, QuestionaireDeltaError, FormlyFieldConfigArrayCollection } from '../../core/models';
import { FormlyFieldConfig } from '@ngx-formly/core';
export interface QuestionnaireState {
    readonly currentTask: Task;
    readonly currentQuestionnaireConfig: FormlyFieldConfigArrayCollection[];
    readonly currentQuestionnaireDelta: QuestionaireDeltaResponse;
    readonly mergedCurrentTaskWithDelta: Task;
    readonly currentQuestionId: string;
    readonly errors: QuestionaireDeltaError[];
    readonly selectedSection: string;
}

export const InitialQuestionnaireState: QuestionnaireState = {
    currentTask: null,
    currentQuestionnaireConfig: null,
    currentQuestionnaireDelta: null,
    mergedCurrentTaskWithDelta: null,
    currentQuestionId: null,
    selectedSection: null,
    errors: []
};

export function reducer(state: QuestionnaireState = InitialQuestionnaireState, action: QuesitonnaireActions) {

    switch (action.type) {
        case ActionTypes.GET_CURRENT_TASK_SUCCESS:
            let currTask = { ...action.payload };
            if (state.selectedSection) {
                currTask.sections.forEach((section) => {
                    if (section.title == state.selectedSection) {
                        section.editableMode = true;
                    }
                })
            }
            return {
                ...state,
                currentTask: currTask
            };

        ///// Todo: set up an error case in state module
        case ActionTypes.GET_CURRENT_TASK_FAIL:
            return {
                ...state

            };
        case ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS:
            return {
                ...state,
                currentQuestionnaireConfig: action.payload
            };
        /// Todo : handle error case wit error object
        case ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL:
            return {
                ...state
            };

        case ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS:
            if (action.payload) {


                return {
                    ...state,
                    currentTask: action.payload

                };
            } else {
                return state;
            }
        /// Todo : handle error case wit error object
        case ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_FAIL:
            return {
                ...state,
            };

        case ActionTypes.SET_CURRENT_QUESTION_ID:
            return {
                ...state,
                currentQuestionId: action.payload
            };

        case ActionTypes.RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE:
            return {
                ...state,
                currentTask: null,
                currentQuestionnaireConfig: null,
                currentQuestionnaireDelta: null,
                selectedSection: null

            };

      

        case ActionTypes.SET_SELECTED_SECTION_NAME:

            return {
                ...state,
                selectedSection: action.payload
            };



        default:
            return state;
    }

}
export const getCurrentTask = (state: QuestionnaireState) => state.currentTask;
export const getCurrentQuestionnaireConfig = (state: QuestionnaireState) => state.currentQuestionnaireConfig;
export const getCurrentQuestionnaireDelta = (state: QuestionnaireState) => state.currentQuestionnaireDelta;
export const getMergedCurrentTaskWithDelta = (state: QuestionnaireState) => state.mergedCurrentTaskWithDelta;
export const getCurrentQuestionId = (state: QuestionnaireState) => state.currentQuestionId;
export const getCurrentQuestionnaireErrors = (state: QuestionnaireState) => state.errors;
export const getSelectedSection = (state: QuestionnaireState) => state.selectedSection;


