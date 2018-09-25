import { Action } from '@ngrx/store';
import { Task, QuestionaireDeltaRequest, FormlyFieldConfigArrayCollection, TaskRequest } from '../../core/models';

export enum ActionTypes {
    /// Current Task Actions
    GET_CURRENT_TASK = '[App State] Get Current Task',
    GET_CURRENT_TASK_SUCCESS = '[App State] Get Current Task Success',
    GET_CURRENT_TASK_FAIL = '[App State] Get Current Task Failure',

    GET_CURRENT_FIELD_CHANGE_DELTA = '[App State] Get Current Field Change Trigger',
    GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS = '[App State] Get Current Field Change Trigger Success',
    GET_CURRENT_FIELD_CHANGE_DELTA_FAIL = '[App State] Get Current Field Change Trigger Failure',

    RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE = '[App State] Reset Questionnaire State To Intial State',

    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG = '[App State] Get Current Questionnaire formly config',
    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS = '[App State] Get Current Questionnaire formly config Success',
    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL = '[App State] Get Current  Questionnaire formly config Failure',

    SET_CURRENT_QUESTION_ID = '[App State] Set The Current Question Id',

    SET_SELECTED_SECTION_ID = '[App State] Open Selected Section In Questionnaire By Section Id',
    GET_OPEN_SECTIONS_IN_TASK = '[App State] Get Open Sections In A Task',
    PUSH_SECTION_IN_OPEN_SECTIONS = '[App State] Push A Section Id In Open Sections Array',
    POP_SECTION_IN_OPEN_SECTIONS = '[App State] Pop A Section Id In Open Sections Array',
    RESET_OPEN_SECTIONS= '[App State] Reset Open Sections',
    SAVE_CHANGES_BY_SECTION_IN_TASK = '[App State] Save Changes By Section For A Task',
    SAVE_CHANGES_BY_SECTION_IN_TASK_SUCCESS = '[App State] Save Changes By Section For A Task Success',
    SAVE_CHANGES_BY_SECTION_IN_TASK_FAIL = '[App State] Save Changes By Section For A Task Failure',
    DISCARD_CHANGES_BY_SECTION_IN_TASK = '[App State] Discard Changes By Section For A Task',
    DISCARD_CHANGES_BY_SECTION_IN_TASK_SUCCESS = '[App State] Discard Changes By Section For A Task Success',
    DISCARD_CHANGES_BY_SECTION_IN_TASK_FAIL = '[App State] Discard Changes By Section For A Task Failure'


}

export class GetCurrentTask implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK;
    constructor(public payload: TaskRequest) {
        this.payload = payload;
    }
}
export class GetCurrentTaskSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_SUCCESS;
    constructor(public payload: Task) {
        this.payload = payload;
    }
}

export class GetCurrentTaskFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class GetCurrentFieldChangeDelta implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA;
    constructor(public payload: QuestionaireDeltaRequest) {
        this.payload = payload;
    }
}
export class GetCurrentFieldChangeDeltaSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS;

    constructor(public payload: Task) {
        this.payload = payload;
    }
}
export class GetCurrentFieldChangeDeltaFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class ResetQuestionnaireState implements Action {
    readonly type = ActionTypes.RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE;

}

export class GetCurrentQuestionnaireFormlyConfig implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG;
    constructor(public payload: {
        task: Task, currentQuestionId: string,
        requestId: string, workflowId: string, taskId: string
    }) {
        this.payload = payload;
    }
}
export class GetCurrentQuestionnaireFormlyConfigSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS;
    constructor(public payload: FormlyFieldConfigArrayCollection[]) {
        this.payload = payload;
    }
}
export class GetCurrentQuestionnaireFormlyConfigFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class SetCurrentQuestionId implements Action {
    readonly type = ActionTypes.SET_CURRENT_QUESTION_ID;
    constructor(public payload: string) {
        this.payload = payload;
    }
}

export class SetSelectedSectionId implements Action {
    readonly type = ActionTypes.SET_SELECTED_SECTION_ID;
    constructor(public payload: string) {
        this.payload = payload;
    }
}

export class GetOpenSectionInTask implements Action {
    readonly type = ActionTypes.GET_OPEN_SECTIONS_IN_TASK;

}

export class PushSectionInOpenSections implements Action {
    readonly type = ActionTypes.PUSH_SECTION_IN_OPEN_SECTIONS;
    constructor(public payload: string) {
        this.payload = payload;
    }
}

export class PopSectionInOpenSections implements Action {
    readonly type = ActionTypes.POP_SECTION_IN_OPEN_SECTIONS;
    constructor(public payload: string) {
        this.payload = payload;
    }
}
export class SaveChangesBySectionInTask implements Action {
    readonly type = ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK;
    constructor(public payload: TaskRequest) {
        this.payload = payload;
    }
}
export class SaveChangesBySectionInTaskSuccess implements Action {
    readonly type = ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK_SUCCESS;

}
export class SaveChangesBySectionInTaskFailure implements Action {
    readonly type = ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class DiscardChangesBySectionInTask implements Action {
    readonly type = ActionTypes.DISCARD_CHANGES_BY_SECTION_IN_TASK;
    constructor(public payload: TaskRequest) {
        this.payload = payload;
    }
}
export class DiscardChangesBySectionInTaskSuccess implements Action {
    readonly type = ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK_SUCCESS;

}
export class DiscardChangesBySectionInTaskFailure implements Action {
    readonly type = ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class ResetOpenSections implements Action {
    readonly type = ActionTypes.RESET_OPEN_SECTIONS;

}

export type QuesitonnaireActions = GetCurrentTask
    | GetCurrentTaskSuccess
    | GetCurrentTaskFailure
    | GetCurrentFieldChangeDelta
    | GetCurrentFieldChangeDeltaSuccess
    | GetCurrentFieldChangeDeltaFailure
    | ResetQuestionnaireState
    | GetCurrentQuestionnaireFormlyConfig
    | GetCurrentQuestionnaireFormlyConfigSuccess
    | GetCurrentQuestionnaireFormlyConfigFailure
    | SetCurrentQuestionId
    | SetSelectedSectionId
    | GetOpenSectionInTask
    | PushSectionInOpenSections
    | PopSectionInOpenSections
    | SaveChangesBySectionInTask
    | SaveChangesBySectionInTaskSuccess
    | SaveChangesBySectionInTaskFailure
    | DiscardChangesBySectionInTask
    | DiscardChangesBySectionInTaskSuccess
    | DiscardChangesBySectionInTaskFailure
    | ResetOpenSections
    ;
