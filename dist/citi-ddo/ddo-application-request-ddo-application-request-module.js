(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ddo-application-request-ddo-application-request-module"],{

/***/ "./src/app/core/models/workflow-sidenav.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/models/workflow-sidenav.model.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WorkFlowsSideNavModel = /** @class */ (function () {
    function WorkFlowsSideNavModel(data) {
        if (!data) {
            return null;
        }
        else {
            this.label = data.label;
            this.subHeading = data.subHeading;
            this.status = data.status;
            this.id = data.id;
            this.type = data.tasks && data.tasks.length === 1 ? data.tasks[0].type : 'null';
            this.description = data.description;
            this.children = data.tasks;
        }
    }
    return WorkFlowsSideNavModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (WorkFlowsSideNavModel);


/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ddo-application-request-dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DdoApplicationRequestDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdoApplicationRequestDashboardComponent", function() { return DdoApplicationRequestDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DdoApplicationRequestDashboardComponent = /** @class */ (function () {
    function DdoApplicationRequestDashboardComponent() {
    }
    DdoApplicationRequestDashboardComponent.prototype.ngOnInit = function () {
    };
    DdoApplicationRequestDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ddo-application-request-dashboard',
            template: __webpack_require__(/*! ./ddo-application-request-dashboard.component.html */ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./ddo-application-request-dashboard.component.scss */ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DdoApplicationRequestDashboardComponent);
    return DdoApplicationRequestDashboardComponent;
}());



/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container ddo-application-tasks pl-5 pr-4\">\r\n    <card>\r\n        <card-header>\r\n            <h4 class=\"card-header__heading\">{{currentTask?.workflowName}}</h4>\r\n            <h6 class=\"card-header__description\">{{currentTask?.workflowDescription}}</h6>\r\n        </card-header>\r\n        <card-body>\r\n            <div *ngIf=\"formlyFieldConfigArrayCollections?.length > 0\">\r\n                <div *ngFor=\"let formlyFieldConfigArray of formlyFieldConfigArrayCollections; let index = index;\">\r\n                    <section [formlyFieldConfigArray]=\"formlyFieldConfigArray\">\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </card-body>\r\n    </card>\r\n</div>"

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ddo-application-tasks .card {\n  border: 0; }\n  .ddo-application-tasks .card .card-header {\n    background: #fafafa;\n    border: 0;\n    padding-left: 0;\n    padding-top: 20px; }\n  .ddo-application-tasks .card .card-header__heading {\n      font-size: 20px; }\n  .ddo-application-tasks .card .card-header__description {\n      font-size: 12px;\n      color: #898b8d; }\n  .ddo-application-tasks .card .card-body {\n    border: 1px solid #dfdfdf;\n    padding: 35px; }\n"

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DdoApplicationRequestTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdoApplicationRequestTasksComponent", function() { return DdoApplicationRequestTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./src/app/store/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DdoApplicationRequestTasksComponent = /** @class */ (function () {
    function DdoApplicationRequestTasksComponent(cd, store) {
        var _this = this;
        this.cd = cd;
        this.store = store;
        this.forms = null;
        this.options = [];
        this.model = {};
        this.isComponentActive = true;
        this.requestId = null;
        this.formlyFieldConfigArrayCollections = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].applicationRequestSelectors.getApplicaiton), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; }))
            .subscribe(function (application) {
            if (application && application.id) {
                _this.requestId = application.id;
            }
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].applicationRequestSelectors.getApplicationActiveTask), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; }))
            .subscribe(function (activeTask) {
            _this.taskRequest = new _core_models__WEBPACK_IMPORTED_MODULE_4__["TaskRequest"]();
            _this.taskRequest.workflowId = activeTask.workflowId;
            _this.taskRequest.taskId = activeTask.task.id;
            _this.taskRequest.requestId = _this.requestId;
            if (_this.taskRequest.workflowId &&
                _this.taskRequest.taskId &&
                _this.taskRequest.requestId) {
                _this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["fromRootActions"].questionnaireActions.GetCurrentTask(_this.taskRequest));
            }
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].questionnaireSelectors.getCurrentTask), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; })).subscribe(function (currTask) {
            if (currTask) {
                _this.currentTask = currTask;
                _this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["fromRootActions"]
                    .questionnaireActions
                    .GetCurrentQuestionnaireFormlyConfig({
                    task: _this.currentTask,
                    currentQuestionId: _this.currentQuestionId,
                    requestId: _this.requestId,
                    workflowId: _this.taskRequest.workflowId,
                    taskId: _this.taskRequest.taskId
                }));
                _this.cd.detectChanges();
            }
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].questionnaireSelectors.getCurrentQuestionnaireConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; }))
            .subscribe(function (formlyFieldConfigArrayCollections) {
            if (formlyFieldConfigArrayCollections) {
                _this.formlyFieldConfigArrayCollections = formlyFieldConfigArrayCollections;
                _this.forms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](_this.formlyFieldConfigArrayCollections.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}); }));
                _this.options = _this.formlyFieldConfigArrayCollections.map(function () { return ({}); });
                _this.cd.detectChanges();
            }
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].questionnaireSelectors.getCurrentQuestionId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; }))
            .subscribe(function (currentQuestionId) {
            if (currentQuestionId) {
                _this.currentQuestionId = currentQuestionId;
            }
        });
    }
    DdoApplicationRequestTasksComponent.prototype.ngOnInit = function () {
    };
    DdoApplicationRequestTasksComponent.prototype.ngOnDestroy = function () {
        this.isComponentActive = false;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["fromRootActions"].questionnaireActions.ResetQuestionnaireState());
    };
    DdoApplicationRequestTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ddo-application-request-tasks',
            template: __webpack_require__(/*! ./ddo-application-request-tasks.component.html */ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.html"),
            styles: [__webpack_require__(/*! ./ddo-application-request-tasks.component.scss */ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DdoApplicationRequestTasksComponent);
    return DdoApplicationRequestTasksComponent;
}());



