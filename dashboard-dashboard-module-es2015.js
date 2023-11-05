(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "/2RN":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "U5Cf");
/* harmony import */ var _metronic_partials_content_dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/partials/content/dashboards/dashboards.module */ "Rx8h");







class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                },
            ]),
            _metronic_partials_content_dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_4__["DashboardsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _metronic_partials_content_dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_4__["DashboardsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                        },
                    ]),
                    _metronic_partials_content_dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_4__["DashboardsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "6Pb/":
/*!******************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dashboards/dashboard3/dashboard3.component.ts ***!
  \******************************************************************************************/
/*! exports provided: Dashboard3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard3Component", function() { return Dashboard3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _widgets_mixed_mixed_widget4_mixed_widget4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget4/mixed-widget4.component */ "ZEyK");
/* harmony import */ var _widgets_base_tables_base_tables_widget6_base_tables_widget6_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/base-tables/base-tables-widget6/base-tables-widget6.component */ "1nhH");
/* harmony import */ var _widgets_stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/stats/stats-widget11/stats-widget11.component */ "gF1O");
/* harmony import */ var _widgets_stats_stats_widget10_stats_widget10_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/stats/stats-widget10/stats-widget10.component */ "hW7X");
/* harmony import */ var _widgets_lists_lists_widget14_lists_widget14_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/lists/lists-widget14/lists-widget14.component */ "8gsj");
/* harmony import */ var _widgets_advance_tables_advance_tables_widget9_advance_tables_widget9_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/advance-tables/advance-tables-widget9/advance-tables-widget9.component */ "fpLR");
/* harmony import */ var _widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/lists/lists-widget10/lists-widget10.component */ "bfka");
/* harmony import */ var _widgets_base_tables_base_tables_widget1_base_tables_widget1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/base-tables/base-tables-widget1/base-tables-widget1.component */ "R9W2");
/* harmony import */ var _widgets_lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/lists/lists-widget8/lists-widget8.component */ "Jf3y");
/* harmony import */ var _widgets_base_tables_base_tables_widget2_base_tables_widget2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/base-tables/base-tables-widget2/base-tables-widget2.component */ "C0mp");












class Dashboard3Component {
    constructor() { }
    ngOnInit() { }
}
Dashboard3Component.ɵfac = function Dashboard3Component_Factory(t) { return new (t || Dashboard3Component)(); };
Dashboard3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard3Component, selectors: [["app-dashboard3"]], decls: 27, vars: 0, consts: [[1, "row"], [1, "col-xl-4"], ["cssClass", "gutter-b card-stretch"], [1, "col-xl-8"], [1, "gutter-b"], [1, "col-xl-12"], ["cssClass", "gutter-b", "symbolShape", "symbol-circle", "baseColor", "danger"], ["cssClass", "gutter-b", "symbolShape", "symbol-circle", "baseColor", "info"], [1, "col-lg-12", "col-xxl-12"], ["cssClass", "card-stretch gutter-b"], [1, "col-xl-6"], [1, "col-lg-4"], [1, "col-lg-8"]], template: function Dashboard3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mixed-widget4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-base-tables-widget6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-stats-widget11", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-stats-widget10", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-lists-widget14", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-advance-tables-widget9", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-lists-widget10", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-base-tables-widget1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-lists-widget8", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-base-tables-widget2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_widgets_mixed_mixed_widget4_mixed_widget4_component__WEBPACK_IMPORTED_MODULE_1__["MixedWidget4Component"], _widgets_base_tables_base_tables_widget6_base_tables_widget6_component__WEBPACK_IMPORTED_MODULE_2__["BaseTablesWidget6Component"], _widgets_stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_3__["StatsWidget11Component"], _widgets_stats_stats_widget10_stats_widget10_component__WEBPACK_IMPORTED_MODULE_4__["StatsWidget10Component"], _widgets_lists_lists_widget14_lists_widget14_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget14Component"], _widgets_advance_tables_advance_tables_widget9_advance_tables_widget9_component__WEBPACK_IMPORTED_MODULE_6__["AdvanceTablesWidget9Component"], _widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_7__["ListsWidget10Component"], _widgets_base_tables_base_tables_widget1_base_tables_widget1_component__WEBPACK_IMPORTED_MODULE_8__["BaseTablesWidget1Component"], _widgets_lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget8Component"], _widgets_base_tables_base_tables_widget2_base_tables_widget2_component__WEBPACK_IMPORTED_MODULE_10__["BaseTablesWidget2Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard3',
                templateUrl: './dashboard3.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DTos":
/*!******************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dashboards/dashboard2/dashboard2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _widgets_tiles_tiles_widget1_tiles_widget1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget1/tiles-widget1.component */ "iFi5");
/* harmony import */ var _widgets_tiles_tiles_widget3_tiles_widget3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget3/tiles-widget3.component */ "rzq+");
/* harmony import */ var _widgets_tiles_tiles_widget10_tiles_widget10_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget10/tiles-widget10.component */ "LujJ");
/* harmony import */ var _widgets_tiles_tiles_widget13_tiles_widget13_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget13/tiles-widget13.component */ "xP0M");
/* harmony import */ var _widgets_tiles_tiles_widget11_tiles_widget11_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget11/tiles-widget11.component */ "67FF");
/* harmony import */ var _widgets_tiles_tiles_widget12_tiles_widget12_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget12/tiles-widget12.component */ "kx+j");
/* harmony import */ var _widgets_tiles_tiles_widget14_tiles_widget14_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/tiles/tiles-widget14/tiles-widget14.component */ "AxnP");
/* harmony import */ var _widgets_mixed_mixed_widget6_mixed_widget6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget6/mixed-widget6.component */ "peRe");
/* harmony import */ var _widgets_advance_tables_advance_tables_widget1_advance_tables_widget1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/advance-tables/advance-tables-widget1/advance-tables-widget1.component */ "CYTy");
/* harmony import */ var _widgets_mixed_mixed_widget10_mixed_widget10_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget10/mixed-widget10.component */ "zz3y");
/* harmony import */ var _widgets_mixed_mixed_widget11_mixed_widget11_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget11/mixed-widget11.component */ "BAWW");
/* harmony import */ var _widgets_mixed_mixed_widget12_mixed_widget12_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget12/mixed-widget12.component */ "lBGr");
/* harmony import */ var _widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../widgets/lists/lists-widget10/lists-widget10.component */ "bfka");
/* harmony import */ var _widgets_lists_lists_widget11_lists_widget11_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../widgets/lists/lists-widget11/lists-widget11.component */ "KqeX");
















