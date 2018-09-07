(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ddo-application-request/ddo-application-request.module": [
		"./src/app/ddo-application-request/ddo-application-request.module.ts",
		"common",
		"ddo-application-request-ddo-application-request-module"
	],
	"./ddo-applications/ddo-applications.module": [
		"./src/app/ddo-applications/ddo-applications.module.ts",
		"common",
		"ddo-applications-ddo-applications-module"
	],
	"./storybook/storybook.module": [
		"./src/app/storybook/storybook.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

var AppRoutes = [
    {
        path: 'ddo',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-applications'
            },
            {
                path: 'storybook',
                loadChildren: './storybook/storybook.module#StorybookModule'
            },
            {
                path: 'my-applications',
                loadChildren: './ddo-applications/ddo-applications.module#DdoApplicationsModule'
            },
            {
                path: 'applications/:applicationId',
                loadChildren: './ddo-application-request/ddo-application-request.module#DdoApplicationRequestModule'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ddo'
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/user-info.actions */ "./src/app/store/actions/user-info.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_user_info_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/user-info.selectors */ "./src/app/store/selectors/user-info.selectors.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_window_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/window-ref.service */ "./src/app/core/services/window-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(store, auth, winRef) {
        this.store = store;
        this.auth = auth;
        this.winRef = winRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.auth.setToken();
        this.store.dispatch(new _store_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_1__["GetUser"]());
        // this.store.dispatch(new applicationRequestActions.GetApplicationRequest());
        this.store.dispatch(new _store_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_1__["GetUserContactPerson"]());
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_user_info_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserState"]))
            .subscribe(function (user) {
        });
        //TODO: Mohammad to place in view code here.
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _core_services_window_ref_service__WEBPACK_IMPORTED_MODULE_5__["WindowRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_app_store_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/app.store.module */ "./src/app/store/app.store.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_services_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/token.interceptor */ "./src/app/core/services/token.interceptor.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _core_services_window_ref_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/window-ref.service */ "./src/app/core/services/window-ref.service.ts");
/* harmony import */ var _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-formly-fields/custom-formly-fields.module */ "./src/app/custom-formly-fields/custom-formly-fields.module.ts");
/* harmony import */ var _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./storybook/storybook.module */ "./src/app/storybook/storybook.module.ts");
/* harmony import */ var _core_services_formly_fields_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/services/formly-fields.service */ "./src/app/core/services/formly-fields.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { UploadFileComponent } from './custom-formly-fields/components/upload-file/upload-file.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _store_app_store_module__WEBPACK_IMPORTED_MODULE_10__["AppStoreModule"],
                _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_16__["CustomFormlyFieldsModule"],
                _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_17__["StorybookModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _core_services_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                },
                _core_services_window_ref_service__WEBPACK_IMPORTED_MODULE_15__["WindowRef"],
                _core_services_formly_fields_service__WEBPACK_IMPORTED_MODULE_18__["FormlyFieldsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/constants/application-request.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/constants/application-request.constants.ts ***!
  \*****************************************************************/
/*! exports provided: APPLICATION_HEADING, TASK_STATUSES, TASK_TYPES, QUESTIONS_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_HEADING", function() { return APPLICATION_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATUSES", function() { return TASK_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_TYPES", function() { return TASK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTIONS_TYPE", function() { return QUESTIONS_TYPE; });
var APPLICATION_HEADING = {
    joint: 'Joint Account Application'
};
var TASK_STATUSES = {
    inProgress: 'IN_PROGRESS',
    completed: 'COMPLETED',
    disabled: 'DISABLED'
};
var TASK_TYPES = {
    QUESTION: 'questionnaire'
};
var QUESTIONS_TYPE = {
    phone: 'custom-phone'
};


/***/ }),

/***/ "./src/app/core/constants/constants.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/constants/constants.module.ts ***!
  \****************************************************/
/*! exports provided: ConstantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsModule", function() { return ConstantsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConstantsModule = /** @class */ (function () {
    function ConstantsModule() {
    }
    ConstantsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ConstantsModule);
    return ConstantsModule;
}());



/***/ }),

/***/ "./src/app/core/constants/navigation.constants.ts":
/*!********************************************************!*\
  !*** ./src/app/core/constants/navigation.constants.ts ***!
  \********************************************************/
/*! exports provided: TOP_NAVIGATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_NAVIGATION", function() { return TOP_NAVIGATION; });
var TOP_NAVIGATION = [
    {
        'id': 'info',
        'title': 'Important Info',
        'routeLink': '',
        'iconClass': '',
        'children': ''
    },
    {
        'id': 'star',
        'title': '',
        'routeLink': '',
        'iconClass': 'fa-star-o',
        'children': ''
    },
    {
        'id': 'notification',
        'title': '',
        'routeLink': '',
        'iconClass': 'fa-bell-o',
        'children': ''
    },
    {
        'id': 'dropdown',
        'title': 'Hello Jennifer',
        'routeLink': '',
        'iconClass': '',
        'children': []
    }
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _constants_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/constants.module */ "./src/app/core/constants/constants.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _services_ngx_formly_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ngx-formly-parser.service */ "./src/app/core/services/ngx-formly-parser.service.ts");
/* harmony import */ var _services_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/applications.service */ "./src/app/core/services/applications.service.ts");
/* harmony import */ var _services_application_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/application-request.service */ "./src/app/core/services/application-request.service.ts");
/* harmony import */ var _services_dynamic_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dynamic-options.service */ "./src/app/core/services/dynamic-options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _constants_constants_module__WEBPACK_IMPORTED_MODULE_2__["ConstantsModule"],
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
                _services_ngx_formly_parser_service__WEBPACK_IMPORTED_MODULE_4__["NgxFormlyParserService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireService"],
                _services_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"],
                _services_application_request_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationRequestService"],
                _services_dynamic_options_service__WEBPACK_IMPORTED_MODULE_7__["DynamicOptionsService"]
            ],
            exports: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, ApiService, NgxFormlyParserService, ApplicationRequestService, ApplicationsService, Option, Question, QuestionaireDeltaError, QuestionaireDeltaQuestion, QuestionaireDeltaRequest, QuestionnaireItem, QuestionaireDeltaResponse, Section, Task, FormlyFieldConfigArrayCollection, TaskRequest, Answer, UserInfoService, QuestionnaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Option"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaError", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["QuestionaireDeltaError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaQuestion", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["QuestionaireDeltaQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaRequest", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["QuestionaireDeltaRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireItem", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["QuestionnaireItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaResponse", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["QuestionaireDeltaResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Section"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Task"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldConfigArrayCollection", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["FormlyFieldConfigArrayCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskRequest", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["TaskRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Answer"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxFormlyParserService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["NgxFormlyParserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequestService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ApplicationRequestService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireService"]; });






/***/ }),

/***/ "./src/app/core/models/answer.ts":
/*!***************************************!*\
  !*** ./src/app/core/models/answer.ts ***!
  \***************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Option, Question, QuestionaireDeltaError, QuestionaireDeltaQuestion, QuestionaireDeltaRequest, QuestionnaireItem, QuestionaireDeltaResponse, Section, Task, FormlyFieldConfigArrayCollection, TaskRequest, Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/core/models/option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/core/models/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _questionaire_delta_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionaire-delta-error */ "./src/app/core/models/questionaire-delta-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaError", function() { return _questionaire_delta_error__WEBPACK_IMPORTED_MODULE_2__["QuestionaireDeltaError"]; });

/* harmony import */ var _questionaire_delta_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionaire-delta-question */ "./src/app/core/models/questionaire-delta-question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaQuestion", function() { return _questionaire_delta_question__WEBPACK_IMPORTED_MODULE_3__["QuestionaireDeltaQuestion"]; });

/* harmony import */ var _questionaire_delta_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionaire-delta-request */ "./src/app/core/models/questionaire-delta-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaRequest", function() { return _questionaire_delta_request__WEBPACK_IMPORTED_MODULE_4__["QuestionaireDeltaRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireItem", function() { return _questionaire_delta_request__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireItem"]; });

/* harmony import */ var _questionaire_delta_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionaire-delta-response */ "./src/app/core/models/questionaire-delta-response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaResponse", function() { return _questionaire_delta_response__WEBPACK_IMPORTED_MODULE_5__["QuestionaireDeltaResponse"]; });

/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section */ "./src/app/core/models/section.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_6__["Section"]; });

/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task */ "./src/app/core/models/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_7__["Task"]; });

/* harmony import */ var _ngx_formly_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-formly-models */ "./src/app/core/models/ngx-formly-models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldConfigArrayCollection", function() { return _ngx_formly_models__WEBPACK_IMPORTED_MODULE_8__["FormlyFieldConfigArrayCollection"]; });

/* harmony import */ var _task_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-request */ "./src/app/core/models/task-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskRequest", function() { return _task_request__WEBPACK_IMPORTED_MODULE_9__["TaskRequest"]; });

/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./answer */ "./src/app/core/models/answer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _answer__WEBPACK_IMPORTED_MODULE_10__["Answer"]; });














/***/ }),

/***/ "./src/app/core/models/ngx-formly-models.ts":
/*!**************************************************!*\
  !*** ./src/app/core/models/ngx-formly-models.ts ***!
  \**************************************************/
/*! exports provided: FormlyFieldConfigArrayCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldConfigArrayCollection", function() { return FormlyFieldConfigArrayCollection; });
var FormlyFieldConfigArrayCollection = /** @class */ (function () {
    function FormlyFieldConfigArrayCollection(formlyFieldConfigs, title) {
        if (title === void 0) { title = ""; }
        this.formlyFieldConfigs = formlyFieldConfigs;
        this.title = title;
    }
    return FormlyFieldConfigArrayCollection;
}());



/***/ }),

/***/ "./src/app/core/models/option.ts":
/*!***************************************!*\
  !*** ./src/app/core/models/option.ts ***!
  \***************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/core/models/personal-info.interface.ts":
/*!********************************************************!*\
  !*** ./src/app/core/models/personal-info.interface.ts ***!
  \********************************************************/
/*! exports provided: PersonalInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoModel", function() { return PersonalInfoModel; });
var PersonalInfoModel = /** @class */ (function () {
    function PersonalInfoModel(data) {
        if (!data) {
            return null;
        }
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.middleName = data.middleName;
        this.email = data.email;
        this.contactNumber = data.contactNumber;
    }
    return PersonalInfoModel;
}());



/***/ }),

/***/ "./src/app/core/models/question.ts":
/*!*****************************************!*\
  !*** ./src/app/core/models/question.ts ***!
  \*****************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
        this.disabled = false;
        this.recurrent = false;
        this.answers = [];
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/core/models/questionaire-delta-error.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/models/questionaire-delta-error.ts ***!
  \*********************************************************/
/*! exports provided: QuestionaireDeltaError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaError", function() { return QuestionaireDeltaError; });
var QuestionaireDeltaError = /** @class */ (function () {
    function QuestionaireDeltaError() {
    }
    return QuestionaireDeltaError;
}());



/***/ }),

/***/ "./src/app/core/models/questionaire-delta-question.ts":
/*!************************************************************!*\
  !*** ./src/app/core/models/questionaire-delta-question.ts ***!
  \************************************************************/
/*! exports provided: QuestionaireDeltaQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaQuestion", function() { return QuestionaireDeltaQuestion; });
var QuestionaireDeltaQuestion = /** @class */ (function () {
    function QuestionaireDeltaQuestion() {
    }
    return QuestionaireDeltaQuestion;
}());



/***/ }),

/***/ "./src/app/core/models/questionaire-delta-request.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/models/questionaire-delta-request.ts ***!
  \***********************************************************/
/*! exports provided: QuestionaireDeltaRequest, QuestionnaireItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaRequest", function() { return QuestionaireDeltaRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireItem", function() { return QuestionnaireItem; });
var QuestionaireDeltaRequest = /** @class */ (function () {
    function QuestionaireDeltaRequest() {
    }
    return QuestionaireDeltaRequest;
}());

var QuestionnaireItem = /** @class */ (function () {
    function QuestionnaireItem() {
    }
    return QuestionnaireItem;
}());



/***/ }),

/***/ "./src/app/core/models/questionaire-delta-response.ts":
/*!************************************************************!*\
  !*** ./src/app/core/models/questionaire-delta-response.ts ***!
  \************************************************************/
/*! exports provided: QuestionaireDeltaResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaireDeltaResponse", function() { return QuestionaireDeltaResponse; });
var QuestionaireDeltaResponse = /** @class */ (function () {
    function QuestionaireDeltaResponse() {
    }
    return QuestionaireDeltaResponse;
}());



/***/ }),

/***/ "./src/app/core/models/section.ts":
/*!****************************************!*\
  !*** ./src/app/core/models/section.ts ***!
  \****************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/core/models/task-request.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/task-request.ts ***!
  \*********************************************/
/*! exports provided: TaskRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRequest", function() { return TaskRequest; });
var TaskRequest = /** @class */ (function () {
    function TaskRequest() {
    }
    return TaskRequest;
}());



/***/ }),

/***/ "./src/app/core/models/task.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/task.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/core/models/user-info.interface.ts":
/*!****************************************************!*\
  !*** ./src/app/core/models/user-info.interface.ts ***!
  \****************************************************/
/*! exports provided: UserInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModel", function() { return UserInfoModel; });
/* harmony import */ var _personal_info_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-info.interface */ "./src/app/core/models/personal-info.interface.ts");

var UserInfoModel = /** @class */ (function () {
    function UserInfoModel(data) {
        if (!data) {
            return null;
        }
        this.role = data.role;
        this.personalInfo = new _personal_info_interface__WEBPACK_IMPORTED_MODULE_0__["PersonalInfoModel"](data.personalInfo);
        this.entitlements = data.entitlements;
    }
    return UserInfoModel;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    ApiService.prototype.get = function (url, httpParams) {
        if (httpParams === void 0) { httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](); }
        return this.http.get("" + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + url, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/application-request.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/application-request.service.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequestService", function() { return ApplicationRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationRequestService = /** @class */ (function () {
    function ApplicationRequestService(apiService) {
        this.apiService = apiService;
    }
    ApplicationRequestService.prototype.getApplicationRequest = function (requestId) {
        // Todo: Production Url
        return this.apiService.post('api/ddo/request/details', { requestId: requestId });
        // return this.apiService.get('request');
    };
    ApplicationRequestService.prototype.getApplicationRequestWorkflows = function (requestId) {
        // Todo: Production Url
        return this.apiService.post('api/ddo/request/workflowsAndTasks', { requestId: requestId });
        // return this.apiService.get('workflows');
    };
    ApplicationRequestService.prototype.saveApplicationRequestTask = function (_a) {
        var requestId = _a.requestId, workflowId = _a.workflowId, taskId = _a.taskId;
        return this.apiService.put('api/ddo/questionnaire/saveTaskQuestions', {
            requestId: requestId, workflowId: workflowId, taskId: taskId
        });
        // return of({
        //     status: 200
        // });
    };
    ApplicationRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ApplicationRequestService);
    return ApplicationRequestService;
}());



/***/ }),

/***/ "./src/app/core/services/applications.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/applications.service.ts ***!
  \*******************************************************/
/*! exports provided: ApplicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return ApplicationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationsService = /** @class */ (function () {
    function ApplicationsService(apiService) {
        this.apiService = apiService;
    }
    ApplicationsService.prototype.getApplications = function () {
        /// Todo : Production Url
        return this.apiService.get('api/ddo/request/all');
        // return this.apiService.get('requests');
    };
    ApplicationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ApplicationsService);
    return ApplicationsService;
}());



/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    //MOCK authentication service
    AuthenticationService.prototype.getToken = function () {
        return 'KERMIT COBLEAD';
    };
    AuthenticationService.prototype.setToken = function () {
        document.cookie = 'userId=KERMIT COBLEAD';
        return null;
    };
    AuthenticationService.prototype.clearToken = function () {
        document.cookie = '';
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/services/dynamic-options.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/dynamic-options.service.ts ***!
  \**********************************************************/
/*! exports provided: DynamicOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicOptionsService", function() { return DynamicOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicOptionsService = /** @class */ (function () {
    function DynamicOptionsService(apiService) {
        this.apiService = apiService;
    }
    DynamicOptionsService.prototype.getDynamicOptions = function (param) {
        //TODO: need to implement against a param value
        return this.apiService.get('static-options');
    };
    DynamicOptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DynamicOptionsService);
    return DynamicOptionsService;
}());



/***/ }),

/***/ "./src/app/core/services/formly-fields.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/formly-fields.service.ts ***!
  \********************************************************/
/*! exports provided: FormlyFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldsService", function() { return FormlyFieldsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-formly-fields/enums/custom-components.enum */ "./src/app/custom-formly-fields/enums/custom-components.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormlyFieldsService = /** @class */ (function () {
    function FormlyFieldsService(store) {
        this.store = store;
    }
    FormlyFieldsService.prototype.getFormlyLifeCycleEventByQuestionType = function (questionType, requestId, workflowId, taskId) {
        var _this = this;
        switch (questionType) {
            ///Todo Add Custom LifeCycle events custom compound type
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsEnum"].CUSTOM_PHONE:
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsEnum"].CUSTOM_ADDRESS_PROOF:
                return null;
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsEnum"].CUSTOM_EMAIL:
                var EMAIL_LIFECYCLE_EVENT = {
                    onInit: function (form, field, model, options) {
                        var key = field.key;
                        var formObj = form.get(key);
                        var requiredFields = field.fieldArray.fieldGroup.map(function (item) {
                            if (item.templateOptions.required) {
                                return item.key;
                            }
                        });
                        console.log("requiredFields");
                        console.log(requiredFields);
                        formObj.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(600))
                            .subscribe(function (fieldValue) {
                            console.log(fieldValue);
                        });
                    }
                };
                return EMAIL_LIFECYCLE_EVENT;
            default:
                var GENERIC_LIFECYCLE_EVENT = {
                    onInit: function (form, field, model, options) {
                        var key = field.key;
                        var formObj = form.get(key);
                        formObj.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(600))
                            .subscribe(function (fieldValue) {
                            var questionaireRequest = {
                                requestId: requestId,
                                workflowId: workflowId,
                                taskId: taskId,
                                questionnaireItems: [{
                                        id: key,
                                        type: questionType,
                                        answers: [
                                            {
                                                value: fieldValue
                                            }
                                        ]
                                    }]
                            };
                            // this.store.dispatch(new questionnaireActions.DeleteQuestionnaireErrorByQuestionId(key));
                            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["questionnaireActions"].SetCurrentQuestionId(key));
                            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["questionnaireActions"].GetCurrentFieldChangeDelta(questionaireRequest));
                        });
                    }
                };
                return GENERIC_LIFECYCLE_EVENT;
        }
    };
    FormlyFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FormlyFieldsService);
    return FormlyFieldsService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, NgxFormlyParserService, ApplicationRequestService, ApplicationsService, UserInfoService, QuestionnaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.service */ "./src/app/core/services/user-info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return _user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]; });

/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire.service */ "./src/app/core/services/questionnaire.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function() { return _questionnaire_service__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireService"]; });

/* harmony import */ var _ngx_formly_parser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-formly-parser.service */ "./src/app/core/services/ngx-formly-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxFormlyParserService", function() { return _ngx_formly_parser_service__WEBPACK_IMPORTED_MODULE_3__["NgxFormlyParserService"]; });

/* harmony import */ var _application_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-request.service */ "./src/app/core/services/application-request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequestService", function() { return _application_request_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationRequestService"]; });

/* harmony import */ var _applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applications.service */ "./src/app/core/services/applications.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return _applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"]; });









/***/ }),

/***/ "./src/app/core/services/ngx-formly-parser.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/ngx-formly-parser.service.ts ***!
  \************************************************************/