/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid ddo-application-request\">\r\n    <div class=\"row ddo-application-request__page-heading mt-3\">\r\n        <div class=\"col-md-10  pt-3 pb-3\">\r\n            <h5 class=\"heading\">{{application$.heading}}</h5>\r\n        </div>\r\n        <div class=\"col-md-2 pt-3 pb-3\">\r\n            <a class=\"cancel-application\"\r\n                href=\"javascript:void(0)\"\r\n                (click)=\"buttonActionsClick('cancel')\">\r\n                Cancel Application\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 pl-0 pr-0\">\r\n            <app-side-nav\r\n                [config]='workflows$'\r\n                [(selectedParentId)]='currentWorkflowId$'\r\n                [(selectedChildId)]='currentTaskId$'\r\n                (actions)='onSideNavClick($event)'>\r\n            </app-side-nav>\r\n            <contact-detail [config]='contactPersonDetails$'></contact-detail>\r\n        </div>\r\n        <div class=\"col-sm-9 pl-0 ddo-application-request__tasks\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <div class=\"row ddo-application-request__footer\">\r\n        <div class=\"col-sm-3 mt-4 mb-4\">\r\n            <button type=\"button\"\r\n                (click)=\"buttonActionsClick('saveAndExit')\"\r\n                class=\"btn ddo-application-request__button btn-outline-primary float-left\">\r\n                Save and Exit\r\n            </button>\r\n        </div>\r\n        <div class=\"col-sm-9 mt-4 mb-4\">\r\n            <div class=\"float-right\">\r\n                <button type=\"button\"\r\n                    (click)=\"buttonActionsClick('back')\"\r\n                    class=\"btn btn-outline-primary ddo-application-request__button  mr-3\"\r\n                    *ngIf=\"previousTaskId$\">\r\n                    Back\r\n                </button>\r\n                <button type=\"button\"\r\n                    (click)=\"buttonActionsClick('next')\"\r\n                    class=\"btn btn-outline-primary ddo-application-request__button--next\"\r\n                    *ngIf=\"nextTaskId$\">\r\n                    Next <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ddo-application-request__page-heading {\n  border: 1px solid #e8ecf1; }\n  .ddo-application-request__page-heading .heading {\n    margin-left: 45px; }\n  .ddo-application-request .cancel-application {\n  top: 25%;\n  position: absolute; }\n  .ddo-application-request__footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border: 1px solid #e8ecf1;\n  background: #ffffff;\n  color: #ffffff;\n  text-align: center;\n  max-height: 90px; }\n  .ddo-application-request__button {\n  border: 1px solid #002d72;\n  color: #002d72; }\n  .ddo-application-request__button--next {\n    background: #002d72;\n    color: #ffffff; }\n  .ddo-application-request__tasks {\n  background: #fafafa; }\n"

