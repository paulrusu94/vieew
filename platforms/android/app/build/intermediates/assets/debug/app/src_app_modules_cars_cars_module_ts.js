"use strict";
exports.id = "src_app_modules_cars_cars_module_ts";
exports.ids = ["src_app_modules_cars_cars_module_ts"];
exports.modules = {

/***/ "./src/app/modules/cars/car-detail-edit/car-detail-edit.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailEditComponent": () => (/* binding */ CarDetailEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.android.js");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/shared/car-edit.service.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/modules/cars/shared/car.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/modules/cars/car-detail-edit/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@angular/common/fesm2015/common.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/modules/cars/car-detail-edit/my-list-selector/my-list-selector.component.ts");
/* harmony import */ var _my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/modules/cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts");














function CarDetailEditComponent_Label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "Label", 35);
} }
class CarDetailEditComponent {
    constructor(_carService, _carEditService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._carEditService = _carEditService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
        this._carClassOptions = [];
        this._carDoorOptions = [];
        this._carSeatOptions = [];
        this._carTransmissionOptions = [];
        this._isCarImageDirty = false;
        this._isUpdating = false;
    }
    ngOnInit() {
        this.initializeEditOptions();
        this._pageRoute.activatedRoute
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
            const carId = params.id;
            this._car = this._carEditService.startEdit(carId);
        });
    }
    get isUpdating() {
        return this._isUpdating;
    }
    get car() {
        return this._car;
    }
    get pricePerDay() {
        return this._car.price;
    }
    set pricePerDay(value) {
        // force iOS UISlider to work with discrete steps
        this._car.price = Math.round(value);
    }
    get luggageValue() {
        return this._car.luggage;
    }
    set luggageValue(value) {
        // force iOS UISlider to work with discrete steps
        this._car.luggage = Math.round(value);
    }
    get carClassOptions() {
        return this._carClassOptions;
    }
    get carDoorOptions() {
        return this._carDoorOptions;
    }
    get carSeatOptions() {
        return this._carSeatOptions;
    }
    get carTransmissionOptions() {
        return this._carTransmissionOptions;
    }
    get carImageUrl() {
        return this._car.imageUrl;
    }
    set carImageUrl(value) {
        this._car.imageUrl = value;
        this._isCarImageDirty = true;
    }
    onCancelButtonTap() {
        this._routerExtensions.backToPreviousPage();
    }
    onDoneButtonTap() {
        /* ***********************************************************
         * By design this app is set up to work with read-only sample data.
         * Follow the steps in the "Firebase database setup" section in app/readme.md file
         * and uncomment the code block below to make it editable.
         *************************************************************/
        /* ***********************************************************
            let queue = Promise.resolve();
    
            this._isUpdating = true;
    
            if (this._isCarImageDirty && this._car.imageUrl) {
                queue = queue
                    .then(() => this._carService.uploadImage(this._car.imageStoragePath, this._car.imageUrl))
                    .then((uploadedFile: any) => {
                        this._car.imageUrl = uploadedFile.url;
                    });
            }
    
            queue.then(() => this._carService.update(this._car))
                .then(() => {
                    this._isUpdating = false;
                    this._routerExtensions.navigate(["/cars"], {
                        clearHistory: true,
                        animated: true,
                        transition: {
                            name: "slideBottom",
                            duration: 200,
                            curve: "ease"
                        }
                    });
                })
                .catch((errorMessage: any) => {
                    this._isUpdating = false;
                    Dialogs.alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
                });
            *************************************************************/
        /* ***********************************************************
         * Comment out the code block below if you made the app editable.
         *************************************************************/
        const readOnlyMessage = 'Check out the "Firebase database setup" section in the readme file to make it editable.';
        const queue = Promise.resolve();
        queue
            .then(() => _nativescript_core__WEBPACK_IMPORTED_MODULE_7__.Dialogs.alert({
            title: 'Read-Only Template!',
            message: readOnlyMessage,
            okButtonText: 'Ok',
        }))
            .then(() => this._routerExtensions.navigate(['/cars'], {
            clearHistory: true,
            animated: true,
            transition: {
                name: 'slideBottom',
                duration: 200,
                curve: 'ease',
            },
        }));
    }
    initializeEditOptions() {
        for (const classItem of _constants__WEBPACK_IMPORTED_MODULE_2__.carClassList) {
            this._carClassOptions.push(classItem);
        }
        for (const doorItem of _constants__WEBPACK_IMPORTED_MODULE_2__.carDoorList) {
            this._carDoorOptions.push(doorItem);
        }
        for (const seatItem of _constants__WEBPACK_IMPORTED_MODULE_2__.carSeatList) {
            this._carSeatOptions.push(seatItem);
        }
        for (const transmissionItem of _constants__WEBPACK_IMPORTED_MODULE_2__.carTransmissionList) {
            this._carTransmissionOptions.push(transmissionItem);
        }
    }
}
CarDetailEditComponent.ɵfac = function CarDetailEditComponent_Factory(t) { return new (t || CarDetailEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_car_service__WEBPACK_IMPORTED_MODULE_1__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_car_edit_service__WEBPACK_IMPORTED_MODULE_0__.CarEditService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.PageRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.RouterExtensions)); };
CarDetailEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CarDetailEditComponent, selectors: [["CarDetailEdit"]], decls: 46, vars: 18, consts: [["visibility", "collapsed"], ["ios.position", "left", 3, "tap"], ["text", "Cancel"], ["text", "Edit Car Details", "horizontalAlignment", "center"], ["ios.position", "right"], ["text", "Done", "verticalAlignment", "center", 1, "action-item", 3, "isEnabled", "isUserInteractionEnabled", "tap"], [1, "car-list"], ["text", "CAR MAKE", 1, "car-list-odd"], ["hint", "Car make field is required", "required", "", 1, "car-list-even", 3, "ngModel", "ngModelChange"], ["makeModel", "ngModel"], ["rows", "*, 55, *", "columns", "*, auto", 1, "car-list-odd"], ["text", "PRICE PER DAY"], ["col", "1", "horizontalAlignment", "right", 1, "car-list__value"], ["text", "\u20AC"], [3, "text"], ["row", "1", "colSpan", "2", "verticalAlignment", "center"], [3, "ngModel", "ngModelChange"], ["text", "ADD OR REMOVE IMAGE", "row", "2", "colSpan", "2"], [1, "car-list-even"], ["required", "", 3, "ngModel", "ngModelChange"], ["imageModel", "ngModel"], ["class", "c-error", "text", "Image field is required", 4, "ngIf"], ["text", "CLASS", 1, "car-list-odd"], ["tag", "class", 3, "selectedValue", "items", "selectedValueChange"], ["text", "DOORS", 1, "car-list-odd"], ["tag", "doors", 3, "selectedValue", "items", "selectedValueChange"], ["text", "SEATS", 1, "car-list-odd"], ["tag", "seats", 3, "selectedValue", "items", "selectedValueChange"], ["text", "TRANSMISSION", 1, "car-list-odd"], ["tag", "transmission", 3, "selectedValue", "items", "selectedValueChange"], ["rows", "*, 55", "columns", "*, auto", 1, "car-list-odd"], ["text", "LUGGAGE"], ["text", " Bag(s)"], ["row", "1", "colSpan", "2", "minValue", "0", "maxValue", "5", 3, "ngModel", "ngModelChange"], [3, "busy"], ["text", "Image field is required", 1, "c-error"]], template: function CarDetailEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ActionBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "NavigationButton", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ActionItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function CarDetailEditComponent_Template_ActionItem_tap_2_listener() { return ctx.onCancelButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ActionItem", 4)(6, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function CarDetailEditComponent_Template_Label_tap_6_listener() { return ctx.onDoneButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "GridLayout")(8, "ScrollView")(9, "StackLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "TextField", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CarDetailEditComponent_Template_TextField_ngModelChange_11_listener($event) { return ctx.car.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "GridLayout", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "Label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "Label", 12)(16, "FormattedString");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "Span", 13)(18, "Span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "StackLayout", 15)(20, "Slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CarDetailEditComponent_Template_Slider_ngModelChange_20_listener($event) { return ctx.pricePerDay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "Label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "StackLayout", 18)(23, "MyImageAddRemove", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CarDetailEditComponent_Template_MyImageAddRemove_ngModelChange_23_listener($event) { return ctx.carImageUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CarDetailEditComponent_Label_25_Template, 1, 0, "Label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "Label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "StackLayout", 18)(28, "MyListSelector", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedValueChange", function CarDetailEditComponent_Template_MyListSelector_selectedValueChange_28_listener($event) { return ctx.car.class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "Label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "StackLayout", 18)(31, "MyListSelector", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedValueChange", function CarDetailEditComponent_Template_MyListSelector_selectedValueChange_31_listener($event) { return ctx.car.doors = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "Label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "StackLayout", 18)(34, "MyListSelector", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedValueChange", function CarDetailEditComponent_Template_MyListSelector_selectedValueChange_34_listener($event) { return ctx.car.seats = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "Label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "StackLayout", 18)(37, "MyListSelector", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedValueChange", function CarDetailEditComponent_Template_MyListSelector_selectedValueChange_37_listener($event) { return ctx.car.transmission = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "GridLayout", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "Label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "Label", 12)(41, "FormattedString");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "Span", 14)(43, "Span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "Slider", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CarDetailEditComponent_Template_Slider_ngModelChange_44_listener($event) { return ctx.luggageValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ActivityIndicator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isEnabled", _r0.valid && _r1.valid)("isUserInteractionEnabled", _r0.valid && _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.car.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", ctx.pricePerDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.pricePerDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.carImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedValue", ctx.car.class)("items", ctx.carClassOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedValue", ctx.car.doors)("items", ctx.carDoorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedValue", ctx.car.seats)("items", ctx.carSeatOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedValue", ctx.car.transmission)("items", ctx.carTransmissionOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", ctx.luggageValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.luggageValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("busy", ctx.isUpdating);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.ActionItemDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.NavigationButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_3__.MyListSelectorComponent, _my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__.MyImageAddRemoveComponent], styles: ["@keyframes _ngcontent-%COMP%_empty {}\n\n\n.car-list-even[_ngcontent-%COMP%], .car-list-odd[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .car-list-even[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-even[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  padding: 10 15;\n  margin: 0;\n  margin-bottom: 0;\n  border-bottom-width: 1;\n  border-color: #cccccc;\n}\n.ns-dark[_ngcontent-%COMP%]   .car-list-even[_ngcontent-%COMP%], .ns-dark[_ngcontent-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .car-list-even[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-even[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  border-color: #636363;\n}\n.car-list-odd[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  color: black;\n}\n.ns-dark[_ngcontent-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n  color: #b3b3b3;\n}\n.car-list__value[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .car-list__value[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list__value[_ngcontent-%COMP%] {\n  width: 65;\n  text-align: right;\n  color: #0726ff;\n}\n.ns-dark[_ngcontent-%COMP%]   .car-list__value[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .car-list__value[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list__value[_ngcontent-%COMP%] {\n  color: #bcc4f7;\n}\n.car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%] {\n  background-color: #3a53ff;\n  color: #3a53ff;\n}\n.ns-dark[_ngcontent-%COMP%]   .car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .car-list[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%] {\n  background-color: #8f9cf1;\n  color: #8f9cf1;\n}"] });


/***/ }),

/***/ "./src/app/modules/cars/car-detail-edit/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carClassList": () => (/* binding */ carClassList),
/* harmony export */   "carDoorList": () => (/* binding */ carDoorList),
/* harmony export */   "carSeatList": () => (/* binding */ carSeatList),
/* harmony export */   "carTransmissionList": () => (/* binding */ carTransmissionList)
/* harmony export */ });
const carClassList = ['Mini', 'Economy', 'Compact', 'Standard', 'Luxury'];
const carDoorList = [2, 3, 5];
const carSeatList = ['2', '4', '4 + 1', '6 + 1'];
const carTransmissionList = ['Manual', 'Automatic'];


/***/ }),

/***/ "./src/app/modules/cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyImageAddRemoveComponent": () => (/* binding */ MyImageAddRemoveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nativescript/imagepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/file-system/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/image-source/index.android.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@angular/common/fesm2015/common.mjs");






function MyImageAddRemoveComponent_GridLayout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "GridLayout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "Label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyImageAddRemoveComponent_GridLayout_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "GridLayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "Label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const tempImageFolderName = 'nsimagepicker';
const noop = () => { };
const MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MyImageAddRemoveComponent),
    multi: true,
};
/* ***********************************************************
 * The MyImageAddRemove custom component uses an imagepicker plugin to let the user select
 * an image and provides custom logic and design to the process.
 *************************************************************/