/*! exports provided: NgxFormlyParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFormlyParserService", function() { return NgxFormlyParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/core/models/index.ts");
/* harmony import */ var _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../custom-formly-fields/enums/custom-components.enum */ "./src/app/custom-formly-fields/enums/custom-components.enum.ts");
/* harmony import */ var _custom_formly_fields_formly_configs_email_field_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../custom-formly-fields/formly-configs/email-field-array */ "./src/app/custom-formly-fields/formly-configs/email-field-array.ts");
/* harmony import */ var _formly_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formly-fields.service */ "./src/app/core/services/formly-fields.service.ts");
/* harmony import */ var _custom_formly_fields_formly_configs_phone_field_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-formly-fields/formly-configs/phone-field.config */ "./src/app/custom-formly-fields/formly-configs/phone-field.config.ts");
/* harmony import */ var _custom_formly_fields_formly_configs_address_fields_field_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-formly-fields/formly-configs/address-fields-field-array */ "./src/app/custom-formly-fields/formly-configs/address-fields-field-array.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NgxFormlyParserService = /** @class */ (function () {
    function NgxFormlyParserService(apiService, store, formlyFieldsService) {
        this.apiService = apiService;
        this.store = store;
        this.formlyFieldsService = formlyFieldsService;
        /// Todo: Waiting for client Store module. 
        /// this should be handled in a property from state
        this.currentQuestionId = null;
        this.fieldChangeObj = null;
    }
    // private fieldChangeLifecycleTrigger: FormlyLifeCycleOptions = 
    // {
    //   onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
    //     let key = field.key;
    //     let formObj = form.get(key);
    //     formObj.valueChanges
    //       .pipe(debounceTime(600))
    //       //Todo: To be Decided
    //       .subscribe((fieldValue) => {
    //         console.log("field changes occured")
    //         console.log(fieldValue);
    //         console.log(field.defaultValue);
    //         // this.currentQuestionId = key;
    //         // let questionaireRequest: QuestionaireDeltaRequest = {
    //         //   id: key,
    //         //   value: fieldValue
    //         // };
    //         // this.store.dispatch(new questionnaireActions.DeleteQuestionnaireErrorByQuestionId(this.currentQuestionId));
    //         // this.store.dispatch(new questionnaireActions.GetCurrentFieldChangeDelta(questionaireRequest));
    //       });
    //   }
    // }
    // getfieldChange() {
    //   return of(this.fieldChangeObj);
    // }
    // getFormlyFieldConfigFromTask(currentTask: Task, currentQuestionId: string): Observable<FormlyFieldConfig[]> {
    //   let currentConfig: FormlyFieldConfig = {
    //   };
    //   currentTask.sections.map((section: Section) => {
    //     // currentConfig.key = section.id;
    //     currentConfig.wrappers = ['form-group'];
    //     currentConfig.templateOptions = {
    //       label: section.title
    //     };
    //     let fieldGroup: FormlyFieldConfig[] = [];
    //     section.questions.map((question: Question) => {
    //       let field: FormlyFieldConfig = {};
    //       if (question.id == currentQuestionId) {
    //         field.focus = true;
    //       }
    //       field.key = question.id;
    //       field.type = question.type;
    //       field.lifecycle = this.fieldChangeLifecycleTrigger;
    //       field.templateOptions = {
    //         label: question.label,
    //         options: question.options,
    //         required: question.required,
    //       };
    //       if (question.serverErrorMessage) {
    //         field.validators = {
    //           ip: {
    //             expression: (c) => true,
    //             message: (error, field: FormlyFieldConfig) => question.serverErrorMessage,
    //           }
    //         }
    //       }
    //       ////Todo:Find Immutable way
    //       fieldGroup.push(field);
    //     });
    //     currentConfig.fieldGroup = fieldGroup;
    //   });
    //   return of([currentConfig]);
    // }
    // ///Todo: Change it to call delta from  server
    // mergeFieldChangeDeltaAndCurrentcurrentTask(currentTask: Task, delta: QuestionaireDeltaResponse, model: any): Observable<Task> {
    //   let currTask = { ...currentTask };
    //   if (delta) {
    //     if (delta.delete) {
    //       let modelProperties = _.keys(model);
    //       delta.delete.forEach((question) => {
    //         let currentSection = currTask.sections.find((section) => {
    //           return section.title == question.sectionName;
    //         });
    //         currentSection.questions = currentSection.questions
    //           .filter((questionItem) => {
    //             return questionItem.id !== question.id
    //           });
    //         if (modelProperties.find((modelproperty) => { return modelproperty == question.id; })) {
    //           delete model[question.id];
    //         }
    //       });
    //     }
    //     ////Todo: Update Loop for delta
    //     if (delta.new) {
    //       delta.new.forEach((question) => {
    //         let currentSection = currTask.sections.find((section) => {
    //           return section.title === question.sectionName;
    //         });
    //         let currentQuestionIndex = currentSection.questions.findIndex((questioItem) => {
    //           return questioItem.id == question.questionIdAfterToBeInserted;
    //         });
    //         let newQuestion: Question = {
    //           id: question.id,
    //           defaultValue: question.defaultValue,
    //           label: question.label,
    //           options: question.options,
    //           placeHolder: question.placeHolder,
    //           readOnly: question.readOnly,
    //           required: question.required,
    //           tooltipText: question.tooltipText,
    //           type: question.type
    //         }
    //         if (currentSection.questions.findIndex((questioItem) => { return questioItem.id == question.id }) == -1)
    //           currentSection.questions.splice(currentQuestionIndex + 1, 0, newQuestion);
    //       });
    //     }
    //     ////Todo:Error loop for delta
    //     if (delta.errors) {
    //       delta.errors.forEach((error) => {
    //         let currentSection = currTask.sections.find((section) => {
    //           return section.title === error.sectionName;
    //         });
    //         let currentQuestion = currentSection.questions.find((questionItem) => {
    //           return questionItem.id == error.id;
    //         });
    //         currentQuestion.serverErrorMessage = error.errorMessage;
    //       });
    //     }
    //   }
    //   return of(currTask);
    // }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    NgxFormlyParserService.prototype.getFormlyFieldConfigArrayCollectionFromTask = function (currentTask, currentQuestionId, requestId, workflowId, taskId) {
        var _this = this;
        var formlyFieldConfigArrayCollections = [];
        var currTask = __assign({}, currentTask);
        currTask.sections.map(function (section) {
            var FormlyFieldConfigArray = _this.getFormlyFieldConfigArrayFromSection(section, currentQuestionId, requestId, workflowId, taskId);
            var formlyFieldConfigArray = new _models__WEBPACK_IMPORTED_MODULE_4__["FormlyFieldConfigArrayCollection"](FormlyFieldConfigArray, section.title);
            formlyFieldConfigArrayCollections.push(formlyFieldConfigArray);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(formlyFieldConfigArrayCollections);
    };
    NgxFormlyParserService.prototype.getFormlyFieldConfigArrayFromSection = function (currentSection, currentQuestionId, requestId, workflowId, taskId) {
        var _this = this;
        var FormlyFieldConfigArray = [];
        var currSection = __assign({}, currentSection);
        currSection.questions.map(function (question) {
            if (_custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_5__["EXISTING_COMPONENTS"].includes(question.type) && !question.recurrent) {
                var field = {};
                field.key = question.id.toString();
                if (field.key == currentQuestionId) {
                    field.focus = true;
                }
                field.type = question.type;
                field.lifecycle = _this.formlyFieldsService
                    .getFormlyLifeCycleEventByQuestionType(field.type, requestId, workflowId, taskId);
                field.templateOptions = {
                    label: question.label || "",
                    options: question.options || [],
                    required: question.required || false,
                    disabled: question.disabled || false,
                    recurrent: question.recurrent || false
                };
                if (question.answers && question.answers.length > 0) {
                    field = _this.setDefaultValuesFromAnswers(question.answers, field, question.recurrent);
                    console.log(question.answers);
                }
                if (question.max) {
                    field.templateOptions.max = question.max;
                }
                if (question.maxLength) {
                    field.templateOptions.maxLength = question.maxLength;
                }
                if (question.min) {
                    field.templateOptions.min = question.min;
                }
                if (question.minLength) {
                    field.templateOptions.minLength = question.minLength;
                }
                field = _this.getFormlyFieldArrayConfigByQuestionType(field);
                FormlyFieldConfigArray.push(field);
            }
        });
        return FormlyFieldConfigArray;
    };
    NgxFormlyParserService.prototype.getFormlyFieldArrayConfigByQuestionType = function (formlyField) {
        var field = __assign({}, formlyField);
        switch (field.type) {
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsEnum"].CUSTOM_EMAIL:
                field.fieldArray = __assign({}, _custom_formly_fields_formly_configs_email_field_array__WEBPACK_IMPORTED_MODULE_6__["emailFieldArray"]);
                break;
            // Todo: UI Team will add their respective field array reference here
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsEnum"].CUSTOM_PHONE:
                field.fieldArray = _custom_formly_fields_formly_configs_phone_field_config__WEBPACK_IMPORTED_MODULE_8__["PhoneFieldConfig"].fieldArray;
                break;
            case _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsEnum"].CUSTOM_ADDRESS_FIELDS:
                field.fieldArray = __assign({}, _custom_formly_fields_formly_configs_address_fields_field_array__WEBPACK_IMPORTED_MODULE_9__["AddressFieldsFieldArray"]);
        }
        return field;
    };
    NgxFormlyParserService.prototype.setDefaultValuesFromAnswers = function (answers, field, isRecurrent) {
        var currField = __assign({}, field);
        if (!isRecurrent) {
            // if (currField.type === CustomComponentsEnum.CUSTOM_CHECKBOX) {
            //   currField.defaultValue = answers[0].value === 'true' ? true : false;
            // } else {
            //   currField.defaultValue = answers[0].value;
            // }
            currField.defaultValue = answers[0].value;
        }
        else {
            currField.defaultValue = answers;
        }
        return currField;
    };
    NgxFormlyParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _formly_fields_service__WEBPACK_IMPORTED_MODULE_7__["FormlyFieldsService"]])
    ], NgxFormlyParserService);
    return NgxFormlyParserService;
}());



/***/ }),

/***/ "./src/app/core/services/questionnaire.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/questionnaire.service.ts ***!
  \********************************************************/
/*! exports provided: QuestionnaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function() { return QuestionnaireService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionnaireService = /** @class */ (function () {
    function QuestionnaireService(apiService) {
        this.apiService = apiService;
    }
    // getUserData(): Observable<any> {
    //   return forkJoin([this.getUser(), this.getFields()]);
    // }
    // getUser() {
    //   return of(USERDATA);
    // }
    // getFields() {
    //   return of(QUESTIONS);
    // }
    // getDelta() {
    //   return of([{
    //     'key': 'likeToEarnInterest1',
    //     'type': 'radio',
    //     'templateOptions': {
    //       'label': 'Would you like to earn interest on this account?',
    //       'options': [
    //         {
    //           'label': 'Yes',
    //           'value': 'true'
    //         },
    //         {
    //           'label': 'No',
    //           'value': 'False'
    //         }
    //       ]
    //     }
    //   }]);
    // }
    // getCurrentTask(taskId: string): Observable<Task> {
    //   return this.apiService.get<Task>('tasks/' + taskId);
    // }
    // getFieldChangeDelta(deltaRequest: QuestionaireDeltaRequest): Observable<QuestionaireDeltaResponse> {
    //   switch (deltaRequest.id) {
    //     case 'InterestCheckingCheckBox':
    //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/1');
    //     case 'SavingAccountTextBox':
    //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/2');
    //     case 'ColorInputBox':
    //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/3');
    //     default:
    //       return Observable.of(null);
    //   }
    // }
    QuestionnaireService.prototype.getCurrentTask = function (taskRequest) {
        // return this.apiService.get('tasks/' + taskRequest.taskId);
        // Todo: Uncomment to use Production Url
        return this.apiService.post('api/ddo/questionnaire/taskQuestions', taskRequest);
    };
    QuestionnaireService.prototype.getFieldChangeDelta = function (deltaRequest) {
        // Todo: uncomment to use mock service
        // switch (deltaRequest.questionnaireItems[0].id) {
        //   case 'InterestCheckingCheckBox':
        //     return this.apiService.get('questionnaireDeltaResponses/1');
        //   case 'SavingAccountTextBox':
        //     return this.apiService.get('questionnaireDeltaResponses/2');
        //   case 'ColorInputBox':
        //     return this.apiService.get('questionnaireDeltaResponses/3');
        //   default:
        //     return of(null);
        // }
        // Todo : Production Url
        return this.apiService.post('api/ddo/questionnaire/tasks/question', deltaRequest);
    };
    QuestionnaireService.prototype.getCountryCode = function () {
        return this.apiService.get('countryCode');
    };
    QuestionnaireService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], QuestionnaireService);
    return QuestionnaireService;
}());



/***/ }),

/***/ "./src/app/core/services/token.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/token.interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'userId': "" + this.auth.getToken(),
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache'
            },
            withCredentials: true
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/user-info.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user-info.service.ts ***!
  \****************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoService = /** @class */ (function () {
    function UserInfoService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    UserInfoService.prototype.getUserInfo = function () {
        return this.apiService.get('user');
    };
    UserInfoService.prototype.getUserContactPerson = function () {
        return this.apiService.get('contact');
        ///Todo : Production Url
        // return this.apiService.get('api/ddo/application/contact');
    };
    UserInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/app/core/services/window-ref.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/window-ref.service.ts ***!
  \*****************************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/app/core/utilities/application-request.utility.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/utilities/application-request.utility.ts ***!
  \***************************************************************/
/*! exports provided: determinePendingTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinePendingTask", function() { return determinePendingTask; });
/* harmony import */ var _constants_application_request_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/application-request.constants */ "./src/app/core/constants/application-request.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


function determinePendingTask(workflows) {
    var count = 0, taskId = '', workflowId = '';
    while (count < workflows.length) {
        var workflow = workflows[count];
        if (workflow.status === _constants_application_request_constants__WEBPACK_IMPORTED_MODULE_0__["TASK_STATUSES"].inProgress) {
            workflowId = workflow.id;
            var count1 = 0;
            while (count1 < workflow.tasks.length) {
                var task = workflow.tasks[count1];
                if (task.status === _constants_application_request_constants__WEBPACK_IMPORTED_MODULE_0__["TASK_STATUSES"].inProgress) {
                    taskId = task.id;
                    break;
                }
                count1++;
            }
            break;
        }
        count++;
    }
    if (workflows && workflows.length > 0 && !workflowId && !taskId) {
        workflowId = workflows[0].id;
        taskId = workflows[0].tasks[0].id;
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
        workflowId: workflowId,
        taskId: taskId
    });
}


/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-fields/address-fields.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-address-fields\">\r\n    <span class=\"bold\">{{field.fieldArray?.templateOptions?.heading}}</span>\r\n    <div *ngFor=\"let data of field.fieldGroup; let i = index;\">\r\n        <formly-group\r\n            [field]=\"data\"\r\n            [options]=\"options\"\r\n            [form]=\"formControl\">\r\n        </formly-group>\r\n    </div>\r\n    <div *ngIf=\"field.fieldArray?.recurrent\">\r\n        <button class=\"btn btn-link mt-2\" type=\"button\" (click)=\"add()\">\r\n            {{ field.fieldArray.templateOptions.btnText }}\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-fields/address-fields.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-fields/address-fields.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddressFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFieldsComponent", function() { return AddressFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressFieldsComponent = /** @class */ (function (_super) {
    __extends(AddressFieldsComponent, _super);
    function AddressFieldsComponent(builder) {
        return _super.call(this, builder) || this;
    }
    AddressFieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'address-fields',
            template: __webpack_require__(/*! ./address-fields.component.html */ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.html"),
            styles: [__webpack_require__(/*! ./address-fields.component.scss */ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"]])
    ], AddressFieldsComponent);
    return AddressFieldsComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-proof/address-proof.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Addressfield\">\r\n    <h4>Documents</h4>\r\n<div *ngFor=\"let field of field.fieldGroup; let i = index;\">\r\n    <p>Address Proof</p>\r\n    <div class=\"box_wrapper\">\r\n        <upload-file></upload-file>\r\n    </div>\r\n    <formly-group\r\n    [model]=\"model[i]\"\r\n      [field]=\"field\"\r\n      [options]=\"options\"\r\n      [form]=\"formControl\">\r\n    </formly-group>\r\n</div>\r\n<div *ngIf=\"field.fieldArray?.recurrent\">\r\n    <button class=\"btn btn-link mt-2\" type=\"button\" (click)=\"add()\">\r\n        {{ field.fieldArray.templateOptions.btnText }}\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-proof/address-proof.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box_wrapper {\n  border: 1px dashed #ccc;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 10px; }\n  .box_wrapper h4 {\n    font-size: 12px; }\n  .Addressfield {\n  margin-top: 10px; }\n  .Addressfield p {\n    margin: 0px;\n    padding: 0px; }\n  .Addressfield .addmoreaddress {\n    color: blue;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/address-proof/address-proof.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddressProofComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressProofComponent", function() { return AddressProofComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressProofComponent = /** @class */ (function (_super) {
    __extends(AddressProofComponent, _super);
    function AddressProofComponent(builder) {
        return _super.call(this, builder) || this;
    }
    AddressProofComponent.prototype.ngOnInit = function () {
        console.log(this.field.fieldArray, ':::Arrray');
        this.add();
    };
    AddressProofComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'address-proof',
            template: __webpack_require__(/*! ./address-proof.component.html */ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.html"),
            styles: [__webpack_require__(/*! ./address-proof.component.scss */ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"]])
    ], AddressProofComponent);
    return AddressProofComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n      <!-- <ng-select [items]=\"options$ | async\"\r\n      [placeholder]=\"to.placeholder\"  class=\"form-control\"\r\n      [typeahead]=\"search$\"\r\n      [formControl]=\"formControl\">\r\n    </ng-select> -->\r\n    <!-- <p>{{to.label}}</p> -->\r\n     <ng-select [items]=\"options$ | async\"\r\n      class=\"form-control\"\r\n      [typeahead]=\"search$\"\r\n      [formControl]=\"formControl\"\r\n      (clear)=\"clearSelect($event)\"\r\n      (change)=\"searchChanges($event)\"\r\n      (blur)=\"searchChanges1($event)\"\r\n      (focus)=\"searchChanges1($event)\">\r\n    </ng-select>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-spinner-zone {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/takeUntil */ "./node_modules/rxjs-compat/_esm5/operators/takeUntil.js");
/* harmony import */ var rxjs_operators_startWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/startWith */ "./node_modules/rxjs-compat/_esm5/operators/startWith.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators/switchMap */ "./node_modules/rxjs-compat/_esm5/operators/switchMap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { Field } from '@ngx-formly/core';
var AutoCompleteComponent = /** @class */ (function (_super) {
    __extends(AutoCompleteComponent, _super);
    function AutoCompleteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDestroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.search$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AutoCompleteComponent.prototype.ngOnInit = function () {
        // super();
        this.options$ = this.search$.pipe(Object(rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$), Object(rxjs_operators_startWith__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (v) { return v !== null; }), Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(this.to.search$));
        this.options$.subscribe();
        console.log(this.to, '::::3222', this);
        // this.field.templateOptions.serachTerm = function () {
        //   console.log('at the serach');
        // }
    };
    AutoCompleteComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.complete();
    };
    AutoCompleteComponent.prototype.clearSelect = function (evt) {
        this.search$.emit('');
        console.log('clearselect', evt);
    };
    AutoCompleteComponent.prototype.searchChanges = function (evt) {
        evt = typeof evt == 'string' ? evt : '';
        this.search$.emit(evt);
        console.log('::::blucrchanges', evt);
    };
    AutoCompleteComponent.prototype.searchChanges1 = function () {
        this.search$.emit('');
    };
    AutoCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auto-complete',
            template: __webpack_require__(/*! ./auto-complete.component.html */ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.html"),
            styles: [__webpack_require__(/*! ./auto-complete.component.scss */ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.scss")]
        })
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/checkbox/checkbox.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-checkbox\">\r\n  <input class=\"custom-control-input\"\r\n    type=\"checkbox\" [class.is-invalid]=\"showError\"\r\n    [formControl]=\"formControl\" [formlyAttributes]=\"field\">\r\n  <label class=\"custom-control-label\" [for]=\"id\">\r\n    {{ to.label }}\r\n  </label>\r\n  <span *ngIf='!to.required' class=\"ml-4\">(optional)</span>\r\n  <i *ngIf=\"to.tooltip\" class=\"control-label-help fa fa-question-circle-o ml-3\" containerClass=\"{{to.tooltip.containerClass}}\" tooltip=\"{{to.tooltip.content}}\" placement=\"{{to.tooltip.placement}}\"></i>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/checkbox/checkbox.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n  .custom-checkbox .custom-control-label::before {\n    border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/checkbox/checkbox.component.ts ***!
  \********************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/date-picker/date-picker.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formly-date-picker form-group pb-3 pt-3\">\r\n  <label class=\"formly-date-picker__label\" [for]=\"id\">\r\n    {{ to.label }}\r\n    <span *ngIf='!to.required' class=\"float-right\">(optional)</span>\r\n    <i *ngIf=\"to.tooltip\"\r\n      class=\"control-label-help fa fa-question-circle-o ml-3\"\r\n      containerClass=\"{{to.tooltip.containerClass}}\"\r\n      tooltip=\"{{to.tooltip.content}}\"\r\n      placement=\"{{to.tooltip.placement}}\"></i>\r\n  </label>\r\n  <div class=\"input-group\">\r\n    <input [id]=\"id\" class=\"form-control formly-date-picker__input\"\r\n      [formControl]=\"formControl\"\r\n      [placeholder]=\"to.placeholder\"\r\n      [formlyAttributes]=\"field\"\r\n      bsDatepicker #dp=\"bsDatepicker\"\r\n      [minDate]=\"to.datepickerOptions && to.datepickerOptions.minDate\"\r\n      [maxDate]=\"to.datepickerOptions && to.datepickerOptions.maxDate\"\r\n      showWeekNumbers=\"false\">\r\n    <div class=\"input-group-append\">\r\n      <div class=\"input-group-text\">\r\n        <i class=\"fa fa-calendar-o\" aria-hidden=\"true\" (click)=\"dp.toggle()\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/date-picker/date-picker.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formly-date-picker__input {\n  border-right: 0; }\n\n.formly-date-picker .input-group-text {\n  background: #ffffff;\n  border-left: 0; }\n\n.bs-datepicker-head {\n  text-align: center; }\n\n.bs-datepicker-head .previous {\n    float: left; }\n\n.bs-datepicker-head .next {\n    float: right; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/date-picker/date-picker.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatePickerComponent = /** @class */ (function (_super) {
    __extends(DatePickerComponent, _super);
    function DatePickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.scss */ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/dropdown/dropdown.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formly-dropdown form-group pb-3 pt-3\">\r\n  <label class=\"formly-dropdown__label\" [for]=\"id\">\r\n    {{to.label}}\r\n    <span *ngIf='!to.required' class=\"ml-4 float-right\">(optional)</span>\r\n    <i *ngIf=\"to.tooltip\" class=\"control-label-help fa fa-question-circle-o ml-3\" containerClass=\"{{to.tooltip.containerClass}}\"\r\n      tooltip=\"{{to.tooltip.content}}\" placement=\"{{to.tooltip.placement}}\"></i>\r\n  </label>\r\n  <select class=\"form-control\" [formControl]=\"formControl\" [class.is-invalid]=\"showError\" [formlyAttributes]=\"field\">\r\n    <ng-container *ngFor=\"let item of to.options | formlySelectOptions:field | async\">\r\n      <option [value]=\"item[valueProp]\" [disabled]=\"item.disabled\">\r\n        {{ item[labelProp] }}\r\n      </option>\r\n    </ng-container>\r\n  </select>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/dropdown/dropdown.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/dropdown/dropdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DropdownComponent.prototype, "labelProp", {
        get: function () { return this.to.labelProp || 'label'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "valueProp", {
        get: function () { return this.to.valueProp || 'value'; },
        enumerable: true,
        configurable: true
    });
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formly-field-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], DropdownComponent);
    return DropdownComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/email/email.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/email/email.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formly-email mt-3\">\r\n  <span class=\"formly-phone__title bold\">Email</span>\r\n  <div *ngFor=\"let data of field.fieldGroup; let i = index;\">\r\n    <formly-group [field]=\"data\" [options]=\"options\" [form]=\"formControl\">\r\n    </formly-group>\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-link mt-2 pl-0\" type=\"button\" (click)=\"add()\">\r\n      {{ field.fieldArray.templateOptions.btnText }}\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/email/email.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/email/email.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formly-email .no-pad-top .custom-control {\n  padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/email/email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/email/email.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailComponent = /** @class */ (function (_super) {
    __extends(EmailComponent, _super);
    function EmailComponent(builder) {
        return _super.call(this, builder) || this;
    }
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/custom-formly-fields/components/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.scss */ "./src/app/custom-formly-fields/components/email/email.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"]])
    ], EmailComponent);
    return EmailComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/phone/phone.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/phone/phone.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formly-phone mt-3\">\r\n  <span class=\"formly-phone__title bold\">Phone</span>\r\n  <div *ngFor=\"let data of field.fieldGroup; let i = index;\">\r\n    <formly-group [field]=\"data\" [options]=\"options\" [form]=\"formControl\">\r\n    </formly-group>\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-link mt-2 pl-0\" type=\"button\" (click)=\"add()\">\r\n      {{ field.fieldArray.templateOptions.btnText }}\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/phone/phone.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/phone/phone.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formly-phone .btn-link {\n  text-decoration: none; }\n\n.formly-phone .no-pad-top .custom-control {\n  padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/phone/phone.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/phone/phone.component.ts ***!
  \**************************************************************************/
/*! exports provided: PhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneComponent", function() { return PhoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneComponent = /** @class */ (function (_super) {
    __extends(PhoneComponent, _super);
    function PhoneComponent(builder) {
        return _super.call(this, builder) || this;
    }
    PhoneComponent.prototype.ngOnInit = function () {
    };
    PhoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone',
            template: __webpack_require__(/*! ./phone.component.html */ "./src/app/custom-formly-fields/components/phone/phone.component.html"),
            styles: [__webpack_require__(/*! ./phone.component.scss */ "./src/app/custom-formly-fields/components/phone/phone.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"]])
    ], PhoneComponent);
    return PhoneComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" class=\"custom-radio-button pb-3 pt-3\">\r\n  <label class=\"custom-control-radio-label\" [for]=\"name\">\r\n    {{ to.label }}\r\n  </label>\r\n  <div class=\"custom-control custom-radio mr-5\" *ngFor=\"let option of to.options ; let i = index;\">        \r\n    <input class=\"custom-control-input\" type=\"radio\"  \r\n      [id]=\"id + '_' + i\"   \r\n      [name]=\"id\"\r\n      [class.is-invalid]=\"showError\"\r\n      [value]=\"option[valueProp]\"\r\n      [formControl]=\"formControl\"\r\n      [formlyAttributes]=\"field\">    \r\n      <label class=\"custom-control-label\" [for]=\"id + '_' + i\">\r\n        {{ option.label }}\r\n      </label>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-radio-button .custom-control-radio-label {\n  display: block; }\n\n.custom-radio-button .custom-radio {\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RadiobuttonComponent = /** @class */ (function (_super) {
    __extends(RadiobuttonComponent, _super);
    function RadiobuttonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadiobuttonComponent.prototype, "labelProp", {
        get: function () { return this.to.labelProp || 'label'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadiobuttonComponent.prototype, "valueProp", {
        get: function () { return this.to.valueProp || 'value'; },
        enumerable: true,
        configurable: true
    });
    RadiobuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radiobutton',
            template: __webpack_require__(/*! ./radiobutton.component.html */ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.html"),
            styles: [__webpack_require__(/*! ./radiobutton.component.scss */ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/textbox/textbox.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/textbox/textbox.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formly-textbox form-group pb-3 pt-3\">\r\n    <label class=\"formly-textbox__label\" [for]=\"id\">\r\n        {{to.label}}\r\n        <span class=\"float-right\">\r\n            <span *ngIf='!to.required' class=\"ml-4\">(optional)</span>\r\n            <i *ngIf=\"to.tooltip\"\r\n                class=\"control-label-help fa fa-question-circle-o ml-3\"\r\n                containerClass=\"{{to.tooltip.containerClass}}\"\r\n                tooltip=\"{{to.tooltip.content}}\"\r\n                placement=\"{{to.tooltip.placement}}\"></i>\r\n        </span>\r\n    </label>\r\n    <input class=\"form-control\"\r\n        [type]=\"type\"\r\n        [formControl]=\"formControl\"\r\n        [formlyAttributes]=\"field\"\r\n        [class.is-invalid]=\"showError\">\r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/textbox/textbox.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/textbox/textbox.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-formly-fields/components/textbox/textbox.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/textbox/textbox.component.ts ***!
  \******************************************************************************/
/*! exports provided: TextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxComponent", function() { return TextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextboxComponent = /** @class */ (function (_super) {
    __extends(TextboxComponent, _super);
    function TextboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextboxComponent.prototype, "type", {
        get: function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    TextboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textbox',
            template: __webpack_require__(/*! ./textbox.component.html */ "./src/app/custom-formly-fields/components/textbox/textbox.component.html"),
            styles: [__webpack_require__(/*! ./textbox.component.scss */ "./src/app/custom-formly-fields/components/textbox/textbox.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], TextboxComponent);
    return TextboxComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/upload-file/upload-file.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div class=\"drop-container\" ngFileDrop [options]=\"options\"\r\n (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\"\r\n  [ngClass]=\"{ 'is-drop-over': dragOver }\">\r\n    <h4>Drag documents here or </h4>\r\n  </div>\r\n  \r\n  <label class=\"upload-button\">\r\n    <input type=\"file\" ngFileSelect [options]=\"options\" \r\n    (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\" multiple>\r\n    \r\n  </label>\r\n \r\n</div>"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/upload-file/upload-file.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=file] {\n  cursor: pointer;\n  height: 34px;\n  overflow: hidden;\n  position: relative; }\n\ninput[type=file]:before {\n  color: white;\n  width: 158px;\n  height: 32px;\n  font-size: 16px;\n  line-height: 32px;\n  display: none;\n  background: white; }\n\ninput[type=file]:after {\n  color: deepskyblue;\n  content: 'Choose file';\n  padding: 0 10px;\n  text-align: center;\n  font-family: Helvetica, Arial, sans-serif;\n  position: absolute;\n  left: 30%;\n  z-index: 99999;\n  top: 0;\n  font-size: 15px; }\n\ninput[type=file]:focus {\n  outline: none; }\n\ninput[type=file]::-webkit-file-upload-button {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/custom-formly-fields/components/upload-file/upload-file.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent() {
        this.options = { concurrency: 1, maxUploads: 1 };
        this.files = []; // local uploading files array
        this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_1__["humanizeBytes"];
    }
    UploadFileComponent.prototype.onUploadOutput = function (output) {
        if (output.type === 'allAddedToQueue') {
            // uncomment this if you want to auto upload files when added
            var event_1 = {
                type: 'uploadAll',
                url: '/upload',
                method: 'POST',
                data: { foo: 'bar' }
            };
            this.uploadInput.emit(event_1);
        }
        else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
            this.files.push(output.file);
        }
        else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
            // update current data in files array for uploading file
            var index = this.files.findIndex(function (file) { return typeof output.file !== 'undefined' && file.id === output.file.id; });
            this.files[index] = output.file;
        }
        else if (output.type === 'removed') {
            // remove file from array when removed
            this.files = this.files.filter(function (file) { return file !== output.file; });
        }
        else if (output.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (output.type === 'dragOut') {
            this.dragOver = false;
        }
        else if (output.type === 'drop') {
            this.dragOver = false;
        }
    };
    UploadFileComponent.prototype.startUpload = function () {
        var event = {
            type: 'uploadAll',
            url: 'http://ngx-uploader.com/upload',
            method: 'POST',
            data: { foo: 'bar' }
        };
        this.uploadInput.emit(event);
    };
    UploadFileComponent.prototype.cancelUpload = function (id) {
        this.uploadInput.emit({ type: 'cancel', id: id });
    };
    UploadFileComponent.prototype.removeFile = function (id) {
        this.uploadInput.emit({ type: 'remove', id: id });
    };
    UploadFileComponent.prototype.removeAllFiles = function () {
        this.uploadInput.emit({ type: 'removeAll' });
    };
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/custom-formly-fields/custom-formly-fields.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/custom-formly-fields/custom-formly-fields.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomFormlyFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormlyFieldsModule", function() { return CustomFormlyFieldsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/@ng-select/ng-select.es5.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _components_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/textbox/textbox.component */ "./src/app/custom-formly-fields/components/textbox/textbox.component.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/app/custom-formly-fields/components/dropdown/dropdown.component.ts");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/custom-formly-fields/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/radiobutton/radiobutton.component */ "./src/app/custom-formly-fields/components/radiobutton/radiobutton.component.ts");
/* harmony import */ var _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auto-complete/auto-complete.component */ "./src/app/custom-formly-fields/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/date-picker/date-picker.component */ "./src/app/custom-formly-fields/components/date-picker/date-picker.component.ts");
/* harmony import */ var _components_address_fields_address_fields_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/address-fields/address-fields.component */ "./src/app/custom-formly-fields/components/address-fields/address-fields.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _task_container_task_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../task-container/task-container.component */ "./src/app/task-container/task-container.component.ts");
/* harmony import */ var _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ "./src/app/custom-formly-fields/components/upload-file/upload-file.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/email/email.component */ "./src/app/custom-formly-fields/components/email/email.component.ts");
/* harmony import */ var _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./enums/custom-components.enum */ "./src/app/custom-formly-fields/enums/custom-components.enum.ts");
/* harmony import */ var _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/phone/phone.component */ "./src/app/custom-formly-fields/components/phone/phone.component.ts");
/* harmony import */ var _pipes_select_options_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/select-options.pipe */ "./src/app/custom-formly-fields/pipes/select-options.pipe.ts");
/* harmony import */ var _components_address_proof_address_proof_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/address-proof/address-proof.component */ "./src/app/custom-formly-fields/components/address-proof/address-proof.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var CustomFormlyFieldsModule = /** @class */ (function () {
    function CustomFormlyFieldsModule() {
    }
    CustomFormlyFieldsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormlyBootstrapModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                ngx_uploader__WEBPACK_IMPORTED_MODULE_8__["NgxUploaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forRoot({
                    validationMessages: [
                        { name: 'server-error', message: function (err) { return err; } }
                    ],
                    types: [
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_DROPDOWN, component: _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_RADIO_BUTTON, component: _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_12__["RadiobuttonComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_TYPEAHEAD, component: _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteComponent"], extends: 'input' },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_DATEPICKER, component: _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_ADDRESS_FIELDS, component: _components_address_fields_address_fields_component__WEBPACK_IMPORTED_MODULE_15__["AddressFieldsComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_TEXTBOX, component: _components_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_EMAIL, component: _components_email_email_component__WEBPACK_IMPORTED_MODULE_20__["EmailComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_PHONE, component: _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_22__["PhoneComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_CHECKBOX, component: _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"] },
                        { name: _enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_21__["CustomComponentsEnum"].CUSTOM_ADDRESS_PROOF, component: _components_address_proof_address_proof_component__WEBPACK_IMPORTED_MODULE_24__["AddressProofComponent"] },
                    ]
                }),
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormlyBootstrapModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot()
            ],
            declarations: [
                _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"],
                _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_12__["RadiobuttonComponent"],
                _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteComponent"],
                _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerComponent"],
                _components_address_proof_address_proof_component__WEBPACK_IMPORTED_MODULE_24__["AddressProofComponent"],
                _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_16__["QuestionnaireComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_17__["SectionComponent"],
                _task_container_task_container_component__WEBPACK_IMPORTED_MODULE_18__["TaskContainerComponent"],
                _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_19__["UploadFileComponent"],
                _components_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
                _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_22__["PhoneComponent"],
                _components_address_fields_address_fields_component__WEBPACK_IMPORTED_MODULE_15__["AddressFieldsComponent"],
                _components_email_email_component__WEBPACK_IMPORTED_MODULE_20__["EmailComponent"],
                _pipes_select_options_pipe__WEBPACK_IMPORTED_MODULE_23__["FormlySelectOptionsPipe"]
            ],
            exports: [
                _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"],
                _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_12__["RadiobuttonComponent"],
                _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteComponent"],
                _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerComponent"],
                _components_address_proof_address_proof_component__WEBPACK_IMPORTED_MODULE_24__["AddressProofComponent"],
                _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_16__["QuestionnaireComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_17__["SectionComponent"],
                _task_container_task_container_component__WEBPACK_IMPORTED_MODULE_18__["TaskContainerComponent"],
                _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_19__["UploadFileComponent"],
                _components_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
                _components_address_fields_address_fields_component__WEBPACK_IMPORTED_MODULE_15__["AddressFieldsComponent"],
                _components_email_email_component__WEBPACK_IMPORTED_MODULE_20__["EmailComponent"],
                _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_22__["PhoneComponent"],
                _pipes_select_options_pipe__WEBPACK_IMPORTED_MODULE_23__["FormlySelectOptionsPipe"]
            ]
        })
    ], CustomFormlyFieldsModule);
    return CustomFormlyFieldsModule;
}());



/***/ }),