/***/ }),

/***/ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DdoApplicationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdoApplicationRequestComponent", function() { return DdoApplicationRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/workflows.action */ "./src/app/store/actions/workflows.action.ts");
/* harmony import */ var _core_models_workflow_sidenav_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/models/workflow-sidenav.model */ "./src/app/core/models/workflow-sidenav.model.ts");
/* harmony import */ var _core_constants_application_request_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/application-request.constants */ "./src/app/core/constants/application-request.constants.ts");
/* harmony import */ var _core_models_contact_detail_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/models/contact-detail.model */ "./src/app/core/models/contact-detail.model.ts");
/* harmony import */ var _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/router.actions */ "./src/app/store/actions/router.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DdoApplicationRequestComponent = /** @class */ (function () {
    function DdoApplicationRequestComponent(store) {
        var _this = this;
        this.store = store;
        this.initalRender = true;
        this.applicationHeading = new Map(Object.entries(_core_constants_application_request_constants__WEBPACK_IMPORTED_MODULE_5__["APPLICATION_HEADING"]));
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].applicationRequestSelectors.getApplicaiton).
            subscribe(function (application) {
            _this.application$ = application;
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].userSelectors.getUserContactPerson).
            subscribe(function (contactDetail) {
            _this.contactPersonDetails$ = new _core_models_contact_detail_model__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsModel"](contactDetail);
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].applicationRequestSelectors.getApplicationWorkflows)
            .subscribe(function (workflows) {
            _this.workflows$ = workflows && workflows.map(function (workflow) { return new _core_models_workflow_sidenav_model__WEBPACK_IMPORTED_MODULE_4__["default"](workflow); });
            if (_this.initalRender && workflows && workflows.length > 0) {
                //TODO: to avoid further dispatching when we re fetch the configuration
                _this.store.dispatch(new _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["DeterminePendingTaskOfApplication"](workflows));
            }
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].applicationRequestSelectors.getApplicationActiveTask)
            .subscribe(function (activeTaskData) {
            _this.currentTaskId$ = activeTaskData.task.id;
            _this.currentWorkflowId$ = activeTaskData.workflowId;
            _this.initalRender = !(_this.currentTaskId$ && _this.currentWorkflowId$);
            if (_this.currentTaskId$) {
                _this.store.dispatch(new _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_7__["RouterGo"]({
                    path: ['ddo', 'applications', _this.application$.id, 'questionnaire']
                }));
            }
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].applicationRequestSelectors.getApplicationNextTask)
            .subscribe(function (nextTaskData) {
            _this.nextTaskId$ = nextTaskData.task.id;
            _this.nextWorkflowId$ = nextTaskData.workflowId;
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromRootSelectors"].applicationRequestSelectors.getApplicationPreviousTask)
            .subscribe(function (previousTaskData) {
            _this.previousTaskId$ = previousTaskData.task.id;
            _this.previousWorkflowId$ = previousTaskData.workflowId;
        });
    }
    DdoApplicationRequestComponent.prototype.onSideNavClick = function (_a) {
        var parentId = _a.parentId, childId = _a.childId;
        this.store.dispatch(new _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["SetActiveTask"]({
            workflowId: parentId,
            taskId: childId
        }));
    };
    DdoApplicationRequestComponent.prototype.buttonActionsClick = function (action) {
        switch (action) {
            case 'back':
                this.store.dispatch(new _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["SetActiveTask"]({
                    workflowId: this.previousWorkflowId$,
                    taskId: this.previousTaskId$
                }));
                break;
            case 'cancel':
            case 'saveAndExit':
                this.store.dispatch(new _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["SaveActiveTaskAndExit"]({
                    workflowId: this.currentWorkflowId$,
                    taskId: this.currentTaskId$
                }));
                break;
            case 'next':
                this.store.dispatch(new _store_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["SaveActiveTaskAndNext"]({
                    current: {
                        applicationId: this.application$.id,
                        workflowId: this.currentWorkflowId$,
                        taskId: this.currentTaskId$
                    },
                    workflowId: this.nextWorkflowId$,
                    taskId: this.nextTaskId$
                }));
                break;
            case 'signAndSubmit':
                console.log(action);
        }
    };
    DdoApplicationRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ddo-application-request',
            template: __webpack_require__(/*! ./ddo-application-request.component.html */ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.html"),
            styles: [__webpack_require__(/*! ./ddo-application-request.component.scss */ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DdoApplicationRequestComponent);
    return DdoApplicationRequestComponent;
}());



/***/ }),

