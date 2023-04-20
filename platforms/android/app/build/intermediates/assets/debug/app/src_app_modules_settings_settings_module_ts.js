"use strict";
exports.id = "src_app_modules_settings_settings_module_ts";
exports.ids = ["src_app_modules_settings_settings_module_ts"];
exports.modules = {

/***/ "./src/app/modules/settings/settings-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent }];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes), _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/modules/settings/settings.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class SettingsComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["Settings"]], decls: 8, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Settings", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF013", 1, "page__content-icon", "fas"], ["text", "<!-- Page content goes here -->", 1, "page__content-placeholder"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function SettingsComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6)(7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/settings/settings-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9tb2R1bGVzX3NldHRpbmdzX3NldHRpbmdzX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDUjtBQUNyQjtBQUNRO0FBQzVDLGtCQUFrQixxQkFBcUIsa0VBQWlCLEVBQUU7QUFDbkQ7QUFDUDtBQUNBLHlFQUF5RTtBQUN6RSwyQ0FBMkMsOERBQW1CLEdBQUcsNkJBQTZCO0FBQzlGLDJDQUEyQyw4REFBbUIsR0FBRyxVQUFVLG9GQUFpQyxVQUFVLDJFQUF3QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNUaEc7QUFDYjtBQUNRO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRSx1Q0FBdUMsK0RBQW9CLEdBQUcseWNBQXljO0FBQ3ZnQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxxRUFBcUUsaUNBQWlDO0FBQzNILFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLE9BQU8saUJBQWlCLHFFQUFxQixFQUFFLDRFQUE0QixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQzNCL0I7QUFDQztBQUM5QjtBQUM3QjtBQUNQO0FBQ0EsMkRBQTJEO0FBQzNELG9DQUFvQyw4REFBbUIsR0FBRyxzQkFBc0I7QUFDaEYsb0NBQW9DLDhEQUFtQixHQUFHLFVBQVUsMkVBQXdCLEVBQUUsMkVBQXFCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9XTtcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUge1xufVxuU2V0dGluZ3NSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NSb3V0aW5nTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFNldHRpbmdzUm91dGluZ01vZHVsZSkoKTsgfTtcblNldHRpbmdzUm91dGluZ01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogU2V0dGluZ3NSb3V0aW5nTW9kdWxlIH0pO1xuU2V0dGluZ3NSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cblNldHRpbmdzQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgU2V0dGluZ3NDb21wb25lbnQpKCk7IH07XG5TZXR0aW5nc0NvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IFNldHRpbmdzQ29tcG9uZW50LCBzZWxlY3RvcnM6IFtbXCJTZXR0aW5nc1wiXV0sIGRlY2xzOiA4LCB2YXJzOiAwLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJTZXR0aW5nc1wiLCBcImNvbFNwYW5cIiwgXCIyXCIsIDEsIFwiYWN0aW9uLWJhci10aXRsZVwiXSwgW1widGV4dFwiLCBcIlxcdUYwQzlcIiwgMSwgXCJmYXNcIiwgMywgXCJ0YXBcIl0sIFsxLCBcInBhZ2VfX2NvbnRlbnRcIl0sIFtcInRleHRcIiwgXCJcXHVGMDEzXCIsIDEsIFwicGFnZV9fY29udGVudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJ0ZXh0XCIsIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gU2V0dGluZ3NDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIiwgMCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDMsIFwiTGFiZWxcIiwgMyk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFNldHRpbmdzQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkdyaWRMYXlvdXRcIiwgNSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDYsIFwiTGFiZWxcIiwgNikoNywgXCJMYWJlbFwiLCA3KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICB9IH0sIGRlcGVuZGVuY2llczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgU2V0dGluZ3NSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzTW9kdWxlIHtcbn1cblNldHRpbmdzTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgU2V0dGluZ3NNb2R1bGUpKCk7IH07XG5TZXR0aW5nc01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogU2V0dGluZ3NNb2R1bGUgfSk7XG5TZXR0aW5nc01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgU2V0dGluZ3NSb3V0aW5nTW9kdWxlXSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==