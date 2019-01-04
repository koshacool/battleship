(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var appRoutes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<ng4-loading-spinner> </ng4-loading-spinner>\n<notifier-container></notifier-container>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngrx_store_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngrx-store-logger */ "./node_modules/ngrx-store-logger/dist/index.js");
/* harmony import */ var ngrx_store_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_logger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _notifierConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifierConfig */ "./src/app/notifierConfig.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _public_public_pages_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./public/public-pages.module */ "./src/app/public/public-pages.module.ts");
/* harmony import */ var _protected_protected_pages_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./protected/protected-pages.module */ "./src/app/protected/protected-pages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _public_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./public/not-found/not-found.component */ "./src/app/public/not-found/not-found.component.ts");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");





















function logger(reducer) {
    // default, no options
    return Object(ngrx_store_logger__WEBPACK_IMPORTED_MODULE_9__["storeLogger"])()(reducer);
}
var metaReducers = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? [] : [logger];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _public_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_20__["reducers"], { metaReducers: metaReducers }),
                angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierModule"].withConfig(_notifierConfig__WEBPACK_IMPORTED_MODULE_11__["customNotifierOptions"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _protected_protected_pages_module__WEBPACK_IMPORTED_MODULE_16__["ProtectedPagesModule"],
                _public_public_pages_module__WEBPACK_IMPORTED_MODULE_15__["PublicPagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/auth/auth.actions */ "./src/app/store/auth/auth.actions.ts");











var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, spinnerService, notifierService, store) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.spinnerService = spinnerService;
        this.notifierService = notifierService;
        this.store = store;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.isLoggedIn = false;
        this.spinnerService.show();
        this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (user) {
            _this.spinnerService.hide();
            if (user) {
                var displayName = user.displayName, email = user.email, photoUrl = user.photoURL, uid = user.uid;
                _this.isLoggedIn = true;
                _this.user.next({ displayName: displayName, email: email, photoUrl: photoUrl, uid: uid });
                _this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__["Signin"]({ displayName: displayName, email: email, photoUrl: photoUrl, uid: uid }));
                _this.getToken();
            }
            else {
                _this.isLoggedIn = false;
                _this.user.next(null);
                _this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__["Logout"]());
            }
        });
    }
    AuthService.prototype.handleError = function (error) {
        this.spinnerService.hide();
        this.notifierService.show({
            message: error.message,
            type: 'error',
        });
        console.error('Auth service error:', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error);
    };
    AuthService.prototype.handleAuth = function (res) {
        var _a = res.user, displayName = _a.displayName, email = _a.email, photoUrl = _a.photoURL, uid = _a.uid;
        console.log(res);
        this.isLoggedIn = true;
        this.spinnerService.hide();
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__["Signup"]({ displayName: displayName, email: email, photoUrl: photoUrl, uid: uid }));
        this.getToken();
        this.router.navigate(['game']);
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
        if (user) {
            user.getIdToken()
                .then(function (token) {
                return _this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__["SetToken"](token));
            })
                .catch(this.handleError.bind(this));
        }
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.spinnerService.show();
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(this.handleAuth.bind(this))
            .catch(this.handleError.bind(this));
    };
    AuthService.prototype.signIn = function (data) {
        this.spinnerService.show();
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(data.email, data.password)
            .then(this.handleAuth.bind(this))
            .catch(this.handleError.bind(this));
    };
    AuthService.prototype.signUp = function (data) {
        this.spinnerService.show();
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(data.email, data.password)
            .then(this.handleAuth.bind(this))
            .catch(this.handleError.bind(this));
    };
    AuthService.prototype.logout = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut();
        this.isLoggedIn = false;
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_10__["Logout"]());
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/constants/routes.ts":
/*!*************************************!*\
  !*** ./src/app/constants/routes.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    root: '',
    login: 'login',
    register: 'register',
    game: 'game',
    statistics: 'statistics',
    notFound: '**',
});


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glyphicon.spinning {\n  animation: spin 1s infinite linear;\n  -webkit-animation: spin2 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLDRDQUE0QztDQUM3Qzs7QUFFRDtFQUNFLE9BQU8seUNBQWlDLENBQWpDLGlDQUFpQyxDQUFDO0VBQ3pDLEtBQUssMkNBQW1DLENBQW5DLG1DQUFtQyxDQUFDO0NBQzFDOztBQUhEO0VBQ0UsT0FBTyx5Q0FBaUMsQ0FBakMsaUNBQWlDLENBQUM7RUFDekMsS0FBSywyQ0FBbUMsQ0FBbkMsbUNBQW1DLENBQUM7Q0FDMUM7O0FBRUQ7RUFDRSxPQUFPLGdDQUFnQyxDQUFDO0VBQ3hDLEtBQUssa0NBQWtDLENBQUM7Q0FDekMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2x5cGhpY29uLnNwaW5uaW5nIHtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4yIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO31cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4yIHtcbiAgZnJvbSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuICB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light mb-3\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Battleship</a>\n  <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n  <div class=\"collapse navbar-collapse\" *ngIf=\"isAuthinticated; else elseBlock\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/game\">GAME</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/statistics\">STATISTICS</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav mr-1\" appDropdown #r=\"appDropdown\">\n      <li class=\"dropdown nav-item\" style=\"cursor: pointer\">\n        <a class=\"dropdown-toggle nav-link\" role=\"button\" data-toggle=\"dropdown\">\n          {{user.displayName || user.email | uppercase}} <span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-right\" [ngClass]=\"{'show': r.isOpen}\">\n          <li *ngIf=\"!!user.displayName\"><a class=\"dropdown-item\">{{user.email}}</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"onLogout()\">Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\"></ul>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </ng-template>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, spinnerService, zone, router, store) {
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.zone = zone;
        this.router = router;
        this.store = store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth')
            .subscribe(function (_a) {
            var user = _a.user, isAuthinticated = _a.isAuthinticated;
            _this.user = user;
            _this.isAuthinticated = isAuthinticated;
            _this.zone.run(function () { });
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/notifierConfig.ts":
/*!***********************************!*\
  !*** ./src/app/notifierConfig.ts ***!
  \***********************************/
