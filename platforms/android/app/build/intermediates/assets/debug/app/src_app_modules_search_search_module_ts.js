"use strict";
exports.id = "src_app_modules_search_search_module_ts";
exports.ids = ["src_app_modules_search_search_module_ts"];
exports.modules = {

/***/ "./src/app/modules/search/search-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRoutingModule": () => (/* binding */ SearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/search/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent }];
class SearchRoutingModule {
}
SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); };
SearchRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes), _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/modules/search/search.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class SearchComponent {
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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["Search"]], decls: 8, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Search", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF002", 1, "page__content-icon", "fas"], ["text", "<!-- Page content goes here -->", 1, "page__content-placeholder"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function SearchComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6)(7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/modules/search/search.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/search/search-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchRoutingModule] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9tb2R1bGVzX3NlYXJjaF9zZWFyY2hfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNaO0FBQ2pCO0FBQ1E7QUFDNUMsa0JBQWtCLHFCQUFxQiw4REFBZSxFQUFFO0FBQ2pEO0FBQ1A7QUFDQSxxRUFBcUU7QUFDckUseUNBQXlDLDhEQUFtQixHQUFHLDJCQUEyQjtBQUMxRix5Q0FBeUMsOERBQW1CLEdBQUcsVUFBVSxvRkFBaUMsVUFBVSwyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVDlGO0FBQ2I7QUFDUTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QscUNBQXFDLCtEQUFvQixHQUFHLGljQUFpYztBQUM3ZixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxtRUFBbUUsaUNBQWlDO0FBQ3pILFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLE9BQU8saUJBQWlCLHFFQUFxQixFQUFFLDRFQUE0QixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQzNCL0I7QUFDSDtBQUMxQjtBQUM3QjtBQUNQO0FBQ0EsdURBQXVEO0FBQ3ZELGtDQUFrQyw4REFBbUIsR0FBRyxvQkFBb0I7QUFDNUUsa0NBQWtDLDhEQUFtQixHQUFHLFVBQVUsMkVBQXdCLEVBQUUsdUVBQW1CLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9XTtcbmV4cG9ydCBjbGFzcyBTZWFyY2hSb3V0aW5nTW9kdWxlIHtcbn1cblNlYXJjaFJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBTZWFyY2hSb3V0aW5nTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFNlYXJjaFJvdXRpbmdNb2R1bGUpKCk7IH07XG5TZWFyY2hSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBTZWFyY2hSb3V0aW5nTW9kdWxlIH0pO1xuU2VhcmNoUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdIH0pO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuU2VhcmNoQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gU2VhcmNoQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFNlYXJjaENvbXBvbmVudCkoKTsgfTtcblNlYXJjaENvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IFNlYXJjaENvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiU2VhcmNoXCJdXSwgZGVjbHM6IDgsIHZhcnM6IDAsIGNvbnN0czogW1sxLCBcImFjdGlvbi1iYXJcIl0sIFtcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIl0sIFtcImNvbHVtbnNcIiwgXCI1MCwgKlwiXSwgW1widGV4dFwiLCBcIlNlYXJjaFwiLCBcImNvbFNwYW5cIiwgXCIyXCIsIDEsIFwiYWN0aW9uLWJhci10aXRsZVwiXSwgW1widGV4dFwiLCBcIlxcdUYwQzlcIiwgMSwgXCJmYXNcIiwgMywgXCJ0YXBcIl0sIFsxLCBcInBhZ2VfX2NvbnRlbnRcIl0sIFtcInRleHRcIiwgXCJcXHVGMDAyXCIsIDEsIFwicGFnZV9fY29udGVudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJ0ZXh0XCIsIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gU2VhcmNoQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBTZWFyY2hDb21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzRfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25EcmF3ZXJCdXR0b25UYXAoKTsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwiR3JpZExheW91dFwiLCA1KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNiwgXCJMYWJlbFwiLCA2KSg3LCBcIkxhYmVsXCIsIDcpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgIH0gfSwgZGVwZW5kZW5jaWVzOiBbaTEuQWN0aW9uQmFyQ29tcG9uZW50LCBpMS5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlXSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBTZWFyY2hSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2gtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUge1xufVxuU2VhcmNoTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2VhcmNoTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFNlYXJjaE1vZHVsZSkoKTsgfTtcblNlYXJjaE1vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogU2VhcmNoTW9kdWxlIH0pO1xuU2VhcmNoTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTZWFyY2hSb3V0aW5nTW9kdWxlXSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==