class Dashboard2Component {
    constructor() { }
    ngOnInit() { }
}
Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 36, vars: 9, consts: [[1, "row"], [1, "col-xl-4"], ["cssClass", "gutter-b card-stretch", 3, "chartColor"], [1, "col-xl-8"], [1, "col-xl-3"], ["cssClass", "gutter-b", 3, "widgetHeight"], [1, "col-xl-9"], [1, "col-xl-6"], ["cssClass", "gutter-b", 3, "widgetHeight", "baseColor"], ["cssClass", "gutter-b", 3, "widgetHeight", "iconColor"], ["cssClass", "gutter-b card-stretch"], [1, "col-lg-6", "col-xxl-4"], [1, "col-lg-6", "col-xxl-8"], [1, "col-lg-6"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tiles-widget1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tiles-widget3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-tiles-widget10", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tiles-widget13", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-tiles-widget11", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-tiles-widget12", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-tiles-widget14", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-mixed-widget6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-advance-tables-widget1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-mixed-widget10", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-mixed-widget11", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-mixed-widget12", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-lists-widget10", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-lists-widget11", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartColor", "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetHeight", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetHeight", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetHeight", "175px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetHeight", "150px")("baseColor", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetHeight", "150px")("iconColor", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartColor", "danger");
    } }, directives: [_widgets_tiles_tiles_widget1_tiles_widget1_component__WEBPACK_IMPORTED_MODULE_1__["TilesWidget1Component"], _widgets_tiles_tiles_widget3_tiles_widget3_component__WEBPACK_IMPORTED_MODULE_2__["TilesWidget3Component"], _widgets_tiles_tiles_widget10_tiles_widget10_component__WEBPACK_IMPORTED_MODULE_3__["TilesWidget10Component"], _widgets_tiles_tiles_widget13_tiles_widget13_component__WEBPACK_IMPORTED_MODULE_4__["TilesWidget13Component"], _widgets_tiles_tiles_widget11_tiles_widget11_component__WEBPACK_IMPORTED_MODULE_5__["TilesWidget11Component"], _widgets_tiles_tiles_widget12_tiles_widget12_component__WEBPACK_IMPORTED_MODULE_6__["TilesWidget12Component"], _widgets_tiles_tiles_widget14_tiles_widget14_component__WEBPACK_IMPORTED_MODULE_7__["TilesWidget14Component"], _widgets_mixed_mixed_widget6_mixed_widget6_component__WEBPACK_IMPORTED_MODULE_8__["MixedWidget6Component"], _widgets_advance_tables_advance_tables_widget1_advance_tables_widget1_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceTablesWidget1Component"], _widgets_mixed_mixed_widget10_mixed_widget10_component__WEBPACK_IMPORTED_MODULE_10__["MixedWidget10Component"], _widgets_mixed_mixed_widget11_mixed_widget11_component__WEBPACK_IMPORTED_MODULE_11__["MixedWidget11Component"], _widgets_mixed_mixed_widget12_mixed_widget12_component__WEBPACK_IMPORTED_MODULE_12__["MixedWidget12Component"], _widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_13__["ListsWidget10Component"], _widgets_lists_lists_widget11_lists_widget11_component__WEBPACK_IMPORTED_MODULE_14__["ListsWidget11Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard2',
                templateUrl: './dashboard2.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Rx8h":
/*!****************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dashboards/dashboards.module.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "z6dK");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "DTos");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ "6Pb/");
/* harmony import */ var _dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-wrapper/dashboard-wrapper.component */ "cDOV");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/widgets.module */ "kFOB");