/*! exports provided: customNotifierOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customNotifierOptions", function() { return customNotifierOptions; });
var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 10
        },
        vertical: {
            position: 'top',
            distance: 55,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 3000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 5
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 100,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 100,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 100,
            easing: 'ease'
        },
        overlap: 150
    }
};


/***/ }),

/***/ "./src/app/protected/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/protected/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.authService.isLoggedIn) {
            return true;
        }
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            console.log(loggedIn);
            if (loggedIn) {
                return true;
            }
            _this.router.navigate(['login']);
            return false;
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/protected/board.service.ts":
/*!********************************************!*\
  !*** ./src/app/protected/board.service.ts ***!
  \********************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/board */ "./src/app/protected/game/board.ts");
/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/player */ "./src/app/protected/game/player.ts");




var BoardService = /** @class */ (function () {
    function BoardService() {
        this.playerId = '1';
        this.boards = [];
    }
    BoardService.prototype.createBoard = function (playerId, size) {
        if (playerId === void 0) { playerId = '1'; }
        if (size === void 0) { size = 5; }
        var tiles = [];
        // create tiles for board
        for (var i = 0; i < size; i++) {
            tiles[i] = [];
            for (var j = 0; j < size; j++) {
                tiles[i][j] = { used: false, value: 0, status: '' };
            }
        }
        // generate random ships for the board
        for (var i = 0; i < size * 2; i++) {
            tiles = this.randomShips(tiles, size);
        }
        // create board
        var board = new _game_board__WEBPACK_IMPORTED_MODULE_2__["Board"]({
            player: new _game_player__WEBPACK_IMPORTED_MODULE_3__["Player"]({ id: playerId }),
            tiles: tiles,
        });
        this.boards.push(board);
    };
    BoardService.prototype.randomShips = function (board, len) {
        len = len - 1;
        var ranRow = this.getRandomInt(0, len);
        var ranCol = this.getRandomInt(0, len);
        if (board[ranRow][ranCol].value === 1) {
            return this.randomShips(board, len);
        }
        else {
            board[ranRow][ranCol].value = 1;
            return board;
        }
    };
    BoardService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    BoardService.prototype.getBoards = function () {
        return this.boards;
    };
    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/protected/game/board.ts":
/*!*****************************************!*\
  !*** ./src/app/protected/game/board.ts ***!
  \*****************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/protected/game/game.component.css":
/*!***************************************************!*\
  !*** ./src/app/protected/game/game.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content table td, .content table th {\n  border: 1px solid #dbdbdb;\n  padding: 0.5em 0.75em;\n  vertical-align: middle;\n  height: 50px;\n  text-align: center;\n}\n.content table {\nwidth: 80%;\nmargin: 0 auto;\n}\n.content table tr:hover {\n  background-color: transparent;\n}\n.battleship-tile:hover {\ncursor: pointer;\n}\n.win {\n  background-color: #23d160;\n  color: #fff;\n}\n.fail {\n  background-color: #ff3860;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGVkL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0EsV0FBVztBQUNYLGVBQWU7Q0FDZDtBQUNEO0VBQ0UsOEJBQThCO0NBQy9CO0FBQ0Q7QUFDQSxnQkFBZ0I7Q0FDZjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHRhYmxlIHRkLCAuY29udGVudCB0YWJsZSB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudCB0YWJsZSB7XG53aWR0aDogODAlO1xubWFyZ2luOiAwIGF1dG87XG59XG4uY29udGVudCB0YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJhdHRsZXNoaXAtdGlsZTpob3ZlciB7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/protected/game/game.component.html":
/*!****************************************************!*\
  !*** ./src/app/protected/game/game.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"container\">\n    <div class=\"content\">\n      <h1 class=\"title\">Ready to sink some battleships?</h1>\n      <h6 class=\"subtitle is-6\"><strong>Pusher Battleship</strong></h6>\n\n      <hr>\n\n      <section *ngIf=\"winner\" class=\"notification is-success has-text-centered\" style=\"color:white\">\n        <h1>\n          Player {{ winner.player.id }} has won the game!\n        </h1>\n        <h5>\n          Click <a href=\"{{ gameUrl }}\">here</a> to start a new game.\n        </h5>\n      </section>\n\n\n      <div class=\"columns\">\n        <div class=\"column has-text-centered\" *ngFor=\"let board of boards; let i = index\">\n          <h5>\n            <span class=\"tag is-info\" *ngIf=\"board.player.id == playerId; else elseBlock\">\n              Your field <strong>SCORE: {{ board.player.score }}</strong>\n            </span>\n            <ng-template #elseBlock>\n              <span class=\"tag is-info\">\n                Enemy field <strong>SCORE: {{ board.player.score }}</strong>\n              </span>\n            </ng-template>\n          </h5>\n          <table class=\"is-bordered\" [style.opacity] = \"board.player.id == playerId ? 0.5 : 1\">\n            <tr *ngFor=\"let row of board.tiles; let j = index\">\n              <td *ngFor=\"let col of row; let k = index\"\n              (click) = \"fireTorpedo(board.player.id)($event)\"\n              [style.background-color] = \"col.used ? '' : 'transparent'\"\n              [class.win] = \"col.status == 'win'\" [class.fail] = \"col.status !== 'win'\"\n              class=\"battleship-tile\" id=\"{{j}}{{k}}{{board.player.id}}\">\n              {{ col.value == \"X\" ? \"X\" : \"💀\" }}\n            </td>\n          </tr>\n        </table>\n\n      </div>\n    </div>\n\n\n    <div class=\"has-text-centered\">\n      <span class=\"tag is-warning\" *ngIf=\"isYourTurn\">Your turn!</span>\n      <span class=\"tag is-danger\" *ngIf=\"!isYourTurn\">Other player's turn.</span>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/protected/game/game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/protected/game/game.component.ts ***!
  \**************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board.service */ "./src/app/protected/board.service.ts");





var NUM_PLAYERS = 2;
var BOATS_COUNT = 10;
var validateHit = function (validationConfig) {
    var errorMessage = '';
    validationConfig.some(function (_a) {
        var condition = _a.condition, error = _a.error;
        if (condition) {
            errorMessage = error;
            return true;
        }
        return false;
    });
    return errorMessage;
};
var GameComponent = /** @class */ (function () {
    function GameComponent(store, notifierService, boardService) {
        var _this = this;
        this.store = store;
        this.notifierService = notifierService;
        this.boardService = boardService;
        this.isYourTurn = true;
        this.store.select('auth')
            .subscribe(function (_a) {
            var user = _a.user, isAuthinticated = _a.isAuthinticated;
            if (isAuthinticated && !_this.playerId) {
                _this.playerId = user.uid;
                _this.createBoards(user.uid);
            }
        });
    }
    GameComponent.prototype.fireTorpedo = function (playerId) {
        var _this = this;
        return function (e) {
            var id = e.target.id;
            var board = _this.boards.find(function (_a) {
                var player = _a.player;
                return player.id === playerId;
            });
            var row = id[0];
            var col = id[1];
            var tile = board.tiles[row][col];
            var error = _this.checkValidHit(playerId, tile);
            if (error) {
                _this.notifierService.show({
                    message: error,
                    type: 'error',
                });
                return;
            }
            if (tile.value === 1) {
                _this.notifierService.show({
                    message: 'You got this. YOU SANK A SHIP!',
                    type: 'info',
                });
                board.tiles[row][col].status = 'win';
                _this.boards.find(function (_a) {
                    var player = _a.player;
                    return player.id === _this.playerId;
                }).player.score++;
            }
            else {
                _this.notifierService.show({
                    message: 'OOPS! YOU MISSED THIS TIME',
                    type: 'warning',
                });
                board.tiles[row][col].status = 'fail';
            }
            board.tiles[row][col].used = true;
            board.tiles[row][col].value = 'X';
            var winner = _this.winner;
            if (winner) {
                _this.notifierService.show({
                    message: 'You win',
                    type: 'success',
                });
            }
            else {
                // TODO: test
                // this.isYourTurn = false;
            }
        };
    };
    GameComponent.prototype.createBoards = function (userId) {
        this.boardService.createBoard(userId);
        this.boardService.createBoard();
    };
    GameComponent.prototype.checkValidHit = function (boardId, tile) {
        var validationConfig = [
            {
                condition: this.winner,
                error: 'Game is over',
            },
            {
                condition: boardId === this.playerId,
                error: 'Don\'t commit suicide. You can\'t hit your own board.',
            },
            {
                condition: !this.isYourTurn,
                error: 'It\'s not your turn to play.',
            },
            {
                condition: tile.value === 'X',
                error: 'Don\'t waste your torpedos. You already shot here.',
            },
        ];
        return validateHit(validationConfig);
    };
    Object.defineProperty(GameComponent.prototype, "boards", {
        get: function () {
            return this.boardService.getBoards();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameComponent.prototype, "winner", {
        get: function () {
            return this.boards.find(function (board) { return board.player.score === BOATS_COUNT; });
        },
        enumerable: true,
        configurable: true
    });
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/protected/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/protected/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/protected/game/player.ts":
/*!******************************************!*\
  !*** ./src/app/protected/game/player.ts ***!
  \******************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(values) {
        if (values === void 0) { values = {}; }
        this.score = 0;
        Object.assign(this, values);
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/protected/protected-pages.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/protected/protected-pages.module.ts ***!
  \*****************************************************/
/*! exports provided: ProtectedPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedPagesModule", function() { return ProtectedPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/protected/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/protected/game/game.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/protected/statistics/statistics.component.ts");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/routes */ "./src/app/constants/routes.ts");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board.service */ "./src/app/protected/board.service.ts");










var protectedRoutes = [
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_8__["default"].game, component: _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_8__["default"].statistics, component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var ProtectedPagesModule = /** @class */ (function () {
    function ProtectedPagesModule() {
    }
    ProtectedPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(protectedRoutes),
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                _board_service__WEBPACK_IMPORTED_MODULE_9__["BoardService"],
            ]
        })
    ], ProtectedPagesModule);
    return ProtectedPagesModule;
}());



