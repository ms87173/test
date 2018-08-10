import { ActionTypes, QuesitonnaireActions } from "../actions/questionnaire.actions";
import { Task } from "../../core"
import { FormlyFieldConfig } from "@ngx-formly/core";
export interface QuestionnaireState {
    currentTask: Task,
    currentQuestionnaireConfig: FormlyFieldConfig[]

}

export const InitialQuestionnaireState: QuestionnaireState = {
    currentTask: null,
    currentQuestionnaireConfig: null

}

export function reducer(state: QuestionnaireState = InitialQuestionnaireState, action: QuesitonnaireActions) {

    switch (action.type) {

        case ActionTypes.GET_CURRENT_TASK_SUCCESS:
            return {
                ...state,
                currentTask: action.payload
            }

        /////Todo: set up an error case in state module
        case ActionTypes.GET_CURRENT_TASK_FAIL:
            return {
                ...state

            }

        case ActionTypes.GET_CURRENT_FORMLY_CONFIG_SUCCESS:
            return {
                ...state,
                currentQuestionnaireConfig: action.payload
            }
        /// Todo : handle error case wit error object
        case ActionTypes.GET_CURRENT_FORMLY_CONFIG_FAIL:
            return {
                ...state,
                currentQuestionnaireConfig: action.payload
            }


        default:
            return state;
    }

}
export const getCurrentTask = (state: QuestionnaireState) => state.currentTask;
export const  currentQuestionnaireConfig=(state:QuestionnaireState)=> state.currentQuestionnaireConfig;