class DashboardsModule {
}
DashboardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardsModule });
DashboardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardsModule_Factory(t) { return new (t || DashboardsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardsModule, { declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Component"], _dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWrapperComponent"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard3Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]], exports: [_dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Component"], _dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWrapperComponent"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard3Component"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]],
                exports: [_dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWrapperComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _metronic_partials_content_dashboards_dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/partials/content/dashboards/dashboard-wrapper/dashboard-wrapper.component */ "cDOV");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-wrapper");
    } }, directives: [_metronic_partials_content_dashboards_dashboard_wrapper_dashboard_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["DashboardWrapperComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cDOV":
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dashboards/dashboard-wrapper/dashboard-wrapper.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DashboardWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWrapperComponent", function() { return DashboardWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "WsYS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard1/dashboard1.component */ "z6dK");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard2/dashboard2.component */ "DTos");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard3/dashboard3.component */ "6Pb/");







function DashboardWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DashboardWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DashboardWrapperComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class DashboardWrapperComponent {
    constructor(layout) {
        this.layout = layout;
    }
    ngOnInit() {
        this.demo = this.layout.getProp('demo');
    }
}
DashboardWrapperComponent.ɵfac = function DashboardWrapperComponent_Factory(t) { return new (t || DashboardWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
DashboardWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardWrapperComponent, selectors: [["app-dashboard-wrapper"]], decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function DashboardWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardWrapperComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardWrapperComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardWrapperComponent_ng_container_2_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.demo === "demo1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.demo === "demo2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.demo === "demo3");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard3Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-wrapper',
                templateUrl: './dashboard-wrapper.component.html',
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "z6dK":
/*!******************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dashboards/dashboard1/dashboard1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _widgets_mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget1/mixed-widget1.component */ "VJEl");
/* harmony import */ var _widgets_lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/lists/lists-widget9/lists-widget9.component */ "kLoK");
/* harmony import */ var _widgets_stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/stats/stats-widget11/stats-widget11.component */ "gF1O");
/* harmony import */ var _widgets_stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/stats/stats-widget12/stats-widget12.component */ "PK3+");
/* harmony import */ var _widgets_lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/lists/lists-widget1/lists-widget1.component */ "dbSo");
/* harmony import */ var _widgets_advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/advance-tables/advance-tables-widget2/advance-tables-widget2.component */ "AIwn");
/* harmony import */ var _widgets_lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/lists/lists-widget3/lists-widget3.component */ "Ppjl");
/* harmony import */ var _widgets_lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/lists/lists-widget4/lists-widget4.component */ "Yuyy");
/* harmony import */ var _widgets_lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/lists/lists-widget8/lists-widget8.component */ "Jf3y");
/* harmony import */ var _widgets_mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/mixed/mixed-widget14/mixed-widget14.component */ "you6");
/* harmony import */ var _widgets_advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widgets/advance-tables/advance-tables-widget4/advance-tables-widget4.component */ "EZ1j");













class Dashboard1Component {
    constructor() { }
    ngOnInit() { }
}
Dashboard1Component.ɵfac = function Dashboard1Component_Factory(t) { return new (t || Dashboard1Component)(); };
Dashboard1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard1Component, selectors: [["app-dashboard1"]], decls: 23, vars: 0, consts: [[1, "row"], [1, "col-lg-6", "col-xxl-4"], [1, "col-lg-6", "col-xxl-4", "order-1", "order-xxl-1"], [1, "col-xxl-8", "order-2", "order-xxl-1"], [1, "col-lg-6", "col-xxl-4", "order-1", "order-xxl-2"], [1, "col-lg-12", "col-xxl-4", "order-1", "order-xxl-2"], [1, "col-lg-4"], [1, "col-lg-8"]], template: function Dashboard1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mixed-widget1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-lists-widget9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-stats-widget11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-stats-widget12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-lists-widget1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-advance-tables-widget2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-lists-widget3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-lists-widget4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-lists-widget8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-mixed-widget14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-advance-tables-widget4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_widgets_mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_1__["MixedWidget1Component"], _widgets_lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_2__["ListsWidget9Component"], _widgets_stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_3__["StatsWidget11Component"], _widgets_stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_4__["StatsWidget12Component"], _widgets_lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget1Component"], _widgets_advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_6__["AdvanceTablesWidget2Component"], _widgets_lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_7__["ListsWidget3Component"], _widgets_lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_8__["ListsWidget4Component"], _widgets_lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget8Component"], _widgets_mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_10__["MixedWidget14Component"], _widgets_advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_11__["AdvanceTablesWidget4Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard1',
                templateUrl: './dashboard1.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map