/***/ "./src/app/custom-formly-fields/enums/custom-components.enum.ts":
/*!**********************************************************************!*\
  !*** ./src/app/custom-formly-fields/enums/custom-components.enum.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsEnum, EXISTING_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsEnum", function() { return CustomComponentsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXISTING_COMPONENTS", function() { return EXISTING_COMPONENTS; });
var CustomComponentsEnum;
(function (CustomComponentsEnum) {
    CustomComponentsEnum["CUSTOM_CHECKBOX"] = "custom-checkbox";
    CustomComponentsEnum["CUSTOM_DROPDOWN"] = "custom-dropdown";
    CustomComponentsEnum["CUSTOM_RADIO_BUTTON"] = "custom-radio-button";
    CustomComponentsEnum["CUSTOM_TYPEAHEAD"] = "typeahead";
    CustomComponentsEnum["CUSTOM_DATEPICKER"] = "custom-datepicker";
    CustomComponentsEnum["CUSTOM_ADDRESS_FIELDS"] = "custom-address-fields";
    CustomComponentsEnum["CUSTOM_ADDRESS_PROOF"] = "repeatAddressData";
    CustomComponentsEnum["CUSTOM_TEXTBOX"] = "custom-textbox";
    CustomComponentsEnum["CUSTOM_EMAIL"] = "custom-email";
    CustomComponentsEnum["CUSTOM_PHONE"] = "custom-phone";
})(CustomComponentsEnum || (CustomComponentsEnum = {}));
var EXISTING_COMPONENTS = [
    CustomComponentsEnum.CUSTOM_CHECKBOX,
    CustomComponentsEnum.CUSTOM_DROPDOWN,
    CustomComponentsEnum.CUSTOM_RADIO_BUTTON,
    // CustomComponentsEnum.CUSTOM_TYPEAHEAD,
    CustomComponentsEnum.CUSTOM_DATEPICKER,
    // CustomComponentsEnum.CUSTOM_ADDRESS_FIELDS,
    // CustomComponentsEnum.CUSTOM_ADDRESS_PROOF,
    CustomComponentsEnum.CUSTOM_TEXTBOX,
];


/***/ }),

/***/ "./src/app/custom-formly-fields/formly-configs/address-fields-field-array.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/custom-formly-fields/formly-configs/address-fields-field-array.ts ***!
  \***********************************************************************************/
/*! exports provided: AddressFieldsFieldArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFieldsFieldArray", function() { return AddressFieldsFieldArray; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var AddressFieldsFieldArray = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            key: 'addressDescription',
            className: 'col-sm-12 mt-2',
            type: 'custom-dropdown',
            templateOptions: {
                required: true,
                label: 'Address Description',
                options: [
                    {
                        label: 'Home Address',
                        value: 'homeAddress'
                    },
                    {
                        label: 'Legal Address',
                        value: 'legalAddress'
                    }
                ]
            }
        },
        {
            key: 'legalAndHomeAddressSame',
            type: 'custom-radio-button',
            className: 'col-sm-12 mt-2',
            templateOptions: {
                required: true,
                label: "Is your home/legal address the same as the primary account holder's address?",
                options: [
                    {
                        label: 'Yes',
                        value: true
                    },
                    {
                        label: 'No',
                        value: false
                    }
                ]
            }
        },
        {
            key: 'address1',
            type: 'custom-textbox',
            className: 'col-sm-12 mt-2',
            templateOptions: {
                required: true,
                label: 'Address 1',
            }
        },
        {
            key: 'address2',
            type: 'custom-textbox',
            className: 'col-sm-12 mt-2',
            templateOptions: {
                required: true,
                label: 'Address 2',
            }
        },
        {
            key: 'city',
            type: 'custom-textbox',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                required: true,
                label: 'City',
            }
        },
        {
            key: 'postalCode',
            type: 'custom-textbox',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                required: true,
                label: 'Postal Zip',
            }
        },
        {
            key: 'state',
            type: 'custom-dropdown',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                label: 'State',
                required: true,
                hideRequiredMarker: true,
                options: []
            },
            lifecycle: {
                onInit: function (form, field) {
                    form.get('country').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(form.get('country').value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (country) {
                        field.formControl.setValue('');
                        if (country && country === 'India') {
                            field.templateOptions.options = [
                                {
                                    value: 'Maharashtra',
                                    label: 'Maharashtra'
                                },
                                {
                                    value: 'Delhi',
                                    label: 'Delhi'
                                },
                                {
                                    value: 'Uttar Pradesh',
                                    label: 'Uttar Pradesh'
                                }
                            ];
                        }
                    })).subscribe();
                },
            },
        },
        {
            key: 'country',
            type: 'custom-dropdown',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                required: true,
                label: 'Country',
                options: [
                    {
                        "label": "India",
                        "value": "India"
                    },
                    {
                        "label": "United States of America",
                        "value": "United States of America"
                    }
                ],
                hideRequiredMarker: true
            }
        },
        {
            key: 'addressSince',
            type: 'custom-datepicker',
            className: 'col-sm-12 mt-2',
            templateOptions: {
                label: 'Address Since',
                required: true
            }
        },
        {
            key: 'mailingAddress',
            type: 'custom-radio-button',
            className: 'col-sm-12 mt-2',
            templateOptions: {
                required: true,
                label: "Would you like to use this address as your mailing address?",
                options: [
                    {
                        label: 'Yes',
                        value: true
                    },
                    {
                        label: 'No',
                        value: false
                    }
                ]
            }
        }
    ],
    templateOptions: {
        btnText: '+ Add a new address',
        heading: 'Addresses'
    }
};


/***/ }),

/***/ "./src/app/custom-formly-fields/formly-configs/email-field-array.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-formly-fields/formly-configs/email-field-array.ts ***!
  \**************************************************************************/
/*! exports provided: emailFieldArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailFieldArray", function() { return emailFieldArray; });
var emailFieldArray = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            className: 'col-sm-12',
            type: 'custom-dropdown',
            key: 'description',
            templateOptions: {
                label: 'Email Description',
                required: true,
                options: [
                    { label: 'Home', value: 'home' },
                    { label: 'Work', value: 'work' },
                    { label: 'Phone', value: 'phone' }
                ]
            },
        },
        {
            type: 'custom-textbox',
            key: 'emailAddress',
            className: 'col-sm-12',
            templateOptions: {
                label: 'Email Address',
                required: true
            },
        }
    ],
    templateOptions: {
        btnText: '+ Add a new email',
    }
};


/***/ }),

/***/ "./src/app/custom-formly-fields/formly-configs/phone-field.config.ts":
/*!***************************************************************************!*\
  !*** ./src/app/custom-formly-fields/formly-configs/phone-field.config.ts ***!
  \***************************************************************************/
/*! exports provided: PhoneFieldConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneFieldConfig", function() { return PhoneFieldConfig; });
var PhoneFieldConfig = {
    key: 'phone',
    type: 'custom-phone',
    fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: 'col-sm-12',
                type: 'custom-dropdown',
                key: 'description',
                templateOptions: {
                    label: 'Phone Description',
                    required: true,
                    options: [
                        { label: 'Home', value: 'home' },
                        { label: 'Work', value: 'work' },
                        { label: 'Phone', value: 'phone' }
                    ]
                },
            },
            {
                type: 'custom-dropdown',
                key: 'countryCode',
                className: 'col-sm-6',
                templateOptions: {
                    label: 'Country Code',
                    options: [
                        {
                            'label': '+91',
                            'value': '+91'
                        },
                        {
                            'label': '+1',
                            'value': '+1'
                        },
                        {
                            'label': '+111',
                            'value': '+111'
                        },
                    ]
                },
            },
            {
                type: 'custom-textbox',
                key: 'homePhone',
                className: 'col-sm-6',
                templateOptions: {
                    label: 'Home Phone Number',
                },
            },
            {
                type: 'custom-checkbox',
                key: 'setAsPrimary',
                className: 'col-sm-12',
                templateOptions: {
                    label: 'Use this number as primary contact',
                    required: true
                },
            },
            {
                type: 'custom-checkbox',
                key: 'setForBanking',
                className: 'col-sm-12 no-pad-top',
                templateOptions: {
                    label: 'Use this number for approving banking activity',
                    required: true
                },
            }
        ],
        templateOptions: {
            btnText: '+ Add a new phone Number'
        }
    }
};


/***/ }),

/***/ "./src/app/custom-formly-fields/pipes/select-options.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/custom-formly-fields/pipes/select-options.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: FormlySelectOptionsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlySelectOptionsPipe", function() { return FormlySelectOptionsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormlySelectOptionsPipe = /** @class */ (function () {
    function FormlySelectOptionsPipe() {
    }
    FormlySelectOptionsPipe.prototype.transform = function (options, field) {
        var _this = this;
        if (!(options instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])) {
            options = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(options);
        }
        return options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this.toOptions(value, field || {}); }));
    };
    FormlySelectOptionsPipe.prototype.toOptions = function (options, field) {
        var _this = this;
        var gOptions = [], groups = {}, to = field.templateOptions || {};
        options.map(function (option) {
            if (!_this.getGroupProp(option, to)) {
                gOptions.push(_this.toOption(option, to));
            }
            else {
                if (!groups[_this.getGroupProp(option, to)]) {
                    groups[_this.getGroupProp(option, to)] = [];
                    gOptions.push({
                        label: _this.getGroupProp(option, to),
                        group: groups[_this.getGroupProp(option, to)],
                    });
                }
                groups[_this.getGroupProp(option, to)].push(_this.toOption(option, to));
            }
        });
        return gOptions;
    };
    FormlySelectOptionsPipe.prototype.toOption = function (item, to) {
        return {
            label: this.getLabelProp(item, to),
            value: this.getValueProp(item, to),
        };
    };
    FormlySelectOptionsPipe.prototype.getLabelProp = function (item, to) {
        if (typeof to.labelProp === 'function') {
            return to.labelProp(item);
        }
        return item[to.labelProp || 'label'];
    };
    FormlySelectOptionsPipe.prototype.getValueProp = function (item, to) {
        if (typeof to.valueProp === 'function') {
            return to.valueProp(item);
        }
        return item[to.valueProp || 'value'];
    };
    FormlySelectOptionsPipe.prototype.getGroupProp = function (item, to) {
        if (typeof to.groupProp === 'function') {
            return to.groupProp(item);
        }
        return item[to.groupProp || 'group'];
    };
    FormlySelectOptionsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'formlySelectOptions' })
    ], FormlySelectOptionsPipe);
    return FormlySelectOptionsPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header [config]='navConfig'></app-header>\r\n<nav class=\"navbar navbar-expand-lg navbar--secondary\">\r\n    <div id=\"navbarNavAltMarkup\">\r\n        <div class=\"navbar-nav\">\r\n            <a class=\"nav-item nav-link active\" href=\"ddo/my-applications\">Overview\r\n                <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar--secondary {\n  background: linear-gradient(180deg, #00bdf2, #00b3f0 18%, #0066b3 77%, #004985) !important; }\n\n.nav-item {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/navigation.constants */ "./src/app/core/constants/navigation.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'app';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.navConfig = {
            'topNavConfig': _core_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_1__["TOP_NAVIGATION"]
        };
        this.applicationDetails = {
            'heading': 'Application for 2 Joint Accouts',
            'description': 'Title of account: John, Jane and Susan joint account'
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.html":
/*!************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\"\r\n      (fieldChange)=\"fieldChanged()\">\r\n      </formly-form>\r\n    </form>"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.scss":
/*!************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav--bordered {\n  border-right: 2px solid grey; }\n\n.mat-radio-button {\n  margin-right: 15px; }\n\n.form__footer {\n  bottom: 0px;\n  z-index: -1;\n  position: fixed;\n  width: 100%; }\n\n.contact-icon {\n  font-size: 70px;\n  color: #aedae8; }\n\nformly-field-radio > div {\n  display: inline-flex; }\n\nformly-field-radio > div .radio {\n    margin-right: 35px; }\n\n.form-control-label {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.options = {};
        this.model = {};
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent.prototype.fieldChanged = function () {
        console.log(" fieldChanged called");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionnaireComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionnaireComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionnaireComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], QuestionnaireComponent.prototype, "fields", void 0);
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionnaire',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__(/*! ./questionnaire.component.scss */ "./src/app/questionnaire/questionnaire.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/section/section.component.css":
/*!***********************************************!*\
  !*** ./src/app/section/section.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paddTop7px{\r\n    padding-top: 5px !important;\r\n}\r\n.paddTop25px{\r\n    padding-top: 25px !important;\r\n}"

/***/ }),

