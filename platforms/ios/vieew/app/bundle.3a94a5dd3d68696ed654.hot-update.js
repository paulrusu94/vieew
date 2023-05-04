"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./src/app/shared/components/login/login.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");





class LoginComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() { }
    onLogin() {
        this.isLoading = true;
        this.authenticationService.login(this.username, this.password).then(() => {
            this.isLoading = false;
            this.router.navigate(['/home'], { clearHistory: true });
        }, error => {
            this.isLoading = false;
            console.log(error);
        });
    }
    onSignup() {
        this.router.navigate(['/register'], { clearHistory: true });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.RouterExtensions)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["Login"]], decls: 9, vars: 4, consts: [["rows", "*, auto", 1, "login-container"], ["row", "0", "verticalAlignment", "center", 1, "form"], [1, "input-container"], ["hint", "Username", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["hint", "Password", "secure", "true", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["text", "Login", 1, "button", 3, "isEnabled", "tap"], [3, "busy"], ["text", "Don't have an account? Sign up", "textAlignment", "center", 1, "signup-label", 3, "tap"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "GridLayout", 0)(1, "StackLayout", 1)(2, "StackLayout", 2)(3, "TextField", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_TextField_ngModelChange_3_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "StackLayout", 2)(5, "TextField", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_TextField_ngModelChange_5_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "Button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function LoginComponent_Template_Button_tap_6_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ActivityIndicator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function LoginComponent_Template_Label_tap_8_listener() { return ctx.onSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEnabled", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("busy", ctx.isLoading);
    } }, encapsulation: 2 });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjNhOTRhNWRkM2Q2ODY5NmVkNjU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ3FCO0FBQzFDO0FBQ3dCO0FBQ2hCO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0JBQW9CO0FBQ2xFLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw4Q0FBOEMsb0JBQW9CO0FBQ2xFO0FBQ0E7QUFDQSwyREFBMkQsaUNBQWlDLCtEQUFvQixDQUFDLG1GQUF3QixHQUFHLCtEQUFvQixDQUFDLG1FQUFtQjtBQUNwTCxvQ0FBb0MsK0RBQW9CLEdBQUcsc21CQUFzbUI7QUFDanFCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsZ0dBQWdHLCtCQUErQjtBQUNwSixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsZ0dBQWdHLCtCQUErQjtBQUNwSixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsbUVBQW1FLHVCQUF1QjtBQUMvRyxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxrRUFBa0Usd0JBQXdCO0FBQy9HLFFBQVEsMERBQWU7QUFDdkIsTUFBTTtBQUNOLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSxtRUFBd0I7QUFDaEMsT0FBTyxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHsgfVxuICAgIG9uTG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU2lnbnVwKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWdpc3RlciddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG5Mb2dpbkNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIExvZ2luQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IExvZ2luQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLkF1dGhlbnRpY2F0aW9uU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTIuUm91dGVyRXh0ZW5zaW9ucykpOyB9O1xuTG9naW5Db21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBMb2dpbkNvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiTG9naW5cIl1dLCBkZWNsczogOSwgdmFyczogNCwgY29uc3RzOiBbW1wicm93c1wiLCBcIiosIGF1dG9cIiwgMSwgXCJsb2dpbi1jb250YWluZXJcIl0sIFtcInJvd1wiLCBcIjBcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCAxLCBcImZvcm1cIl0sIFsxLCBcImlucHV0LWNvbnRhaW5lclwiXSwgW1wiaGludFwiLCBcIlVzZXJuYW1lXCIsIDEsIFwiaW5wdXRcIiwgMiwgXCJwYWRkaW5nXCIsIFwiMTAgMjBcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1wiaGludFwiLCBcIlBhc3N3b3JkXCIsIFwic2VjdXJlXCIsIFwidHJ1ZVwiLCAxLCBcImlucHV0XCIsIDIsIFwicGFkZGluZ1wiLCBcIjEwIDIwXCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcInRleHRcIiwgXCJMb2dpblwiLCAxLCBcImJ1dHRvblwiLCAzLCBcImlzRW5hYmxlZFwiLCBcInRhcFwiXSwgWzMsIFwiYnVzeVwiXSwgW1widGV4dFwiLCBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cFwiLCBcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJzaWdudXAtbGFiZWxcIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gTG9naW5Db21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJHcmlkTGF5b3V0XCIsIDApKDEsIFwiU3RhY2tMYXlvdXRcIiwgMSkoMiwgXCJTdGFja0xheW91dFwiLCAyKSgzLCBcIlRleHRGaWVsZFwiLCAzKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibmdNb2RlbENoYW5nZVwiLCBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudF9UZW1wbGF0ZV9UZXh0RmllbGRfbmdNb2RlbENoYW5nZV8zX2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LnVzZXJuYW1lID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiU3RhY2tMYXlvdXRcIiwgMikoNSwgXCJUZXh0RmllbGRcIiwgNCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gTG9naW5Db21wb25lbnRfVGVtcGxhdGVfVGV4dEZpZWxkX25nTW9kZWxDaGFuZ2VfNV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5wYXNzd29yZCA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg2LCBcIkJ1dHRvblwiLCA1KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIExvZ2luQ29tcG9uZW50X1RlbXBsYXRlX0J1dHRvbl90YXBfNl9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkxvZ2luKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg3LCBcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIDYpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDgsIFwiTGFiZWxcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfOF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vblNpZ251cCgpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC51c2VybmFtZSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5wYXNzd29yZCk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJpc0VuYWJsZWRcIiwgIWN0eC5pc0xvYWRpbmcpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5SW50ZXJwb2xhdGUoXCJidXN5XCIsIGN0eC5pc0xvYWRpbmcpO1xuICAgIH0gfSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==