/***/ }),

/***/ "./src/app/protected/statistics/statistics.component.css":
/*!***************************************************************!*\
  !*** ./src/app/protected/statistics/statistics.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/protected/statistics/statistics.component.html":
/*!****************************************************************!*\
  !*** ./src/app/protected/statistics/statistics.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  statistics works!\n</p>\n"

/***/ }),

/***/ "./src/app/protected/statistics/statistics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/protected/statistics/statistics.component.ts ***!
  \**************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/protected/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/protected/statistics/statistics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/public/auth/auth.module.ts":
/*!********************************************!*\
  !*** ./src/app/public/auth/auth.module.ts ***!
  \********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/public/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/auth/login/login.component.ts");
/* harmony import */ var _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./control-messages/control-messages.component */ "./src/app/public/auth/control-messages/control-messages.component.ts");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/routes */ "./src/app/constants/routes.ts");









var authRoutes = [
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_8__["default"].login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], },
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_8__["default"].register, component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_7__["ControlMessagesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(authRoutes),
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/public/auth/control-messages/control-messages.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/public/auth/control-messages/control-messages.component.ts ***!
  \****************************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.service */ "./src/app/public/auth/validation.service.ts");




var getControlErrorsMessage = function (controlErrors) {
    var message = '';
    Object.keys(controlErrors).find(function (key) {
        message = _validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidatorErrorMessage(key, controlErrors[key]);
        return !!message;
    });
    return message;
};
var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            if ((this.control.touched || this.isFormSubmitted) && this.control.errors) {
                var validationMessage = getControlErrorsMessage(this.control.errors);
                if (validationMessage) {
                    return validationMessage;
                }
            }
            if (this.customErrors) {
                var customValidationMessage = getControlErrorsMessage(this.customErrors);
                if (customValidationMessage) {
                    return customValidationMessage;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ControlMessagesComponent.prototype, "customErrors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ControlMessagesComponent.prototype, "isFormSubmitted", void 0);
    ControlMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-messages',
            template: "<div *ngIf=\"errorMessage\" class=\"ml1 text-danger\">{{errorMessage}}</div>"
        })
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/public/auth/formControlStatuses.ts":
/*!****************************************************!*\
  !*** ./src/app/public/auth/formControlStatuses.ts ***!
  \****************************************************/
