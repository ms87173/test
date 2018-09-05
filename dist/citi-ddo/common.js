(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/constants/applications.constants.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/constants/applications.constants.ts ***!
  \**********************************************************/
/*! exports provided: APPLICATION_DROPDOWN_OPTIONS, SORT_ORDER, APPLICATION_GRID_HEADING, ACTION_TYPES, STATUS_MAPPING, APPLICATION_TYPE, ROLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_DROPDOWN_OPTIONS", function() { return APPLICATION_DROPDOWN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_ORDER", function() { return SORT_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_GRID_HEADING", function() { return APPLICATION_GRID_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_MAPPING", function() { return STATUS_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_TYPE", function() { return APPLICATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
var APPLICATION_DROPDOWN_OPTIONS = [
    {
        key: 'completeNow',
        value: 'Complete Now'
    }
];
var SORT_ORDER = {
    default: 'default',
    ascending: 'asc',
    descending: 'desc'
};
var APPLICATION_GRID_HEADING = [
    {
        key: 'description',
        value: 'DESCRIPTION',
        showSortOption: false
    },
    {
        key: 'ownership',
        value: 'OWNERSHIP',
        showSortOption: false
    },
    {
        key: 'modified',
        value: 'MODIFIED',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'status',
        value: 'STATUS',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'actions',
        value: 'ACTIONS',
        showSortOption: false
    },
];
var ACTION_TYPES = {
    rowClicked: 'rowClicked',
    sort: 'sort',
    completeNow: 'completeNow'
};
var STATUS_MAPPING = {
    inProgress: {
        label: 'Action Required',
        iconClass: 'fa-exclamation-circle warning status-icon',
        labelClass: 'status-label status-label-icon',
        valueClass: 'status-value status-value-icon'
    },
    cancelledByUser: {
        label: 'Cancelled',
        iconClass: 'fa-circle-o status-icon',
        labelClass: 'status-label status-label-icon',
        valueClass: 'status-value status-value-icon'
    },
    submitted: {
        label: 'Submitted',
        iconClass: 'fa-check success status-icon',
        labelClass: 'status-label status-label-icon',
        valueClass: 'status-value status-value-icon'
    },
    completed: {
        label: 'Done',
        iconClass: 'fa-circle-o status-icon',
        labelClass: 'status-label status-label-icon',
        valueClass: 'status-value status-value-icon'
    },
    cancelledByBanker: {
        label: 'Cancelled',
        iconClass: 'fa-circle-o status-icon',
        labelClass: 'status-label status-label-icon',
        valueClass: 'status-value status-value-icon'
    }
};
var APPLICATION_TYPE = {
    joint: 'Joint',
    individual: 'Individual',
    custodial: 'Custodial',
    trust: 'Trust'
};
var ROLE = {
    assistantBanker: 'Assistant Banker'
};


/***/ }),

/***/ "./src/app/core/models/contact-detail.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/contact-detail.model.ts ***!
  \*****************************************************/
/*! exports provided: ContactDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsModel", function() { return ContactDetailsModel; });
/* harmony import */ var _constants_applications_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/applications.constants */ "./src/app/core/constants/applications.constants.ts");

var ContactDetailsModel = /** @class */ (function () {
    function ContactDetailsModel(data) {
        if (!data) {
            return null;
        }
        else {
            this.iconClass = 'fa-comments';
            var contactPersonsRole = new Map(Object.entries(_constants_applications_constants__WEBPACK_IMPORTED_MODULE_0__["ROLE"]));
            this.role = "Contact your " + contactPersonsRole.get(data.role);
            this.name = data.firstName + " " + data.middleName + " " + data.lastName;
            this.emailAddress = data.emailAddress;
            this.phoneNumber = this.formatPhoneNumber(data.phoneNumber);
        }
    }
    ContactDetailsModel.prototype.formatPhoneNumber = function (number) {
        var formatedNumber = number.replace(/[^\d]+/g, '')
            .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2)$3-$4');
        return formatedNumber;
    };
    return ContactDetailsModel;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map