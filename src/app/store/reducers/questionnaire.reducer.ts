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
    readonly selectedSectionId: string;
    readonly openSections: string[]
}

export const InitialQuestionnaireState: QuestionnaireState = {
    currentTask: null,
    currentQuestionnaireConfig: null,
    currentQuestionnaireDelta: null,
    mergedCurrentTaskWithDelta: null,
    currentQuestionId: null,
    selectedSectionId: null,
    openSections: [],
    errors: []
};

export function reducer(state: QuestionnaireState = InitialQuestionnaireState, action: QuesitonnaireActions) {

    switch (action.type) {
        case ActionTypes.GET_CURRENT_TASK_SUCCESS:
            let currTask = { ...action.payload };
            let openSections = [...state.openSections];
            console.log(openSections);
            openSections.forEach((openSection) => {
                currTask.sections.forEach((section) => {
                    if (section.id == openSection) {
                        section.editableMode = true;
                    }
                });
            });

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
                let currTask = { ...action.payload };
                let openSections = [...state.openSections];
                openSections.forEach((openSection) => {
                    currTask.sections.forEach((section) => {
                        if (section.id == openSection) {
                            section.editableMode = true;
                        }
                    });
                });
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
                selectedSectionId: null,
                openSections: []

            };



        case ActionTypes.SET_SELECTED_SECTION_ID:

            return {
                ...state,
                selectedSectionId: action.payload
            };

        case ActionTypes.PUSH_SECTION_IN_OPEN_SECTIONS:
            if (state.openSections.includes(action.payload)) {
                return {
                    ...state
                }
            } else {
                let openSections = [...state.openSections];
                openSections.push(action.payload);
                let currTask = state.currentTask;
                if (currTask) {
                    openSections.forEach((openSection) => {
                        currTask.sections.forEach((section) => {
                            if (section.id == openSection) {
                                section.editableMode = true;
                            }
                        });
                    });
                    return {
                        ...state,
                        openSections: openSections,
                        currentTask: currTask
                    };
                } else {
                    return {
                        ...state,
                        openSections: openSections,
                        // currentTask: currTask
                    };
                }

            }

        case ActionTypes.POP_SECTION_IN_OPEN_SECTIONS:
            if (state.openSections.includes(action.payload)) {
                // let currTask = { ...state.currentTask };
                let openSections = [...state.openSections];
                //Todo : Need to remove as Save Changes will  be doing this working for it
                // currTask.sections.forEach((section) => {
                //     if (section.id == action.payload) {
                //         section.editableMode = false;
                //     }
                // });              
                openSections.splice(openSections.indexOf(action.payload), 1);

                return {
                    ...state,
                    openSections: openSections,
                    // currentTask: currTask
                }
            } else {
                return {
                    ...state
                };
            }

        case ActionTypes.RESET_OPEN_SECTIONS:

            return {
                ...state,
                openSections: []
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
export const getSelectedSectionId = (state: QuestionnaireState) => state.selectedSectionId;
export const getOpenSectionsInTask = (state: QuestionnaireState) => state.openSections;


