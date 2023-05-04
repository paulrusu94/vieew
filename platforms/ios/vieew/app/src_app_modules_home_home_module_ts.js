"use strict";
exports.id = "src_app_modules_home_home_module_ts";
exports.ids = ["src_app_modules_home_home_module_ts"];
exports.modules = {

/***/ "./src/app/modules/home/home-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes), _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class HomeComponent {
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["Home"]], decls: 8, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Home", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF015", 1, "page__content-icon", "fas"], ["text", "<!-- Page content goes here -->", 1, "page__content-placeholder"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function HomeComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6)(7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9tb2R1bGVzX2hvbWVfaG9tZV9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2hCO0FBQ2I7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLDBEQUFhLEVBQUU7QUFDL0M7QUFDUDtBQUNBLGlFQUFpRTtBQUNqRSx1Q0FBdUMsOERBQW1CLEdBQUcseUJBQXlCO0FBQ3RGLHVDQUF1Qyw4REFBbUIsR0FBRyxVQUFVLG9GQUFpQyxVQUFVLDJFQUF3QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNUNUY7QUFDYjtBQUNRO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxtQ0FBbUMsK0RBQW9CLEdBQUcseWJBQXliO0FBQ25mLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLGlFQUFpRSxpQ0FBaUM7QUFDdkgsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsT0FBTyxpQkFBaUIscUVBQXFCLEVBQUUsNEVBQTRCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0IvQjtBQUNQO0FBQ3RCO0FBQzdCO0FBQ1A7QUFDQSxtREFBbUQ7QUFDbkQsZ0NBQWdDLDhEQUFtQixHQUFHLGtCQUFrQjtBQUN4RSxnQ0FBZ0MsOERBQW1CLEdBQUcsVUFBVSwyRUFBd0IsRUFBRSxtRUFBaUIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1dO1xuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHtcbn1cbkhvbWVSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gSG9tZVJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSG9tZVJvdXRpbmdNb2R1bGUpKCk7IH07XG5Ib21lUm91dGluZ01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogSG9tZVJvdXRpbmdNb2R1bGUgfSk7XG5Ib21lUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdIH0pO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbkhvbWVDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBIb21lQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEhvbWVDb21wb25lbnQpKCk7IH07XG5Ib21lQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogSG9tZUNvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiSG9tZVwiXV0sIGRlY2xzOiA4LCB2YXJzOiAwLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJIb21lXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgWzEsIFwicGFnZV9fY29udGVudFwiXSwgW1widGV4dFwiLCBcIlxcdUYwMTVcIiwgMSwgXCJwYWdlX19jb250ZW50LWljb25cIiwgXCJmYXNcIl0sIFtcInRleHRcIiwgXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCIsIDEsIFwicGFnZV9fY29udGVudC1wbGFjZWhvbGRlclwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBIb21lQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBIb21lQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkdyaWRMYXlvdXRcIiwgNSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDYsIFwiTGFiZWxcIiwgNikoNywgXCJMYWJlbFwiLCA3KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICB9IH0sIGRlcGVuZGVuY2llczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcbn1cbkhvbWVNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBIb21lTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEhvbWVNb2R1bGUpKCk7IH07XG5Ib21lTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBIb21lTW9kdWxlIH0pO1xuSG9tZU1vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgSG9tZVJvdXRpbmdNb2R1bGVdIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9