class MyImageAddRemoveComponent {
    constructor() {
        // placeholder for the callback later provided by the ControlValueAccessor
        this.propagateChange = noop;
        this.innerImageUrl = '';
    }
    static get imageTempFolder() {
        return _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.knownFolders.temp().getFolder(tempImageFolderName);
    }
    static clearImageTempFolder() {
        MyImageAddRemoveComponent.imageTempFolder.clear();
    }
    get imageUrl() {
        return this.innerImageUrl;
    }
    set imageUrl(value) {
        if (this.innerImageUrl !== value) {
            this.innerImageUrl = value;
            this.propagateChange(value);
        }
    }
    // ControlValueAccessor implementation
    writeValue(value) {
        if (this.innerImageUrl !== value) {
            this.innerImageUrl = value;
        }
    }
    // ControlValueAccessor implementation
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // ControlValueAccessor implementation
    registerOnTouched(fn) { }
    onImageAddRemoveTap() {
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        MyImageAddRemoveComponent.clearImageTempFolder();
        this.pickImage();
    }
    pickImage() {
        const context = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nativescript/imagepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            mode: 'single',
        });
        context
            .authorize()
            .then(() => context.present())
            .then((selection) => selection.forEach((selectedAsset) => {
            selectedAsset.options.height = 768;
            _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.ImageSource.fromAsset(selectedAsset).then((imageSource) => this.handleImageChange(imageSource));
        }))
            .catch((errorMessage) => console.log(errorMessage));
    }
    handleImageChange(source) {
        let raisePropertyChange = true;
        let tempImagePath = null;
        if (source) {
            tempImagePath = _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.path.join(MyImageAddRemoveComponent.imageTempFolder.path, `${Date.now()}.jpg`);
            raisePropertyChange = source.saveToFile(tempImagePath, 'jpeg');
        }
        if (raisePropertyChange) {
            this.imageUrl = tempImagePath;
        }
    }
}
MyImageAddRemoveComponent.ɵfac = function MyImageAddRemoveComponent_Factory(t) { return new (t || MyImageAddRemoveComponent)(); };
MyImageAddRemoveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyImageAddRemoveComponent, selectors: [["MyImageAddRemove"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR])], decls: 3, vars: 3, consts: [["height", "80", "width", "80", "horizontalAlignment", "left", 1, "thumb", 3, "backgroundImage", "tap"], ["class", "thumb__remove", 4, "ngIf"], ["class", "thumb__add", 4, "ngIf"], [1, "thumb__remove"], ["text", "\uF2ED", "horizontalAlignment", "center", "verticalAlignment", "center", 1, "far"], [1, "thumb__add"], ["text", "\uF030", "horizontalAlignment", "center", "verticalAlignment", "center", 1, "fas"]], template: function MyImageAddRemoveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "GridLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function MyImageAddRemoveComponent_Template_GridLayout_tap_0_listener() { return ctx.onImageAddRemoveTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyImageAddRemoveComponent_GridLayout_1_Template, 2, 0, "GridLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyImageAddRemoveComponent_GridLayout_2_Template, 2, 0, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("backgroundImage", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imageUrl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["@keyframes _ngcontent-%COMP%_empty {}\n\n\n.thumb[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .thumb[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-size: 25;\n  font-weight: bold;\n}\n.thumb__add[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .thumb__add[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .thumb__add[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 4;\n  border-width: 1;\n  border-color: #cccccc;\n  color: #cccccc;\n}\n.ns-dark[_ngcontent-%COMP%]   .thumb__add[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .thumb__add[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .thumb__add[_ngcontent-%COMP%] {\n  border-color: #636363;\n  color: #636363;\n}\n.thumb__remove[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .thumb__remove[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .thumb__remove[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.5);\n  color: #fff;\n}\n.ns-dark[_ngcontent-%COMP%]   .thumb__remove[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .thumb__remove[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .thumb__remove[_ngcontent-%COMP%] {\n  color: #303030;\n}"] });


/***/ }),

/***/ "./src/app/modules/cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyListSelectorModalViewComponent": () => (/* binding */ MyListSelectorModalViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/nativescript-ui-listview/angular/fesm2015/nativescript-ui-listview-angular.mjs");




function MyListSelectorModalViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 5)(1, "GridLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 7)(3, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "GridLayout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 10)(6, "Label", 11)(7, "Label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visibility", item_r1.isSelected ? "visible" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visibility", item_r1.isSelected ? "collapsed" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visibility", item_r1.isSelected ? "visible" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r1.value);
} }
class MyListSelectorModalViewComponent {
    constructor(_params) {
        this._params = _params;
        this._title = _params.context.title;
        this._selectedIndex = _params.context.selectedIndex;
        this._items = [];
        for (let i = 0; i < _params.context.items.length; i++) {
            this._items.push({
                value: _params.context.items[i],
                isSelected: i === this._selectedIndex ? true : false,
            });
        }
    }
    onItemSelected(args) {
        const oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        const newSelectedItem = this._items[args.index];
        newSelectedItem.isSelected = true;
        this._selectedIndex = args.index;
        this._params.closeCallback(newSelectedItem.value);
    }
    onCancelButtonTap() {
        this._params.closeCallback(null);
    }
    get items() {
        return this._items;
    }
    get title() {
        return this._title;
    }
}
MyListSelectorModalViewComponent.ɵfac = function MyListSelectorModalViewComponent_Factory(t) { return new (t || MyListSelectorModalViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__.ModalDialogParams)); };
MyListSelectorModalViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyListSelectorModalViewComponent, selectors: [["MyListSelectorModalView"]], decls: 5, vars: 2, consts: [["rows", "auto, *, auto", "verticalAlignment", "top", 1, "modal-input"], [1, "h3", "modal-input__header", 3, "text"], ["row", "1", "selectionBehavior", "Press", 1, "modal-input__list", 3, "items", "itemSelected"], ["tkListItemTemplate", ""], ["row", "3", "text", "CANCEL", 0, "ios", "visibility", "collapsed", "horizontalAlignment", "right", 1, "-outline", 3, "tap"], [1, "modal-input__list-item"], [0, "android", "visibility", "collapsed", "columns", "*,auto"], [3, "text"], ["col", "1", "text", "\uF00C", 1, "fas", "modal-input__list-check", 3, "visibility"], [0, "ios", "visibility", "collapsed", "columns", "auto,*"], ["text", "\uF111", "verticalAlignment", "center", 1, "far", "modal-input__list-icon", 3, "visibility"], ["text", "\uF192", "verticalAlignment", "center", 1, "far", "modal-input__list-icon", "selected", 3, "visibility"], ["col", "1", 3, "text"]], template: function MyListSelectorModalViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "RadListView", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemSelected", function MyListSelectorModalViewComponent_Template_RadListView_itemSelected_2_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyListSelectorModalViewComponent_ng_template_3_Template, 8, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "Button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function MyListSelectorModalViewComponent_Template_Button_tap_4_listener() { return ctx.onCancelButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, dependencies: [nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__.RadListViewComponent, nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__.TKListViewItemDirective], styles: ["@keyframes _ngcontent-%COMP%_empty {}\n\n\n.modal-input[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  color: #262626;\n}\n.ns-dark[_ngcontent-%COMP%]   .modal-input[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n  color: white;\n}\n.modal-input__list-item[_ngcontent-%COMP%] {\n  vertical-align: center;\n}"] });


/***/ }),

/***/ "./src/app/modules/cars/car-detail-edit/my-list-selector/my-list-selector.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyListSelectorComponent": () => (/* binding */ MyListSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/shared/car-edit.service.ts");
/* harmony import */ var _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/modules/cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts");








const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
class MyListSelectorComponent {
    constructor(_pageRoute, _modalService, _vcRef, _carEditService) {
        this._pageRoute = _pageRoute;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this._carEditService = _carEditService;
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        let carId = '';
        this._pageRoute.activatedRoute
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
            carId = params.id;
        });
        this._carEditModel = this._carEditService.getEditableCarById(carId);
    }
    onSelectorTap() {
        const title = `Select Car ${capitalizeFirstLetter(this.tag)}`;
        const selectedIndex = this.items.indexOf(this.selectedValue);
        const options = {
            viewContainerRef: this._vcRef,
            context: {
                items: this.items,
                title,
                selectedIndex,
            },
            fullscreen: false,
        };
        this._modalService
            .showModal(_my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_1__.MyListSelectorModalViewComponent, options)
            .then((selectedValue) => {
            if (selectedValue) {
                this.selectedValue = selectedValue;
                this.selectedValueChange.emit(this.selectedValue);
            }
        });
    }
}
MyListSelectorComponent.ɵfac = function MyListSelectorComponent_Factory(t) { return new (t || MyListSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.PageRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.ModalDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_car_edit_service__WEBPACK_IMPORTED_MODULE_0__.CarEditService)); };
MyListSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyListSelectorComponent, selectors: [["MyListSelector"]], inputs: { tag: "tag", items: "items", selectedValue: "selectedValue" }, outputs: { selectedValueChange: "selectedValueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.ModalDialogService])], decls: 3, vars: 1, consts: [["columns", "*, auto", 3, "tap"], [3, "text"], ["text", "\uF054", "col", "1", "horizontalAlignment", "center", "verticalAlignment", "center", 1, "fas"]], template: function MyListSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "GridLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function MyListSelectorComponent_Template_GridLayout_tap_0_listener() { return ctx.onSelectorTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "Label", 1)(2, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.selectedValue);
    } }, encapsulation: 2 });


/***/ }),

/***/ "./src/app/modules/cars/car-detail/car-detail.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailComponent": () => (/* binding */ CarDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/shared/car.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");






class CarDetailComponent {
    constructor(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    ngOnInit() {
        this._pageRoute.activatedRoute
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
            const carId = params.id;
            this._car = this._carService.getCarById(carId);
        });
    }
    get car() {
        return this._car;
    }
    onBackButtonTap() {
        this._routerExtensions.backToPreviousPage();
    }
    onEditButtonTap() {
        this._routerExtensions.navigate(['/cars/car-detail-edit', this._car.id], {
            animated: true,
            transition: {
                name: 'slideTop',
                duration: 200,
                curve: 'ease',
            },
        });
    }
}
CarDetailComponent.ɵfac = function CarDetailComponent_Factory(t) { return new (t || CarDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_car_service__WEBPACK_IMPORTED_MODULE_0__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.PageRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.RouterExtensions)); };
CarDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarDetailComponent, selectors: [["CarDetail"]], decls: 27, vars: 8, consts: [["android.systemIcon", "ic_menu_back", 3, "tap"], ["horizontalAlignment", "center", 3, "text"], ["ios.position", "right", "android.position", "right", 3, "tap"], ["text", "Edit"], ["rows", "auto, auto, auto"], ["stretch", "aspectFill", "height", "200", 1, "m-b-15", 3, "src"], ["row", "1", 1, "hr", "m-y-15"], ["row", "2", "rows", "*,*,*,*,*,*", "columns", "auto, auto"], ["text", "Price", 1, "p-l-15", "p-b-10", "m-r-20"], ["col", "1", 1, "p-b-10"], ["text", "\u20AC"], [3, "text"], ["text", "/day"], ["text", "Class", "row", "1", 1, "p-l-15", "p-b-10", "m-r-20"], ["row", "1", "col", "1", 1, "p-b-10", 3, "text"], ["text", "Doors", "row", "2", 1, "p-l-15", "p-b-10", "m-r-20"], ["row", "2", "col", "1", 1, "p-b-10", 3, "text"], ["text", "Seats", "row", "3", 1, "p-l-15", "p-b-10", "m-r-20"], ["row", "3", "col", "1", 1, "p-b-10", 3, "text"], ["text", "Transmission", "row", "4", 1, "p-l-15", "m-r-20", "p-b-10"], ["row", "4", "col", "1", 1, "p-b-10", 3, "text"], ["text", "Luggage", "row", "5", 1, "p-l-15", "p-b-10", "m-r-20"], ["row", "5", "col", "1", 1, "p-b-10", 3, "text"]], template: function CarDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ActionBar")(1, "NavigationButton", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function CarDetailComponent_Template_NavigationButton_tap_1_listener() { return ctx.onBackButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ActionItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function CarDetailComponent_Template_ActionItem_tap_3_listener() { return ctx.onEditButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "GridLayout")(6, "ScrollView")(7, "GridLayout", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "Image", 5)(9, "StackLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "GridLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "Label", 9)(13, "FormattedString");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "Span", 10)(15, "Span", 11)(16, "Span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "Label", 13)(18, "Label", 14)(19, "Label", 15)(20, "Label", 16)(21, "Label", 17)(22, "Label", 18)(23, "Label", 19)(24, "Label", 20)(25, "Label", 21)(26, "Label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.car.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.doors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.seats);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.transmission);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.car.luggage);
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.ActionItemDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/modules/cars/car-list.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarListComponent": () => (/* binding */ CarListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/data/observable-array/index.js");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/shared/car.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/nativescript-ui-listview/angular/fesm2015/nativescript-ui-listview-angular.mjs");








function CarListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "StackLayout", 5)(1, "GridLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "Label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "Label", 8)(4, "FormattedString");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "Span", 9)(6, "Span", 10)(7, "Span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "StackLayout", 12)(9, "Image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "StackLayout", 14)(11, "Label", 15)(12, "FormattedString", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "Span", 17)(14, "Span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "Label", 15)(16, "FormattedString", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "Span", 18)(18, "Span", 10)(19, "Span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "Label")(21, "FormattedString", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "Span", 20)(23, "Span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const car_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", car_r1 == null ? null : car_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", car_r1 == null ? null : car_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", car_r1 == null ? null : car_r1.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", car_r1 == null ? null : car_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", car_r1 == null ? null : car_r1.transmission);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", (car_r1 == null ? null : car_r1.hasAC) ? "Yes" : "No");
} }
class CarListComponent {
    constructor(_carService, _routerExtensions) {
        this._carService = _carService;
        this._routerExtensions = _routerExtensions;
        this._isLoading = false;
        this._cars = new _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.ObservableArray([]);
    }
    ngOnInit() {
        if (!this._dataSubscription) {
            this._isLoading = true;
            this._dataSubscription = this._carService
                .load()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => (this._isLoading = false)))
                .subscribe((cars) => {
                this._cars = new _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.ObservableArray(cars);
                this._isLoading = false;
            });
        }
    }
    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
    get cars() {
        return this._cars;
    }
    get isLoading() {
        return this._isLoading;
    }
    onCarItemTap(args) {
        const tappedCarItem = args.view.bindingContext;
        this._routerExtensions.navigate(['/cars/car-detail', tappedCarItem.id], {
            animated: true,
            transition: {
                name: 'slide',
                duration: 200,
                curve: 'ease',
            },
        });
    }
}
CarListComponent.ɵfac = function CarListComponent_Factory(t) { return new (t || CarListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_car_service__WEBPACK_IMPORTED_MODULE_0__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.RouterExtensions)); };
CarListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarListComponent, selectors: [["CarsList"]], decls: 7, vars: 2, consts: [[0, "ios", "visibility", "collapsed"], ["text", "Browse", "horizontalAlignment", "center"], [1, "cars-list", 3, "items", "itemTap"], ["tkListItemTemplate", ""], [3, "busy"], [1, "cars-list__item"], ["rows", "*, *, *", "columns", "*, *", 1, "cars-list__item-content"], [1, "cars-list__item-name", "font-weight-bold", 3, "text"], ["col", "1", "horizontalAlignment", "right", 1, "m-r-5"], ["text", "\u20AC"], [3, "text"], ["text", "/day"], ["row", "1", "colSpan", "2", 1, "hr", "m-y-5"], ["row", "2", "stretch", "aspectFill", "height", "120", 1, "m-r-20", 3, "src"], ["row", "2", "col", "1", "verticalAlignment", "center"], [1, "p-b-10"], [0, "ios", "fontFamily", "system"], ["text", "\uF1B9    ", 1, "fas", "cars-list__item-icon"], ["text", "\uF085   ", 1, "fas", "cars-list__item-icon"], ["text", " Transmission"], ["text", "\uF2DC    ", 1, "fas", "cars-list__item-icon"]], template: function CarListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 0)(2, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "GridLayout")(4, "RadListView", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemTap", function CarListComponent_Template_RadListView_itemTap_4_listener($event) { return ctx.onCarItemTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarListComponent_ng_template_5_Template, 24, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ActivityIndicator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.cars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("busy", ctx.isLoading);
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.NavigationButtonDirective, nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__.RadListViewComponent, nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__.TKListViewItemDirective], styles: ["@keyframes _ngcontent-%COMP%_empty {}\n\n\n.cars-list__item[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .cars-list__item[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item[_ngcontent-%COMP%] {\n  padding: 0 0 8 0;\n  background-color: #e6e6e6;\n}\n.ns-dark[_ngcontent-%COMP%]   .cars-list__item[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .cars-list__item[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n}\n.cars-list__item-content[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .cars-list__item-content[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-content[_ngcontent-%COMP%] {\n  padding: 8 15 4 15;\n  background-color: #fff;\n}\n.ns-dark[_ngcontent-%COMP%]   .cars-list__item-content[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .cars-list__item-content[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-content[_ngcontent-%COMP%] {\n  background-color: #303030;\n}\n.cars-list__item-name[_ngcontent-%COMP%], .cars-list__item-icon[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .cars-list__item-name[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-name[_ngcontent-%COMP%], .ns-dark[_nghost-%COMP%]   .cars-list__item-icon[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-icon[_ngcontent-%COMP%] {\n  color: #3a53ff;\n}\n.ns-dark[_ngcontent-%COMP%]   .cars-list__item-name[_ngcontent-%COMP%], .ns-dark[_ngcontent-%COMP%]   .cars-list__item-icon[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .cars-list__item-name[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-name[_ngcontent-%COMP%], .ns-dark   .ns-dark[_nghost-%COMP%]   .cars-list__item-icon[_ngcontent-%COMP%], .ns-dark   [_nghost-%COMP%]   .cars-list__item-icon[_ngcontent-%COMP%] {\n  color: #bcc4f7;\n}"] });


/***/ }),

/***/ "./src/app/modules/cars/cars-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsRoutingModule": () => (/* binding */ CarsRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/car-detail-edit/car-detail-edit.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/modules/cars/car-detail/car-detail.component.ts");
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/modules/cars/car-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");






const routes = [
    { path: '', component: _car_list_component__WEBPACK_IMPORTED_MODULE_2__.CarListComponent },
    { path: 'car-detail/:id', component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_1__.CarDetailComponent },
    { path: 'car-detail-edit/:id', component: _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_0__.CarDetailEditComponent },
];
class CarsRoutingModule {
}
CarsRoutingModule.ɵfac = function CarsRoutingModule_Factory(t) { return new (t || CarsRoutingModule)(); };
CarsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CarsRoutingModule });
CarsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.NativeScriptRouterModule.forChild(routes), _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/modules/cars/cars.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsModule": () => (/* binding */ CarsModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/nativescript-ui-listview/angular/fesm2015/nativescript-ui-listview-angular.mjs");
/* harmony import */ var _cars_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/cars-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




class CarsModule {
}
CarsModule.ɵfac = function CarsModule_Factory(t) { return new (t || CarsModule)(); };
CarsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarsModule });
CarsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_cars_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarsRoutingModule,
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule,
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptFormsModule,
        nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__.NativeScriptUIListViewModule] });


/***/ }),

/***/ "./src/app/modules/cars/shared/car-edit.service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarEditService": () => (/* binding */ CarEditService)
/* harmony export */ });
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/modules/cars/shared/car.model.ts");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/modules/cars/shared/car.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




class CarEditService {
    constructor(_carService) {
        this._carService = _carService;
    }
    startEdit(id) {
        this._editModel = null;
        return this.getEditableCarById(id);
    }
    getEditableCarById(id) {
        if (!this._editModel || this._editModel.id !== id) {
            const car = this._carService.getCarById(id);
            // get fresh editable copy of car model
            this._editModel = new _car_model__WEBPACK_IMPORTED_MODULE_0__.Car(car);
        }
        return this._editModel;
    }
}
CarEditService.ɵfac = function CarEditService_Factory(t) { return new (t || CarEditService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_car_service__WEBPACK_IMPORTED_MODULE_1__.CarService)); };
CarEditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CarEditService, factory: CarEditService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "./src/app/modules/cars/shared/car.model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car)
/* harmony export */ });
class Car {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.hasAC = options.hasAC;
        this.seats = options.seats;
        this.luggage = Number(options.luggage);
        this.class = options.class;
        this.doors = Number(options.doors);
        this.price = Number(options.price);
        this.transmission = options.transmission;
        this.imageUrl = options.imageUrl;
        this.imageStoragePath = options.imageStoragePath;
    }
}


/***/ }),

/***/ "./src/app/modules/cars/shared/car.service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarService": () => (/* binding */ CarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/cjs/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/modules/cars/shared/car.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");






const editableProperties = [
    'doors',
    'imageUrl',
    'luggage',
    'name',
    'price',
    'seats',
    'transmission',
    'class',
];
/* ***********************************************************
 * This is the master detail data service. It handles all the data operations
 * of retrieving and updating the data. In this case, it is connected to Firebase and
 * is using the {N} Firebase plugin. Learn more about it here:
 * https://github.com/EddyVerbruggen/nativescript-plugin-firebase
 * The {N} Firebase plugin needs some initialization steps before the app starts.
 * Check out how it is imported in the main.ts file and the actual script in /shared/firebase.common.ts file.
 *************************************************************/
class CarService {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._cars = [];
    }
    static cloneUpdateModel(car) {
        return editableProperties.reduce((a, e) => ((a[e] = car[e]), a), {});
    }
    getCarById(id) {
        if (!id) {
            return;
        }
        return this._cars.filter((car) => {
            return car.id === id;
        })[0];
    }
    load() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observer) => {
            const path = 'cars';
            const onValueEvent = (snapshot) => {
                this._ngZone.run(() => {
                    const results = this.handleSnapshot(snapshot);
                    observer.next(results);
                });
            };
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].addValueEventListener(onValueEvent, `/${path}`);
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleErrors));
    }
    update(carModel) {
        const updateModel = CarService.cloneUpdateModel(carModel);
        return _shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].update('/cars/' + carModel.id, updateModel);
    }
    uploadImage(remoteFullPath, localFullPath) {
        return _shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].uploadFile({
            localFullPath,
            remoteFullPath,
            onProgress: null,
        });
    }
    handleSnapshot(data) {
        this._cars = [];
        if (data) {
            for (const id in data) {
                if (data.hasOwnProperty(id)) {
                    this._cars.push(new _car_model__WEBPACK_IMPORTED_MODULE_1__.Car(data[id]));
                }
            }
        }
        return this._cars;
    }
    handleErrors(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }
}
CarService.ɵfac = function CarService_Factory(t) { return new (t || CarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); };
CarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CarService, factory: CarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Volumes_Workspace_Personal_vieew_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _car_rental_export_public_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/shared/services/car-rental-export-public.json");

// @ts-ignore

class ApiService {
  constructor() {
    this.db = _car_rental_export_public_json__WEBPACK_IMPORTED_MODULE_1__;
  }
  update(path, updateModel) {
    var _this = this;
    return (0,_Volumes_Workspace_Personal_vieew_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const carId = path.split("/").slice(-1)[0];
      _this.db.cars[carId] = {
        ..._this.db.cars[carId],
        ...updateModel
      };
    })();
  }
  uploadFile(params) {
    return (0,_Volumes_Workspace_Personal_vieew_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        url: params.localFullPath
      };
    })();
  }
  addValueEventListener(onValueEvent, path) {
    onValueEvent(this.db.cars);
    return {
      path: path,
      listeners: this.db.cars
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ApiService());

/***/ }),