/*! exports provided: formControlStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formControlStatuses", function() { return formControlStatuses; });
var formControlStatuses = {
    valid: 'VALID',
    invalid: 'INVALID',
};


/***/ }),

/***/ "./src/app/public/auth/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/public/auth/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/public/auth/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/public/auth/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control ng-invali\" required>\n          <app-control-messages\n          [control]=\"loginForm.controls.email\"\n          [isFormSubmitted]=\"isSubmitted\"></app-control-messages>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" required>\n          <app-control-messages\n          [control]=\"loginForm.controls.password\"\n          [isFormSubmitted]=\"isSubmitted\"></app-control-messages>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-block mb-3\" (click)=\"onFormLogin()\" >\n          Login\n        </button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"onGoogleLogin()\">\n        Login with google\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <p>No account yet? <a routerLink=\"/register\" style=\"cursor: pointer\">Create an account</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public/auth/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/public/auth/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _formControlStatuses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../formControlStatuses */ "./src/app/public/auth/formControlStatuses.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb, store) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.store = store;
        this.isSubmitted = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth').subscribe(function (_a) {
            var isAuthinticated = _a.isAuthinticated;
            if (isAuthinticated) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]]
        });
    };
    LoginComponent.prototype.onGoogleLogin = function () {
        this.authService.googleLogin();
    };
    LoginComponent.prototype.onFormLogin = function () {
        var _a = this.loginForm, status = _a.status, value = _a.value;
        this.isSubmitted = true;
        if (status === _formControlStatuses__WEBPACK_IMPORTED_MODULE_6__["formControlStatuses"].valid) {
            this.authService.signIn(value);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/public/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/public/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/auth/register/register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/public/auth/register/register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/public/auth/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/public/auth/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\n          <app-control-messages\n            [control]=\"registerForm.controls.email\"\n            [isFormSubmitted]=\"isSubmitted\"></app-control-messages>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" required>\n          <app-control-messages\n            [control]=\"registerForm.controls.password\"\n            [isFormSubmitted]=\"isSubmitted\"></app-control-messages>\n        </div>\n        <div class=\"form-group\">\n          <label>Repeat password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"repeatPassword\" required>\n          <app-control-messages\n            [control]=\"registerForm.controls.repeatPassword\"\n            [customErrors]=\"registerForm.errors\"\n            [isFormSubmitted]=\"isSubmitted\"></app-control-messages>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-block mb-3\" (click)=\"onRegister()\" >\n          Register\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public/auth/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public/auth/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _formControlStatuses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formControlStatuses */ "./src/app/public/auth/formControlStatuses.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation.service */ "./src/app/public/auth/validation.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, fb, store) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.store = store;
        this.isSubmitted = false;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth').subscribe(function (_a) {
            var isAuthinticated = _a.isAuthinticated;
            if (isAuthinticated) {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)],],
        }, { validator: _validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].repeatPasswordValidator });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _a = this.registerForm, status = _a.status, value = _a.value;
        this.isSubmitted = true;
        if (status === _formControlStatuses__WEBPACK_IMPORTED_MODULE_5__["formControlStatuses"].valid) {
            this.authService.signUp(value);
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/public/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/public/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/public/auth/validation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/public/auth/validation.service.ts ***!
  \***************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
// tslint:disable-next-line
var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'email': 'Invalid email address',
            'repeatPassword': 'Invalid repeat password',
        };
        return config[validatorName];
    };
    ValidationService.emailValidator = function (control) {
        if (control.value.match(emailRegex)) {
            return null;
        }
        else {
            return { 'email': true };
        }
    };
    ValidationService.repeatPasswordValidator = function (formControl) {
        var _a = formControl.controls, password = _a.password, repeatPassword = _a.repeatPassword;
        if (password.value === repeatPassword.value) {
            return null;
        }
        else {
            return { 'repeatPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/public/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/public/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/public/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/public/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/public/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/public/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/public/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/public/not-found/not-found.component.css":
/*!**********************************************************!*\
  !*** ./src/app/public/not-found/not-found.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/public/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/public/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">  \n  <h2 style=\"text-align: center;\">\n    Page not found.\n  </h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/public/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/public/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/public/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/public/public-pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/public/public-pages.module.ts ***!
  \***********************************************/
/*! exports provided: PublicPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPagesModule", function() { return PublicPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/public/auth/auth.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/public/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/public/not-found/not-found.component.ts");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/routes */ "./src/app/constants/routes.ts");








var publicRoutes = [
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_7__["default"].root, component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: _constants_routes__WEBPACK_IMPORTED_MODULE_7__["default"].notFound, component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
var PublicPagesModule = /** @class */ (function () {
    function PublicPagesModule() {
    }
    PublicPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(publicRoutes),
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            ],
        })
    ], PublicPagesModule);
    return PublicPagesModule;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toogleopen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.show'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "toogleopen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]',
            exportAs: 'appDropdown'
        })
    ], DropdownDirective);
    return DropdownDirective;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown.directive.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/store/auth/auth.reducer.ts");