/***/ "./src/app/section/section.component.html":
/*!************************************************!*\
  !*** ./src/app/section/section.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">     \r\n        <div class=\"col-md-4 col-xs-4 col-lg-4\">\r\n            <h5 class=\"heading paddTop7px\">{{ formlyFieldConfigArray.title }}</h5>\r\n        </div>\r\n        <div *ngIf='false' class=\"col-md-1 col-xs-1 col-lg-1\">\r\n            <button type=\"button\" class=\"btn btn-link editBtn \">Edit</button>\r\n        </div>\r\n        <div class=\"col-md-3 col-xs-3 col-lg-3\">\r\n        </div>\r\n\r\n        <div  *ngIf='false' lass=\"col-md-2 col-xs-2 col-lg-2\">\r\n            <button type=\"button\" class=\"btn btn-link editBtn \">Save Changes</button>\r\n        </div>\r\n\r\n        <div *ngIf='false' class=\"col-md-2 col-xs-2 col-lg-2\">\r\n            <button type=\"button\" class=\"btn btn-link editBtn \">Discard Changes</button>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row mb-4\">\r\n        <div class=\"col-md-8 col-xs-12 col-lg-8\">\r\n            <app-questionnaire [form]=\"form\" [options]=\"options\" \r\n            [model]=\"model\" [fields]=\"fields\"></app-questionnaire>\r\n              \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/section/section.component.ts":
/*!**********************************************!*\
  !*** ./src/app/section/section.component.ts ***!
  \**********************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-formly-fields/enums/custom-components.enum */ "./src/app/custom-formly-fields/enums/custom-components.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.options = {};
        this.model = {};
        this.fields = [];
        this.isReadonly = false;
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
        this.fields.forEach(function (item) {
            // /Need to add more If statements for other custom components     
            if (item.type === _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_3__["CustomComponentsEnum"].CUSTOM_PHONE
                || item.type === _custom_formly_fields_enums_custom_components_enum__WEBPACK_IMPORTED_MODULE_3__["CustomComponentsEnum"].CUSTOM_EMAIL) {
                _this.model[item.key] = [{}];
            }
        });
    };
    SectionComponent.prototype.ngOnChanges = function (changes) {
        this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["FormlyFieldConfigArrayCollection"])
    ], SectionComponent.prototype, "formlyFieldConfigArray", void 0);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.css */ "./src/app/section/section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-body/card-body.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/card-body/card-body.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/card-body/card-body.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/card-body/card-body.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/card-body/card-body.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/card-body/card-body.component.ts ***!
  \*********************************************************/
/*! exports provided: CardBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function() { return CardBodyComponent; });
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

var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
    }
    CardBodyComponent.prototype.ngOnInit = function () {
    };
    CardBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-body',
            template: __webpack_require__(/*! ./card-body.component.html */ "./src/app/shared/card-body/card-body.component.html"),
            styles: [__webpack_require__(/*! ./card-body.component.scss */ "./src/app/shared/card-body/card-body.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardBodyComponent);
    return CardBodyComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-footer/card-footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-footer/card-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/card-footer/card-footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-footer/card-footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/card-footer/card-footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-footer/card-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: CardFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooterComponent", function() { return CardFooterComponent; });
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

var CardFooterComponent = /** @class */ (function () {
    function CardFooterComponent() {
    }
    CardFooterComponent.prototype.ngOnInit = function () {
    };
    CardFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-footer',
            template: __webpack_require__(/*! ./card-footer.component.html */ "./src/app/shared/card-footer/card-footer.component.html"),
            styles: [__webpack_require__(/*! ./card-footer.component.scss */ "./src/app/shared/card-footer/card-footer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardFooterComponent);
    return CardFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-header/card-header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-header/card-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/card-header/card-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-header/card-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/card-header/card-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-header/card-header.component.ts ***!
  \*************************************************************/
/*! exports provided: CardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function() { return CardHeaderComponent; });
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

var CardHeaderComponent = /** @class */ (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent.prototype.ngOnInit = function () {
    };
    CardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-header',
            template: __webpack_require__(/*! ./card-header.component.html */ "./src/app/shared/card-header/card-header.component.html"),
            styles: [__webpack_require__(/*! ./card-header.component.scss */ "./src/app/shared/card-header/card-header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardHeaderComponent);
    return CardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "config", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/card/card.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/contact-detail/contact-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/contact-detail/contact-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-detail\" *ngIf='config'>\r\n  <div class=\"contact-detail__content pb-3\">\r\n    <i class=\"fa contact-detail__icon--chat\" [ngClass]='config.iconClass'></i>\r\n    <div class=\"contact-detail__role\">{{config.role}}</div>\r\n    <div class=\"bold\">{{config.name}}</div>\r\n    <div>\r\n      <a href=`mailto:${config.email}`>{{config.emailAddress}}</a>\r\n    </div>\r\n    <div>\r\n      {{config.phoneNumber}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/contact-detail/contact-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/contact-detail/contact-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-detail__content {\n  background: #ffffff;\n  text-align: center;\n  border: 1px solid #dfdfdf;\n  border-top: 0; }\n\n.contact-detail__icon {\n  font-size: smaller;\n  height: 20px;\n  margin-right: 5px; }\n\n.contact-detail__icon--chat {\n    font-size: 85px;\n    color: #e6f8fe;\n    -webkit-text-stroke: 1px #194481; }\n"

/***/ }),

/***/ "./src/app/shared/contact-detail/contact-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/contact-detail/contact-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
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

var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent() {
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactDetailComponent.prototype, "config", void 0);
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/shared/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.scss */ "./src/app/shared/contact-detail/contact-detail.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" *ngIf='config'>\r\n  <div class=\"footer__contact-details\">\r\n    <i class=\"fa\" [ngClass]='config.iconClass'></i>\r\n    <div class=\"bold\">Contact your {{config.role}}</div>\r\n    <div>{{config.firstName}} {{config.lastName}}</div>\r\n    <div>\r\n      <i class=\"fa fa-envelope footer__contact-icon\"></i>\r\n      <a href=`mailto:${config.email}`>{{config.emailAddress}}</a>\r\n    </div>\r\n    <div>\r\n      <i class=\"fa fa-phone footer__contact-icon\"></i>{{config.phoneNumber}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  float: left; }\n  .footer__contact-details {\n    background: #e6f8fe;\n    text-align: center;\n    padding: 12px; }\n  .footer__contact-icon {\n    font-size: smaller;\n    height: 20px; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnChanges = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "config", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/grid.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\">\r\n          {{col}}\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"table__body\">\r\n      <tr *ngFor=\"let item of gridData\" (click)=\"rowClick(item)\">\r\n        <td *ngFor=\"let col of item\" class=\"table-row\">\r\n          <label-value-group [config]='getRowDetails(col)'></label-value-group>\r\n        </td>\r\n        <td>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"btn-group\" dropdown>\r\n              <a id=\"button-config1\" dropdownToggle class=\"kebab-link\" aria-controls=\"dropdown-config1\">\r\n                <i class=\"fa fa-ellipsis-v\"></i>\r\n              </a>\r\n              <ul id=\"dropdown-config1\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-config1\">\r\n                <li role=\"menuitem\">\r\n                  Action\r\n                </li>\r\n                <li role=\"menuitem\">\r\n                  Another action\r\n                </li>\r\n                <li role=\"menuitem\">\r\n                  Something else here\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table__body .table-row {\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/grid/grid.component.ts ***!
  \***********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent.prototype.getRowDetails = function (data) {
        return Object.values(data)[0];
    };
    GridComponent.prototype.rowClick = function (id) {
        // console.log(id)
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "data", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/shared/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/shared/grid/grid.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [{ provide: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"], useValue: { autoClose: false } }]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"double-header\">\r\n      <app-top-nav [config]='config.topNavConfig'></app-top-nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n@media screen and (max-width: 480px) {\n  .double-header {\n    display: none; }\n  .side-nav {\n    display: block; } }\n\nspan.mat-content {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "config", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/label-value-group/label-value-group.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/label-value-group/label-value-group.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]='config.containerClass'>\r\n  <span [ngClass]='config.labelContainerClass'>\r\n    <i class=\"fa\" [ngClass]='config.iconClass' *ngIf='config.iconClass'></i>\r\n    <span [ngClass]='config.labelClass'>{{config.label}}</span>\r\n    <span class=\"badge badge-pill\" *ngIf='config.badgeTitle' [ngClass]='config.badgeClass'>{{config.badgeTitle}}</span>\r\n  </span>\r\n  <span [ngClass]='config.valueClass'>{{config.value}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/label-value-group/label-value-group.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/label-value-group/label-value-group.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/label-value-group/label-value-group.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/label-value-group/label-value-group.component.ts ***!
  \*************************************************************************/
/*! exports provided: LabelValueGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelValueGroupComponent", function() { return LabelValueGroupComponent; });
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

var LabelValueGroupComponent = /** @class */ (function () {
    function LabelValueGroupComponent() {
    }
    LabelValueGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LabelValueGroupComponent.prototype, "config", void 0);
    LabelValueGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'label-value-group',
            template: __webpack_require__(/*! ./label-value-group.component.html */ "./src/app/shared/label-value-group/label-value-group.component.html"),
            styles: [__webpack_require__(/*! ./label-value-group.component.scss */ "./src/app/shared/label-value-group/label-value-group.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LabelValueGroupComponent);
    return LabelValueGroupComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/shared/tabs/tabs.component.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/shared/top-nav/top-nav.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/shared/side-nav/side-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _label_value_group_label_value_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./label-value-group/label-value-group.component */ "./src/app/shared/label-value-group/label-value-group.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-header/card-header.component */ "./src/app/shared/card-header/card-header.component.ts");
/* harmony import */ var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-body/card-body.component */ "./src/app/shared/card-body/card-body.component.ts");
/* harmony import */ var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card-footer/card-footer.component */ "./src/app/shared/card-footer/card-footer.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/shared/grid/grid.component.ts");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tile/tile.component */ "./src/app/shared/tile/tile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/shared/contact-detail/contact-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot()
            ],
            providers: [],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__["TopNavComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__["SideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _label_value_group_label_value_group_component__WEBPACK_IMPORTED_MODULE_9__["LabelValueGroupComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_11__["CardHeaderComponent"],
                _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_12__["CardBodyComponent"],
                _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_13__["CardFooterComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__["GridComponent"],
                _tile_tile_component__WEBPACK_IMPORTED_MODULE_15__["TileComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__["ContactDetailComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__["TopNavComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__["SideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _label_value_group_label_value_group_component__WEBPACK_IMPORTED_MODULE_9__["LabelValueGroupComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_11__["CardHeaderComponent"],
                _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_12__["CardBodyComponent"],
                _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_13__["CardFooterComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__["GridComponent"],
                _tile_tile_component__WEBPACK_IMPORTED_MODULE_15__["TileComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__["ContactDetailComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/side-nav/side-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-nav/side-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\">\r\n  <accordion>\r\n    <accordion-group *ngFor='let item of config' [isOpen]=\"item.id === selectedParentId\">\r\n      <div accordion-heading class=\"clearfix\">\r\n        <div class=\"row mb-0 side-nav__tab pl-3\">\r\n          <div class=\"col-sm-1 no-padding-left\">\r\n            <i class=\"fa fa-chevron-right collapsible-icon float-left pull-left\"></i>\r\n          </div> \r\n          <div class=\"col-sm-8 side-nav__heading\">\r\n            <div (click)='item.children.length === 1 ? setSelectedId(item.id, item.children[0].id, item.type): false'>\r\n              {{item.label}}\r\n            </div>\r\n            <span class=\"role\" *ngIf=\"item.subHeading\">{{item.subHeading}}</span>\r\n          </div>\r\n          <div class=\"col-sm-3 no-padding-left side-nav__status\">\r\n              <i *ngIf = 'item.status === status.completed'\r\n                [ngClass]=\"{'status-icon--completed fa-check': item.status === status.completed,\r\n                'status-icon--inprogress fa-circle': item.status === status.inProgress}\"\r\n                class=\"fa status-icon float-right pull-right\"></i>\r\n                <div \r\n                  *ngIf = 'item.status === status.inProgress'class=\"status-container\">\r\n                  <span class=\"status-text\">Required</span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"list-group\" *ngIf = 'item.children.length > 1'>\r\n        <li class=\"list-group-item list-item d-flex justify-content-between align-items-center\" *ngFor='let child of item.children' \r\n        [ngClass]=\"{'active': item.id ===selectedParentId && child.id === selectedChildId && item.children.length > 1 }\"\r\n        (click) = 'setSelectedId(item.id, child.id, child.type)'>\r\n          <a class='child-link' routerLink=\"['/workflow/',item.id]\"> {{child.label}}</a>\r\n          <i *ngIf= 'child.status === status.completed'\r\n            [ngClass]=\"{'status-icon--completed fa-check': child.status === status.completed}\"\r\n              class=\"fa status-icon float-right pull-right\"></i>\r\n              <div \r\n                  *ngIf = 'item.status === status.inProgress'class=\"status-container\">\r\n                  <span class=\"status-text\">Required</span>\r\n              </div>\r\n        </li>\r\n      </ul>\r\n    </accordion-group>\r\n  </accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/side-nav/side-nav.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-nav/side-nav.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav {\n  border: 1px solid #eeeeee; }\n  .side-nav .status-container {\n    background: orange;\n    border: solid 1px orange;\n    position: relative;\n    display: block;\n    line-height: 20px;\n    height: 22px;\n    width: 100px;\n    margin-left: 6px; }\n  .side-nav .status-container .status-text {\n      padding-left: 10px;\n      font-size: 14px;\n      font-weight: 500;\n      color: white; }\n  .side-nav .status-container:before {\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      border: 10px solid orange;\n      border-color: transparent transparent transparent orange;\n      top: 0px; }\n  .side-nav .status-container:after {\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      border: 9px solid white;\n      border-color: transparent transparent transparent white;\n      top: 1px;\n      left: -1px; }\n  .side-nav .collapsible-icon {\n    -webkit-text-stroke: 2px white; }\n  .side-nav .status-icon {\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top: 50%;\n    right: 20%; }\n  .side-nav .status-icon--inprogress {\n      color: orange; }\n  .side-nav .status-icon--completed {\n      color: #1568a9;\n      -webkit-text-stroke: 1px white; }\n  .side-nav__heading {\n    line-height: 100%; }\n  .side-nav .role {\n    font-size: 0.7rem;\n    color: darkgrey; }\n  .side-nav .card {\n    border: 0; }\n  .side-nav .card-header {\n    background-color: white;\n    cursor: pointer;\n    min-height: 65px;\n    max-height: 65px; }\n  .side-nav .card-body {\n    padding: 0; }\n  .side-nav .list-item {\n    padding-left: 18%;\n    padding-right: 0;\n    cursor: pointer;\n    min-height: 65px;\n    border: 0;\n    background: #fafafa;\n    border: 1px solid #e5e5e5; }\n  .side-nav .list-item .status-container {\n      width: 76px; }\n  .side-nav .list-item .status-container:after {\n      border: 9px solid #fafafa;\n      border-color: transparent transparent transparent #fafafa; }\n  .side-nav .list-item:hover {\n      background: #e6f8fe; }\n  .side-nav .list-item:hover .collapsible-icon {\n        -webkit-text-stroke: 1px #e6f8fe; }\n  .side-nav .list-item:hover .status-container:after {\n        border: 9px solid #e6f8fe;\n        border-color: transparent transparent transparent #e6f8fe; }\n  .side-nav .list-item.active {\n      padding-left: 17%;\n      background: #e6f8fe;\n      color: black;\n      font-weight: bold;\n      border-left: 5px solid #005AA1; }\n  .side-nav .list-item.active a {\n        font-weight: bold; }\n  .side-nav .list-item.active i.status-icon--completed {\n        -webkit-text-stroke: 1px #e6f8fe; }\n  .side-nav .list-item.active .status-container {\n        width: 76px; }\n  .side-nav .list-item.active .status-container .status-text {\n          font-weight: 500; }\n  .side-nav .list-item.active .status-container:after {\n        border: 9px solid #e6f8fe;\n        border-color: transparent transparent transparent #e6f8fe; }\n  .side-nav .list-item .status-icon {\n      position: absolute;\n      right: 6%; }\n  .child-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n  .panel-open .collapsible-icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n  .panel-open .side-nav__status .status-icon--completed {\n  display: none; }\n  .panel-open .side-nav__status .status-container {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/shared/side-nav/side-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-nav/side-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_constants_application_request_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constants/application-request.constants */ "./src/app/core/constants/application-request.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.oneAtATime = true;
        this.actions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.status = _core_constants_application_request_constants__WEBPACK_IMPORTED_MODULE_1__["TASK_STATUSES"];
    };
    SideNavComponent.prototype.setSelectedId = function (parentId, childId, type) {
        this.selectedParentId = parentId;
        this.selectedChildId = childId;
        this.actions.emit({ parentId: parentId, childId: childId, type: type });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "selectedParentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "selectedChildId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "actions", void 0);
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/shared/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/shared/side-nav/side-nav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/tabs/tabs.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\r\n    <span *ngIf=\"config.iconClass\">\r\n        <i class=\"fa nav--icon\" [ngClass]=\"config.iconClass\"></i>\r\n    </span>\r\n    <button *ngIf=\"config.title\" class=\"btn btn-link\">\r\n        {{config.title}}\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/tabs/tabs.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs .example-icon {\n  padding: 0 14px; }\n\n.tabs .example-spacer {\n  flex: 1 1 auto; }\n\n.tabs .nav--icon {\n  margin: 0 20px 0 20px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/shared/tabs/tabs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.ts ***!
  \***********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "config", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/shared/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/shared/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/shared/tile/tile.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/tile/tile.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile\">\r\n  <div class=\" tile_content row\">\r\n    <div class=\"col-md-9 m-0 p-0\">\r\n      <p class=\"bold\">\r\n        {{config.heading}}\r\n      </p>\r\n      <p>\r\n        <span>{{config.subHeading}}</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"col-md-3 tile_icon-container\">\r\n      <i class=\"fa tile_icon\" aria-hidden=\"true\"\r\n      [ngClass]='config.iconClass'></i>\r\n      <span class=\"col-md-3 tile_badge-class\" *ngIf='config.badgeText'>{{config.badgeText}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/tile/tile.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/tile/tile.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile_content {\n  width: 100%;\n  background: white;\n  border: 1px solid #dacdcd;\n  outline: none;\n  padding: 6px;\n  text-align: left;\n  margin: 0;\n  font-size: 14px; }\n\n.tile_icon-container {\n  text-align: center;\n  padding: 0px; }\n\n.tile_icon-container .tile_icon {\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top: 50%; }\n\n.tile_badge-class {\n  border: 1px solid;\n  border-radius: 10px;\n  text-align: center; }\n\n.tile p {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/shared/tile/tile.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/tile/tile.component.ts ***!
  \***********************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
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

var TileComponent = /** @class */ (function () {
    function TileComponent() {
    }
    TileComponent.prototype.ngOnInit = function () {
    };
    TileComponent.prototype.getIconColor = function () {
        if (this.config && this.config.status === 'completed') {
            return 'green';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TileComponent.prototype, "config", void 0);
    TileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tile',
            template: __webpack_require__(/*! ./tile.component.html */ "./src/app/shared/tile/tile.component.html"),
            styles: [__webpack_require__(/*! ./tile.component.scss */ "./src/app/shared/tile/tile.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], TileComponent);
    return TileComponent;
}());



/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-nav\">\r\n  <nav class=\"navbar navbar-dark navbar--primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"/assets/image/Citi.png\" height=\"45\" class=\"d-inline-block align-top\" alt=\"\">\r\n  </a>\r\n    <span class=\"example-spacer\"></span>\r\n    <app-tabs *ngFor='let tabs of config' [config]='tabs'></app-tabs>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-nav .example-icon {\n  padding: 0 14px; }\n\n.top-nav .example-spacer {\n  flex: 1 1 auto; }\n\n.top-nav .navbar--primary {\n  background: #0d4061; }\n\n.top-nav .navbar-brand {\n  color: white !important; }\n\n.top-nav .mat-icon {\n  cursor: pointer; }\n\n.top-nav .btn-link {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
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

var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent.prototype.toggleSideNav = function () {
        this.sideNavOpen = !this.sideNavOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNavComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNavComponent.prototype, "sideNavOpen", void 0);
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/shared/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/shared/top-nav/top-nav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/application.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/actions/application.actions.ts ***!
  \******************************************************/
/*! exports provided: ActionTypes, GetApplicationRequest, GetApplicationRequestSuccess, GetApplicationRequestFailure, ClearApplicationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationRequest", function() { return GetApplicationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationRequestSuccess", function() { return GetApplicationRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationRequestFailure", function() { return GetApplicationRequestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearApplicationRequest", function() { return ClearApplicationRequest; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_APPLICATION_REQUEST"] = "[App State] Get Application Request";
    ActionTypes["GET_APPLICATION_REQUEST_SUCCESS"] = "[App State] Get Application Request Success";
    ActionTypes["GET_APPLICATION_REQUEST_FAIL"] = "[App State] Get Application Request Failure";
    ActionTypes["CLEAR_APPLICATION_REQUEST"] = "[App State] Clear Application Request";
    // SET_APPLICATION_REQUEST_TASK = '[App State] Select Application request task',
    // BUILD_NAVIGATION_CONFIG = '[Some State] Build Navigation Config',
    // SELECT_NAVIGATION_ITEM = '[Some State] Select Navigation Item',
})(ActionTypes || (ActionTypes = {}));
var GetApplicationRequest = /** @class */ (function () {
    function GetApplicationRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST;
    }
    return GetApplicationRequest;
}());

var GetApplicationRequestSuccess = /** @class */ (function () {
    function GetApplicationRequestSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_SUCCESS;
    }
    return GetApplicationRequestSuccess;
}());

var GetApplicationRequestFailure = /** @class */ (function () {
    function GetApplicationRequestFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_FAIL;
    }
    return GetApplicationRequestFailure;
}());

var ClearApplicationRequest = /** @class */ (function () {
    function ClearApplicationRequest() {
        this.type = ActionTypes.CLEAR_APPLICATION_REQUEST;
    }
    return ClearApplicationRequest;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: questionnaireActions, userActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnaire.actions */ "./src/app/store/actions/questionnaire.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "questionnaireActions", function() { return _questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _user_info_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.actions */ "./src/app/store/actions/user-info.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return _user_info_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/store/actions/questionnaire.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/actions/questionnaire.actions.ts ***!
  \********************************************************/
/*! exports provided: ActionTypes, GetCurrentTask, GetCurrentTaskSuccess, GetCurrentTaskFailure, GetCurrentFormlyConfig, GetCurrentFormlyConfigSuccess, GetCurrentFormlyConfigFailure, GetCurrentFieldChangeDelta, GetCurrentFieldChangeDeltaSuccess, GetCurrentFieldChangeDeltaFailure, MergeDeltaFieldChangeAndCurrentTask, MergeDeltaFieldChangeAndCurrentTaskSuccess, MergeDeltaFieldChangeAndCurrentTaskFailure, UpdateCurrentTask, SetQuestionnaireErrors, DeleteQuestionnaireErrorByQuestionId, ResetQuestionnaireState, GetCurrentQuestionnaireFormlyConfig, GetCurrentQuestionnaireFormlyConfigSuccess, GetCurrentQuestionnaireFormlyConfigFailure, SetCurrentQuestionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentTask", function() { return GetCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentTaskSuccess", function() { return GetCurrentTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentTaskFailure", function() { return GetCurrentTaskFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFormlyConfig", function() { return GetCurrentFormlyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFormlyConfigSuccess", function() { return GetCurrentFormlyConfigSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFormlyConfigFailure", function() { return GetCurrentFormlyConfigFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFieldChangeDelta", function() { return GetCurrentFieldChangeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFieldChangeDeltaSuccess", function() { return GetCurrentFieldChangeDeltaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentFieldChangeDeltaFailure", function() { return GetCurrentFieldChangeDeltaFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeDeltaFieldChangeAndCurrentTask", function() { return MergeDeltaFieldChangeAndCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeDeltaFieldChangeAndCurrentTaskSuccess", function() { return MergeDeltaFieldChangeAndCurrentTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeDeltaFieldChangeAndCurrentTaskFailure", function() { return MergeDeltaFieldChangeAndCurrentTaskFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCurrentTask", function() { return UpdateCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetQuestionnaireErrors", function() { return SetQuestionnaireErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuestionnaireErrorByQuestionId", function() { return DeleteQuestionnaireErrorByQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetQuestionnaireState", function() { return ResetQuestionnaireState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentQuestionnaireFormlyConfig", function() { return GetCurrentQuestionnaireFormlyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentQuestionnaireFormlyConfigSuccess", function() { return GetCurrentQuestionnaireFormlyConfigSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentQuestionnaireFormlyConfigFailure", function() { return GetCurrentQuestionnaireFormlyConfigFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentQuestionId", function() { return SetCurrentQuestionId; });
var ActionTypes;
(function (ActionTypes) {
    /// Current Task Actions
    ActionTypes["GET_CURRENT_TASK"] = "[App State] Get Current Task";
    ActionTypes["GET_CURRENT_TASK_SUCCESS"] = "[App State] Get Current Task Success";
    ActionTypes["GET_CURRENT_TASK_FAIL"] = "[App State] Get Current Task Fail";
    ///Formly Parser Actions
    ///Todo: Remove this  
    ActionTypes["GET_CURRENT_FORMLY_CONFIG"] = "[App State] Get Current formly config";
    ActionTypes["GET_CURRENT_FORMLY_CONFIG_SUCCESS"] = "[App State] Get Current formly config Success";
    ActionTypes["GET_CURRENT_FORMLY_CONFIG_FAIL"] = "[App State] Get Current formly config Failure";
    ///Delta Field Change Actions
    ActionTypes["GET_CURRENT_FIELD_CHANGE_DELTA"] = "[App State] Get Current Field Change Trigger";
    ActionTypes["GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS"] = "[App State] Get Current Field Change Trigger Success";
    ActionTypes["GET_CURRENT_FIELD_CHANGE_DELTA_FAIL"] = "[App State] Get Current Field Change Trigger Failure";
    ///Merge Delta Field Change and Current Task
    ActionTypes["MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK"] = "[App State] Merge Field Change Delta And Current Task";
    ActionTypes["MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_SUCCESS"] = "[App State] Merge Field Change Delta And Current Task Success";
    ActionTypes["MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_FAIL"] = "[App State] Merge Field Change Delta And Current Task Failure";
    ///Update Current Task
    ActionTypes["UPDATE_CURRENT_TASK"] = "[App State] Update Current Task";
    ///QuestionnaireErrors list
    ActionTypes["SET_QUESTIONNAIRE_ERRORS"] = "[App State] Set Current Questionnaire Errors List";
    ActionTypes["DELETE_QUESTIONNAIRE_ERRORS_BY_QUESTION_ID"] = "[App State] Delete Questionnaire Error From  Questionnaire Errors List By Questionnaire Id ";
    ///Reset Questionnaire State
    ActionTypes["RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE"] = "[App State] Reset Questionnaire State To Intial State";
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    ///Formly Parser Actions
    ActionTypes["GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG"] = "[App State] Get Current Questionnaire formly config";
    ActionTypes["GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS"] = "[App State] Get Current Questionnaire formly config Success";
    ActionTypes["GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL"] = "[App State] Get Current  Questionnaire formly config Failure";
    ///Set Current Question Id
    ActionTypes["SET_CURRENT_QUESTION_ID"] = "[App State] Set The Current Question Id";
})(ActionTypes || (ActionTypes = {}));
var GetCurrentTask = /** @class */ (function () {
    function GetCurrentTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_TASK;
        this.payload = payload;
    }
    return GetCurrentTask;
}());

var GetCurrentTaskSuccess = /** @class */ (function () {
    function GetCurrentTaskSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_TASK_SUCCESS;
        this.payload = payload;
    }
    return GetCurrentTaskSuccess;
}());

var GetCurrentTaskFailure = /** @class */ (function () {
    function GetCurrentTaskFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_TASK_FAIL;
        this.payload = payload;
    }
    return GetCurrentTaskFailure;
}());

var GetCurrentFormlyConfig = /** @class */ (function () {
    function GetCurrentFormlyConfig(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FORMLY_CONFIG;
        this.payload = payload;
    }
    return GetCurrentFormlyConfig;
}());

var GetCurrentFormlyConfigSuccess = /** @class */ (function () {
    function GetCurrentFormlyConfigSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FORMLY_CONFIG_SUCCESS;
        this.payload = payload;
    }
    return GetCurrentFormlyConfigSuccess;
}());

var GetCurrentFormlyConfigFailure = /** @class */ (function () {
    function GetCurrentFormlyConfigFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FORMLY_CONFIG_FAIL;
        this.payload = payload;
    }
    return GetCurrentFormlyConfigFailure;
}());

var GetCurrentFieldChangeDelta = /** @class */ (function () {
    function GetCurrentFieldChangeDelta(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA;
        this.payload = payload;
    }
    return GetCurrentFieldChangeDelta;
}());

var GetCurrentFieldChangeDeltaSuccess = /** @class */ (function () {
    function GetCurrentFieldChangeDeltaSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS;
        this.payload = payload;
    }
    return GetCurrentFieldChangeDeltaSuccess;
}());

var GetCurrentFieldChangeDeltaFailure = /** @class */ (function () {
    function GetCurrentFieldChangeDeltaFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_FAIL;
        this.payload = payload;
    }
    return GetCurrentFieldChangeDeltaFailure;
}());

var MergeDeltaFieldChangeAndCurrentTask = /** @class */ (function () {
    function MergeDeltaFieldChangeAndCurrentTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK;
        this.payload = payload;
    }
    return MergeDeltaFieldChangeAndCurrentTask;
}());

var MergeDeltaFieldChangeAndCurrentTaskSuccess = /** @class */ (function () {
    function MergeDeltaFieldChangeAndCurrentTaskSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_SUCCESS;
        this.payload = payload;
    }
    return MergeDeltaFieldChangeAndCurrentTaskSuccess;
}());

var MergeDeltaFieldChangeAndCurrentTaskFailure = /** @class */ (function () {
    function MergeDeltaFieldChangeAndCurrentTaskFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_FAIL;
        this.payload = payload;
    }
    return MergeDeltaFieldChangeAndCurrentTaskFailure;
}());

var UpdateCurrentTask = /** @class */ (function () {
    function UpdateCurrentTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_CURRENT_TASK;
        this.payload = payload;
    }
    return UpdateCurrentTask;
}());

var SetQuestionnaireErrors = /** @class */ (function () {
    function SetQuestionnaireErrors(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_QUESTIONNAIRE_ERRORS;
        this.payload = payload;
    }
    return SetQuestionnaireErrors;
}());

var DeleteQuestionnaireErrorByQuestionId = /** @class */ (function () {
    function DeleteQuestionnaireErrorByQuestionId(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_QUESTIONNAIRE_ERRORS_BY_QUESTION_ID;
        this.payload = payload;
    }
    return DeleteQuestionnaireErrorByQuestionId;
}());

var ResetQuestionnaireState = /** @class */ (function () {
    function ResetQuestionnaireState() {
        this.type = ActionTypes.RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE;
    }
    return ResetQuestionnaireState;
}());

////////////////////////////////////////////////////////////////////////////////////
var GetCurrentQuestionnaireFormlyConfig = /** @class */ (function () {
    function GetCurrentQuestionnaireFormlyConfig(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG;
        this.payload = payload;
    }
    return GetCurrentQuestionnaireFormlyConfig;
}());

var GetCurrentQuestionnaireFormlyConfigSuccess = /** @class */ (function () {
    function GetCurrentQuestionnaireFormlyConfigSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS;
        this.payload = payload;
    }
    return GetCurrentQuestionnaireFormlyConfigSuccess;
}());

var GetCurrentQuestionnaireFormlyConfigFailure = /** @class */ (function () {
    function GetCurrentQuestionnaireFormlyConfigFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL;
        this.payload = payload;
    }
    return GetCurrentQuestionnaireFormlyConfigFailure;
}());

var SetCurrentQuestionId = /** @class */ (function () {
    function SetCurrentQuestionId(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_CURRENT_QUESTION_ID;
        this.payload = payload;
    }
    return SetCurrentQuestionId;
}());



/***/ }),

/***/ "./src/app/store/actions/router.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/router.actions.ts ***!
  \*************************************************/
/*! exports provided: ActionTypes, RouterGo, RouterBack, RouterForward, RouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGo", function() { return RouterGo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterBack", function() { return RouterBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterForward", function() { return RouterForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteChange", function() { return RouteChange; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ROUTER_GO"] = "[Router] Go";
    ActionTypes["ROUTER_BACK"] = "[Router] Back";
    ActionTypes["ROUTER_FORWARD"] = "[Router] Forward";
    ActionTypes["ROUTE_CHANGE"] = "[Router] Route Change";
    ActionTypes["CLEAR_ACTIVE_APPLICATION"] = "[App State] Clear Active Application from List";
    ActionTypes["SORT_APPLICATIONS"] = "[App State] Sort Applications";
    ActionTypes["APPLICATIONS_SORT_SUCCESS"] = "[App State] Applications Sort Success";
})(ActionTypes || (ActionTypes = {}));
var RouterGo = /** @class */ (function () {
    function RouterGo(payload) {
        this.payload = payload;
        this.type = ActionTypes.ROUTER_GO;
    }
    return RouterGo;
}());

var RouterBack = /** @class */ (function () {
    function RouterBack() {
        this.type = ActionTypes.ROUTER_BACK;
    }
    return RouterBack;
}());

var RouterForward = /** @class */ (function () {
    function RouterForward() {
        this.type = ActionTypes.ROUTER_FORWARD;
    }
    return RouterForward;
}());

var RouteChange = /** @class */ (function () {
    function RouteChange(payload) {
        this.payload = payload;
        this.type = ActionTypes.ROUTE_CHANGE;
    }
    return RouteChange;
}());



/***/ }),

/***/ "./src/app/store/actions/user-info.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/store/actions/user-info.actions.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes, GetUser, GetUserSuccess, GetUserFailure, GetUserContactPersonSuccess, GetUserContactPerson, GetUserContactPersonFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function() { return GetUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFailure", function() { return GetUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserContactPersonSuccess", function() { return GetUserContactPersonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserContactPerson", function() { return GetUserContactPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserContactPersonFailure", function() { return GetUserContactPersonFailure; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_USER"] = "[userFeature]  Get User";
    ActionTypes["GET_USER_SUCCESS"] = "[userFeature]  Get User Success";
    ActionTypes["GET_USER_FAIL"] = "[userFeature]  Get User Failure";
    ActionTypes["GET_USER_CONTACT_PERSON"] = "[userFeature] Get User Contact Person";
    ActionTypes["GET_USER_CONTACT_PERSON_SUCCESS"] = "[userFeature] Get User Contact Person Success";
    ActionTypes["GET_USER_CONTACT_PERSON_FAILURE"] = "[userFeature] Get User Contact Person Failure";
})(ActionTypes || (ActionTypes = {}));
var GetUser = /** @class */ (function () {
    function GetUser() {
        this.type = ActionTypes.GET_USER;
    }
    return GetUser;
}());

var GetUserSuccess = /** @class */ (function () {
    function GetUserSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_SUCCESS;
        this.payload = payload;
    }
    return GetUserSuccess;
}());