/***/ "./src/app/shared/services/car-rental-export-public.json":
/***/ ((module) => {

module.exports = JSON.parse('{"cars":{"car1":{"class":"Luxury","doors":2,"hasAC":true,"id":"car1","imageStoragePath":"cars/BMW 5 Series.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FBMW%205%20Series.jpg?alt=media&token=dec5a0bf-e3ca-45d2-8f2e-c7b8a25530b5","luggage":3,"name":"BMW 5 Series","price":76,"seats":"2","transmission":"Automatic"},"car2":{"class":"Luxury","doors":5,"hasAC":false,"id":"car2","imageStoragePath":"cars/Ford KA+.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FFord%20KA%2B.jpg?alt=media&token=cf090183-ef5a-4c05-9f60-b0cbdfda7188","luggage":3,"name":"Ford KA","price":44,"seats":"4 + 1","transmission":"Automatic"},"car3":{"class":"Mini","doors":3,"hasAC":true,"id":"car3","imageStoragePath":"cars/Smart.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FSmart.jpg?alt=media&token=6891aca9-4211-4545-834e-c934ed671961","luggage":1,"name":"Smart","price":39,"seats":"2","transmission":"Manual"},"car4":{"class":"Standard","doors":5,"hasAC":true,"id":"car4","imageStoragePath":"cars/Kia Sorento.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FKia%20Sorento.jpg?alt=media&token=09ba5c41-5039-420f-b4fe-073dedb2ff1c","luggage":2,"name":"Kia Sorento","price":45,"seats":"4 + 1","transmission":"Manual"},"car5":{"class":"Luxury","doors":3,"hasAC":true,"id":"car5","imageStoragePath":"cars/Mazda MX-5.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FMazda%20MX-5.jpg?alt=media&token=d27f2a97-2e09-431e-ad8c-d0e7723955ef","luggage":2,"name":"Mazda MX-5","price":53,"seats":"2","transmission":"Automatic"},"car6":{"class":"Luxury","doors":"3","hasAC":false,"id":"car6","imageStoragePath":"cars/Mercedes S-Class Cabriolet.jpg","imageUrl":"https://firebasestorage.googleapis.com/v0/b/car-rental-b26b7.appspot.com/o/cars_public%2FMercedes%20S-Class%20Cabriolet.jpg?alt=media&token=dc17f427-407c-45c5-b827-ed3e108e0034","luggage":"2","name":"Mercedes S-Class Cabriolet","price":"89","seats":"4","transmission":"Manual"}}}');

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9tb2R1bGVzX2NhcnNfY2Fyc19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFDekI7QUFDRTtBQUNlO0FBQ1Q7QUFDdUM7QUFDdEQ7QUFDUTtBQUNLO0FBQ0w7QUFDTjtBQUNEO0FBQytCO0FBQ007QUFDMUUsNkRBQTZEO0FBQzdELElBQUksdURBQVk7QUFDaEI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9DQUFvQyx3RkFBd0Y7QUFDNUgsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFD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SyxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFDLEtBQUksQ0FBQ1IsRUFBRSxDQUFDUyxJQUFJLENBQUNILEtBQUssQ0FBQyxHQUFHO1FBQUUsR0FBRyxLQUFJLENBQUNOLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDSCxLQUFLLENBQUM7UUFBRSxHQUFHRDtNQUFZLENBQUM7SUFBQztFQUNyRTtFQUNNSyxVQUFVLENBQUNDLE1BQU0sRUFBRTtJQUFBO01BQ3JCLE9BQU87UUFBRUMsR0FBRyxFQUFFRCxNQUFNLENBQUNFO01BQWMsQ0FBQztJQUFDO0VBQ3pDO0VBQ0FDLHFCQUFxQixDQUFDQyxZQUFZLEVBQUVYLElBQUksRUFBRTtJQUN0Q1csWUFBWSxDQUFDLElBQUksQ0FBQ2YsRUFBRSxDQUFDUyxJQUFJLENBQUM7SUFDMUIsT0FBTztNQUNITCxJQUFJLEVBQUVBLElBQUk7TUFDVlksU0FBUyxFQUFFLElBQUksQ0FBQ2hCLEVBQUUsQ0FBQ1M7SUFDdkIsQ0FBQztFQUNMO0FBQ0o7QUFDQSxpRUFBZSxJQUFJUixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9jYXItZGV0YWlsLWVkaXQvY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9jYXJzL2Nhci1kZXRhaWwtZWRpdC9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9jYXItZGV0YWlsLWVkaXQvbXktaW1hZ2UtYWRkLXJlbW92ZS9teS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9jYXJzL2Nhci1kZXRhaWwtZWRpdC9teS1saXN0LXNlbGVjdG9yL215LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9jYXItZGV0YWlsLWVkaXQvbXktbGlzdC1zZWxlY3Rvci9teS1saXN0LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9jYXJzL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9jYXItbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9jYXJzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3ZpZWV3Ly4vc3JjL2FwcC9tb2R1bGVzL2NhcnMvY2Fycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9zaGFyZWQvY2FyLWVkaXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly92aWVldy8uL3NyYy9hcHAvbW9kdWxlcy9jYXJzL3NoYXJlZC9jYXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL21vZHVsZXMvY2Fycy9zaGFyZWQvY2FyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdmllZXcvLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGlhbG9ncyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBDYXJFZGl0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jYXItZWRpdC5zZXJ2aWNlJztcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY2FyLnNlcnZpY2UnO1xuaW1wb3J0IHsgY2FyQ2xhc3NMaXN0LCBjYXJEb29yTGlzdCwgY2FyU2VhdExpc3QsIGNhclRyYW5zbWlzc2lvbkxpc3QgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4uL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uL3NoYXJlZC9jYXItZWRpdC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuL215LWxpc3Qtc2VsZWN0b3IvbXktbGlzdC1zZWxlY3Rvci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL215LWltYWdlLWFkZC1yZW1vdmUvbXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnRcIjtcbmZ1bmN0aW9uIENhckRldGFpbEVkaXRDb21wb25lbnRfTGFiZWxfMjVfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnQoMCwgXCJMYWJlbFwiLCAzNSk7XG59IH1cbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxFZGl0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihfY2FyU2VydmljZSwgX2NhckVkaXRTZXJ2aWNlLCBfcGFnZVJvdXRlLCBfcm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlID0gX2NhclNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2NhckVkaXRTZXJ2aWNlID0gX2NhckVkaXRTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9wYWdlUm91dGUgPSBfcGFnZVJvdXRlO1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zID0gX3JvdXRlckV4dGVuc2lvbnM7XG4gICAgICAgIHRoaXMuX2NhckNsYXNzT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9jYXJEb29yT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9jYXJTZWF0T3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9jYXJUcmFuc21pc3Npb25PcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuX2lzQ2FySW1hZ2VEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVFZGl0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLl9wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcykpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgICAgIHRoaXMuX2NhciA9IHRoaXMuX2NhckVkaXRTZXJ2aWNlLnN0YXJ0RWRpdChjYXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNVcGRhdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVXBkYXRpbmc7XG4gICAgfVxuICAgIGdldCBjYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXI7XG4gICAgfVxuICAgIGdldCBwcmljZVBlckRheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5wcmljZTtcbiAgICB9XG4gICAgc2V0IHByaWNlUGVyRGF5KHZhbHVlKSB7XG4gICAgICAgIC8vIGZvcmNlIGlPUyBVSVNsaWRlciB0byB3b3JrIHdpdGggZGlzY3JldGUgc3RlcHNcbiAgICAgICAgdGhpcy5fY2FyLnByaWNlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBsdWdnYWdlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXIubHVnZ2FnZTtcbiAgICB9XG4gICAgc2V0IGx1Z2dhZ2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAvLyBmb3JjZSBpT1MgVUlTbGlkZXIgdG8gd29yayB3aXRoIGRpc2NyZXRlIHN0ZXBzXG4gICAgICAgIHRoaXMuX2Nhci5sdWdnYWdlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBjYXJDbGFzc09wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJDbGFzc09wdGlvbnM7XG4gICAgfVxuICAgIGdldCBjYXJEb29yT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhckRvb3JPcHRpb25zO1xuICAgIH1cbiAgICBnZXQgY2FyU2VhdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJTZWF0T3B0aW9ucztcbiAgICB9XG4gICAgZ2V0IGNhclRyYW5zbWlzc2lvbk9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJUcmFuc21pc3Npb25PcHRpb25zO1xuICAgIH1cbiAgICBnZXQgY2FySW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXIuaW1hZ2VVcmw7XG4gICAgfVxuICAgIHNldCBjYXJJbWFnZVVybCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jYXIuaW1hZ2VVcmwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5faXNDYXJJbWFnZURpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgb25DYW5jZWxCdXR0b25UYXAoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuICAgIG9uRG9uZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICogQnkgZGVzaWduIHRoaXMgYXBwIGlzIHNldCB1cCB0byB3b3JrIHdpdGggcmVhZC1vbmx5IHNhbXBsZSBkYXRhLlxuICAgICAgICAgKiBGb2xsb3cgdGhlIHN0ZXBzIGluIHRoZSBcIkZpcmViYXNlIGRhdGFiYXNlIHNldHVwXCIgc2VjdGlvbiBpbiBhcHAvcmVhZG1lLm1kIGZpbGVcbiAgICAgICAgICogYW5kIHVuY29tbWVudCB0aGUgY29kZSBibG9jayBiZWxvdyB0byBtYWtlIGl0IGVkaXRhYmxlLlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIGxldCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5faXNVcGRhdGluZyA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5faXNDYXJJbWFnZURpcnR5ICYmIHRoaXMuX2Nhci5pbWFnZVVybCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlID0gcXVldWVcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fY2FyU2VydmljZS51cGxvYWRJbWFnZSh0aGlzLl9jYXIuaW1hZ2VTdG9yYWdlUGF0aCwgdGhpcy5fY2FyLmltYWdlVXJsKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHVwbG9hZGVkRmlsZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXIuaW1hZ2VVcmwgPSB1cGxvYWRlZEZpbGUudXJsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHF1ZXVlLnRoZW4oKCkgPT4gdGhpcy5fY2FyU2VydmljZS51cGRhdGUodGhpcy5fY2FyKSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fyc1wiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIERpYWxvZ3MuYWxlcnQoeyB0aXRsZTogXCJPb3BzIVwiLCBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCBva0J1dHRvblRleHQ6IFwiT2tcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIENvbW1lbnQgb3V0IHRoZSBjb2RlIGJsb2NrIGJlbG93IGlmIHlvdSBtYWRlIHRoZSBhcHAgZWRpdGFibGUuXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBjb25zdCByZWFkT25seU1lc3NhZ2UgPSAnQ2hlY2sgb3V0IHRoZSBcIkZpcmViYXNlIGRhdGFiYXNlIHNldHVwXCIgc2VjdGlvbiBpbiB0aGUgcmVhZG1lIGZpbGUgdG8gbWFrZSBpdCBlZGl0YWJsZS4nO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBxdWV1ZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gRGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogJ1JlYWQtT25seSBUZW1wbGF0ZSEnLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVhZE9ubHlNZXNzYWdlLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2snLFxuICAgICAgICB9KSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvY2FycyddLCB7XG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVCb3R0b20nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6ICdlYXNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUVkaXRPcHRpb25zKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNsYXNzSXRlbSBvZiBjYXJDbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhckNsYXNzT3B0aW9ucy5wdXNoKGNsYXNzSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBkb29ySXRlbSBvZiBjYXJEb29yTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyRG9vck9wdGlvbnMucHVzaChkb29ySXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzZWF0SXRlbSBvZiBjYXJTZWF0TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyU2VhdE9wdGlvbnMucHVzaChzZWF0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0cmFuc21pc3Npb25JdGVtIG9mIGNhclRyYW5zbWlzc2lvbkxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhclRyYW5zbWlzc2lvbk9wdGlvbnMucHVzaCh0cmFuc21pc3Npb25JdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkNhckRldGFpbEVkaXRDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IENhckRldGFpbEVkaXRDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuQ2FyU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTIuQ2FyRWRpdFNlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkzLlBhZ2VSb3V0ZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTMuUm91dGVyRXh0ZW5zaW9ucykpOyB9O1xuQ2FyRGV0YWlsRWRpdENvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IENhckRldGFpbEVkaXRDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkNhckRldGFpbEVkaXRcIl1dLCBkZWNsczogNDYsIHZhcnM6IDE4LCBjb25zdHM6IFtbXCJ2aXNpYmlsaXR5XCIsIFwiY29sbGFwc2VkXCJdLCBbXCJpb3MucG9zaXRpb25cIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJ0ZXh0XCIsIFwiQ2FuY2VsXCJdLCBbXCJ0ZXh0XCIsIFwiRWRpdCBDYXIgRGV0YWlsc1wiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIl0sIFtcImlvcy5wb3NpdGlvblwiLCBcInJpZ2h0XCJdLCBbXCJ0ZXh0XCIsIFwiRG9uZVwiLCBcInZlcnRpY2FsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIDEsIFwiYWN0aW9uLWl0ZW1cIiwgMywgXCJpc0VuYWJsZWRcIiwgXCJpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRcIiwgXCJ0YXBcIl0sIFsxLCBcImNhci1saXN0XCJdLCBbXCJ0ZXh0XCIsIFwiQ0FSIE1BS0VcIiwgMSwgXCJjYXItbGlzdC1vZGRcIl0sIFtcImhpbnRcIiwgXCJDYXIgbWFrZSBmaWVsZCBpcyByZXF1aXJlZFwiLCBcInJlcXVpcmVkXCIsIFwiXCIsIDEsIFwiY2FyLWxpc3QtZXZlblwiLCAzLCBcIm5nTW9kZWxcIiwgXCJuZ01vZGVsQ2hhbmdlXCJdLCBbXCJtYWtlTW9kZWxcIiwgXCJuZ01vZGVsXCJdLCBbXCJyb3dzXCIsIFwiKiwgNTUsICpcIiwgXCJjb2x1bW5zXCIsIFwiKiwgYXV0b1wiLCAxLCBcImNhci1saXN0LW9kZFwiXSwgW1widGV4dFwiLCBcIlBSSUNFIFBFUiBEQVlcIl0sIFtcImNvbFwiLCBcIjFcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwicmlnaHRcIiwgMSwgXCJjYXItbGlzdF9fdmFsdWVcIl0sIFtcInRleHRcIiwgXCJcXHUyMEFDXCJdLCBbMywgXCJ0ZXh0XCJdLCBbXCJyb3dcIiwgXCIxXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiXSwgWzMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcInRleHRcIiwgXCJBREQgT1IgUkVNT1ZFIElNQUdFXCIsIFwicm93XCIsIFwiMlwiLCBcImNvbFNwYW5cIiwgXCIyXCJdLCBbMSwgXCJjYXItbGlzdC1ldmVuXCJdLCBbXCJyZXF1aXJlZFwiLCBcIlwiLCAzLCBcIm5nTW9kZWxcIiwgXCJuZ01vZGVsQ2hhbmdlXCJdLCBbXCJpbWFnZU1vZGVsXCIsIFwibmdNb2RlbFwiXSwgW1wiY2xhc3NcIiwgXCJjLWVycm9yXCIsIFwidGV4dFwiLCBcIkltYWdlIGZpZWxkIGlzIHJlcXVpcmVkXCIsIDQsIFwibmdJZlwiXSwgW1widGV4dFwiLCBcIkNMQVNTXCIsIDEsIFwiY2FyLWxpc3Qtb2RkXCJdLCBbXCJ0YWdcIiwgXCJjbGFzc1wiLCAzLCBcInNlbGVjdGVkVmFsdWVcIiwgXCJpdGVtc1wiLCBcInNlbGVjdGVkVmFsdWVDaGFuZ2VcIl0sIFtcInRleHRcIiwgXCJET09SU1wiLCAxLCBcImNhci1saXN0LW9kZFwiXSwgW1widGFnXCIsIFwiZG9vcnNcIiwgMywgXCJzZWxlY3RlZFZhbHVlXCIsIFwiaXRlbXNcIiwgXCJzZWxlY3RlZFZhbHVlQ2hhbmdlXCJdLCBbXCJ0ZXh0XCIsIFwiU0VBVFNcIiwgMSwgXCJjYXItbGlzdC1vZGRcIl0sIFtcInRhZ1wiLCBcInNlYXRzXCIsIDMsIFwic2VsZWN0ZWRWYWx1ZVwiLCBcIml0ZW1zXCIsIFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiXSwgW1widGV4dFwiLCBcIlRSQU5TTUlTU0lPTlwiLCAxLCBcImNhci1saXN0LW9kZFwiXSwgW1widGFnXCIsIFwidHJhbnNtaXNzaW9uXCIsIDMsIFwic2VsZWN0ZWRWYWx1ZVwiLCBcIml0ZW1zXCIsIFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiXSwgW1wicm93c1wiLCBcIiosIDU1XCIsIFwiY29sdW1uc1wiLCBcIiosIGF1dG9cIiwgMSwgXCJjYXItbGlzdC1vZGRcIl0sIFtcInRleHRcIiwgXCJMVUdHQUdFXCJdLCBbXCJ0ZXh0XCIsIFwiIEJhZyhzKVwiXSwgW1wicm93XCIsIFwiMVwiLCBcImNvbFNwYW5cIiwgXCIyXCIsIFwibWluVmFsdWVcIiwgXCIwXCIsIFwibWF4VmFsdWVcIiwgXCI1XCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFszLCBcImJ1c3lcIl0sIFtcInRleHRcIiwgXCJJbWFnZSBmaWVsZCBpcyByZXF1aXJlZFwiLCAxLCBcImMtZXJyb3JcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gQ2FyRGV0YWlsRWRpdENvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIDApO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiQWN0aW9uSXRlbVwiLCAxKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIENhckRldGFpbEVkaXRDb21wb25lbnRfVGVtcGxhdGVfQWN0aW9uSXRlbV90YXBfMl9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkNhbmNlbEJ1dHRvblRhcCgpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNCwgXCJMYWJlbFwiLCAzKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkFjdGlvbkl0ZW1cIiwgNCkoNiwgXCJMYWJlbFwiLCA1KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIENhckRldGFpbEVkaXRDb21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzZfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25Eb25lQnV0dG9uVGFwKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg3LCBcIkdyaWRMYXlvdXRcIikoOCwgXCJTY3JvbGxWaWV3XCIpKDksIFwiU3RhY2tMYXlvdXRcIiwgNik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEwLCBcIkxhYmVsXCIsIDcpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDExLCBcIlRleHRGaWVsZFwiLCA4LCA5KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibmdNb2RlbENoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX1RleHRGaWVsZF9uZ01vZGVsQ2hhbmdlXzExX2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LmNhci5uYW1lID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMywgXCJHcmlkTGF5b3V0XCIsIDEwKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTQsIFwiTGFiZWxcIiwgMTEpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE1LCBcIkxhYmVsXCIsIDEyKSgxNiwgXCJGb3JtYXR0ZWRTdHJpbmdcIik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDE3LCBcIlNwYW5cIiwgMTMpKDE4LCBcIlNwYW5cIiwgMTQpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTksIFwiU3RhY2tMYXlvdXRcIiwgMTUpKDIwLCBcIlNsaWRlclwiLCAxNik7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gQ2FyRGV0YWlsRWRpdENvbXBvbmVudF9UZW1wbGF0ZV9TbGlkZXJfbmdNb2RlbENoYW5nZV8yMF9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5wcmljZVBlckRheSA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMjEsIFwiTGFiZWxcIiwgMTcpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIyLCBcIlN0YWNrTGF5b3V0XCIsIDE4KSgyMywgXCJNeUltYWdlQWRkUmVtb3ZlXCIsIDE5LCAyMCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gQ2FyRGV0YWlsRWRpdENvbXBvbmVudF9UZW1wbGF0ZV9NeUltYWdlQWRkUmVtb3ZlX25nTW9kZWxDaGFuZ2VfMjNfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguY2FySW1hZ2VVcmwgPSAkZXZlbnQ7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMjUsIENhckRldGFpbEVkaXRDb21wb25lbnRfTGFiZWxfMjVfVGVtcGxhdGUsIDEsIDAsIFwiTGFiZWxcIiwgMjEpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgyNiwgXCJMYWJlbFwiLCAyMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMjcsIFwiU3RhY2tMYXlvdXRcIiwgMTgpKDI4LCBcIk15TGlzdFNlbGVjdG9yXCIsIDIzKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX015TGlzdFNlbGVjdG9yX3NlbGVjdGVkVmFsdWVDaGFuZ2VfMjhfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguY2FyLmNsYXNzID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgyOSwgXCJMYWJlbFwiLCAyNCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMzAsIFwiU3RhY2tMYXlvdXRcIiwgMTgpKDMxLCBcIk15TGlzdFNlbGVjdG9yXCIsIDI1KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX015TGlzdFNlbGVjdG9yX3NlbGVjdGVkVmFsdWVDaGFuZ2VfMzFfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguY2FyLmRvb3JzID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzMiwgXCJMYWJlbFwiLCAyNik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMzMsIFwiU3RhY2tMYXlvdXRcIiwgMTgpKDM0LCBcIk15TGlzdFNlbGVjdG9yXCIsIDI3KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX015TGlzdFNlbGVjdG9yX3NlbGVjdGVkVmFsdWVDaGFuZ2VfMzRfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguY2FyLnNlYXRzID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzNSwgXCJMYWJlbFwiLCAyOCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMzYsIFwiU3RhY2tMYXlvdXRcIiwgMTgpKDM3LCBcIk15TGlzdFNlbGVjdG9yXCIsIDI5KTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX015TGlzdFNlbGVjdG9yX3NlbGVjdGVkVmFsdWVDaGFuZ2VfMzdfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguY2FyLnRyYW5zbWlzc2lvbiA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgzOCwgXCJHcmlkTGF5b3V0XCIsIDMwKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMzksIFwiTGFiZWxcIiwgMzEpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQwLCBcIkxhYmVsXCIsIDEyKSg0MSwgXCJGb3JtYXR0ZWRTdHJpbmdcIik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDQyLCBcIlNwYW5cIiwgMTQpKDQzLCBcIlNwYW5cIiwgMzIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNDQsIFwiU2xpZGVyXCIsIDMzKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibmdNb2RlbENoYW5nZVwiLCBmdW5jdGlvbiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50X1RlbXBsYXRlX1NsaWRlcl9uZ01vZGVsQ2hhbmdlXzQ0X2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4Lmx1Z2dhZ2VWYWx1ZSA9ICRldmVudDsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKSgpKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDQ1LCBcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIDM0KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICB9IGlmIChyZiAmIDIpIHtcbiAgICAgICAgY29uc3QgX3IwID0gaTAuybXJtXJlZmVyZW5jZSgxMik7XG4gICAgICAgIGNvbnN0IF9yMSA9IGkwLsm1ybVyZWZlcmVuY2UoMjQpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSg2KTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwiaXNFbmFibGVkXCIsIF9yMC52YWxpZCAmJiBfcjEudmFsaWQpKFwiaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXCIsIF9yMC52YWxpZCAmJiBfcjEudmFsaWQpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSg1KTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdNb2RlbFwiLCBjdHguY2FyLm5hbWUpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSg3KTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjdHgucHJpY2VQZXJEYXkpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdNb2RlbFwiLCBjdHgucHJpY2VQZXJEYXkpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgzKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdNb2RlbFwiLCBjdHguY2FySW1hZ2VVcmwpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCAhX3IxLnZhbGlkKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMyk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcInNlbGVjdGVkVmFsdWVcIiwgY3R4LmNhci5jbGFzcykoXCJpdGVtc1wiLCBjdHguY2FyQ2xhc3NPcHRpb25zKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMyk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcInNlbGVjdGVkVmFsdWVcIiwgY3R4LmNhci5kb29ycykoXCJpdGVtc1wiLCBjdHguY2FyRG9vck9wdGlvbnMpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgzKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwic2VsZWN0ZWRWYWx1ZVwiLCBjdHguY2FyLnNlYXRzKShcIml0ZW1zXCIsIGN0eC5jYXJTZWF0T3B0aW9ucyk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDMpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJzZWxlY3RlZFZhbHVlXCIsIGN0eC5jYXIudHJhbnNtaXNzaW9uKShcIml0ZW1zXCIsIGN0eC5jYXJUcmFuc21pc3Npb25PcHRpb25zKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoNSk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgY3R4Lmx1Z2dhZ2VWYWx1ZSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5sdWdnYWdlVmFsdWUpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwiYnVzeVwiLCBjdHguaXNVcGRhdGluZyk7XG4gICAgfSB9LCBkZXBlbmRlbmNpZXM6IFtpNC5OZ0lmLCBpMy5BY3Rpb25CYXJDb21wb25lbnQsIGkzLkFjdGlvbkl0ZW1EaXJlY3RpdmUsIGkzLk5hdmlnYXRpb25CdXR0b25EaXJlY3RpdmUsIGk1Lk5nQ29udHJvbFN0YXR1cywgaTUuUmVxdWlyZWRWYWxpZGF0b3IsIGk1Lk5nTW9kZWwsIGkzLlRleHRWYWx1ZUFjY2Vzc29yLCBpMy5OdW1iZXJWYWx1ZUFjY2Vzc29yLCBpNi5NeUxpc3RTZWxlY3RvckNvbXBvbmVudCwgaTcuTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudF0sIHN0eWxlczogW1wiQGtleWZyYW1lcyBfbmdjb250ZW50LSVDT01QJV9lbXB0eSB7fVxcblxcblxcbi5jYXItbGlzdC1ldmVuW19uZ2NvbnRlbnQtJUNPTVAlXSwgLmNhci1saXN0LW9kZFtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdC1ldmVuW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0LWV2ZW5bX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2FyLWxpc3Qtb2RkW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0LW9kZFtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgcGFkZGluZzogMTAgMTU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogI2NjY2NjYztcXG59XFxuLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLmNhci1saXN0LWV2ZW5bX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFya1tfbmdjb250ZW50LSVDT01QJV0gICAuY2FyLWxpc3Qtb2RkW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2FyLWxpc3QtZXZlbltfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdC1ldmVuW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2FyLWxpc3Qtb2RkW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0LW9kZFtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjM2MzYzO1xcbn1cXG4uY2FyLWxpc3Qtb2RkW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0LW9kZFtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdC1vZGRbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ucy1kYXJrW19uZ2NvbnRlbnQtJUNPTVAlXSAgIC5jYXItbGlzdC1vZGRbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdC1vZGRbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIFtfbmdob3N0LSVDT01QJV0gICAuY2FyLWxpc3Qtb2RkW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcbiAgY29sb3I6ICNiM2IzYjM7XFxufVxcbi5jYXItbGlzdF9fdmFsdWVbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2FyLWxpc3RfX3ZhbHVlW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0X192YWx1ZVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgd2lkdGg6IDY1O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzA3MjZmZjtcXG59XFxuLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLmNhci1saXN0X192YWx1ZVtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0X192YWx1ZVtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdF9fdmFsdWVbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGNvbG9yOiAjYmNjNGY3O1xcbn1cXG4uY2FyLWxpc3RbX25nY29udGVudC0lQ09NUCVdICAgU2xpZGVyW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0W19uZ2NvbnRlbnQtJUNPTVAlXSAgIFNsaWRlcltfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdFtfbmdjb250ZW50LSVDT01QJV0gICBTbGlkZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTUzZmY7XFxuICBjb2xvcjogIzNhNTNmZjtcXG59XFxuLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLmNhci1saXN0W19uZ2NvbnRlbnQtJUNPTVAlXSAgIFNsaWRlcltfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhci1saXN0W19uZ2NvbnRlbnQtJUNPTVAlXSAgIFNsaWRlcltfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXItbGlzdFtfbmdjb250ZW50LSVDT01QJV0gICBTbGlkZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjljZjE7XFxuICBjb2xvcjogIzhmOWNmMTtcXG59XCJdIH0pO1xuIiwiZXhwb3J0IGNvbnN0IGNhckNsYXNzTGlzdCA9IFsnTWluaScsICdFY29ub215JywgJ0NvbXBhY3QnLCAnU3RhbmRhcmQnLCAnTHV4dXJ5J107XG5leHBvcnQgY29uc3QgY2FyRG9vckxpc3QgPSBbMiwgMywgNV07XG5leHBvcnQgY29uc3QgY2FyU2VhdExpc3QgPSBbJzInLCAnNCcsICc0ICsgMScsICc2ICsgMSddO1xuZXhwb3J0IGNvbnN0IGNhclRyYW5zbWlzc2lvbkxpc3QgPSBbJ01hbnVhbCcsICdBdXRvbWF0aWMnXTtcbiIsImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgaW1hZ2VQaWNrZXIgZnJvbSAnQG5hdGl2ZXNjcmlwdC9pbWFnZXBpY2tlcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIHBhdGgsIEltYWdlU291cmNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5mdW5jdGlvbiBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50X0dyaWRMYXlvdXRfMV9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiR3JpZExheW91dFwiLCAzKTtcbiAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkxhYmVsXCIsIDQpO1xuICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG59IH1cbmZ1bmN0aW9uIE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnRfR3JpZExheW91dF8yX1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJHcmlkTGF5b3V0XCIsIDUpO1xuICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTGFiZWxcIiwgNik7XG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbn0gfVxuY29uc3QgdGVtcEltYWdlRm9sZGVyTmFtZSA9ICduc2ltYWdlcGlja2VyJztcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5jb25zdCBNWV9JTUFHRV9BRERfUkVNT1ZFX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG59O1xuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFRoZSBNeUltYWdlQWRkUmVtb3ZlIGN1c3RvbSBjb21wb25lbnQgdXNlcyBhbiBpbWFnZXBpY2tlciBwbHVnaW4gdG8gbGV0IHRoZSB1c2VyIHNlbGVjdFxuICogYW4gaW1hZ2UgYW5kIHByb3ZpZGVzIGN1c3RvbSBsb2dpYyBhbmQgZGVzaWduIHRvIHRoZSBwcm9jZXNzLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgY2xhc3MgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyIGZvciB0aGUgY2FsbGJhY2sgbGF0ZXIgcHJvdmlkZWQgYnkgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gbm9vcDtcbiAgICAgICAgdGhpcy5pbm5lckltYWdlVXJsID0gJyc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgaW1hZ2VUZW1wRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4ga25vd25Gb2xkZXJzLnRlbXAoKS5nZXRGb2xkZXIodGVtcEltYWdlRm9sZGVyTmFtZSk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhckltYWdlVGVtcEZvbGRlcigpIHtcbiAgICAgICAgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudC5pbWFnZVRlbXBGb2xkZXIuY2xlYXIoKTtcbiAgICB9XG4gICAgZ2V0IGltYWdlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckltYWdlVXJsO1xuICAgIH1cbiAgICBzZXQgaW1hZ2VVcmwodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5uZXJJbWFnZVVybCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJJbWFnZVVybCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pbm5lckltYWdlVXJsICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckltYWdlVXJsID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gICAgfVxuICAgIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgfVxuICAgIG9uSW1hZ2VBZGRSZW1vdmVUYXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQuY2xlYXJJbWFnZVRlbXBGb2xkZXIoKTtcbiAgICAgICAgdGhpcy5waWNrSW1hZ2UoKTtcbiAgICB9XG4gICAgcGlja0ltYWdlKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gaW1hZ2VQaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6ICdzaW5nbGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb250ZXh0LnByZXNlbnQoKSlcbiAgICAgICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZEFzc2V0KSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZEFzc2V0Lm9wdGlvbnMuaGVpZ2h0ID0gNzY4O1xuICAgICAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbUFzc2V0KHNlbGVjdGVkQXNzZXQpLnRoZW4oKGltYWdlU291cmNlKSA9PiB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKGltYWdlU291cmNlKSk7XG4gICAgICAgIH0pKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvck1lc3NhZ2UpID0+IGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSkpO1xuICAgIH1cbiAgICBoYW5kbGVJbWFnZUNoYW5nZShzb3VyY2UpIHtcbiAgICAgICAgbGV0IHJhaXNlUHJvcGVydHlDaGFuZ2UgPSB0cnVlO1xuICAgICAgICBsZXQgdGVtcEltYWdlUGF0aCA9IG51bGw7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHRlbXBJbWFnZVBhdGggPSBwYXRoLmpvaW4oTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudC5pbWFnZVRlbXBGb2xkZXIucGF0aCwgYCR7RGF0ZS5ub3coKX0uanBnYCk7XG4gICAgICAgICAgICByYWlzZVByb3BlcnR5Q2hhbmdlID0gc291cmNlLnNhdmVUb0ZpbGUodGVtcEltYWdlUGF0aCwgJ2pwZWcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFpc2VQcm9wZXJ0eUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHRlbXBJbWFnZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG59XG5NeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50KSgpOyB9O1xuTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIk15SW1hZ2VBZGRSZW1vdmVcIl1dLCBmZWF0dXJlczogW2kwLsm1ybVQcm92aWRlcnNGZWF0dXJlKFtNWV9JTUFHRV9BRERfUkVNT1ZFX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdKV0sIGRlY2xzOiAzLCB2YXJzOiAzLCBjb25zdHM6IFtbXCJoZWlnaHRcIiwgXCI4MFwiLCBcIndpZHRoXCIsIFwiODBcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwibGVmdFwiLCAxLCBcInRodW1iXCIsIDMsIFwiYmFja2dyb3VuZEltYWdlXCIsIFwidGFwXCJdLCBbXCJjbGFzc1wiLCBcInRodW1iX19yZW1vdmVcIiwgNCwgXCJuZ0lmXCJdLCBbXCJjbGFzc1wiLCBcInRodW1iX19hZGRcIiwgNCwgXCJuZ0lmXCJdLCBbMSwgXCJ0aHVtYl9fcmVtb3ZlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjJFRFwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCAxLCBcImZhclwiXSwgWzEsIFwidGh1bWJfX2FkZFwiXSwgW1widGV4dFwiLCBcIlxcdUYwMzBcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJmYXNcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkdyaWRMYXlvdXRcIiwgMCk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50X1RlbXBsYXRlX0dyaWRMYXlvdXRfdGFwXzBfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25JbWFnZUFkZFJlbW92ZVRhcCgpOyB9KTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDEsIE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnRfR3JpZExheW91dF8xX1RlbXBsYXRlLCAyLCAwLCBcIkdyaWRMYXlvdXRcIiwgMSk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50X0dyaWRMYXlvdXRfMl9UZW1wbGF0ZSwgMiwgMCwgXCJHcmlkTGF5b3V0XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgIH0gaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgY3R4LmltYWdlVXJsKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgY3R4LmltYWdlVXJsKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgIWN0eC5pbWFnZVVybCk7XG4gICAgfSB9LCBkZXBlbmRlbmNpZXM6IFtpMS5OZ0lmXSwgc3R5bGVzOiBbXCJAa2V5ZnJhbWVzIF9uZ2NvbnRlbnQtJUNPTVAlX2VtcHR5IHt9XFxuXFxuXFxuLnRodW1iW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLnRodW1iW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLnRodW1iW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRodW1iX19hZGRbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAudGh1bWJfX2FkZFtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC50aHVtYl9fYWRkW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDQ7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICNjY2NjY2M7XFxuICBjb2xvcjogI2NjY2NjYztcXG59XFxuLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLnRodW1iX19hZGRbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC50aHVtYl9fYWRkW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLnRodW1iX19hZGRbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGJvcmRlci1jb2xvcjogIzYzNjM2MztcXG4gIGNvbG9yOiAjNjM2MzYzO1xcbn1cXG4udGh1bWJfX3JlbW92ZVtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC50aHVtYl9fcmVtb3ZlW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLnRodW1iX19yZW1vdmVbX25nY29udGVudC0lQ09NUCVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubnMtZGFya1tfbmdjb250ZW50LSVDT01QJV0gICAudGh1bWJfX3JlbW92ZVtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLnRodW1iX19yZW1vdmVbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIFtfbmdob3N0LSVDT01QJV0gICAudGh1bWJfX3JlbW92ZVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgY29sb3I6ICMzMDMwMzA7XFxufVwiXSB9KTtcbiIsImltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmZ1bmN0aW9uIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50X25nX3RlbXBsYXRlXzNfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkdyaWRMYXlvdXRcIiwgNSkoMSwgXCJHcmlkTGF5b3V0XCIsIDYpO1xuICAgIGkwLsm1ybVlbGVtZW50KDIsIFwiTGFiZWxcIiwgNykoMywgXCJMYWJlbFwiLCA4KTtcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJHcmlkTGF5b3V0XCIsIDkpO1xuICAgIGkwLsm1ybVlbGVtZW50KDUsIFwiTGFiZWxcIiwgMTApKDYsIFwiTGFiZWxcIiwgMTEpKDcsIFwiTGFiZWxcIiwgMTIpO1xuICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbn0gaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGl0ZW1fcjEgPSBjdHguaXRlbTtcbiAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGl0ZW1fcjEudmFsdWUpO1xuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcInZpc2liaWxpdHlcIiwgaXRlbV9yMS5pc1NlbGVjdGVkID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlZFwiKTtcbiAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIsIGl0ZW1fcjEuaXNTZWxlY3RlZCA/IFwiY29sbGFwc2VkXCIgOiBcInZpc2libGVcIik7XG4gICAgaTAuybXJtWFkdmFuY2UoMSk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwidmlzaWJpbGl0eVwiLCBpdGVtX3IxLmlzU2VsZWN0ZWQgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VkXCIpO1xuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgaXRlbV9yMS52YWx1ZSk7XG59IH1cbmV4cG9ydCBjbGFzcyBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBfcGFyYW1zO1xuICAgICAgICB0aGlzLl90aXRsZSA9IF9wYXJhbXMuY29udGV4dC50aXRsZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IF9wYXJhbXMuY29udGV4dC5zZWxlY3RlZEluZGV4O1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXJhbXMuY29udGV4dC5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF9wYXJhbXMuY29udGV4dC5pdGVtc1tpXSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpID09PSB0aGlzLl9zZWxlY3RlZEluZGV4ID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25JdGVtU2VsZWN0ZWQoYXJncykge1xuICAgICAgICBjb25zdCBvbGRTZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtc1t0aGlzLl9zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgb2xkU2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWRJdGVtID0gdGhpcy5faXRlbXNbYXJncy5pbmRleF07XG4gICAgICAgIG5ld1NlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKG5ld1NlbGVjdGVkSXRlbS52YWx1ZSk7XG4gICAgfVxuICAgIG9uQ2FuY2VsQnV0dG9uVGFwKCkge1xuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhudWxsKTtcbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbn1cbk15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuTW9kYWxEaWFsb2dQYXJhbXMpKTsgfTtcbk15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIk15TGlzdFNlbGVjdG9yTW9kYWxWaWV3XCJdXSwgZGVjbHM6IDUsIHZhcnM6IDIsIGNvbnN0czogW1tcInJvd3NcIiwgXCJhdXRvLCAqLCBhdXRvXCIsIFwidmVydGljYWxBbGlnbm1lbnRcIiwgXCJ0b3BcIiwgMSwgXCJtb2RhbC1pbnB1dFwiXSwgWzEsIFwiaDNcIiwgXCJtb2RhbC1pbnB1dF9faGVhZGVyXCIsIDMsIFwidGV4dFwiXSwgW1wicm93XCIsIFwiMVwiLCBcInNlbGVjdGlvbkJlaGF2aW9yXCIsIFwiUHJlc3NcIiwgMSwgXCJtb2RhbC1pbnB1dF9fbGlzdFwiLCAzLCBcIml0ZW1zXCIsIFwiaXRlbVNlbGVjdGVkXCJdLCBbXCJ0a0xpc3RJdGVtVGVtcGxhdGVcIiwgXCJcIl0sIFtcInJvd1wiLCBcIjNcIiwgXCJ0ZXh0XCIsIFwiQ0FOQ0VMXCIsIDAsIFwiaW9zXCIsIFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJyaWdodFwiLCAxLCBcIi1vdXRsaW5lXCIsIDMsIFwidGFwXCJdLCBbMSwgXCJtb2RhbC1pbnB1dF9fbGlzdC1pdGVtXCJdLCBbMCwgXCJhbmRyb2lkXCIsIFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiLCBcImNvbHVtbnNcIiwgXCIqLGF1dG9cIl0sIFszLCBcInRleHRcIl0sIFtcImNvbFwiLCBcIjFcIiwgXCJ0ZXh0XCIsIFwiXFx1RjAwQ1wiLCAxLCBcImZhc1wiLCBcIm1vZGFsLWlucHV0X19saXN0LWNoZWNrXCIsIDMsIFwidmlzaWJpbGl0eVwiXSwgWzAsIFwiaW9zXCIsIFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiLCBcImNvbHVtbnNcIiwgXCJhdXRvLCpcIl0sIFtcInRleHRcIiwgXCJcXHVGMTExXCIsIFwidmVydGljYWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJmYXJcIiwgXCJtb2RhbC1pbnB1dF9fbGlzdC1pY29uXCIsIDMsIFwidmlzaWJpbGl0eVwiXSwgW1widGV4dFwiLCBcIlxcdUYxOTJcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCAxLCBcImZhclwiLCBcIm1vZGFsLWlucHV0X19saXN0LWljb25cIiwgXCJzZWxlY3RlZFwiLCAzLCBcInZpc2liaWxpdHlcIl0sIFtcImNvbFwiLCBcIjFcIiwgMywgXCJ0ZXh0XCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiR3JpZExheW91dFwiLCAwKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJMYWJlbFwiLCAxKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIlJhZExpc3RWaWV3XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJpdGVtU2VsZWN0ZWRcIiwgZnVuY3Rpb24gTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnRfVGVtcGxhdGVfUmFkTGlzdFZpZXdfaXRlbVNlbGVjdGVkXzJfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgub25JdGVtU2VsZWN0ZWQoJGV2ZW50KTsgfSk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgzLCBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudF9uZ190ZW1wbGF0ZV8zX1RlbXBsYXRlLCA4LCA1LCBcIm5nLXRlbXBsYXRlXCIsIDMpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiQnV0dG9uXCIsIDQpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnRfVGVtcGxhdGVfQnV0dG9uX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uQ2FuY2VsQnV0dG9uVGFwKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGN0eC50aXRsZSk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJpdGVtc1wiLCBjdHguaXRlbXMpO1xuICAgIH0gfSwgZGVwZW5kZW5jaWVzOiBbaTIuUmFkTGlzdFZpZXdDb21wb25lbnQsIGkyLlRLTGlzdFZpZXdJdGVtRGlyZWN0aXZlXSwgc3R5bGVzOiBbXCJAa2V5ZnJhbWVzIF9uZ2NvbnRlbnQtJUNPTVAlX2VtcHR5IHt9XFxuXFxuXFxuLm1vZGFsLWlucHV0W19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgY29sb3I6ICMyNjI2MjY7XFxufVxcbi5ucy1kYXJrW19uZ2NvbnRlbnQtJUNPTVAlXSAgIC5tb2RhbC1pbnB1dFtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1vZGFsLWlucHV0X19saXN0LWl0ZW1bX25nY29udGVudC0lQ09NUCVdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVwiXSB9KTtcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBQYWdlUm91dGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyRWRpdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY2FyLWVkaXQuc2VydmljZSc7XG5pbXBvcnQgeyBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXItZWRpdC5zZXJ2aWNlXCI7XG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5leHBvcnQgY2xhc3MgTXlMaXN0U2VsZWN0b3JDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9wYWdlUm91dGUsIF9tb2RhbFNlcnZpY2UsIF92Y1JlZiwgX2NhckVkaXRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZSA9IF9wYWdlUm91dGU7XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZSA9IF9tb2RhbFNlcnZpY2U7XG4gICAgICAgIHRoaXMuX3ZjUmVmID0gX3ZjUmVmO1xuICAgICAgICB0aGlzLl9jYXJFZGl0U2VydmljZSA9IF9jYXJFZGl0U2VydmljZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IGNhcklkID0gJyc7XG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNhcklkID0gcGFyYW1zLmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2FyRWRpdE1vZGVsID0gdGhpcy5fY2FyRWRpdFNlcnZpY2UuZ2V0RWRpdGFibGVDYXJCeUlkKGNhcklkKTtcbiAgICB9XG4gICAgb25TZWxlY3RvclRhcCgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBgU2VsZWN0IENhciAke2NhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLnRhZyl9YDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlXG4gICAgICAgICAgICAuc2hvd01vZGFsKE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGVkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5NeUxpc3RTZWxlY3RvckNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIE15TGlzdFNlbGVjdG9yQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IE15TGlzdFNlbGVjdG9yQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLlBhZ2VSb3V0ZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuTW9kYWxEaWFsb2dTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5WaWV3Q29udGFpbmVyUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5DYXJFZGl0U2VydmljZSkpOyB9O1xuTXlMaXN0U2VsZWN0b3JDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBNeUxpc3RTZWxlY3RvckNvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiTXlMaXN0U2VsZWN0b3JcIl1dLCBpbnB1dHM6IHsgdGFnOiBcInRhZ1wiLCBpdGVtczogXCJpdGVtc1wiLCBzZWxlY3RlZFZhbHVlOiBcInNlbGVjdGVkVmFsdWVcIiB9LCBvdXRwdXRzOiB7IHNlbGVjdGVkVmFsdWVDaGFuZ2U6IFwic2VsZWN0ZWRWYWx1ZUNoYW5nZVwiIH0sIGZlYXR1cmVzOiBbaTAuybXJtVByb3ZpZGVyc0ZlYXR1cmUoW01vZGFsRGlhbG9nU2VydmljZV0pXSwgZGVjbHM6IDMsIHZhcnM6IDEsIGNvbnN0czogW1tcImNvbHVtbnNcIiwgXCIqLCBhdXRvXCIsIDMsIFwidGFwXCJdLCBbMywgXCJ0ZXh0XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjA1NFwiLCBcImNvbFwiLCBcIjFcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMSwgXCJmYXNcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gTXlMaXN0U2VsZWN0b3JDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJHcmlkTGF5b3V0XCIsIDApO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gTXlMaXN0U2VsZWN0b3JDb21wb25lbnRfVGVtcGxhdGVfR3JpZExheW91dF90YXBfMF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vblNlbGVjdG9yVGFwKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkxhYmVsXCIsIDEpKDIsIFwiTGFiZWxcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGN0eC5zZWxlY3RlZFZhbHVlKTtcbiAgICB9IH0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XG4iLCJpbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jYXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4uL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuZXhwb3J0IGNsYXNzIENhckRldGFpbENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX2NhclNlcnZpY2UsIF9wYWdlUm91dGUsIF9yb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuX2NhclNlcnZpY2UgPSBfY2FyU2VydmljZTtcbiAgICAgICAgdGhpcy5fcGFnZVJvdXRlID0gX3BhZ2VSb3V0ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucyA9IF9yb3V0ZXJFeHRlbnNpb25zO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FySWQgPSBwYXJhbXMuaWQ7XG4gICAgICAgICAgICB0aGlzLl9jYXIgPSB0aGlzLl9jYXJTZXJ2aWNlLmdldENhckJ5SWQoY2FySWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGNhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcjtcbiAgICB9XG4gICAgb25CYWNrQnV0dG9uVGFwKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cbiAgICBvbkVkaXRCdXR0b25UYXAoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvY2Fycy9jYXItZGV0YWlsLWVkaXQnLCB0aGlzLl9jYXIuaWRdLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6ICdlYXNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkNhckRldGFpbENvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIENhckRldGFpbENvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBDYXJEZXRhaWxDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuQ2FyU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTIuUGFnZVJvdXRlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5Sb3V0ZXJFeHRlbnNpb25zKSk7IH07XG5DYXJEZXRhaWxDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBDYXJEZXRhaWxDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkNhckRldGFpbFwiXV0sIGRlY2xzOiAyNywgdmFyczogOCwgY29uc3RzOiBbW1wiYW5kcm9pZC5zeXN0ZW1JY29uXCIsIFwiaWNfbWVudV9iYWNrXCIsIDMsIFwidGFwXCJdLCBbXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIDMsIFwidGV4dFwiXSwgW1wiaW9zLnBvc2l0aW9uXCIsIFwicmlnaHRcIiwgXCJhbmRyb2lkLnBvc2l0aW9uXCIsIFwicmlnaHRcIiwgMywgXCJ0YXBcIl0sIFtcInRleHRcIiwgXCJFZGl0XCJdLCBbXCJyb3dzXCIsIFwiYXV0bywgYXV0bywgYXV0b1wiXSwgW1wic3RyZXRjaFwiLCBcImFzcGVjdEZpbGxcIiwgXCJoZWlnaHRcIiwgXCIyMDBcIiwgMSwgXCJtLWItMTVcIiwgMywgXCJzcmNcIl0sIFtcInJvd1wiLCBcIjFcIiwgMSwgXCJoclwiLCBcIm0teS0xNVwiXSwgW1wicm93XCIsIFwiMlwiLCBcInJvd3NcIiwgXCIqLCosKiwqLCosKlwiLCBcImNvbHVtbnNcIiwgXCJhdXRvLCBhdXRvXCJdLCBbXCJ0ZXh0XCIsIFwiUHJpY2VcIiwgMSwgXCJwLWwtMTVcIiwgXCJwLWItMTBcIiwgXCJtLXItMjBcIl0sIFtcImNvbFwiLCBcIjFcIiwgMSwgXCJwLWItMTBcIl0sIFtcInRleHRcIiwgXCJcXHUyMEFDXCJdLCBbMywgXCJ0ZXh0XCJdLCBbXCJ0ZXh0XCIsIFwiL2RheVwiXSwgW1widGV4dFwiLCBcIkNsYXNzXCIsIFwicm93XCIsIFwiMVwiLCAxLCBcInAtbC0xNVwiLCBcInAtYi0xMFwiLCBcIm0tci0yMFwiXSwgW1wicm93XCIsIFwiMVwiLCBcImNvbFwiLCBcIjFcIiwgMSwgXCJwLWItMTBcIiwgMywgXCJ0ZXh0XCJdLCBbXCJ0ZXh0XCIsIFwiRG9vcnNcIiwgXCJyb3dcIiwgXCIyXCIsIDEsIFwicC1sLTE1XCIsIFwicC1iLTEwXCIsIFwibS1yLTIwXCJdLCBbXCJyb3dcIiwgXCIyXCIsIFwiY29sXCIsIFwiMVwiLCAxLCBcInAtYi0xMFwiLCAzLCBcInRleHRcIl0sIFtcInRleHRcIiwgXCJTZWF0c1wiLCBcInJvd1wiLCBcIjNcIiwgMSwgXCJwLWwtMTVcIiwgXCJwLWItMTBcIiwgXCJtLXItMjBcIl0sIFtcInJvd1wiLCBcIjNcIiwgXCJjb2xcIiwgXCIxXCIsIDEsIFwicC1iLTEwXCIsIDMsIFwidGV4dFwiXSwgW1widGV4dFwiLCBcIlRyYW5zbWlzc2lvblwiLCBcInJvd1wiLCBcIjRcIiwgMSwgXCJwLWwtMTVcIiwgXCJtLXItMjBcIiwgXCJwLWItMTBcIl0sIFtcInJvd1wiLCBcIjRcIiwgXCJjb2xcIiwgXCIxXCIsIDEsIFwicC1iLTEwXCIsIDMsIFwidGV4dFwiXSwgW1widGV4dFwiLCBcIkx1Z2dhZ2VcIiwgXCJyb3dcIiwgXCI1XCIsIDEsIFwicC1sLTE1XCIsIFwicC1iLTEwXCIsIFwibS1yLTIwXCJdLCBbXCJyb3dcIiwgXCI1XCIsIFwiY29sXCIsIFwiMVwiLCAxLCBcInAtYi0xMFwiLCAzLCBcInRleHRcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gQ2FyRGV0YWlsQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIpKDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAwKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIENhckRldGFpbENvbXBvbmVudF9UZW1wbGF0ZV9OYXZpZ2F0aW9uQnV0dG9uX3RhcF8xX2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uQmFja0J1dHRvblRhcCgpOyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMiwgXCJMYWJlbFwiLCAxKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgzLCBcIkFjdGlvbkl0ZW1cIiwgMik7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBDYXJEZXRhaWxDb21wb25lbnRfVGVtcGxhdGVfQWN0aW9uSXRlbV90YXBfM19saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkVkaXRCdXR0b25UYXAoKTsgfSk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDQsIFwiTGFiZWxcIiwgMyk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkdyaWRMYXlvdXRcIikoNiwgXCJTY3JvbGxWaWV3XCIpKDcsIFwiR3JpZExheW91dFwiLCA0KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoOCwgXCJJbWFnZVwiLCA1KSg5LCBcIlN0YWNrTGF5b3V0XCIsIDYpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEwLCBcIkdyaWRMYXlvdXRcIiwgNyk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDExLCBcIkxhYmVsXCIsIDgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEyLCBcIkxhYmVsXCIsIDkpKDEzLCBcIkZvcm1hdHRlZFN0cmluZ1wiKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTQsIFwiU3BhblwiLCAxMCkoMTUsIFwiU3BhblwiLCAxMSkoMTYsIFwiU3BhblwiLCAxMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCkoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTcsIFwiTGFiZWxcIiwgMTMpKDE4LCBcIkxhYmVsXCIsIDE0KSgxOSwgXCJMYWJlbFwiLCAxNSkoMjAsIFwiTGFiZWxcIiwgMTYpKDIxLCBcIkxhYmVsXCIsIDE3KSgyMiwgXCJMYWJlbFwiLCAxOCkoMjMsIFwiTGFiZWxcIiwgMTkpKDI0LCBcIkxhYmVsXCIsIDIwKSgyNSwgXCJMYWJlbFwiLCAyMSkoMjYsIFwiTGFiZWxcIiwgMjIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCkoKSgpO1xuICAgIH0gaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjdHguY2FyLm5hbWUpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSg2KTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwic3JjXCIsIGN0eC5jYXIuaW1hZ2VVcmwpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSg3KTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjdHguY2FyLnByaWNlKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMyk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgY3R4LmNhci5jbGFzcyk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGN0eC5jYXIuZG9vcnMpO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjdHguY2FyLnNlYXRzKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgY3R4LmNhci50cmFuc21pc3Npb24pO1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjdHguY2FyLmx1Z2dhZ2UpO1xuICAgIH0gfSwgZGVwZW5kZW5jaWVzOiBbaTIuQWN0aW9uQmFyQ29tcG9uZW50LCBpMi5BY3Rpb25JdGVtRGlyZWN0aXZlLCBpMi5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlXSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcbiIsImltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2Nhci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiLi9zaGFyZWQvY2FyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuZnVuY3Rpb24gQ2FyTGlzdENvbXBvbmVudF9uZ190ZW1wbGF0ZV81X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJTdGFja0xheW91dFwiLCA1KSgxLCBcIkdyaWRMYXlvdXRcIiwgNik7XG4gICAgaTAuybXJtWVsZW1lbnQoMiwgXCJMYWJlbFwiLCA3KTtcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDMsIFwiTGFiZWxcIiwgOCkoNCwgXCJGb3JtYXR0ZWRTdHJpbmdcIik7XG4gICAgaTAuybXJtWVsZW1lbnQoNSwgXCJTcGFuXCIsIDkpKDYsIFwiU3BhblwiLCAxMCkoNywgXCJTcGFuXCIsIDExKTtcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgaTAuybXJtWVsZW1lbnQoOCwgXCJTdGFja0xheW91dFwiLCAxMikoOSwgXCJJbWFnZVwiLCAxMyk7XG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMCwgXCJTdGFja0xheW91dFwiLCAxNCkoMTEsIFwiTGFiZWxcIiwgMTUpKDEyLCBcIkZvcm1hdHRlZFN0cmluZ1wiLCAxNik7XG4gICAgaTAuybXJtWVsZW1lbnQoMTMsIFwiU3BhblwiLCAxNykoMTQsIFwiU3BhblwiLCAxMCk7XG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTUsIFwiTGFiZWxcIiwgMTUpKDE2LCBcIkZvcm1hdHRlZFN0cmluZ1wiLCAxNik7XG4gICAgaTAuybXJtWVsZW1lbnQoMTcsIFwiU3BhblwiLCAxOCkoMTgsIFwiU3BhblwiLCAxMCkoMTksIFwiU3BhblwiLCAxOSk7XG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMjAsIFwiTGFiZWxcIikoMjEsIFwiRm9ybWF0dGVkU3RyaW5nXCIsIDE2KTtcbiAgICBpMC7Jtcm1ZWxlbWVudCgyMiwgXCJTcGFuXCIsIDIwKSgyMywgXCJTcGFuXCIsIDEwKTtcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCkoKSgpKCk7XG59IGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjYXJfcjEgPSBjdHguaXRlbTtcbiAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGNhcl9yMSA9PSBudWxsID8gbnVsbCA6IGNhcl9yMS5uYW1lKTtcbiAgICBpMC7Jtcm1YWR2YW5jZSg0KTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGNhcl9yMSA9PSBudWxsID8gbnVsbCA6IGNhcl9yMS5wcmljZSk7XG4gICAgaTAuybXJtWFkdmFuY2UoMyk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwic3JjXCIsIGNhcl9yMSA9PSBudWxsID8gbnVsbCA6IGNhcl9yMS5pbWFnZVVybCk7XG4gICAgaTAuybXJtWFkdmFuY2UoNSk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBjYXJfcjEgPT0gbnVsbCA/IG51bGwgOiBjYXJfcjEuY2xhc3MpO1xuICAgIGkwLsm1ybVhZHZhbmNlKDQpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgY2FyX3IxID09IG51bGwgPyBudWxsIDogY2FyX3IxLnRyYW5zbWlzc2lvbik7XG4gICAgaTAuybXJtWFkdmFuY2UoNSk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCAoY2FyX3IxID09IG51bGwgPyBudWxsIDogY2FyX3IxLmhhc0FDKSA/IFwiWWVzXCIgOiBcIk5vXCIpO1xufSB9XG5leHBvcnQgY2xhc3MgQ2FyTGlzdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX2NhclNlcnZpY2UsIF9yb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuX2NhclNlcnZpY2UgPSBfY2FyU2VydmljZTtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucyA9IF9yb3V0ZXJFeHRlbnNpb25zO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuX2NhclNlcnZpY2VcbiAgICAgICAgICAgICAgICAubG9hZCgpXG4gICAgICAgICAgICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlKSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoY2FycykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGNhcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2FycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnM7XG4gICAgfVxuICAgIGdldCBpc0xvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gICAgfVxuICAgIG9uQ2FySXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvY2Fycy9jYXItZGV0YWlsJywgdGFwcGVkQ2FySXRlbS5pZF0sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ2Vhc2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQ2FyTGlzdENvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIENhckxpc3RDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgQ2FyTGlzdENvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5DYXJTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5Sb3V0ZXJFeHRlbnNpb25zKSk7IH07XG5DYXJMaXN0Q29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogQ2FyTGlzdENvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiQ2Fyc0xpc3RcIl1dLCBkZWNsczogNywgdmFyczogMiwgY29uc3RzOiBbWzAsIFwiaW9zXCIsIFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiXSwgW1widGV4dFwiLCBcIkJyb3dzZVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIl0sIFsxLCBcImNhcnMtbGlzdFwiLCAzLCBcIml0ZW1zXCIsIFwiaXRlbVRhcFwiXSwgW1widGtMaXN0SXRlbVRlbXBsYXRlXCIsIFwiXCJdLCBbMywgXCJidXN5XCJdLCBbMSwgXCJjYXJzLWxpc3RfX2l0ZW1cIl0sIFtcInJvd3NcIiwgXCIqLCAqLCAqXCIsIFwiY29sdW1uc1wiLCBcIiosICpcIiwgMSwgXCJjYXJzLWxpc3RfX2l0ZW0tY29udGVudFwiXSwgWzEsIFwiY2Fycy1saXN0X19pdGVtLW5hbWVcIiwgXCJmb250LXdlaWdodC1ib2xkXCIsIDMsIFwidGV4dFwiXSwgW1wiY29sXCIsIFwiMVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJyaWdodFwiLCAxLCBcIm0tci01XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1MjBBQ1wiXSwgWzMsIFwidGV4dFwiXSwgW1widGV4dFwiLCBcIi9kYXlcIl0sIFtcInJvd1wiLCBcIjFcIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImhyXCIsIFwibS15LTVcIl0sIFtcInJvd1wiLCBcIjJcIiwgXCJzdHJldGNoXCIsIFwiYXNwZWN0RmlsbFwiLCBcImhlaWdodFwiLCBcIjEyMFwiLCAxLCBcIm0tci0yMFwiLCAzLCBcInNyY1wiXSwgW1wicm93XCIsIFwiMlwiLCBcImNvbFwiLCBcIjFcIiwgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiXSwgWzEsIFwicC1iLTEwXCJdLCBbMCwgXCJpb3NcIiwgXCJmb250RmFtaWx5XCIsIFwic3lzdGVtXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjFCOSAgICBcIiwgMSwgXCJmYXNcIiwgXCJjYXJzLWxpc3RfX2l0ZW0taWNvblwiXSwgW1widGV4dFwiLCBcIlxcdUYwODUgICBcIiwgMSwgXCJmYXNcIiwgXCJjYXJzLWxpc3RfX2l0ZW0taWNvblwiXSwgW1widGV4dFwiLCBcIiBUcmFuc21pc3Npb25cIl0sIFtcInRleHRcIiwgXCJcXHVGMkRDICAgIFwiLCAxLCBcImZhc1wiLCBcImNhcnMtbGlzdF9faXRlbS1pY29uXCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIENhckxpc3RDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAwKSgyLCBcIkxhYmVsXCIsIDEpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDMsIFwiR3JpZExheW91dFwiKSg0LCBcIlJhZExpc3RWaWV3XCIsIDIpO1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJpdGVtVGFwXCIsIGZ1bmN0aW9uIENhckxpc3RDb21wb25lbnRfVGVtcGxhdGVfUmFkTGlzdFZpZXdfaXRlbVRhcF80X2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4Lm9uQ2FySXRlbVRhcCgkZXZlbnQpOyB9KTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDUsIENhckxpc3RDb21wb25lbnRfbmdfdGVtcGxhdGVfNV9UZW1wbGF0ZSwgMjQsIDYsIFwibmctdGVtcGxhdGVcIiwgMyk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDYsIFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwgNCk7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDQpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJpdGVtc1wiLCBjdHguY2Fycyk7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJidXN5XCIsIGN0eC5pc0xvYWRpbmcpO1xuICAgIH0gfSwgZGVwZW5kZW5jaWVzOiBbaTIuQWN0aW9uQmFyQ29tcG9uZW50LCBpMi5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlLCBpMy5SYWRMaXN0Vmlld0NvbXBvbmVudCwgaTMuVEtMaXN0Vmlld0l0ZW1EaXJlY3RpdmVdLCBzdHlsZXM6IFtcIkBrZXlmcmFtZXMgX25nY29udGVudC0lQ09NUCVfZW1wdHkge31cXG5cXG5cXG4uY2Fycy1saXN0X19pdGVtW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbVtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXJzLWxpc3RfX2l0ZW1bX25nY29udGVudC0lQ09NUCVdIHtcXG4gIHBhZGRpbmc6IDAgMCA4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbn1cXG4ubnMtZGFya1tfbmdjb250ZW50LSVDT01QJV0gICAuY2Fycy1saXN0X19pdGVtW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2Fycy1saXN0X19pdGVtW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG59XFxuLmNhcnMtbGlzdF9faXRlbS1jb250ZW50W19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1jb250ZW50W19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1jb250ZW50W19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBwYWRkaW5nOiA4IDE1IDQgMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubnMtZGFya1tfbmdjb250ZW50LSVDT01QJV0gICAuY2Fycy1saXN0X19pdGVtLWNvbnRlbnRbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXJzLWxpc3RfX2l0ZW0tY29udGVudFtfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXJzLWxpc3RfX2l0ZW0tY29udGVudFtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG59XFxuLmNhcnMtbGlzdF9faXRlbS1uYW1lW19uZ2NvbnRlbnQtJUNPTVAlXSwgLmNhcnMtbGlzdF9faXRlbS1pY29uW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1uYW1lW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1uYW1lW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1pY29uW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICBbX25naG9zdC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1pY29uW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICBjb2xvcjogIzNhNTNmZjtcXG59XFxuLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1uYW1lW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmtbX25nY29udGVudC0lQ09NUCVdICAgLmNhcnMtbGlzdF9faXRlbS1pY29uW19uZ2NvbnRlbnQtJUNPTVAlXSwgLm5zLWRhcmsgICAubnMtZGFya1tfbmdob3N0LSVDT01QJV0gICAuY2Fycy1saXN0X19pdGVtLW5hbWVbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIFtfbmdob3N0LSVDT01QJV0gICAuY2Fycy1saXN0X19pdGVtLW5hbWVbX25nY29udGVudC0lQ09NUCVdLCAubnMtZGFyayAgIC5ucy1kYXJrW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXJzLWxpc3RfX2l0ZW0taWNvbltfbmdjb250ZW50LSVDT01QJV0sIC5ucy1kYXJrICAgW19uZ2hvc3QtJUNPTVAlXSAgIC5jYXJzLWxpc3RfX2l0ZW0taWNvbltfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgY29sb3I6ICNiY2M0Zjc7XFxufVwiXSB9KTtcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBDYXJEZXRhaWxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jYXItZGV0YWlsLWVkaXQvY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2FyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5jb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBDYXJMaXN0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnY2FyLWRldGFpbC86aWQnLCBjb21wb25lbnQ6IENhckRldGFpbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2Nhci1kZXRhaWwtZWRpdC86aWQnLCBjb21wb25lbnQ6IENhckRldGFpbEVkaXRDb21wb25lbnQgfSxcbl07XG5leHBvcnQgY2xhc3MgQ2Fyc1JvdXRpbmdNb2R1bGUge1xufVxuQ2Fyc1JvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBDYXJzUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBDYXJzUm91dGluZ01vZHVsZSkoKTsgfTtcbkNhcnNSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBDYXJzUm91dGluZ01vZHVsZSB9KTtcbkNhcnNSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBDYXJzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2Fycy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuZXhwb3J0IGNsYXNzIENhcnNNb2R1bGUge1xufVxuQ2Fyc01vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIENhcnNNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgQ2Fyc01vZHVsZSkoKTsgfTtcbkNhcnNNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IENhcnNNb2R1bGUgfSk7XG5DYXJzTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbQ2Fyc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVdIH0pO1xuIiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSAnLi9jYXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4vY2FyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2Nhci5zZXJ2aWNlXCI7XG5leHBvcnQgY2xhc3MgQ2FyRWRpdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKF9jYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2NhclNlcnZpY2UgPSBfY2FyU2VydmljZTtcbiAgICB9XG4gICAgc3RhcnRFZGl0KGlkKSB7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlbCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVkaXRhYmxlQ2FyQnlJZChpZCk7XG4gICAgfVxuICAgIGdldEVkaXRhYmxlQ2FyQnlJZChpZCkge1xuICAgICAgICBpZiAoIXRoaXMuX2VkaXRNb2RlbCB8fCB0aGlzLl9lZGl0TW9kZWwuaWQgIT09IGlkKSB7XG4gICAgICAgICAgICBjb25zdCBjYXIgPSB0aGlzLl9jYXJTZXJ2aWNlLmdldENhckJ5SWQoaWQpO1xuICAgICAgICAgICAgLy8gZ2V0IGZyZXNoIGVkaXRhYmxlIGNvcHkgb2YgY2FyIG1vZGVsXG4gICAgICAgICAgICB0aGlzLl9lZGl0TW9kZWwgPSBuZXcgQ2FyKGNhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXRNb2RlbDtcbiAgICB9XG59XG5DYXJFZGl0U2VydmljZS7JtWZhYyA9IGZ1bmN0aW9uIENhckVkaXRTZXJ2aWNlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IENhckVkaXRTZXJ2aWNlKShpMC7Jtcm1aW5qZWN0KGkxLkNhclNlcnZpY2UpKTsgfTtcbkNhckVkaXRTZXJ2aWNlLsm1cHJvdiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdGFibGUoeyB0b2tlbjogQ2FyRWRpdFNlcnZpY2UsIGZhY3Rvcnk6IENhckVkaXRTZXJ2aWNlLsm1ZmFjLCBwcm92aWRlZEluOiAncm9vdCcgfSk7XG4iLCJleHBvcnQgY2xhc3MgQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICAgIHRoaXMuaGFzQUMgPSBvcHRpb25zLmhhc0FDO1xuICAgICAgICB0aGlzLnNlYXRzID0gb3B0aW9ucy5zZWF0cztcbiAgICAgICAgdGhpcy5sdWdnYWdlID0gTnVtYmVyKG9wdGlvbnMubHVnZ2FnZSk7XG4gICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzO1xuICAgICAgICB0aGlzLmRvb3JzID0gTnVtYmVyKG9wdGlvbnMuZG9vcnMpO1xuICAgICAgICB0aGlzLnByaWNlID0gTnVtYmVyKG9wdGlvbnMucHJpY2UpO1xuICAgICAgICB0aGlzLnRyYW5zbWlzc2lvbiA9IG9wdGlvbnMudHJhbnNtaXNzaW9uO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gb3B0aW9ucy5pbWFnZVVybDtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2VQYXRoID0gb3B0aW9ucy5pbWFnZVN0b3JhZ2VQYXRoO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhciB9IGZyb20gJy4vY2FyLm1vZGVsJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5jb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSBbXG4gICAgJ2Rvb3JzJyxcbiAgICAnaW1hZ2VVcmwnLFxuICAgICdsdWdnYWdlJyxcbiAgICAnbmFtZScsXG4gICAgJ3ByaWNlJyxcbiAgICAnc2VhdHMnLFxuICAgICd0cmFuc21pc3Npb24nLFxuICAgICdjbGFzcycsXG5dO1xuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFRoaXMgaXMgdGhlIG1hc3RlciBkZXRhaWwgZGF0YSBzZXJ2aWNlLiBJdCBoYW5kbGVzIGFsbCB0aGUgZGF0YSBvcGVyYXRpb25zXG4gKiBvZiByZXRyaWV2aW5nIGFuZCB1cGRhdGluZyB0aGUgZGF0YS4gSW4gdGhpcyBjYXNlLCBpdCBpcyBjb25uZWN0ZWQgdG8gRmlyZWJhc2UgYW5kXG4gKiBpcyB1c2luZyB0aGUge059IEZpcmViYXNlIHBsdWdpbi4gTGVhcm4gbW9yZSBhYm91dCBpdCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcbiAqIFRoZSB7Tn0gRmlyZWJhc2UgcGx1Z2luIG5lZWRzIHNvbWUgaW5pdGlhbGl6YXRpb24gc3RlcHMgYmVmb3JlIHRoZSBhcHAgc3RhcnRzLlxuICogQ2hlY2sgb3V0IGhvdyBpdCBpcyBpbXBvcnRlZCBpbiB0aGUgbWFpbi50cyBmaWxlIGFuZCB0aGUgYWN0dWFsIHNjcmlwdCBpbiAvc2hhcmVkL2ZpcmViYXNlLmNvbW1vbi50cyBmaWxlLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgY2xhc3MgQ2FyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX25nWm9uZSkge1xuICAgICAgICB0aGlzLl9uZ1pvbmUgPSBfbmdab25lO1xuICAgICAgICB0aGlzLl9jYXJzID0gW107XG4gICAgfVxuICAgIHN0YXRpYyBjbG9uZVVwZGF0ZU1vZGVsKGNhcikge1xuICAgICAgICByZXR1cm4gZWRpdGFibGVQcm9wZXJ0aWVzLnJlZHVjZSgoYSwgZSkgPT4gKChhW2VdID0gY2FyW2VdKSwgYSksIHt9KTtcbiAgICB9XG4gICAgZ2V0Q2FyQnlJZChpZCkge1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnMuZmlsdGVyKChjYXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYXIuaWQgPT09IGlkO1xuICAgICAgICB9KVswXTtcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9ICdjYXJzJztcbiAgICAgICAgICAgIGNvbnN0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQXBpU2VydmljZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcbiAgICAgICAgfSkucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKSk7XG4gICAgfVxuICAgIHVwZGF0ZShjYXJNb2RlbCkge1xuICAgICAgICBjb25zdCB1cGRhdGVNb2RlbCA9IENhclNlcnZpY2UuY2xvbmVVcGRhdGVNb2RlbChjYXJNb2RlbCk7XG4gICAgICAgIHJldHVybiBBcGlTZXJ2aWNlLnVwZGF0ZSgnL2NhcnMvJyArIGNhck1vZGVsLmlkLCB1cGRhdGVNb2RlbCk7XG4gICAgfVxuICAgIHVwbG9hZEltYWdlKHJlbW90ZUZ1bGxQYXRoLCBsb2NhbEZ1bGxQYXRoKSB7XG4gICAgICAgIHJldHVybiBBcGlTZXJ2aWNlLnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgbG9jYWxGdWxsUGF0aCxcbiAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoLFxuICAgICAgICAgICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVNuYXBzaG90KGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2FycyA9IFtdO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcnMucHVzaChuZXcgQ2FyKGRhdGFbaWRdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xuICAgIH1cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbkNhclNlcnZpY2UuybVmYWMgPSBmdW5jdGlvbiBDYXJTZXJ2aWNlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IENhclNlcnZpY2UpKGkwLsm1ybVpbmplY3QoaTAuTmdab25lKSk7IH07XG5DYXJTZXJ2aWNlLsm1cHJvdiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdGFibGUoeyB0b2tlbjogQ2FyU2VydmljZSwgZmFjdG9yeTogQ2FyU2VydmljZS7JtWZhYywgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pO1xuIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGRiIGZyb20gXCIuL2Nhci1yZW50YWwtZXhwb3J0LXB1YmxpYy5qc29uXCI7XG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYiA9IGRiO1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGUocGF0aCwgdXBkYXRlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgY2FySWQgPSBwYXRoLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuZGIuY2Fyc1tjYXJJZF0gPSB7IC4uLnRoaXMuZGIuY2Fyc1tjYXJJZF0sIC4uLnVwZGF0ZU1vZGVsIH07XG4gICAgfVxuICAgIGFzeW5jIHVwbG9hZEZpbGUocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7IHVybDogcGFyYW1zLmxvY2FsRnVsbFBhdGggfTtcbiAgICB9XG4gICAgYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgcGF0aCkge1xuICAgICAgICBvblZhbHVlRXZlbnQodGhpcy5kYi5jYXJzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHRoaXMuZGIuY2Fyc1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlO1xuIl0sIm5hbWVzIjpbImRiIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwidXBkYXRlIiwicGF0aCIsInVwZGF0ZU1vZGVsIiwiY2FySWQiLCJzcGxpdCIsInNsaWNlIiwiY2FycyIsInVwbG9hZEZpbGUiLCJwYXJhbXMiLCJ1cmwiLCJsb2NhbEZ1bGxQYXRoIiwiYWRkVmFsdWVFdmVudExpc3RlbmVyIiwib25WYWx1ZUV2ZW50IiwibGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==