var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"]
};


/***/ }),

/***/ "./src/app/store/auth/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.actions.ts ***!
  \********************************************/
/*! exports provided: SIGNUP, SIGNIN, LOGOUT, SET_TOKEN, Signup, Signin, Logout, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
var SIGNUP = 'SIGNUP';
var SIGNIN = 'SIGNIN';
var LOGOUT = 'LOGOUT';
var SET_TOKEN = 'SET_TOKEN';
var Signup = /** @class */ (function () {
    function Signup(payload) {
        this.payload = payload;
        this.type = SIGNUP;
    }
    return Signup;
}());

var Signin = /** @class */ (function () {
    function Signin(payload) {
        this.payload = payload;
        this.type = SIGNIN;
    }
    return Signin;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/store/auth/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/store/auth/auth.actions.ts");


var initialState = {
    token: null,
    user: null,
    isAuthinticated: false,
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNUP"]):
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNIN"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isAuthinticated: true, user: action.payload });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: action.payload });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]):
            return initialState;
        default:
            return state;
    }
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDNDvHsDyvx9j-QPAl6G9X_N38-h5utsRs',
        authDomain: 'battleship-776a6.firebaseapp.com',
        databaseURL: 'https://battleship-776a6.firebaseio.com',
        projectId: 'battleship-776a6',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/koshacool/battleship/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map