var GetUserFailure = /** @class */ (function () {
    function GetUserFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_FAIL;
        this.payload = payload;
    }
    return GetUserFailure;
}());

var GetUserContactPersonSuccess = /** @class */ (function () {
    function GetUserContactPersonSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_CONTACT_PERSON_SUCCESS;
        this.payload = payload;
    }
    return GetUserContactPersonSuccess;
}());

var GetUserContactPerson = /** @class */ (function () {
    function GetUserContactPerson() {
        this.type = ActionTypes.GET_USER_CONTACT_PERSON;
    }
    return GetUserContactPerson;
}());

var GetUserContactPersonFailure = /** @class */ (function () {
    function GetUserContactPersonFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_CONTACT_PERSON_FAILURE;
        this.payload = payload;
    }
    return GetUserContactPersonFailure;
}());



/***/ }),

/***/ "./src/app/store/actions/workflows.action.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/workflows.action.ts ***!
  \***************************************************/
/*! exports provided: ActionTypes, GetApplicationWorkflows, GetApplicationWorkflowsSuccess, GetApplicationWorkflowsFailure, DeterminePendingTaskOfApplication, GetApplicationTask, GetApplicationTaskSuccess, GetApplicationTaskFailure, SetActiveTask, SaveActiveTaskAndExit, SaveActiveTaskAndNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationWorkflows", function() { return GetApplicationWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationWorkflowsSuccess", function() { return GetApplicationWorkflowsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationWorkflowsFailure", function() { return GetApplicationWorkflowsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminePendingTaskOfApplication", function() { return DeterminePendingTaskOfApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationTask", function() { return GetApplicationTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationTaskSuccess", function() { return GetApplicationTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApplicationTaskFailure", function() { return GetApplicationTaskFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveTask", function() { return SetActiveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveActiveTaskAndExit", function() { return SaveActiveTaskAndExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveActiveTaskAndNext", function() { return SaveActiveTaskAndNext; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_APPLICATION_REQUEST_WORKFLOWS"] = "[App State] Get Application Request Workflows";
    ActionTypes["GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS"] = "[App State] Get Application Request Workflows Success";
    ActionTypes["GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE"] = "[App State] Get Application Request Workflows Failure";
    ActionTypes["DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST"] = "[App State] Determine pending task of application request";
    ActionTypes["GET_APPLICATION_REQUEST_TASK"] = "[App State] Get Application request task";
    ActionTypes["GET_APPLICATION_REQUEST_TASK_SUCCESS"] = "[App State] Get Application request task success";
    ActionTypes["GET_APPLICATION_REQUEST_TASK_FAILURE"] = "[App State] Get Application request task failure";
    ActionTypes["SET_ACTIVE_TASK"] = "[App State] Set Active Task";
    ActionTypes["SET_APPLICATION_REQUEST_ACTIVE_TASK"] = "[App State] Select Application Request Active task";
    // BUILD_NAVIGATION_CONFIG = '[Some State] Build Navigation Config',
    // SELECT_NAVIGATION_ITEM = '[Some State] Select Navigation Item',
    // TODO: review the names
    ActionTypes["SAVE_EXIT_REQUEST_ACTIVE_TASK"] = "[App State] Save Application Request Task And Exit";
    ActionTypes["SAVE_NEXT_REQUEST_ACTIVE_TASK"] = "[App State] Save Application Request Task And Next";
})(ActionTypes || (ActionTypes = {}));
var GetApplicationWorkflows = /** @class */ (function () {
    function GetApplicationWorkflows(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS;
        this.payload = payload;
    }
    return GetApplicationWorkflows;
}());

var GetApplicationWorkflowsSuccess = /** @class */ (function () {
    function GetApplicationWorkflowsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS;
        this.payload = payload;
    }
    return GetApplicationWorkflowsSuccess;
}());

var GetApplicationWorkflowsFailure = /** @class */ (function () {
    function GetApplicationWorkflowsFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE;
        this.payload = payload;
    }
    return GetApplicationWorkflowsFailure;
}());

var DeterminePendingTaskOfApplication = /** @class */ (function () {
    function DeterminePendingTaskOfApplication(payload) {
        this.payload = payload;
        this.type = ActionTypes.DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST;
        this.payload = payload;
    }
    return DeterminePendingTaskOfApplication;
}());

var GetApplicationTask = /** @class */ (function () {
    function GetApplicationTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_TASK;
        this.payload = payload;
    }
    return GetApplicationTask;
}());

var GetApplicationTaskSuccess = /** @class */ (function () {
    function GetApplicationTaskSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_TASK_SUCCESS;
        this.payload = payload;
    }
    return GetApplicationTaskSuccess;
}());

var GetApplicationTaskFailure = /** @class */ (function () {
    function GetApplicationTaskFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_APPLICATION_REQUEST_TASK_FAILURE;
        this.payload = payload;
    }
    return GetApplicationTaskFailure;
}());

var SetActiveTask = /** @class */ (function () {
    function SetActiveTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_ACTIVE_TASK;
        this.payload = payload;
    }
    return SetActiveTask;
}());

var SaveActiveTaskAndExit = /** @class */ (function () {
    function SaveActiveTaskAndExit(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_EXIT_REQUEST_ACTIVE_TASK;
        this.payload = payload;
    }
    return SaveActiveTaskAndExit;
}());

var SaveActiveTaskAndNext = /** @class */ (function () {
    function SaveActiveTaskAndNext(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_NEXT_REQUEST_ACTIVE_TASK;
        this.payload = payload;
    }
    return SaveActiveTaskAndNext;
}());



/***/ }),

/***/ "./src/app/store/app.store.module.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app.store.module.ts ***!
  \*******************************************/
/*! exports provided: REDUCER_TOKEN, getReducers, AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_TOKEN", function() { return REDUCER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReducers", function() { return getReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Registered Reducers');
function getReducers() {
    return _reducers__WEBPACK_IMPORTED_MODULE_2__["rootReducers"];
}
var AppStoreModule = /** @class */ (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(REDUCER_TOKEN),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot(_effects__WEBPACK_IMPORTED_MODULE_6__["effects"]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    name: 'Citi DDO UI',
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
                }) : [],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"]
            ],
            providers: [
                {
                    provide: REDUCER_TOKEN,
                    useFactory: getReducers
                },
                {
                    provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"],
                    useClass: _reducers__WEBPACK_IMPORTED_MODULE_2__["CustomSerializer"]
                }
            ],
        })
    ], AppStoreModule);
    return AppStoreModule;
}());



/***/ }),

/***/ "./src/app/store/effects/application-request.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/effects/application-request.effects.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationRequestEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequestEffects", function() { return ApplicationRequestEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_application_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application-request.service */ "./src/app/core/services/application-request.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_application_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/application.actions */ "./src/app/store/actions/application.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/store/actions/router.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicationRequestEffects = /** @class */ (function () {
    function ApplicationRequestEffects(applicationRequestService, actions$) {
        var _this = this;
        this.applicationRequestService = applicationRequestService;
        this.actions$ = actions$;
        this.loadApplicationRequestEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].ROUTE_CHANGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (routeChangeAction) {
            return routeChangeAction.payload.path === 'applications/:applicationId';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
            var applicationId = action.payload.params.applicationId;
            return new _actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["GetApplicationRequest"](applicationId);
        }));
        this.getApplicationRequestEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].GET_APPLICATION_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.applicationRequestService.getApplicationRequest(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (application) {
                return new _actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["GetApplicationRequestSuccess"](application);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["GetApplicationRequestFailure"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationRequestEffects.prototype, "loadApplicationRequestEffect", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationRequestEffects.prototype, "getApplicationRequestEffect", void 0);
    ApplicationRequestEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_application_request_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationRequestService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ApplicationRequestEffects);
    return ApplicationRequestEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: effects, QuestionnaireEffectsService, UserInfoEffectsService, ApplicationRequestEffects, RouterEffects, ApplicationWorkflowsEffects, TasksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _questionnaire_effects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnaire-effects.service */ "./src/app/store/effects/questionnaire-effects.service.ts");