/***/ "./src/app/ddo-application-request/ddo-application-request-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ddo-application-request/ddo-application-request-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DdoApplicationRequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdoApplicationRequestRoutingModule", function() { return DdoApplicationRequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_ddo_application_request_ddo_application_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ddo-application-request/ddo-application-request.component */ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.ts");
/* harmony import */ var _components_ddo_application_request_dashboard_ddo_application_request_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ddo-application-request-dashboard/ddo-application-request-dashboard.component */ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.ts");
/* harmony import */ var _components_ddo_application_request_tasks_ddo_application_request_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ddo-application-request-tasks/ddo-application-request-tasks.component */ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_ddo_application_request_ddo_application_request_component__WEBPACK_IMPORTED_MODULE_2__["DdoApplicationRequestComponent"],
        children: [
            {
                path: 'questionnaire',
                component: _components_ddo_application_request_tasks_ddo_application_request_tasks_component__WEBPACK_IMPORTED_MODULE_4__["DdoApplicationRequestTasksComponent"]
            }
        ]
    },
    {
        path: 'dashboard',
        component: _components_ddo_application_request_dashboard_ddo_application_request_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DdoApplicationRequestDashboardComponent"]
    }
];
var DdoApplicationRequestRoutingModule = /** @class */ (function () {
    function DdoApplicationRequestRoutingModule() {
    }
    DdoApplicationRequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DdoApplicationRequestRoutingModule);
    return DdoApplicationRequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/ddo-application-request/ddo-application-request.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ddo-application-request/ddo-application-request.module.ts ***!
  \***************************************************************************/
/*! exports provided: DdoApplicationRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdoApplicationRequestModule", function() { return DdoApplicationRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ddo_application_request_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ddo-application-request-routing.module */ "./src/app/ddo-application-request/ddo-application-request-routing.module.ts");
/* harmony import */ var _components_ddo_application_request_ddo_application_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ddo-application-request/ddo-application-request.component */ "./src/app/ddo-application-request/components/ddo-application-request/ddo-application-request.component.ts");
/* harmony import */ var _components_ddo_application_request_dashboard_ddo_application_request_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ddo-application-request-dashboard/ddo-application-request-dashboard.component */ "./src/app/ddo-application-request/components/ddo-application-request-dashboard/ddo-application-request-dashboard.component.ts");
/* harmony import */ var _components_ddo_application_request_tasks_ddo_application_request_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ddo-application-request-tasks/ddo-application-request-tasks.component */ "./src/app/ddo-application-request/components/ddo-application-request-tasks/ddo-application-request-tasks.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-formly-fields/custom-formly-fields.module */ "./src/app/custom-formly-fields/custom-formly-fields.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DdoApplicationRequestModule = /** @class */ (function () {
    function DdoApplicationRequestModule() {
    }
    DdoApplicationRequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ddo_application_request_routing_module__WEBPACK_IMPORTED_MODULE_2__["DdoApplicationRequestRoutingModule"],
                _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_7__["CustomFormlyFieldsModule"]
            ],
            declarations: [
                _components_ddo_application_request_ddo_application_request_component__WEBPACK_IMPORTED_MODULE_3__["DdoApplicationRequestComponent"],
                _components_ddo_application_request_dashboard_ddo_application_request_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DdoApplicationRequestDashboardComponent"],
                _components_ddo_application_request_tasks_ddo_application_request_tasks_component__WEBPACK_IMPORTED_MODULE_5__["DdoApplicationRequestTasksComponent"]
            ]
        })
    ], DdoApplicationRequestModule);
    return DdoApplicationRequestModule;
}());



/***/ })

}]);
//# sourceMappingURL=ddo-application-request-ddo-application-request-module.js.map