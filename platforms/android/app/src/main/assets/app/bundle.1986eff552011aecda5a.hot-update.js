"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./src/app/app.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.mjs");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-ui-sidedrawer/index.android.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/nativescript-ui-sidedrawer/angular/fesm2015/nativescript-ui-sidedrawer-angular.mjs");











class AppComponent {
    constructor(authenticationService, router, routerExtensions) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    ngOnInit() {
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__.SlideInOnTopTransition();
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd))
            .subscribe((event) => (this._activatedUrl = event.urlAfterRedirects));
    }
    get sideDrawerTransition() {
        return this._sideDrawerTransition;
    }
    isComponentSelected(url) {
        return this._activatedUrl === url;
    }
    onNavItemTap(navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade',
            },
        });
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
        sideDrawer.closeDrawer();
    }
    logout() {
        this.authenticationService.logout().then(() => {
            this.routerExtensions.navigate(['login']);
            const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
            sideDrawer.closeDrawer();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.RouterExtensions)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 29, vars: 11, consts: [[3, "drawerTransition"], ["tkDrawerContent", "", "rows", "auto, *", 1, "nt-drawer__content"], ["row", "0", 1, "nt-drawer__header"], ["src", "font://\uF2BD", 1, "nt-drawer__header-image", "fas", "t-36"], ["text", "User Name", 1, "nt-drawer__header-brand"], ["text", "username@mail.com", 1, "nt-drawer__header-footnote"], ["row", "1", 1, "nt-drawer__body"], ["columns", "auto, *", 1, "nt-drawer__list-item", 3, "tap"], ["col", "0", "text", "\uF015", 1, "nt-icon", "fas"], ["col", "1", "text", "Home", 1, "p-r-10"], ["col", "0", "text", "\uF1EA", 1, "nt-icon", "far"], ["col", "1", "text", "Browse", 1, "p-r-10"], ["col", "0", "text", "\uF002", 1, "nt-icon", "fas"], ["col", "1", "text", "Search", 1, "p-r-10"], ["col", "0", "text", "\uF005", 1, "nt-icon", "fas"], ["col", "1", "text", "Featured", 1, "p-r-10"], [1, "hr"], ["col", "0", "text", "\uF013", 1, "nt-icon", "fas"], ["col", "1", "text", "Settings", 1, "p-r-10"], ["col", "0", "text", "\uF2F5", 1, "nt-icon", "fas"], ["col", "1", "text", "Logout", 1, "p-r-10"], ["tkMainContent", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "RadSideDrawer", 0)(1, "GridLayout", 1)(2, "StackLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "Image", 3)(4, "Label", 4)(5, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ScrollView", 6)(7, "StackLayout")(8, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_8_listener() { return ctx.onNavItemTap("/home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "Label", 8)(10, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_11_listener() { return ctx.onNavItemTap("/browse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "Label", 10)(13, "Label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_14_listener() { return ctx.onNavItemTap("/search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "Label", 12)(16, "Label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_17_listener() { return ctx.onNavItemTap("/featured"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "Label", 14)(19, "Label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "StackLayout", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_21_listener() { return ctx.onNavItemTap("/settings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "Label", 17)(23, "Label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function AppComponent_Template_GridLayout_tap_24_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "Label", 19)(26, "Label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "GridLayout", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("drawerTransition", ctx.sideDrawerTransition);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("-selected", ctx.isComponentSelected("/home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("-selected", ctx.isComponentSelected("/browse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("-selected", ctx.isComponentSelected("/search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("-selected", ctx.isComponentSelected("/featured"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("-selected", ctx.isComponentSelected("/settings"));
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.PageRouterOutlet, nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_7__.RadSideDrawerComponent, nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_7__.TKDrawerContentDirective, nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_7__.TKMainContentDirective], encapsulation: 2 });


/***/ }),

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


/***/ }),

/***/ "./src/app/shared/components/register/register.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");





class RegisterComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.isLoading = false;
    }
    onRegister() {
        // Perform register logic here, e.g. calling an API to create a new user
        this.isLoading = true;
        this.authenticationService.login(this.name, this.password).then(() => {
            this.isLoading = false;
            this.router.navigate(['/home'], { clearHistory: true });
        }, error => {
            this.isLoading = false;
            console.log(error);
        });
        // Once register is complete, navigate to the home page
        this.router.navigateByUrl('/home');
    }
    goToLogin() {
        this.router.navigateByUrl('/login');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.RouterExtensions)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["Register"]], decls: 13, vars: 6, consts: [["rows", "*, auto", 1, "login-container"], ["row", "0", "verticalAlignment", "center", 1, "form"], [1, "input-container"], ["hint", "Full Name", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["hint", "Email", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["hint", "Password", "secure", "true", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["hint", "Confirm Password", "secure", "true", 1, "input", 2, "padding", "10 20", 3, "ngModel", "ngModelChange"], ["text", "Register", 1, "button", 3, "isEnabled", "tap"], [3, "busy"], ["text", "Already have an account? Go to login", "textAlignment", "center", 1, "login-label", 3, "tap"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "GridLayout", 0)(1, "StackLayout", 1)(2, "StackLayout", 2)(3, "TextField", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_TextField_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "StackLayout", 2)(5, "TextField", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_TextField_ngModelChange_5_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "StackLayout", 2)(7, "TextField", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_TextField_ngModelChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "StackLayout", 2)(9, "TextField", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_TextField_ngModelChange_9_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "Button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function RegisterComponent_Template_Button_tap_10_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ActivityIndicator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function RegisterComponent_Template_Label_tap_12_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEnabled", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("busy", ctx.isLoading);
    } }, encapsulation: 2 });


/***/ }),

/***/ "./src/app/shared/guards/authorized-only.guard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedOnlyGuard": () => (/* binding */ AuthorizedOnlyGuard)
/* harmony export */ });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.mjs");






class AuthorizedOnlyGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthorizedOnlyGuard.ɵfac = function AuthorizedOnlyGuard_Factory(t) { return new (t || AuthorizedOnlyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthorizedOnlyGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorizedOnlyGuard, factory: AuthorizedOnlyGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");

class AuthenticationService {
    constructor() {
        this.authenticated = false;
    }
    login(username, password) {
        // Call your authentication API here and set authenticated to true if successful
        this.authenticated = true;
        return Promise.resolve(true);
    }
    logout() {
        // Call your logout API here and set authenticated to false
        this.authenticated = false;
        return Promise.resolve(false);
    }
    isAuthenticated() {
        return this.authenticated;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjE5ODZlZmY1NTIwMTFhZWNkYTVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDQztBQUNZO0FBQzdCO0FBQ1M7QUFDZ0M7QUFDN0M7QUFDMkI7QUFDekI7QUFDTTtBQUNhO0FBQ2xEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw4RUFBc0I7QUFDL0Q7QUFDQSxrQkFBa0Isc0RBQU0sNkJBQTZCLDBEQUFhO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsMkJBQTJCLHVFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVFQUF1QjtBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdURBQXVELCtCQUErQiwrREFBb0IsQ0FBQywwRkFBd0IsR0FBRywrREFBb0IsQ0FBQyxtREFBUyxHQUFHLCtEQUFvQixDQUFDLG1FQUFtQjtBQUMvTSxrQ0FBa0MsK0RBQW9CLEdBQUcsaXBDQUFpcEM7QUFDMXNDLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLHFFQUFxRSxtQ0FBbUM7QUFDN0gsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsc0VBQXNFLHFDQUFxQztBQUNoSSxRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxzRUFBc0UscUNBQXFDO0FBQ2hJLFFBQVEsdURBQVk7QUFDcEIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLHNFQUFzRSx1Q0FBdUM7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QzlKLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSx1RUFBdUUsMEJBQTBCO0FBQ3RILFFBQVEsMERBQWU7QUFDdkIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLHNFQUFzRSx5QkFBeUI7QUFDcEgsUUFBUSwwREFBZTtBQUN2QixNQUFNO0FBQ04sUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsbUVBQXdCO0FBQ2hDLE9BQU8sb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUM5RDREO0FBQ1o7QUFDbEM7QUFDTDtBQUNxQjtBQUNuQjtBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsc0NBQXNDLHNEQUFXLENBQUMsbUZBQXdCLEdBQUcsc0RBQVcsQ0FBQyxtREFBUztBQUN2SywwQ0FBMEMsZ0VBQXFCLEdBQUcsbUZBQW1GOzs7Ozs7Ozs7Ozs7O0FDdEJqSDtBQUM3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekUsNENBQTRDLGdFQUFxQixHQUFHLHVGQUF1RiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvc2hhcmVkL2d1YXJkcy9hdXRob3JpemVkLW9ubHkuZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IFNsaWRlSW5PblRvcFRyYW5zaXRpb24sIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2UsIHJvdXRlciwgcm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucyA9IHJvdXRlckV4dGVuc2lvbnM7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlZFVybCA9ICcvaG9tZSc7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+ICh0aGlzLl9hY3RpdmF0ZWRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cykpO1xuICAgIH1cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICAgIH1cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmYWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQXBwQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gQXBwQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEFwcENvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5BdXRoZW50aWNhdGlvblNlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyLlJvdXRlciksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTMuUm91dGVyRXh0ZW5zaW9ucykpOyB9O1xuQXBwQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogQXBwQ29tcG9uZW50LCBzZWxlY3RvcnM6IFtbXCJucy1hcHBcIl1dLCBkZWNsczogMjksIHZhcnM6IDExLCBjb25zdHM6IFtbMywgXCJkcmF3ZXJUcmFuc2l0aW9uXCJdLCBbXCJ0a0RyYXdlckNvbnRlbnRcIiwgXCJcIiwgXCJyb3dzXCIsIFwiYXV0bywgKlwiLCAxLCBcIm50LWRyYXdlcl9fY29udGVudFwiXSwgW1wicm93XCIsIFwiMFwiLCAxLCBcIm50LWRyYXdlcl9faGVhZGVyXCJdLCBbXCJzcmNcIiwgXCJmb250Oi8vXFx1RjJCRFwiLCAxLCBcIm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCIsIFwiZmFzXCIsIFwidC0zNlwiXSwgW1widGV4dFwiLCBcIlVzZXIgTmFtZVwiLCAxLCBcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCJdLCBbXCJ0ZXh0XCIsIFwidXNlcm5hbWVAbWFpbC5jb21cIiwgMSwgXCJudC1kcmF3ZXJfX2hlYWRlci1mb290bm90ZVwiXSwgW1wicm93XCIsIFwiMVwiLCAxLCBcIm50LWRyYXdlcl9fYm9keVwiXSwgW1wiY29sdW1uc1wiLCBcImF1dG8sICpcIiwgMSwgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiLCAzLCBcInRhcFwiXSwgW1wiY29sXCIsIFwiMFwiLCBcInRleHRcIiwgXCJcXHVGMDE1XCIsIDEsIFwibnQtaWNvblwiLCBcImZhc1wiXSwgW1wiY29sXCIsIFwiMVwiLCBcInRleHRcIiwgXCJIb21lXCIsIDEsIFwicC1yLTEwXCJdLCBbXCJjb2xcIiwgXCIwXCIsIFwidGV4dFwiLCBcIlxcdUYxRUFcIiwgMSwgXCJudC1pY29uXCIsIFwiZmFyXCJdLCBbXCJjb2xcIiwgXCIxXCIsIFwidGV4dFwiLCBcIkJyb3dzZVwiLCAxLCBcInAtci0xMFwiXSwgW1wiY29sXCIsIFwiMFwiLCBcInRleHRcIiwgXCJcXHVGMDAyXCIsIDEsIFwibnQtaWNvblwiLCBcImZhc1wiXSwgW1wiY29sXCIsIFwiMVwiLCBcInRleHRcIiwgXCJTZWFyY2hcIiwgMSwgXCJwLXItMTBcIl0sIFtcImNvbFwiLCBcIjBcIiwgXCJ0ZXh0XCIsIFwiXFx1RjAwNVwiLCAxLCBcIm50LWljb25cIiwgXCJmYXNcIl0sIFtcImNvbFwiLCBcIjFcIiwgXCJ0ZXh0XCIsIFwiRmVhdHVyZWRcIiwgMSwgXCJwLXItMTBcIl0sIFsxLCBcImhyXCJdLCBbXCJjb2xcIiwgXCIwXCIsIFwidGV4dFwiLCBcIlxcdUYwMTNcIiwgMSwgXCJudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJjb2xcIiwgXCIxXCIsIFwidGV4dFwiLCBcIlNldHRpbmdzXCIsIDEsIFwicC1yLTEwXCJdLCBbXCJjb2xcIiwgXCIwXCIsIFwidGV4dFwiLCBcIlxcdUYyRjVcIiwgMSwgXCJudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJjb2xcIiwgXCIxXCIsIFwidGV4dFwiLCBcIkxvZ291dFwiLCAxLCBcInAtci0xMFwiXSwgW1widGtNYWluQ29udGVudFwiLCBcIlwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBBcHBDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJSYWRTaWRlRHJhd2VyXCIsIDApKDEsIFwiR3JpZExheW91dFwiLCAxKSgyLCBcIlN0YWNrTGF5b3V0XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkltYWdlXCIsIDMpKDQsIFwiTGFiZWxcIiwgNCkoNSwgXCJMYWJlbFwiLCA1KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg2LCBcIlNjcm9sbFZpZXdcIiwgNikoNywgXCJTdGFja0xheW91dFwiKSg4LCBcIkdyaWRMYXlvdXRcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBBcHBDb21wb25lbnRfVGVtcGxhdGVfR3JpZExheW91dF90YXBfOF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbk5hdkl0ZW1UYXAoXCIvaG9tZVwiKTsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDksIFwiTGFiZWxcIiwgOCkoMTAsIFwiTGFiZWxcIiwgOSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTEsIFwiR3JpZExheW91dFwiLCA3KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEFwcENvbXBvbmVudF9UZW1wbGF0ZV9HcmlkTGF5b3V0X3RhcF8xMV9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbk5hdkl0ZW1UYXAoXCIvYnJvd3NlXCIpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTIsIFwiTGFiZWxcIiwgMTApKDEzLCBcIkxhYmVsXCIsIDExKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxNCwgXCJHcmlkTGF5b3V0XCIsIDcpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gQXBwQ29tcG9uZW50X1RlbXBsYXRlX0dyaWRMYXlvdXRfdGFwXzE0X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uTmF2SXRlbVRhcChcIi9zZWFyY2hcIik7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxNSwgXCJMYWJlbFwiLCAxMikoMTYsIFwiTGFiZWxcIiwgMTMpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE3LCBcIkdyaWRMYXlvdXRcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBBcHBDb21wb25lbnRfVGVtcGxhdGVfR3JpZExheW91dF90YXBfMTdfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25OYXZJdGVtVGFwKFwiL2ZlYXR1cmVkXCIpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTgsIFwiTGFiZWxcIiwgMTQpKDE5LCBcIkxhYmVsXCIsIDE1KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMjAsIFwiU3RhY2tMYXlvdXRcIiwgMTYpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIxLCBcIkdyaWRMYXlvdXRcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBBcHBDb21wb25lbnRfVGVtcGxhdGVfR3JpZExheW91dF90YXBfMjFfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25OYXZJdGVtVGFwKFwiL3NldHRpbmdzXCIpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMjIsIFwiTGFiZWxcIiwgMTcpKDIzLCBcIkxhYmVsXCIsIDE4KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyNCwgXCJHcmlkTGF5b3V0XCIsIDcpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gQXBwQ29tcG9uZW50X1RlbXBsYXRlX0dyaWRMYXlvdXRfdGFwXzI0X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4LmxvZ291dCgpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMjUsIFwiTGFiZWxcIiwgMTkpKDI2LCBcIkxhYmVsXCIsIDIwKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyNywgXCJHcmlkTGF5b3V0XCIsIDIxKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMjgsIFwicGFnZS1yb3V0ZXItb3V0bGV0XCIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcImRyYXdlclRyYW5zaXRpb25cIiwgY3R4LnNpZGVEcmF3ZXJUcmFuc2l0aW9uKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoOCk7XG4gICAgICAgIGkwLsm1ybVjbGFzc1Byb3AoXCItc2VsZWN0ZWRcIiwgY3R4LmlzQ29tcG9uZW50U2VsZWN0ZWQoXCIvaG9tZVwiKSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1Y2xhc3NQcm9wKFwiLXNlbGVjdGVkXCIsIGN0eC5pc0NvbXBvbmVudFNlbGVjdGVkKFwiL2Jyb3dzZVwiKSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1Y2xhc3NQcm9wKFwiLXNlbGVjdGVkXCIsIGN0eC5pc0NvbXBvbmVudFNlbGVjdGVkKFwiL3NlYXJjaFwiKSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1Y2xhc3NQcm9wKFwiLXNlbGVjdGVkXCIsIGN0eC5pc0NvbXBvbmVudFNlbGVjdGVkKFwiL2ZlYXR1cmVkXCIpKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoNCk7XG4gICAgICAgIGkwLsm1ybVjbGFzc1Byb3AoXCItc2VsZWN0ZWRcIiwgY3R4LmlzQ29tcG9uZW50U2VsZWN0ZWQoXCIvc2V0dGluZ3NcIikpO1xuICAgIH0gfSwgZGVwZW5kZW5jaWVzOiBbaTMuUGFnZVJvdXRlck91dGxldCwgaTQuUmFkU2lkZURyYXdlckNvbXBvbmVudCwgaTQuVEtEcmF3ZXJDb250ZW50RGlyZWN0aXZlLCBpNC5US01haW5Db250ZW50RGlyZWN0aXZlXSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcbiIsImltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHsgfVxuICAgIG9uTG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU2lnbnVwKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWdpc3RlciddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG5Mb2dpbkNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIExvZ2luQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IExvZ2luQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLkF1dGhlbnRpY2F0aW9uU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTIuUm91dGVyRXh0ZW5zaW9ucykpOyB9O1xuTG9naW5Db21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBMb2dpbkNvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiTG9naW5cIl1dLCBkZWNsczogOSwgdmFyczogNCwgY29uc3RzOiBbW1wicm93c1wiLCBcIiosIGF1dG9cIiwgMSwgXCJsb2dpbi1jb250YWluZXJcIl0sIFtcInJvd1wiLCBcIjBcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCAxLCBcImZvcm1cIl0sIFsxLCBcImlucHV0LWNvbnRhaW5lclwiXSwgW1wiaGludFwiLCBcIlVzZXJuYW1lXCIsIDEsIFwiaW5wdXRcIiwgMiwgXCJwYWRkaW5nXCIsIFwiMTAgMjBcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1wiaGludFwiLCBcIlBhc3N3b3JkXCIsIFwic2VjdXJlXCIsIFwidHJ1ZVwiLCAxLCBcImlucHV0XCIsIDIsIFwicGFkZGluZ1wiLCBcIjEwIDIwXCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcInRleHRcIiwgXCJMb2dpblwiLCAxLCBcImJ1dHRvblwiLCAzLCBcImlzRW5hYmxlZFwiLCBcInRhcFwiXSwgWzMsIFwiYnVzeVwiXSwgW1widGV4dFwiLCBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cFwiLCBcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJzaWdudXAtbGFiZWxcIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gTG9naW5Db21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJHcmlkTGF5b3V0XCIsIDApKDEsIFwiU3RhY2tMYXlvdXRcIiwgMSkoMiwgXCJTdGFja0xheW91dFwiLCAyKSgzLCBcIlRleHRGaWVsZFwiLCAzKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibmdNb2RlbENoYW5nZVwiLCBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudF9UZW1wbGF0ZV9UZXh0RmllbGRfbmdNb2RlbENoYW5nZV8zX2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LnVzZXJuYW1lID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiU3RhY2tMYXlvdXRcIiwgMikoNSwgXCJUZXh0RmllbGRcIiwgNCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gTG9naW5Db21wb25lbnRfVGVtcGxhdGVfVGV4dEZpZWxkX25nTW9kZWxDaGFuZ2VfNV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5wYXNzd29yZCA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg2LCBcIkJ1dHRvblwiLCA1KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIExvZ2luQ29tcG9uZW50X1RlbXBsYXRlX0J1dHRvbl90YXBfNl9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkxvZ2luKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg3LCBcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIDYpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDgsIFwiTGFiZWxcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfOF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vblNpZ251cCgpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC51c2VybmFtZSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5wYXNzd29yZCk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJpc0VuYWJsZWRcIiwgIWN0eC5pc0xvYWRpbmcpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5SW50ZXJwb2xhdGUoXCJidXN5XCIsIGN0eC5pc0xvYWRpbmcpO1xuICAgIH0gfSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcbiIsImltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBvblJlZ2lzdGVyKCkge1xuICAgICAgICAvLyBQZXJmb3JtIHJlZ2lzdGVyIGxvZ2ljIGhlcmUsIGUuZy4gY2FsbGluZyBhbiBBUEkgdG8gY3JlYXRlIGEgbmV3IHVzZXJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbih0aGlzLm5hbWUsIHRoaXMucGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPbmNlIHJlZ2lzdGVyIGlzIGNvbXBsZXRlLCBuYXZpZ2F0ZSB0byB0aGUgaG9tZSBwYWdlXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9ob21lJyk7XG4gICAgfVxuICAgIGdvVG9Mb2dpbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gICAgfVxufVxuUmVnaXN0ZXJDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBSZWdpc3RlckNvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBSZWdpc3RlckNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5BdXRoZW50aWNhdGlvblNlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyLlJvdXRlckV4dGVuc2lvbnMpKTsgfTtcblJlZ2lzdGVyQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogUmVnaXN0ZXJDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIlJlZ2lzdGVyXCJdXSwgZGVjbHM6IDEzLCB2YXJzOiA2LCBjb25zdHM6IFtbXCJyb3dzXCIsIFwiKiwgYXV0b1wiLCAxLCBcImxvZ2luLWNvbnRhaW5lclwiXSwgW1wicm93XCIsIFwiMFwiLCBcInZlcnRpY2FsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIDEsIFwiZm9ybVwiXSwgWzEsIFwiaW5wdXQtY29udGFpbmVyXCJdLCBbXCJoaW50XCIsIFwiRnVsbCBOYW1lXCIsIDEsIFwiaW5wdXRcIiwgMiwgXCJwYWRkaW5nXCIsIFwiMTAgMjBcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1wiaGludFwiLCBcIkVtYWlsXCIsIDEsIFwiaW5wdXRcIiwgMiwgXCJwYWRkaW5nXCIsIFwiMTAgMjBcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1wiaGludFwiLCBcIlBhc3N3b3JkXCIsIFwic2VjdXJlXCIsIFwidHJ1ZVwiLCAxLCBcImlucHV0XCIsIDIsIFwicGFkZGluZ1wiLCBcIjEwIDIwXCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcImhpbnRcIiwgXCJDb25maXJtIFBhc3N3b3JkXCIsIFwic2VjdXJlXCIsIFwidHJ1ZVwiLCAxLCBcImlucHV0XCIsIDIsIFwicGFkZGluZ1wiLCBcIjEwIDIwXCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcInRleHRcIiwgXCJSZWdpc3RlclwiLCAxLCBcImJ1dHRvblwiLCAzLCBcImlzRW5hYmxlZFwiLCBcInRhcFwiXSwgWzMsIFwiYnVzeVwiXSwgW1widGV4dFwiLCBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBHbyB0byBsb2dpblwiLCBcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJsb2dpbi1sYWJlbFwiLCAzLCBcInRhcFwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBSZWdpc3RlckNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkdyaWRMYXlvdXRcIiwgMCkoMSwgXCJTdGFja0xheW91dFwiLCAxKSgyLCBcIlN0YWNrTGF5b3V0XCIsIDIpKDMsIFwiVGV4dEZpZWxkXCIsIDMpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJuZ01vZGVsQ2hhbmdlXCIsIGZ1bmN0aW9uIFJlZ2lzdGVyQ29tcG9uZW50X1RlbXBsYXRlX1RleHRGaWVsZF9uZ01vZGVsQ2hhbmdlXzNfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgubmFtZSA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg0LCBcIlN0YWNrTGF5b3V0XCIsIDIpKDUsIFwiVGV4dEZpZWxkXCIsIDQpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJuZ01vZGVsQ2hhbmdlXCIsIGZ1bmN0aW9uIFJlZ2lzdGVyQ29tcG9uZW50X1RlbXBsYXRlX1RleHRGaWVsZF9uZ01vZGVsQ2hhbmdlXzVfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguZW1haWwgPSAkZXZlbnQ7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNiwgXCJTdGFja0xheW91dFwiLCAyKSg3LCBcIlRleHRGaWVsZFwiLCA1KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibmdNb2RlbENoYW5nZVwiLCBmdW5jdGlvbiBSZWdpc3RlckNvbXBvbmVudF9UZW1wbGF0ZV9UZXh0RmllbGRfbmdNb2RlbENoYW5nZV83X2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LnBhc3N3b3JkID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDgsIFwiU3RhY2tMYXlvdXRcIiwgMikoOSwgXCJUZXh0RmllbGRcIiwgNik7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gUmVnaXN0ZXJDb21wb25lbnRfVGVtcGxhdGVfVGV4dEZpZWxkX25nTW9kZWxDaGFuZ2VfOV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5jb25maXJtUGFzc3dvcmQgPSAkZXZlbnQ7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTAsIFwiQnV0dG9uXCIsIDcpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gUmVnaXN0ZXJDb21wb25lbnRfVGVtcGxhdGVfQnV0dG9uX3RhcF8xMF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vblJlZ2lzdGVyKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxMSwgXCJBY3Rpdml0eUluZGljYXRvclwiLCA4KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMiwgXCJMYWJlbFwiLCA5KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFJlZ2lzdGVyQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF8xMl9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5nb1RvTG9naW4oKTsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKSgpO1xuICAgIH0gaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgzKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdNb2RlbFwiLCBjdHgubmFtZSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5lbWFpbCk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5wYXNzd29yZCk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5jb25maXJtUGFzc3dvcmQpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwiaXNFbmFibGVkXCIsICFjdHguaXNMb2FkaW5nKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eUludGVycG9sYXRlKFwiYnVzeVwiLCBjdHguaXNMb2FkaW5nKTtcbiAgICB9IH0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XG4iLCJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuZXhwb3J0IGNsYXNzIEF1dGhvcml6ZWRPbmx5R3VhcmQge1xuICAgIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgY2FuQWN0aXZhdGUobmV4dCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5BdXRob3JpemVkT25seUd1YXJkLsm1ZmFjID0gZnVuY3Rpb24gQXV0aG9yaXplZE9ubHlHdWFyZF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBBdXRob3JpemVkT25seUd1YXJkKShpMC7Jtcm1aW5qZWN0KGkxLkF1dGhlbnRpY2F0aW9uU2VydmljZSksIGkwLsm1ybVpbmplY3QoaTIuUm91dGVyKSk7IH07XG5BdXRob3JpemVkT25seUd1YXJkLsm1cHJvdiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdGFibGUoeyB0b2tlbjogQXV0aG9yaXplZE9ubHlHdWFyZCwgZmFjdG9yeTogQXV0aG9yaXplZE9ubHlHdWFyZC7JtWZhYywgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pO1xuIiwiaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIC8vIENhbGwgeW91ciBhdXRoZW50aWNhdGlvbiBBUEkgaGVyZSBhbmQgc2V0IGF1dGhlbnRpY2F0ZWQgdG8gdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gQ2FsbCB5b3VyIGxvZ291dCBBUEkgaGVyZSBhbmQgc2V0IGF1dGhlbnRpY2F0ZWQgdG8gZmFsc2VcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfVxufVxuQXV0aGVudGljYXRpb25TZXJ2aWNlLsm1ZmFjID0gZnVuY3Rpb24gQXV0aGVudGljYXRpb25TZXJ2aWNlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEF1dGhlbnRpY2F0aW9uU2VydmljZSkoKTsgfTtcbkF1dGhlbnRpY2F0aW9uU2VydmljZS7JtXByb3YgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHsgdG9rZW46IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgZmFjdG9yeTogQXV0aGVudGljYXRpb25TZXJ2aWNlLsm1ZmFjLCBwcm92aWRlZEluOiAncm9vdCcgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=