/* harmony import */ var _application_request_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-request.effects */ "./src/app/store/effects/application-request.effects.ts");
/* harmony import */ var _user_info_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.effects */ "./src/app/store/effects/user-info.effects.ts");
/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.effects */ "./src/app/store/effects/router.effects.ts");
/* harmony import */ var _workflows_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflows.effects */ "./src/app/store/effects/workflows.effects.ts");
/* harmony import */ var _tasks_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.effects */ "./src/app/store/effects/tasks.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireEffectsService", function() { return _questionnaire_effects_service__WEBPACK_IMPORTED_MODULE_0__["QuestionnaireEffectsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoEffectsService", function() { return _user_info_effects__WEBPACK_IMPORTED_MODULE_2__["UserInfoEffectsService"]; });

/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequestEffects", function() { return _application_request_effects__WEBPACK_IMPORTED_MODULE_1__["ApplicationRequestEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_3__["RouterEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationWorkflowsEffects", function() { return _workflows_effects__WEBPACK_IMPORTED_MODULE_4__["ApplicationWorkflowsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksEffects", function() { return _tasks_effects__WEBPACK_IMPORTED_MODULE_5__["TasksEffects"]; });







var effects = [
    _questionnaire_effects_service__WEBPACK_IMPORTED_MODULE_0__["QuestionnaireEffectsService"],
    _application_request_effects__WEBPACK_IMPORTED_MODULE_1__["ApplicationRequestEffects"],
    _user_info_effects__WEBPACK_IMPORTED_MODULE_2__["UserInfoEffectsService"],
    _router_effects__WEBPACK_IMPORTED_MODULE_3__["RouterEffects"],
    _workflows_effects__WEBPACK_IMPORTED_MODULE_4__["ApplicationWorkflowsEffects"],
    _tasks_effects__WEBPACK_IMPORTED_MODULE_5__["TasksEffects"]
];









/***/ }),

/***/ "./src/app/store/effects/questionnaire-effects.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/store/effects/questionnaire-effects.service.ts ***!
  \****************************************************************/
/*! exports provided: QuestionnaireEffectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireEffectsService", function() { return QuestionnaireEffectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/questionnaire.actions */ "./src/app/store/actions/questionnaire.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnaireEffectsService = /** @class */ (function () {
    function QuestionnaireEffectsService(actions$, questionnaireService, ngxFormlyParserService) {
        var _this = this;
        this.actions$ = actions$;
        this.questionnaireService = questionnaireService;
        this.ngxFormlyParserService = ngxFormlyParserService;
        this.getCurrentTask = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_CURRENT_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.questionnaireService.getCurrentTask(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (task) { return (new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentTaskSuccess"](task)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentTaskFailure"](err)); })); }));
        // @Effect() getCurrentQuestionnaireConfig = this.actions$.pipe(
        //   ofType(ActionTypes.GET_CURRENT_FORMLY_CONFIG),
        //   switchMap(
        //     (action: GetCurrentFormlyConfig) => this.ngxFormlyParserService
        //       .getFormlyFieldConfigFromTask(action.payload.task, action.payload.currentQuestionId)
        //       .pipe(
        //         map((formlyConfig) => (new GetCurrentFormlyConfigSuccess(formlyConfig))
        //         ),
        //         catchError(
        //           (err) => of(new GetCurrentTaskFailure(err))
        //         )
        //       )
        //   )
        // )
        this.getCurrentQuestionnaireDelta = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_CURRENT_FIELD_CHANGE_DELTA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.questionnaireService.getFieldChangeDelta(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (currentTask) {
                return (new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentFieldChangeDeltaSuccess"](currentTask));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentFieldChangeDeltaFailure"](err)); }));
        }));
        // @Effect() getMergedCurrentTaskWithDelta = this.actions$.pipe(
        //   ofType(ActionTypes.MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK),
        //   switchMap(
        //     (action: MergeDeltaFieldChangeAndCurrentTask) =>
        //       this.ngxFormlyParserService.mergeFieldChangeDeltaAndCurrentcurrentTask(
        //         action.payload.currentTask,
        //         action.payload.delta,
        //         action.payload.model)
        //         .pipe(
        //           map((mergedCurrentTaskWithDelta) => (new MergeDeltaFieldChangeAndCurrentTaskSuccess(mergedCurrentTaskWithDelta))
        //           ),
        //           catchError(
        //             (err) => of(new MergeDeltaFieldChangeAndCurrentTaskFailure(err))
        //           )
        //         )
        //   )
        // )
        //////////////////////////////////////////////////////////////////////////////////////////
        this.getCurrentQuestionnaireConfig = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.ngxFormlyParserService
            .getFormlyFieldConfigArrayCollectionFromTask(action.payload.task, action.payload.currentQuestionId, action.payload.requestId, action.payload.workflowId, action.payload.taskId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (FormlyFieldConfigArrayCollections) { return (new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentQuestionnaireFormlyConfigSuccess"](FormlyFieldConfigArrayCollections)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_2__["GetCurrentQuestionnaireFormlyConfigFailure"](err)); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], QuestionnaireEffectsService.prototype, "getCurrentTask", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], QuestionnaireEffectsService.prototype, "getCurrentQuestionnaireDelta", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], QuestionnaireEffectsService.prototype, "getCurrentQuestionnaireConfig", void 0);
    QuestionnaireEffectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["NgxFormlyParserService"]])
    ], QuestionnaireEffectsService);
    return QuestionnaireEffectsService;
}());



/***/ }),

/***/ "./src/app/store/effects/router.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/router.effects.ts ***!
  \*************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/store/actions/router.actions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location, store) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.store = store;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])('[Router] Go'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.queryParams, extras = _a.extras;
            return _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])('[Router] Back'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])('[Router] Forward'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.location.forward(); }));
        this.listenToRouter();
    }
    RouterEffects.prototype.listenToRouter = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]; })).subscribe(function (event) {
            return _this.store.dispatch(new _actions_router_actions__WEBPACK_IMPORTED_MODULE_5__["RouteChange"]({
                params: __assign({}, event.snapshot.params),
                path: event.snapshot.routeConfig.path
            }));
        });
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/tasks.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/tasks.effects.ts ***!
  \************************************************/
/*! exports provided: TasksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksEffects", function() { return TasksEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_workflows_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/workflows.action */ "./src/app/store/actions/workflows.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utilities_application_request_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utilities/application-request.utility */ "./src/app/core/utilities/application-request.utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksEffects = /** @class */ (function () {
    function TasksEffects(actions$) {
        this.actions$ = actions$;
        this.setPendingTask = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_workflows_action__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return Object(_core_utilities_application_request_utility__WEBPACK_IMPORTED_MODULE_4__["determinePendingTask"])(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                return new _actions_workflows_action__WEBPACK_IMPORTED_MODULE_2__["SetActiveTask"](data);
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TasksEffects.prototype, "setPendingTask", void 0);
    TasksEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], TasksEffects);
    return TasksEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/user-info.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/store/effects/user-info.effects.ts ***!
  \****************************************************/
/*! exports provided: UserInfoEffectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoEffectsService", function() { return UserInfoEffectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user-info.service */ "./src/app/core/services/user-info.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user-info.actions */ "./src/app/store/actions/user-info.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_models_user_info_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/models/user-info.interface */ "./src/app/core/models/user-info.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserInfoEffectsService = /** @class */ (function () {
    function UserInfoEffectsService(userInfoService, actions$) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.actions$ = actions$;
        this.getUserInfoEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].GET_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.userInfoService.getUserInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userInfo) {
            return new _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserSuccess"](new _core_models_user_info_interface__WEBPACK_IMPORTED_MODULE_6__["UserInfoModel"](userInfo));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserFailure"](err)); })); }));
        this.getUserContactPersonEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].GET_USER_CONTACT_PERSON), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.userInfoService.getUserContactPerson()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contactPerson) {
            return new _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserContactPersonSuccess"](contactPerson);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserContactPersonFailure"](err)); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], UserInfoEffectsService.prototype, "getUserInfoEffect", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], UserInfoEffectsService.prototype, "getUserContactPersonEffect", void 0);
    UserInfoEffectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], UserInfoEffectsService);
    return UserInfoEffectsService;
}());



/***/ }),

/***/ "./src/app/store/effects/workflows.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/store/effects/workflows.effects.ts ***!
  \****************************************************/
/*! exports provided: ApplicationWorkflowsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationWorkflowsEffects", function() { return ApplicationWorkflowsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_application_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application-request.service */ "./src/app/core/services/application-request.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/workflows.action */ "./src/app/store/actions/workflows.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/store/actions/router.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplicationWorkflowsEffects = /** @class */ (function () {
    function ApplicationWorkflowsEffects(applicationRequestService, actions$) {
        var _this = this;
        this.applicationRequestService = applicationRequestService;
        this.actions$ = actions$;
        this.loadApplicationRequestWorkflowsEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].ROUTE_CHANGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (routeChangeAction) {
            return routeChangeAction.payload.path === 'applications/:applicationId';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
            var applicationId = action.payload.params.applicationId;
            return new _actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["GetApplicationWorkflows"](applicationId);
        }));
        this.getApplicationRequestWorkflowsEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].GET_APPLICATION_REQUEST_WORKFLOWS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.applicationRequestService.getApplicationRequestWorkflows(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (workflows) {
                var firstTaskId = '', lastTaskId = '';
                if (workflows && workflows.length > 0) {
                    var lastWorkflowIndex = workflows.length - 1;
                    var lastWorkflow = workflows[lastWorkflowIndex];
                    var tlen = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks.length;
                    var lastTask = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks[tlen - 1];
                    lastTaskId = lastTask && lastTask.id;
                    firstTaskId = workflows[0] &&
                        workflows[0].tasks &&
                        workflows[0].tasks[0] &&
                        workflows[0].tasks[0].id;
                }
                return new _actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["GetApplicationWorkflowsSuccess"]({
                    workflows: workflows,
                    lastTaskId: lastTaskId,
                    firstTaskId: firstTaskId
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["GetApplicationWorkflowsFailure"](err)); }));
        }));
        this.saveAndNextRequestTaskEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].SAVE_NEXT_REQUEST_ACTIVE_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.applicationRequestService
                .saveApplicationRequestTask(action.payload.current)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                var _a = action.payload, workflowId = _a.workflowId, taskId = _a.taskId;
                console.log(response);
                console.log("Task is Saved Redirecting to next task with workflowId " + workflowId + " and taskId " + taskId);
                return new _actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["SetActiveTask"]({
                    workflowId: workflowId,
                    taskId: taskId
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterGo"]({
                path: ['ddo', 'error', __assign({}, error)]
            })); }));
        }));
        this.saveAndExitRequestTaskEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_workflows_action__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].SAVE_EXIT_REQUEST_ACTIVE_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.applicationRequestService
                .saveApplicationRequestTask(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                console.log(response);
                console.log('Task is Saved');
                return new _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterGo"]({
                    path: ['ddo', 'my-applications']
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterGo"]({
                path: ['ddo', 'error', __assign({}, error)]
            })); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationWorkflowsEffects.prototype, "loadApplicationRequestWorkflowsEffect", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationWorkflowsEffects.prototype, "getApplicationRequestWorkflowsEffect", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationWorkflowsEffects.prototype, "saveAndNextRequestTaskEffect", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], ApplicationWorkflowsEffects.prototype, "saveAndExitRequestTaskEffect", void 0);
    ApplicationWorkflowsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_application_request_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationRequestService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ApplicationWorkflowsEffects);
    return ApplicationWorkflowsEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: fromRootActions, fromRootEffects, fromRootReducers, fromRootSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromRootActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromRootEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromRootReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromRootSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/store/reducers/application-request.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/store/reducers/application-request.reducer.ts ***!
  \***************************************************************/
/*! exports provided: InitialState, reducer, getApplicaitonRequestState, getApplicationWorkflowsState, getApplicationWorkflows, getApplication, getApplicationActiveTask, getApplicationPreviousTask, getApplicationNextTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicaitonRequestState", function() { return getApplicaitonRequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationWorkflowsState", function() { return getApplicationWorkflowsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationWorkflows", function() { return getApplicationWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplication", function() { return getApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationActiveTask", function() { return getApplicationActiveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationPreviousTask", function() { return getApplicationPreviousTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationNextTask", function() { return getApplicationNextTask; });
/* harmony import */ var _workflows_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workflows.reducer */ "./src/app/store/reducers/workflows.reducer.ts");
/* harmony import */ var _application_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.reducer */ "./src/app/store/reducers/application.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var InitialState = {
    application: _application_reducer__WEBPACK_IMPORTED_MODULE_1__["InitialState"],
    workflows: _workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["InitialState"],
};
var reducers = {
    application: _application_reducer__WEBPACK_IMPORTED_MODULE_1__["applicationReducer"],
    workflows: _workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])(reducers);
var getApplicaitonRequestState = function (state) { return state.application; };
var getApplicationWorkflowsState = function (state) { return state.workflows; };
//NEED TO DISCUSS: how to set selectors in state tree. Ideally at reducer we should have state selectors
// but combining the reducer at top where will the selectors go?
var getApplicationWorkflows = function (state) { return state.workflows.workflows; };
var getApplication = function (state) { return state.application.application; };
var getApplicationActiveTask = function (state) { return state.workflows.activeTask; };
var getApplicationPreviousTask = function (state) { return state.workflows.previousTask; };
var getApplicationNextTask = function (state) { return state.workflows.nextTask; };


/***/ }),

/***/ "./src/app/store/reducers/application.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/application.reducer.ts ***!
  \*******************************************************/
/*! exports provided: InitialState, applicationReducer, getApplicaiton, getApplicationLoaded, getApplicationLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationReducer", function() { return applicationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicaiton", function() { return getApplicaiton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationLoaded", function() { return getApplicationLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationLoading", function() { return getApplicationLoading; });
/* harmony import */ var _actions_application_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/application.actions */ "./src/app/store/actions/application.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var InitialState = {
    application: {},
    loaded: false,
    loading: false
};
function applicationReducer(state, action) {
    if (state === void 0) { state = InitialState; }
    switch (action.type) {
        case _actions_application_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_APPLICATION_REQUEST:
            return __assign({}, state, { loading: true });
        case _actions_application_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_APPLICATION_REQUEST_SUCCESS:
            return __assign({}, state, { application: action.payload, loaded: true, loading: false });
        default:
            return state;
    }
}
var getApplicaiton = function (state) { return state.application; };
var getApplicationLoaded = function (state) { return state.loaded; };
var getApplicationLoading = function (state) { return state.loading; };


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: rootReducers, userInfoReducer, questionnaireReducer, applicationRequestReducer, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducers", function() { return rootReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _user_info_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.reducer */ "./src/app/store/reducers/user-info.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userInfoReducer", function() { return _user_info_reducer__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _questionnaire_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire.reducer */ "./src/app/store/reducers/questionnaire.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "questionnaireReducer", function() { return _questionnaire_reducer__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _application_request_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-request.reducer */ "./src/app/store/reducers/application-request.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "applicationRequestReducer", function() { return _application_request_reducer__WEBPACK_IMPORTED_MODULE_3__; });




var rootReducers = {
    user: _user_info_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    questionnaire: _questionnaire_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    applicationRequest: _application_request_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};

var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/store/reducers/questionnaire.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/questionnaire.reducer.ts ***!
  \*********************************************************/
/*! exports provided: InitialQuestionnaireState, reducer, getCurrentTask, getCurrentQuestionnaireConfig, getCurrentQuestionnaireDelta, getMergedCurrentTaskWithDelta, getCurrentQuestionId, getCurrentQuestionnaireErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialQuestionnaireState", function() { return InitialQuestionnaireState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTask", function() { return getCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireConfig", function() { return getCurrentQuestionnaireConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireDelta", function() { return getCurrentQuestionnaireDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergedCurrentTaskWithDelta", function() { return getMergedCurrentTaskWithDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionId", function() { return getCurrentQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireErrors", function() { return getCurrentQuestionnaireErrors; });
/* harmony import */ var _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/questionnaire.actions */ "./src/app/store/actions/questionnaire.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var InitialQuestionnaireState = {
    currentTask: null,
    currentQuestionnaireConfig: null,
    currentQuestionnaireDelta: null,
    mergedCurrentTaskWithDelta: null,
    currentQuestionId: null,
    errors: []
};
function reducer(state, action) {
    if (state === void 0) { state = InitialQuestionnaireState; }
    var errorList;
    switch (action.type) {
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_SUCCESS:
            return __assign({}, state, { mergedCurrentTaskWithDelta: action.payload });
        /// Todo : handle error case wit error object
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK_FAIL:
            return __assign({}, state);
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_CURRENT_TASK:
            return __assign({}, state, { currentTask: action.payload });
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_QUESTIONNAIRE_ERRORS:
            if (action.payload) {
                errorList = state.errors.concat(action.payload);
                return __assign({}, state, { errors: errorList });
            }
            else {
                return state;
            }
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DELETE_QUESTIONNAIRE_ERRORS_BY_QUESTION_ID:
            if (action.payload) {
                errorList = state.errors.filter(function (error) {
                    return error.id != action.payload;
                });
                return __assign({}, state, { errors: errorList });
            }
            else {
                return state;
            }
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE:
            return InitialQuestionnaireState;
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_TASK_SUCCESS:
            return __assign({}, state, { currentTask: action.payload });
        /////Todo: set up an error case in state module
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_TASK_FAIL:
            return __assign({}, state);
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS:
            return __assign({}, state, { currentQuestionnaireConfig: action.payload });
        /// Todo : handle error case wit error object
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL:
            return __assign({}, state);
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS:
            if (action.payload) {
                return __assign({}, state, { currentTask: action.payload });
            }
            else {
                return state;
            }
        /// Todo : handle error case wit error object
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CURRENT_FIELD_CHANGE_DELTA_FAIL:
            return __assign({}, state);
        case _actions_questionnaire_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_CURRENT_QUESTION_ID:
            return __assign({}, state, { currentQuestionId: action.payload });
        default:
            return state;
    }
}
var getCurrentTask = function (state) { return state.currentTask; };
var getCurrentQuestionnaireConfig = function (state) { return state.currentQuestionnaireConfig; };
var getCurrentQuestionnaireDelta = function (state) { return state.currentQuestionnaireDelta; };
var getMergedCurrentTaskWithDelta = function (state) { return state.mergedCurrentTaskWithDelta; };
var getCurrentQuestionId = function (state) { return state.currentQuestionId; };
var getCurrentQuestionnaireErrors = function (state) { return state.errors; };
///////////////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./src/app/store/reducers/user-info.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/user-info.reducer.ts ***!
  \*****************************************************/
/*! exports provided: InitialUserInfoState, reducer, getUserPersonalInfo, getUserRole, getUserIsLoggedIn, getUserIsAuthenticated, getUserEntitlements, getUserContactPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialUserInfoState", function() { return InitialUserInfoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPersonalInfo", function() { return getUserPersonalInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return getUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIsLoggedIn", function() { return getUserIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIsAuthenticated", function() { return getUserIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEntitlements", function() { return getUserEntitlements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserContactPerson", function() { return getUserContactPerson; });
/* harmony import */ var _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-info.actions */ "./src/app/store/actions/user-info.actions.ts");
/* harmony import */ var _core_models_personal_info_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/personal-info.interface */ "./src/app/core/models/personal-info.interface.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var InitialUserInfoState = {
    personalInfo: new _core_models_personal_info_interface__WEBPACK_IMPORTED_MODULE_1__["PersonalInfoModel"](null),
    role: '',
    isLoggedIn: false,
    isAuthenticated: null,
    entitlements: [],
    contactPerson: null
};
function reducer(state, action) {
    if (state === void 0) { state = InitialUserInfoState; }
    switch (action.type) {
        case _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_USER_SUCCESS:
            var _a = action.payload, personalInfo = _a.personalInfo, role = _a.role, entitlements = _a.entitlements;
            return __assign({}, state, { personalInfo: personalInfo,
                entitlements: entitlements,
                role: role, isLoggedIn: true, isAuthenticated: true });
        case _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_USER_FAIL:
            return __assign({}, state, { isAuthenticated: false });
        case _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_USER_CONTACT_PERSON_SUCCESS:
            return __assign({}, state, { contactPerson: action.payload });
        default:
            return state;
    }
}
var getUserPersonalInfo = function (state) { return state.personalInfo; };
var getUserRole = function (state) { return state.role; };
var getUserIsLoggedIn = function (state) { return state.isLoggedIn; };
var getUserIsAuthenticated = function (state) { return state.isAuthenticated; };
var getUserEntitlements = function (state) { return state.entitlements; };
var getUserContactPerson = function (state) { return state.contactPerson; };


/***/ }),

/***/ "./src/app/store/reducers/workflows.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/workflows.reducer.ts ***!
  \*****************************************************/
/*! exports provided: InitialState, reducer, getWorkflows, getWorkflowsLoaded, getWorkflowsLoading, getActiveWorkflowTask, getActiveWorkflowTaskId, getPreviousWorkflowTask, getPreviousWorkflowTaskId, getNextWorkflowTask, getNextWorkflowTaskId, getLastTaskId, getFirstTaskId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflows", function() { return getWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowsLoaded", function() { return getWorkflowsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowsLoading", function() { return getWorkflowsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveWorkflowTask", function() { return getActiveWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveWorkflowTaskId", function() { return getActiveWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousWorkflowTask", function() { return getPreviousWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousWorkflowTaskId", function() { return getPreviousWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWorkflowTask", function() { return getNextWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWorkflowTaskId", function() { return getNextWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTaskId", function() { return getLastTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTaskId", function() { return getFirstTaskId; });
/* harmony import */ var _actions_workflows_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/workflows.action */ "./src/app/store/actions/workflows.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var InitialState = {
    workflows: [],
    activeTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
    },
    previousTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
    },
    nextTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
    },
    firstTaskId: '',
    lastTaskId: '',
    loaded: false,
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = InitialState; }
    switch (action.type) {
        case _actions_workflows_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS:
            var _a = action.payload, workflows = _a.workflows, lastTaskId = _a.lastTaskId, firstTaskId = _a.firstTaskId;
            return __assign({}, state, { workflows: workflows,
                lastTaskId: lastTaskId,
                firstTaskId: firstTaskId, loaded: true, loading: false });
        case _actions_workflows_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_ACTIVE_TASK:
            var _b = action.payload, workflowId = _b.workflowId, taskId = _b.taskId;
            if (state.workflows && state.workflows.length > 0) {
                var count1 = 0, taskFound = false, nextWorkflow = { id: '', tasks: [] }, previousWorkflow = { id: '', tasks: [] }, currentWorkflow = { id: '', tasks: [] }, nextTask = { id: '' }, currentTask = { id: '' }, previousTask = { id: '' };
                var workflows_1 = state.workflows;
                while (count1 < workflows_1.length) {
                    nextWorkflow = workflows_1[count1 + 1] || '';
                    currentWorkflow = workflows_1[count1];
                    previousWorkflow = workflows_1[count1 - 1] || '';
                    var tasks = currentWorkflow && currentWorkflow.tasks;
                    if (currentWorkflow.id === workflowId && tasks && tasks.length > 0) {
                        var count2 = 0;
                        while (count2 < tasks.length) {
                            currentTask = tasks[count2];
                            nextTask = tasks[count2 + 1];
                            previousTask = tasks[count2 - 1];
                            if (currentTask.id === taskId) {
                                taskFound = true;
                                if (!nextTask) {
                                    nextTask = nextWorkflow && nextWorkflow.tasks[0];
                                }
                                else {
                                    nextWorkflow = currentWorkflow;
                                }
                                if (!previousTask) {
                                    var len = previousWorkflow &&
                                        previousWorkflow.tasks &&
                                        previousWorkflow.tasks.length;
                                    previousTask = len && previousWorkflow.tasks[len - 1];
                                }
                                else {
                                    previousWorkflow = currentWorkflow;
                                }
                                break;
                            }
                            count2++;
                        }
                    }
                    if (taskFound) {
                        break;
                    }
                    count1++;
                }
                var activeTask = {
                    workflowId: workflowId,
                    task: currentTask
                };
                var nextStateTask = {
                    workflowId: (nextWorkflow && nextWorkflow.id) || '',
                    task: nextTask ||
                        {
                            label: '',
                            description: '',
                            id: '',
                            status: '',
                            type: ''
                        }
                };
                var previousStateTask = {
                    workflowId: (previousWorkflow && previousWorkflow.id) || '',
                    task: previousTask ||
                        {
                            label: '',
                            description: '',
                            id: '',
                            status: '',
                            type: ''
                        }
                };
                // const x = {
                //     ...state,
                //     activeTask,
                //     previousTask: previousStateTask,
                //     nextTask: nextStateTask
                // };
                // console.log(x);
                return __assign({}, state, { activeTask: activeTask, previousTask: previousStateTask, nextTask: nextStateTask });
            }
            break;
        default:
            return state;
    }
}
var getWorkflows = function (state) { return state.workflows; };
var getWorkflowsLoaded = function (state) { return state.loaded; };
var getWorkflowsLoading = function (state) { return state.loading; };
var getActiveWorkflowTask = function (state) { return state.activeTask.task; };
var getActiveWorkflowTaskId = function (state) { return state.activeTask.task.id; };
var getPreviousWorkflowTask = function (state) { return state.previousTask.task; };
var getPreviousWorkflowTaskId = function (state) { return state.previousTask.task.id; };
var getNextWorkflowTask = function (state) { return state.nextTask.task; };
var getNextWorkflowTaskId = function (state) { return state.nextTask.task.id; };
var getLastTaskId = function (state) { return state.lastTaskId; };
var getFirstTaskId = function (state) { return state.firstTaskId; };


/***/ }),

/***/ "./src/app/store/selectors/application-request.selectors.ts":
/*!******************************************************************!*\
  !*** ./src/app/store/selectors/application-request.selectors.ts ***!
  \******************************************************************/
/*! exports provided: getApplicaitonRequestState, getApplicaitonState, getApplicationWorkflowsState, getApplicaiton, getApplicationWorkflows, getApplicationActiveTask, getApplicationPreviousTask, getApplicationNextTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicaitonRequestState", function() { return getApplicaitonRequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicaitonState", function() { return getApplicaitonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationWorkflowsState", function() { return getApplicationWorkflowsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicaiton", function() { return getApplicaiton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationWorkflows", function() { return getApplicationWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationActiveTask", function() { return getApplicationActiveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationPreviousTask", function() { return getApplicationPreviousTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationNextTask", function() { return getApplicationNextTask; });
/* harmony import */ var _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/application-request.reducer */ "./src/app/store/reducers/application-request.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var getApplicaitonRequestState = function (state) { return state.applicationRequest; };
var getApplicaitonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicaitonRequestState"]);
var getApplicationWorkflowsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicationWorkflowsState"]);
var getApplicaiton = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplication"]);
var getApplicationWorkflows = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicationWorkflows"]);
var getApplicationActiveTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicationActiveTask"]);
var getApplicationPreviousTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicationPreviousTask"]);
var getApplicationNextTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getApplicaitonRequestState, _reducers_application_request_reducer__WEBPACK_IMPORTED_MODULE_0__["getApplicationNextTask"]);


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: userSelectors, questionnaireSelectors, applicationRequestSelectors, routerSelectors, workflowsSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_info_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-info.selectors */ "./src/app/store/selectors/user-info.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userSelectors", function() { return _user_info_selectors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _questionnaire_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionnaire.selectors */ "./src/app/store/selectors/questionnaire.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "questionnaireSelectors", function() { return _questionnaire_selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _application_request_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-request.selectors */ "./src/app/store/selectors/application-request.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "applicationRequestSelectors", function() { return _application_request_selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.selectors */ "./src/app/store/selectors/router.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "routerSelectors", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _workflows_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflows.selectors */ "./src/app/store/selectors/workflows.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "workflowsSelectors", function() { return _workflows_selectors__WEBPACK_IMPORTED_MODULE_4__; });








/***/ }),

/***/ "./src/app/store/selectors/questionnaire.selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/store/selectors/questionnaire.selectors.ts ***!
  \************************************************************/
/*! exports provided: getQuestionnaireState, getCurrentTask, getCurrentQuestionnaireConfig, getCurrentQuestionnaireDelta, getMergedCurrentTaskWithDelta, getCurrentQuestionId, getCurrentQuestionnaireErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionnaireState", function() { return getQuestionnaireState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTask", function() { return getCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireConfig", function() { return getCurrentQuestionnaireConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireDelta", function() { return getCurrentQuestionnaireDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergedCurrentTaskWithDelta", function() { return getMergedCurrentTaskWithDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionId", function() { return getCurrentQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentQuestionnaireErrors", function() { return getCurrentQuestionnaireErrors; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var getQuestionnaireState = function (state) { return state.questionnaire; };
var getCurrentTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getCurrentTask);
var getCurrentQuestionnaireConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getCurrentQuestionnaireConfig);
var getCurrentQuestionnaireDelta = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getCurrentQuestionnaireDelta);
var getMergedCurrentTaskWithDelta = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getMergedCurrentTaskWithDelta);
var getCurrentQuestionId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getCurrentQuestionId);
var getCurrentQuestionnaireErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getQuestionnaireState, _reducers__WEBPACK_IMPORTED_MODULE_0__["questionnaireReducer"].getCurrentQuestionnaireErrors);


/***/ }),

/***/ "./src/app/store/selectors/router.selectors.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/selectors/router.selectors.ts ***!
  \*****************************************************/
/*! exports provided: getRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('routerReducer');


/***/ }),

/***/ "./src/app/store/selectors/user-info.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/store/selectors/user-info.selectors.ts ***!
  \********************************************************/
/*! exports provided: getUserState, getUserPersonalInfo, getUserRole, getUserIsLoggedIn, getUserIsAuthenticated, getUserEntitlements, getUserContactPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPersonalInfo", function() { return getUserPersonalInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return getUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIsLoggedIn", function() { return getUserIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIsAuthenticated", function() { return getUserIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEntitlements", function() { return getUserEntitlements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserContactPerson", function() { return getUserContactPerson; });
/* harmony import */ var _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/user-info.reducer */ "./src/app/store/reducers/user-info.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var getUserState = function (state) { return state.user; };
var getUserPersonalInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserPersonalInfo"]);
var getUserRole = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserRole"]);
var getUserIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserIsLoggedIn"]);
var getUserIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserIsAuthenticated"]);
var getUserEntitlements = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserEntitlements"]);
var getUserContactPerson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserContactPerson"]);


/***/ }),

/***/ "./src/app/store/selectors/workflows.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/store/selectors/workflows.selectors.ts ***!
  \********************************************************/
/*! exports provided: getWorkflowsState, getWorkflows, getActiveWorkflowTask, getActiveWorkflowTaskId, getPreviousWorkflowTask, getPreviousWorkflowTaskId, getNextWorkflowTask, getNextWorkflowTaskId, getWorkflowsLoaded, getWorkflowsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowsState", function() { return getWorkflowsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflows", function() { return getWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveWorkflowTask", function() { return getActiveWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveWorkflowTaskId", function() { return getActiveWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousWorkflowTask", function() { return getPreviousWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousWorkflowTaskId", function() { return getPreviousWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWorkflowTask", function() { return getNextWorkflowTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWorkflowTaskId", function() { return getNextWorkflowTaskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowsLoaded", function() { return getWorkflowsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowsLoading", function() { return getWorkflowsLoading; });
/* harmony import */ var _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/workflows.reducer */ "./src/app/store/reducers/workflows.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var getWorkflowsState = function (state) { return state.applicationRequest.workflows; };
var getWorkflows = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getWorkflows"]);
var getActiveWorkflowTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getActiveWorkflowTask"]);
var getActiveWorkflowTaskId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getActiveWorkflowTaskId"]);
var getPreviousWorkflowTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getPreviousWorkflowTask"]);
var getPreviousWorkflowTaskId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getPreviousWorkflowTaskId"]);
var getNextWorkflowTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getNextWorkflowTask"]);
var getNextWorkflowTaskId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getNextWorkflowTaskId"]);
var getWorkflowsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getWorkflowsLoaded"]);
var getWorkflowsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWorkflowsState, _reducers_workflows_reducer__WEBPACK_IMPORTED_MODULE_0__["getWorkflowsLoading"]);


/***/ }),

/***/ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/storybook/formly-address-consumer/formly-address-consumer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h4>Formly Address fields :</h4>\r\n      </div>\r\n      <div class=\"col-sm-8 mt-3\">\r\n        <form class=\"formly-consumer\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n          <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n          </formly-form>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        {{model | json}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/storybook/formly-address-consumer/formly-address-consumer.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/storybook/formly-address-consumer/formly-address-consumer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FormlyAddressConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyAddressConsumerComponent", function() { return FormlyAddressConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_dynamic_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/dynamic-options.service */ "./src/app/core/services/dynamic-options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormlyAddressConsumerComponent = /** @class */ (function () {
    function FormlyAddressConsumerComponent(dynamicOptionsService) {
        this.dynamicOptionsService = dynamicOptionsService;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {
            addresses: [{}] //this is mandatory
        };
        this.options = {};
    }
    FormlyAddressConsumerComponent.prototype.getStateData = function (country) {
        switch (country) {
            case 'India': return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
                {
                    value: 'Maharashtra',
                    label: 'Maharashtra'
                },
                {
                    value: 'Delhi',
                    label: 'Delhi'
                },
                {
                    value: 'Uttar Pradesh',
                    label: 'Uttar Pradesh'
                }
            ]);
            case 'United States of America': return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
                {
                    value: 'Utah',
                    label: 'Utah'
                },
                {
                    value: 'Texas',
                    label: 'Texas'
                }
            ]);
        }
    };
    FormlyAddressConsumerComponent.prototype.getCountryData = function () {
        return this.dynamicOptionsService.getDynamicOptions('allCountry');
    };
    FormlyAddressConsumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields = [
            {
                key: 'addresses',
                type: 'custom-address-fields',
                fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            key: 'addressDescription',
                            className: 'col-sm-12 mt-2',
                            type: 'custom-dropdown',
                            templateOptions: {
                                required: true,
                                label: 'Address Description',
                                options: [
                                    {
                                        label: 'Home Address',
                                        value: 'homeAddress'
                                    },
                                    {
                                        label: 'Legal Address',
                                        value: 'legalAddress'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'legalAndHomeAddressSame',
                            type: 'custom-radio-button',
                            className: 'col-sm-12 mt-2',
                            templateOptions: {
                                required: true,
                                label: "Is your home/legal address the same as the primary account holder's address?",
                                options: [
                                    {
                                        label: 'Yes',
                                        value: true
                                    },
                                    {
                                        label: 'No',
                                        value: false
                                    }
                                ]
                            }
                        },
                        {
                            key: 'address1',
                            type: 'custom-textbox',
                            className: 'col-sm-12 mt-2',
                            templateOptions: {
                                required: true,
                                label: 'Address 1',
                            }
                        },
                        {
                            key: 'address2',
                            type: 'custom-textbox',
                            className: 'col-sm-12 mt-2',
                            templateOptions: {
                                required: true,
                                label: 'Address 2',
                            }
                        },
                        {
                            key: 'city',
                            type: 'custom-textbox',
                            className: 'col-sm-6 mt-2',
                            templateOptions: {
                                required: true,
                                label: 'City',
                            }
                        },
                        {
                            key: 'postalCode',
                            type: 'custom-textbox',
                            className: 'col-sm-6 mt-2',
                            templateOptions: {
                                required: true,
                                label: 'Postal Zip',
                            }
                        },
                        {
                            key: 'state',
                            type: 'custom-dropdown',
                            className: 'col-sm-6 mt-2',
                            templateOptions: {
                                label: 'State',
                                required: true,
                                hideRequiredMarker: true,
                                options: []
                            },
                            lifecycle: {
                                onInit: function (form, field) {
                                    form.get('country').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(form.get('country').value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (country) {
                                        field.formControl.setValue('');
                                        if (country) {
                                            field.templateOptions.options = _this.getStateData(country);
                                        }
                                    })).subscribe();
                                },
                            },
                        },
                        {
                            key: 'country',
                            type: 'custom-dropdown',
                            className: 'col-sm-6 mt-2',
                            templateOptions: {
                                required: true,
                                label: 'Country',
                                options: this.getCountryData(),
                                hideRequiredMarker: true
                            }
                        },
                        {
                            key: 'addressSince',
                            type: 'custom-datepicker',
                            className: 'col-sm-12 mt-2',
                            templateOptions: {
                                label: 'Address Since',
                                required: true
                            }
                        },
                        {
                            key: 'mailingAddress',
                            type: 'custom-radio-button',
                            className: 'col-sm-12 mt-2',
                            templateOptions: {
                                required: true,
                                label: "Would you like to use this address as your mailing address?",
                                options: [
                                    {
                                        label: 'Yes',
                                        value: true
                                    },
                                    {
                                        label: 'No',
                                        value: false
                                    }
                                ]
                            }
                        }
                    ],
                    templateOptions: {
                        btnText: '+ Add a new address',
                        heading: 'Addresses'
                    },
                    recurrent: true
                }
            }
        ];
    };
    FormlyAddressConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formly-address-consumer',
            template: __webpack_require__(/*! ./formly-address-consumer.component.html */ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.html"),
            styles: [__webpack_require__(/*! ./formly-address-consumer.component.scss */ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_dynamic_options_service__WEBPACK_IMPORTED_MODULE_4__["DynamicOptionsService"]])
    ], FormlyAddressConsumerComponent);
    return FormlyAddressConsumerComponent;
}());



/***/ }),

/***/ "./src/app/storybook/formly-consumer/formly-consumer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/storybook/formly-consumer/formly-consumer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\"> \r\n    <div class=\"col-sm-12\">\r\n      <h4>Formly custom fields :</h4>\r\n    </div>\r\n    <div class=\"col-sm-6 mt-3\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n            </formly-form>\r\n      </form> \r\n     \r\n    </div>\r\n   \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/storybook/formly-consumer/formly-consumer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/storybook/formly-consumer/formly-consumer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formly-consumer .form-group {\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.formly-consumer .custom-checkbox {\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.ng-select-dropdown-outer.bottom {\n  top: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-top-color: #e6e6e6;\n  margin-top: 2px;\n  border: 1px solid #bbbbbb;\n  right: -2px; }\n\n.ng-select-dropdown-outer .ng-select-dropdown .ng-option.marked {\n  background-color: #ebf5ff;\n  color: #333; }\n\n.ng-select .ng-arrow-zone .ng-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px; }\n\n.ng-select.opened > .ng-control .ng-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px; }\n\n.ng-select .ng-arrow-zone .ng-arrow {\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative; }\n\n.custom-control-label::before {\n  left: -22px; }\n\n.PaddingLeftZero {\n  padding-left: 0px; }\n\n.PaddingRightZero {\n  padding-right: 0px; }\n\n.nogutter {\n  margin-right: 0px;\n  padding-right: 0px; }\n\n.ng-select-dropdown-outer.bottom {\n  background-color: #fff;\n  right: 0px; }\n"

/***/ }),

/***/ "./src/app/storybook/formly-consumer/formly-consumer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/storybook/formly-consumer/formly-consumer.component.ts ***!
  \************************************************************************/
/*! exports provided: FormlyConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyConsumerComponent", function() { return FormlyConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/debounce */ "./node_modules/rxjs-compat/_esm5/add/operator/debounce.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs/Observable';



// import { debounce } from 'rxjs/internal/operators/debounce';
var FormlyConsumerComponent = /** @class */ (function () {
    function FormlyConsumerComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {
            'Phone': [{}]
        };
        this.options = {};
    }
    FormlyConsumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listData = [
            { label: 'New York', value: 'new-york' },
            { label: 'Illinois', value: 'illinois' },
            { label: 'California', value: 'california' },
            { label: 'Michigan', value: 'michigan' },
            { label: 'Ohio', value: 'ohio' }
        ];
        this.fields = [
            {
                key: 'Phone',
                type: 'custom-phone',
                fieldArray: {
                    fieldGroupClassName: 'row',
                    templateOptions: {
                        btnText: '+ add new phone information',
                    },
                    fieldGroup: [
                        {
                            className: 'col-sm-12',
                            type: 'custom-textbox',
                            key: 'description',
                            templateOptions: {
                                label: 'Phone Description',
                                required: true,
                            },
                        },
                        {
                            type: 'custom-textbox',
                            key: 'countryCode',
                            className: 'col-sm-6',
                            templateOptions: {
                                label: 'Country Code',
                            },
                        },
                        {
                            type: 'custom-textbox',
                            key: 'homePhone',
                            className: 'col-sm-6',
                            templateOptions: {
                                label: 'Home Phone Number',
                            }
                        },
                        {
                            type: 'custom-checkbox',
                            key: 'setAsPrimary',
                            className: 'col-sm-12',
                            templateOptions: {
                                label: 'Use this number as primary contact',
                            },
                        },
                        {
                            type: 'custom-checkbox',
                            key: 'setForBanking',
                            className: 'col-sm-12',
                            templateOptions: {
                                label: 'Use this number for approving banking activity',
                            },
                        }
                    ],
                },
            },
            {
                key: 'text',
                type: 'custom-textbox',
                templateOptions: {
                    label: 'Require text',
                    placeholder: 'Formly is terrific!',
                    required: true
                }
            },
            {
                key: 'text',
                type: 'custom-textbox',
                templateOptions: {
                    label: 'Optional text',
                    placeholder: 'Formly is terrific!'
                }
            },
            {
                key: 'text',
                type: 'custom-textbox',
                templateOptions: {
                    label: 'Optional Text + tooltip',
                    placeholder: 'Formly is terrific!',
                    tooltip: {
                        content: 'Hey this is tooltip',
                        placement: 'right'
                    }
                }
            },
            {
                key: 'text',
                type: 'custom-textbox',
                templateOptions: {
                    label: 'Optional text',
                    placeholder: 'Formly is terrific!'
                }
            },
            {
                key: 'text',
                type: 'custom-textbox',
                templateOptions: {
                    label: 'Optional Text + tooltip',
                    placeholder: 'Formly is terrific!',
                    tooltip: {
                        content: 'Hey this is tooltip',
                        placement: 'right'
                    }
                }
            },
            {
                key: 'requiredCheckBox',
                type: 'custom-checkbox',
                templateOptions: {
                    label: 'Hey there you need to check this box as this is required',
                    required: true,
                }
            },
            {
                key: 'requiredWithNoMarker',
                type: 'custom-checkbox',
                templateOptions: {
                    label: 'Hey there you need to check this box as this is required but i have no required marker ',
                    required: true,
                    hideRequiredMarker: true,
                }
            },
            {
                key: 'OptionalCheckbox',
                type: 'custom-checkbox',
                templateOptions: {
                    label: 'Hey there i am an optional checkbox. But please do not ignore me. ',
                    hideRequiredMarker: true,
                }
            },
            {
                key: 'checkboxWithHelpText',
                type: 'custom-checkbox',
                templateOptions: {
                    label: 'I am a checkbox with little help text ',
                    required: true,
                    hideRequiredMarker: true,
                    tooltip: {
                        content: 'Hey this is tooltip',
                        placement: 'right'
                    }
                }
            },
            {
                key: 'marvel1',
                type: 'custom-dropdown',
                templateOptions: {
                    label: 'Normal Select',
                    options: [
                        { label: 'Iron Man', value: 'iron_man' },
                        { label: 'Captain America', value: 'captain_america' },
                        { label: 'Black Widow', value: 'black_widow' },
                        { label: 'Hulk', value: 'hulk' },
                        { label: 'Captain Marvel', value: 'captain_marvel' }
                    ]
                }
            },
            {
                key: 'radioButtonText',
                type: 'custom-radio-button',
                templateOptions: {
                    label: 'Do you have a U.S. Social Security Number?',
                    options: [
                        { label: 'Yes', value: 'Yes', id: 0 },
                        { label: 'No', value: 'No', id: 1 }
                    ],
                    valueProp: 'value',
                    labelProp: 'label'
                },
            },
            {
                key: 'dateOfBirth',
                type: 'custom-datepicker',
                templateOptions: {
                    label: 'Date of Birth',
                }
            },
            {
                key: 'state',
                type: 'typeahead',
                templateOptions: {
                    placeholder: 'Search for a state:',
                    label: 'Search for a state:',
                    search$: function (term) {
                        console.log('inner search', term);
                        if ((!term || term === '')) {
                            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.listData);
                        }
                        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.listData.filter(function (v) {
                            console.log(v, ':::VData');
                            return v.value.toLowerCase().indexOf(term.toLowerCase()) > -1;
                        }).slice(0, 10));
                    },
                }
            },
            {
                key: 'data',
                type: 'repeatAddressData',
                fieldArray: {
                    fieldGroupClassName: 'row col-12 nogutter',
                    templateOptions: {
                        btnText: 'Add a new address proof',
                        tooltip: {
                            content: 'Hey this is tooltip',
                            placement: 'right'
                        }
                    },
                    fieldGroup: [
                        {
                            key: 'IdDropdown',
                            type: 'custom-dropdown',
                            className: 'col-sm-4 PaddingLeftZero',
                            templateOptions: {
                                label: 'ID Country',
                                options: [
                                    { label: 'Iron Man', value: 'iron_man' },
                                    { label: 'Captain America', value: 'captain_america' },
                                    { label: 'Black Widow', value: 'black_widow' },
                                    { label: 'Hulk', value: 'hulk' },
                                    { label: 'Captain Marvel', value: 'captain_marvel' }
                                ]
                            }
                        },
                        {
                            className: 'col-sm-4',
                            type: 'custom-textbox',
                            key: 'idNum',
                            templateOptions: {
                                label: 'ID Number',
                                required: true,
                            },
                        },
                        {
                            key: 'dateOfBirth',
                            type: 'custom-datepicker',
                            className: 'col-sm-4 PaddingRightZero',
                            templateOptions: {
                                label: 'Date of Birth',
                            }
                        },
                    ],
                },
            }
        ];
    };
    FormlyConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formly-consumer',
            template: __webpack_require__(/*! ./formly-consumer.component.html */ "./src/app/storybook/formly-consumer/formly-consumer.component.html"),
            styles: [__webpack_require__(/*! ./formly-consumer.component.scss */ "./src/app/storybook/formly-consumer/formly-consumer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FormlyConsumerComponent);
    return FormlyConsumerComponent;
}());



/***/ }),

/***/ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Formly Address fields :</h4>\r\n    </div>\r\n    <div class=\"col-sm-8 mt-3\">\r\n      <form class=\"formly-consumer\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n        <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n        </formly-form>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormlyPhoneConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyPhoneConsumerComponent", function() { return FormlyPhoneConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormlyPhoneConsumerComponent = /** @class */ (function () {
    function FormlyPhoneConsumerComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {
            phone: [{}]
        };
        this.options = {};
    }
    FormlyPhoneConsumerComponent.prototype.ngOnInit = function () {
        this.fields = [
            {
                key: 'phone',
                type: 'custom-phone',
                fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-sm-12',
                            type: 'custom-dropdown',
                            key: 'description',
                            templateOptions: {
                                label: 'Phone Description',
                                required: true,
                                options: [
                                    { label: 'Home', value: 'home' },
                                    { label: 'Work', value: 'work' },
                                    { label: 'Phone', value: 'phone' }
                                ]
                            },
                        },
                        {
                            type: 'custom-dropdown',
                            key: 'countryCode',
                            className: 'col-sm-6',
                            templateOptions: {
                                label: 'Country Code',
                                options: this.getCountryCode()
                            },
                        },
                        {
                            type: 'custom-textbox',
                            key: 'homePhone',
                            className: 'col-sm-6',
                            templateOptions: {
                                label: 'Home Phone Number',
                            }
                        },
                        {
                            type: 'custom-checkbox',
                            key: 'setAsPrimary',
                            className: 'col-sm-12',
                            templateOptions: {
                                label: 'Use this number as primary contact',
                            },
                        },
                        {
                            type: 'custom-checkbox',
                            key: 'setForBanking',
                            className: 'col-sm-12',
                            templateOptions: {
                                label: 'Use this number for approving banking activity',
                            },
                        }
                    ],
                    templateOptions: {
                        btnText: '+ Add a new address'
                    },
                    recurrent: true
                }
            }
        ];
    };
    FormlyPhoneConsumerComponent.prototype.getCountryCode = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            {
                label: '+91',
                value: '+91'
            },
            {
                label: '+1',
                value: '+1'
            },
            {
                label: '+111',
                value: '+111'
            },
            {
                label: '+123',
                value: '+123'
            },
            {
                label: '+133',
                value: '+133'
            },
            {
                label: '+144',
                value: '+144'
            },
            {
                label: '+155',
                value: '+155'
            },
        ]);
    };
    FormlyPhoneConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'formly-phone-consumer',
            template: __webpack_require__(/*! ./formly-phone-consumer.component.html */ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.html"),
            styles: [__webpack_require__(/*! ./formly-phone-consumer.component.css */ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormlyPhoneConsumerComponent);
    return FormlyPhoneConsumerComponent;
}());



/***/ }),

/***/ "./src/app/storybook/grid-consumer/grid-consumer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/storybook/grid-consumer/grid-consumer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Application Grid :</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <grid [data]='gridData'></grid>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/storybook/grid-consumer/grid-consumer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/storybook/grid-consumer/grid-consumer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-label {\n  display: block; }\n\n.grid-value {\n  font-size: smaller; }\n"

/***/ }),

/***/ "./src/app/storybook/grid-consumer/grid-consumer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/storybook/grid-consumer/grid-consumer.component.ts ***!
  \********************************************************************/
/*! exports provided: GridConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridConsumerComponent", function() { return GridConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GetApplications } from '../../store/actions/applications.actions';
var GridConsumerComponent = /** @class */ (function () {
    function GridConsumerComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
    }
    GridConsumerComponent.prototype.ngOnInit = function () {
        // this.store.dispatch(new GetApplications());
        // this.store.select(fromRootSelectors.applicationsSelectors.getApplicaitons)
        //   .subscribe((applications: any) => {
        //     this.gridData = [];
        //     this.data = applications.map((details) => new ApplicationGridModel(details));
        //     for (let i = 0; i < this.data.length; i++) {
        //       let x = Object.entries(this.data[i]).map((e) => {
        //         const obj = {};
        //         obj[`${e[0]}`] = e[1];
        //         return obj;
        //       });
        //       this.gridData.push(x);
        //     }
        //   });
    };
    GridConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-consumer',
            template: __webpack_require__(/*! ./grid-consumer.component.html */ "./src/app/storybook/grid-consumer/grid-consumer.component.html"),
            styles: [__webpack_require__(/*! ./grid-consumer.component.scss */ "./src/app/storybook/grid-consumer/grid-consumer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GridConsumerComponent);
    return GridConsumerComponent;
}());



/***/ }),

/***/ "./src/app/storybook/label-value-consumer/label-value-consumer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/storybook/label-value-consumer/label-value-consumer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Label value group:</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <label-value-group [config]='labelValueConfig'></label-value-group>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Label value group with badge:</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <label-value-group [config]='labelValueConfigWithBadge'></label-value-group>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Label with icon:</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <label-value-group [config]='labelValueConfigWithIcon'></label-value-group>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Label value group for form values:</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <label-value-group [config]='labelValueConfigForFormValues'></label-value-group>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Label value group with icon:</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <label-value-group [config]='labelValueWithIcon'></label-value-group>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Kebab with Dropdown</h4>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"btn-group\" dropdown>\r\n        <a id=\"button-config\" dropdownToggle class=\"kebab-link\" aria-controls=\"dropdown-config\">\r\n          <i class=\"fa fa-ellipsis-v\"></i>\r\n        </a>\r\n        <ul id=\"dropdown-config\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-config\">\r\n          <li role=\"menuitem\">\r\n            Action\r\n          </li>\r\n          <li role=\"menuitem\">\r\n            Another action\r\n          </li>\r\n          <li role=\"menuitem\">\r\n            Something else here\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<grid></grid>"

/***/ }),

/***/ "./src/app/storybook/label-value-consumer/label-value-consumer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/storybook/label-value-consumer/label-value-consumer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-with-badge {\n  display: block; }\n\n.icon-align-middle {\n  position: relative;\n  top: 10px; }\n\n.kebab-link i {\n  font-size: 1.5rem; }\n\n.kebab-link i:active, .kebab-link i:hover {\n  color: #4285F4; }\n\n.kebab-dropdown {\n  position: absolute; }\n\n/* Material design for dropdowns */\n\n.dropdown-sm > .dropdown-menu > .dropdown-item {\n  padding: 5px;\n  margin-left: 0; }\n\n.dropdown-menu > .dropdown-item {\n  padding: 1rem;\n  margin-left: 0; }\n\n.dropdown-menu > .dropdown-item:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  color: white;\n  background: #4285F4; }\n"

/***/ }),

/***/ "./src/app/storybook/label-value-consumer/label-value-consumer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/storybook/label-value-consumer/label-value-consumer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LabelValueConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelValueConsumerComponent", function() { return LabelValueConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelValueConsumerComponent = /** @class */ (function () {
    function LabelValueConsumerComponent() {
    }
    LabelValueConsumerComponent.prototype.ngOnInit = function () {
        this.labelValueConfig = {
            label: 'Account Details',
            value: 'Please fill required information for account details',
            labelClass: 'bold'
        };
        this.labelValueConfigWithBadge = {
            label: 'Account Details',
            value: 'Please fill required information for account details',
            labelClass: 'bold',
            labelContainerClass: 'label-with-badge',
            badgeTitle: 'New',
            badgeClass: 'badge-dark'
        };
        this.labelValueConfigWithIcon = {
            label: 'Action Required',
            iconClass: 'fa-exclamation-circle warning',
            labelClass: 'bold'
        };
        this.labelValueConfigForFormValues = {
            label: 'Account Details',
            value: 'Please fill required information for account details',
            labelClass: 'bold',
            labelContainerClass: 'label-with-badge',
        };
        this.labelValueWithIcon = {
            label: 'Action Required',
            iconClass: 'fa-check icon-align-middle',
            labelClass: 'bold pl-2',
            labelContainerClass: 'label-with-badge',
            value: 'Please fill required information',
            valueClass: 'pl-4'
        };
    };
    LabelValueConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label-value-consumer',
            template: __webpack_require__(/*! ./label-value-consumer.component.html */ "./src/app/storybook/label-value-consumer/label-value-consumer.component.html"),
            styles: [__webpack_require__(/*! ./label-value-consumer.component.scss */ "./src/app/storybook/label-value-consumer/label-value-consumer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [{ provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"], useValue: { autoClose: false } }]
        }),
        __metadata("design:paramtypes", [])
    ], LabelValueConsumerComponent);
    return LabelValueConsumerComponent;
}());



/***/ }),

/***/ "./src/app/storybook/storybook-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/storybook/storybook-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StorybookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorybookRoutingModule", function() { return StorybookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _label_value_consumer_label_value_consumer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label-value-consumer/label-value-consumer.component */ "./src/app/storybook/label-value-consumer/label-value-consumer.component.ts");
/* harmony import */ var _tile_consumer_tile_consumer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile-consumer/tile-consumer.component */ "./src/app/storybook/tile-consumer/tile-consumer.component.ts");
/* harmony import */ var _grid_consumer_grid_consumer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-consumer/grid-consumer.component */ "./src/app/storybook/grid-consumer/grid-consumer.component.ts");
/* harmony import */ var _formly_consumer_formly_consumer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formly-consumer/formly-consumer.component */ "./src/app/storybook/formly-consumer/formly-consumer.component.ts");
/* harmony import */ var _formly_address_consumer_formly_address_consumer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formly-address-consumer/formly-address-consumer.component */ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.ts");
/* harmony import */ var _formly_phone_consumer_formly_phone_consumer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formly-phone-consumer/formly-phone-consumer.component */ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var storybookRoutes = [
    {
        path: 'labelgroup',
        component: _label_value_consumer_label_value_consumer_component__WEBPACK_IMPORTED_MODULE_2__["LabelValueConsumerComponent"]
    },
    {
        path: 'tile',
        component: _tile_consumer_tile_consumer_component__WEBPACK_IMPORTED_MODULE_3__["TileConsumerComponent"]
    },
    {
        path: 'grid',
        component: _grid_consumer_grid_consumer_component__WEBPACK_IMPORTED_MODULE_4__["GridConsumerComponent"]
    },
    {
        path: 'formly',
        component: _formly_consumer_formly_consumer_component__WEBPACK_IMPORTED_MODULE_5__["FormlyConsumerComponent"]
    },
    {
        path: 'formly-address',
        component: _formly_address_consumer_formly_address_consumer_component__WEBPACK_IMPORTED_MODULE_6__["FormlyAddressConsumerComponent"]
    },
    {
        path: 'formly-phone',
        component: _formly_phone_consumer_formly_phone_consumer_component__WEBPACK_IMPORTED_MODULE_7__["FormlyPhoneConsumerComponent"]
    }
];
var StorybookRoutingModule = /** @class */ (function () {
    function StorybookRoutingModule() {
    }
    StorybookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(storybookRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StorybookRoutingModule);
    return StorybookRoutingModule;
}());



/***/ }),

/***/ "./src/app/storybook/storybook.module.ts":
/*!***********************************************!*\
  !*** ./src/app/storybook/storybook.module.ts ***!
  \***********************************************/
/*! exports provided: StorybookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorybookModule", function() { return StorybookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _storybook_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storybook-routing.module */ "./src/app/storybook/storybook-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-formly-fields/custom-formly-fields.module */ "./src/app/custom-formly-fields/custom-formly-fields.module.ts");
/* harmony import */ var _label_value_consumer_label_value_consumer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label-value-consumer/label-value-consumer.component */ "./src/app/storybook/label-value-consumer/label-value-consumer.component.ts");
/* harmony import */ var _storybook_storybook_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storybook/storybook.component */ "./src/app/storybook/storybook/storybook.component.ts");
/* harmony import */ var _tile_consumer_tile_consumer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tile-consumer/tile-consumer.component */ "./src/app/storybook/tile-consumer/tile-consumer.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _grid_consumer_grid_consumer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grid-consumer/grid-consumer.component */ "./src/app/storybook/grid-consumer/grid-consumer.component.ts");
/* harmony import */ var _formly_consumer_formly_consumer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formly-consumer/formly-consumer.component */ "./src/app/storybook/formly-consumer/formly-consumer.component.ts");
/* harmony import */ var _formly_address_consumer_formly_address_consumer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formly-address-consumer/formly-address-consumer.component */ "./src/app/storybook/formly-address-consumer/formly-address-consumer.component.ts");
/* harmony import */ var _formly_phone_consumer_formly_phone_consumer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formly-phone-consumer/formly-phone-consumer.component */ "./src/app/storybook/formly-phone-consumer/formly-phone-consumer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var StorybookModule = /** @class */ (function () {
    function StorybookModule() {
    }
    StorybookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _storybook_routing_module__WEBPACK_IMPORTED_MODULE_5__["StorybookRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _custom_formly_fields_custom_formly_fields_module__WEBPACK_IMPORTED_MODULE_7__["CustomFormlyFieldsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forRoot({
                    types: [{ name: 'repeat', component: _formly_consumer_formly_consumer_component__WEBPACK_IMPORTED_MODULE_13__["FormlyConsumerComponent"] }]
                }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                ngx_uploader__WEBPACK_IMPORTED_MODULE_4__["NgxUploaderModule"]
            ],
            exports: [
                ngx_uploader__WEBPACK_IMPORTED_MODULE_4__["NgxUploaderModule"]
            ],
            declarations: [
                _label_value_consumer_label_value_consumer_component__WEBPACK_IMPORTED_MODULE_8__["LabelValueConsumerComponent"],
                _storybook_storybook_component__WEBPACK_IMPORTED_MODULE_9__["StorybookComponent"],
                _tile_consumer_tile_consumer_component__WEBPACK_IMPORTED_MODULE_10__["TileConsumerComponent"],
                _grid_consumer_grid_consumer_component__WEBPACK_IMPORTED_MODULE_12__["GridConsumerComponent"],
                _formly_consumer_formly_consumer_component__WEBPACK_IMPORTED_MODULE_13__["FormlyConsumerComponent"],
                _formly_address_consumer_formly_address_consumer_component__WEBPACK_IMPORTED_MODULE_14__["FormlyAddressConsumerComponent"],
                _formly_phone_consumer_formly_phone_consumer_component__WEBPACK_IMPORTED_MODULE_15__["FormlyPhoneConsumerComponent"]
            ]
        })
    ], StorybookModule);
    return StorybookModule;
}());



/***/ }),

/***/ "./src/app/storybook/storybook/storybook.component.html":
/*!**************************************************************!*\
  !*** ./src/app/storybook/storybook/storybook.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/storybook/storybook/storybook.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/storybook/storybook/storybook.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storybook/storybook/storybook.component.ts":
/*!************************************************************!*\
  !*** ./src/app/storybook/storybook/storybook.component.ts ***!
  \************************************************************/
/*! exports provided: StorybookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorybookComponent", function() { return StorybookComponent; });
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

var StorybookComponent = /** @class */ (function () {
    function StorybookComponent() {
    }
    StorybookComponent.prototype.ngOnInit = function () {
    };
    StorybookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'storybook',
            template: __webpack_require__(/*! ./storybook.component.html */ "./src/app/storybook/storybook/storybook.component.html"),
            styles: [__webpack_require__(/*! ./storybook.component.scss */ "./src/app/storybook/storybook/storybook.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StorybookComponent);
    return StorybookComponent;
}());



/***/ }),

/***/ "./src/app/storybook/tile-consumer/tile-consumer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/storybook/tile-consumer/tile-consumer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Tile</h4>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <tile [config]='tileConfig'></tile>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Tile with status: success</h4>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <tile [config]='tileConfigWithStatus'></tile>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Tile with status: pending</h4>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <tile [config]='tileConfigWithStatusPending'></tile>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h4>Tile with badge</h4>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <tile [config]='tileConfigWithBadge'></tile>\r\n    </div>\r\n  </div>\r\n  <p class=\"divider mt-2\"></p>\r\n</div>"

/***/ }),

/***/ "./src/app/storybook/tile-consumer/tile-consumer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/storybook/tile-consumer/tile-consumer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storybook/tile-consumer/tile-consumer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/storybook/tile-consumer/tile-consumer.component.ts ***!
  \********************************************************************/
/*! exports provided: TileConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileConsumerComponent", function() { return TileConsumerComponent; });
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

var TileConsumerComponent = /** @class */ (function () {
    function TileConsumerComponent() {
    }
    TileConsumerComponent.prototype.ngOnInit = function () {
        this.tileConfig = {
            heading: 'John robbins',
            subHeading: 'Primary'
        };
        this.tileConfigWithStatus = {
            heading: 'John robbins',
            subHeading: 'Primary',
            iconClass: 'fa-circle success'
        };
        this.tileConfigWithStatusPending = {
            heading: 'John robbins',
            subHeading: 'Primary',
            iconClass: 'fa-circle-o warning'
        };
        this.tileConfigWithBadge = {
            heading: 'John robbins',
            subHeading: 'Primary',
            badgeText: 'Optional'
        };
    };
    TileConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tile-consumer',
            template: __webpack_require__(/*! ./tile-consumer.component.html */ "./src/app/storybook/tile-consumer/tile-consumer.component.html"),
            styles: [__webpack_require__(/*! ./tile-consumer.component.scss */ "./src/app/storybook/tile-consumer/tile-consumer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TileConsumerComponent);
    return TileConsumerComponent;
}());



/***/ }),

/***/ "./src/app/task-container/task-container.component.css":
/*!*************************************************************!*\
  !*** ./src/app/task-container/task-container.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-container/task-container.component.html":
/*!**************************************************************!*\
  !*** ./src/app/task-container/task-container.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"formlyFieldConfigArrayCollections?.length > 0\">\r\n    <div *ngFor=\"let formlyFieldConfigArray of formlyFieldConfigArrayCollections; let index = index;\">\r\n      <section [formlyFieldConfigArray]=\"formlyFieldConfigArray\">\r\n      </section>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/task-container/task-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/task-container/task-container.component.ts ***!
  \************************************************************/
/*! exports provided: TaskContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskContainerComponent", function() { return TaskContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/models */ "./src/app/core/models/index.ts");
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






var TaskContainerComponent = /** @class */ (function () {
    function TaskContainerComponent(cd, store) {
        var _this = this;
        this.cd = cd;
        this.store = store;
        this.forms = null;
        this.options = [];
        this.model = {};
        this.isComponentActive = true;
        this.requestId = null;
        this.taskRequest = new _core_models__WEBPACK_IMPORTED_MODULE_4__["TaskRequest"]();
        /////////////////////////////////////////
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
            _this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["fromRootActions"].questionnaireActions.GetCurrentTask(_this.taskRequest));
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
            }
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["fromRootSelectors"].questionnaireSelectors.getCurrentQuestionnaireConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.isComponentActive; })).subscribe(function (formlyFieldConfigArrayCollections) {
            if (formlyFieldConfigArrayCollections) {
                // this.fields = formlyConfig;
                _this.formlyFieldConfigArrayCollections = formlyFieldConfigArrayCollections;
                _this.forms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](_this.formlyFieldConfigArrayCollections.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}); }));
                _this.options = _this.formlyFieldConfigArrayCollections.map(function () { return ({}); });
                _this.cd.detectChanges();
                //Todo: Show server error changes   
                // if (this.currentFieldChange && this.questionnaireFormErrors) {
                //   this.questionnaireFormErrors.forEach((errorField) => {
                //     this.form.get(errorField.id)
                //       .setErrors({ 'server-error': errorField.errorMessage });
                //     this.form.get(errorField.id).markAsTouched();
                //   });
                // }
            }
        });
        // this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireErrors),
        //   takeWhile(() => this.isComponentActive)
        // ).subscribe((questionnaireFormErrors) => {
        //   this.questionnaireFormErrors = questionnaireFormErrors;
        // });
        // this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireDelta),
        //   takeWhile(() => this.isComponentActive)
        // ).subscribe((fieldChangeDelta) => {
        //   if (fieldChangeDelta) {
        //     this.currentFieldChange = fieldChangeDelta;
        //     this.store.dispatch(new fromRootActions.questionnaireActions.SetQuestionnaireErrors(this.currentFieldChange.errors));
        //     this.store.dispatch(new fromRootActions.questionnaireActions.MergeDeltaFieldChangeAndCurrentTask(
        //       {
        //         currentTask: this.currentTask,
        //         delta: this.currentFieldChange,
        //         model: this.model
        //       }
        //     ));
        //     this.cd.detectChanges();
        //   }
        // });
        // this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionId),
        //   takeWhile(() => this.isComponentActive)
        // ).subscribe((currentQuestionId) => {
        //   if (currentQuestionId) {
        //     this.currentQuestionId = currentQuestionId;
        //   }
        // });
        // this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getMergedCurrentTaskWithDelta),
        //   takeWhile(() => this.isComponentActive)
        // ).subscribe((mergedCurrentTaskWithDelta) => {
        //   if (mergedCurrentTaskWithDelta) {
        //     this.mergedCurrentTaskWithDelta = mergedCurrentTaskWithDelta;
        //     this.store.dispatch(new fromRootActions.questionnaireActions.UpdateCurrentTask(this.mergedCurrentTaskWithDelta));
        //   }
        // });
    }
    TaskContainerComponent.prototype.ngOnInit = function () {
    };
    TaskContainerComponent.prototype.ngOnDestroy = function () {
        this.isComponentActive = false;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["fromRootActions"].questionnaireActions.ResetQuestionnaireState());
    };
    TaskContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-container',
            template: __webpack_require__(/*! ./task-container.component.html */ "./src/app/task-container/task-container.component.html"),
            styles: [__webpack_require__(/*! ./task-container.component.css */ "./src/app/task-container/task-container.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskContainerComponent);
    return TaskContainerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'mktdevvm100621.nam.nsroot.net:9090/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vku155\Documents\test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map