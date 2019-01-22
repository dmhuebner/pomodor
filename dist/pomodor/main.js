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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _timer_components_timer_container_timer_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer/components/timer-container/timer-container.component */ "./src/app/timer/components/timer-container/timer-container.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'timer', component: _timer_components_timer_container_timer_container_component__WEBPACK_IMPORTED_MODULE_4__["TimerContainerComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: '**', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<pm-navbar></pm-navbar>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _timer_timer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timer/timer.module */ "./src/app/timer/timer.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.module */ "./src/app/settings/settings.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase, 'pomodor'),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _timer_timer_module__WEBPACK_IMPORTED_MODULE_10__["TimerModule"],
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_12__["SettingsModule"]
            ],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <h1 class=\"welcome-header\">\n    {{homeHeader}}\n  </h1>\n  <section class=\"home-page-content\">\n    <div class=\"app-description-container\">\n      <p class=\"app-description\">Pomodor is a simple, time management application that helps you work efficiently and track your work.</p>\n      <p class=\"app-description\">It uses the Pomodoro time management technique that encourages incremental bursts of high focus productivity followed by short breaks.</p>\n      <p class=\"app-description\">You can change the timer controls in the <a href=\"\" routerLink=\"/settings\">Settings</a>.</p>\n    </div>\n    <div class=\"home-page-button-group\">\n      <button class=\"btn-large start-timer-homepage-button\" routerLink=\"/timer\" type=\"button\" mat-raised-button aria-label=\"Start a timer\" color=\"secondary\">Start a Timer</button>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\n.home-page {\n  margin: 2rem; }\n.home-page .welcome-header {\n    text-align: center;\n    color: #3E51B5;\n    margin-bottom: 3rem; }\n.home-page .home-page-content {\n    max-width: 60rem;\n    background-color: #3E51B5;\n    color: #fff;\n    margin: auto;\n    padding: 2rem;\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px; }\n.home-page .home-page-content .app-description-container {\n      margin-bottom: 3rem; }\n.home-page .home-page-content .app-description {\n      font-size: 1.4rem;\n      line-height: 2rem; }\n.home-page .home-page-content .home-page-button-group {\n      text-align: center; }\n.home-page .home-page-content .home-page-button-group .start-timer-homepage-button {\n        color: #3E51B5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFtQm5CLGdCQUFnQjtBQThCaEIscUJBQXFCO0FBRXJCO0VBQWEsYUFBWSxFQUFJO0FBQzdCO0VBQ0UsVUFBUztFQUNULGtEQUFpRCxFQWNsRDtBQWhCRDtJQUtJLHNCQUFxQjtJQUNyQixlQXJEVyxFQTBEWjtBQVhIO01BU00sZUFBYyxFQUNmO0FBVkw7SUFjSSxrQkFBaUIsRUFDbEI7QUNqRUg7RUFDRSxhQUFZLEVBaUNiO0FBbENEO0lBSUksbUJBQWtCO0lBQ2xCLGVEQWE7SUNDYixvQkFBbUIsRUFDcEI7QUFQSDtJQVVJLGlCQUFnQjtJQUNoQiwwQkROYTtJQ09iLFlBQVc7SUFDWCxhQUFZO0lBQ1osY0FBYTtJRDRCZixtQkMzQjRCO0lENEI1QiwyQkM1QjRCO0lENkI1Qix3QkM3QjRCLEVBa0IzQjtBQWpDSDtNQWtCTSxvQkFBbUIsRUFDcEI7QUFuQkw7TUFzQk0sa0JBQWlCO01BQ2pCLGtCQUFpQixFQUNsQjtBQXhCTDtNQTJCTSxtQkFBa0IsRUFLbkI7QUFoQ0w7UUE4QlEsZUR6QlMsRUMwQlYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIFZhcmlhYmxlcyAqKiovXG5cbiRzb2Z0Qmx1ZTogIzAwYTlmZjtcbiRwb21Db2xvcjogI2ZmNjg2ODtcbiRtZWxsb3c6ICNmZmMyNzA7XG4kYnJlYWs6ICNGRjdGMUM7XG4kZGFya2VyQmFja2dyb3VuZDogIzMzMztcbiRwcmltYXJ5OiAjM0U1MUI1O1xuJHByaW1hcnlMaWdodGVyOiAjNzg4MWI1O1xuJGxpZ2h0T25CcmVhazogI2ZmZTJiZTtcbiRsaWdodFByaW1hcnk6ICNkZmVmZmY7XG5cbiRsaWdodEdyZXk6ICNhYWE7XG4kZ3JleTogIzc3NztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRhbG1vc3RCbGFjazogIzIyMjtcbiRkYXJraXNoUHVycGxlOiAjNjc0OGQ4O1xuXG4vKioqIE1peGlucyAqKiovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tcy10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1vLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkcHgsICRweDIsICRjb2xvcikge1xuICBib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtbW96LWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW8tYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRweCwgJHB4MiwgJGNvbG9yKSB7XG4gIHRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtbW96LXRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtby10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbn1cblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLyoqKiBNYWluIFN0eWxlcyAqKiovXG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRicmVhaztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNiZTQ3MGM7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4uaG9tZS1wYWdlIHtcbiAgbWFyZ2luOiAycmVtO1xuICBcbiAgLndlbGNvbWUtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cblxuICAuaG9tZS1wYWdlLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNjByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1cHgpO1xuXG4gICAgLmFwcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuYXBwLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgfVxuICAgIFxuICAgIC5ob21lLXBhZ2UtYnV0dG9uLWdyb3VwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLnN0YXJ0LXRpbWVyLWhvbWVwYWdlLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.homeHeader = 'Welcome to Pomodor';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"nav-item\" routerLink=\"/home\" routerLinkActive=\"active\" href=\"#\">\n        <mat-icon aria-label=\"Home\">home</mat-icon>\n        Home\n      </a>\n      <a mat-list-item class=\"nav-item\" routerLink=\"/timer\" routerLinkActive=\"active\" href=\"#\">\n        <mat-icon aria-label=\"Timer\">watch</mat-icon>\n        Timer\n      </a>\n      <a mat-list-item class=\"nav-item\" routerLink=\"/settings\" routerLinkActive=\"active\" href=\"#\">\n        <mat-icon aria-label=\"Settings\">settings</mat-icon>\n        Settings\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span class=\"navbar-logo\" (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Pomodor logo\" svgIcon=\"pomodor\"></mat-icon>\n        Pomodor\n      </span>\n      <div class=\"signed-in-menu-items\" *ngIf=\"authService.user$ | async as user; else login\">\n        <span class=\"user-display-name\">{{user.displayName}}</span>\n        <button type=\"button\" aria-label=\"logout\" mat-raised-button (click)=\"authService.logout()\">\n          Logout\n        </button>\n      </div>\n      <ng-template #login class=\"signed-out-menu-items\">\n        <button type=\"button\" aria-label=\"login\" mat-raised-button (click)=\"authService.login()\">\n          Login\n        </button>\n      </ng-template>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <div class=\"content-wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n  .sidenav-container .sidenav {\n    width: 200px; }\n  .sidenav-container .sidenav .nav-item mat-icon {\n      margin-right: 0.5rem; }\n  .sidenav-container .sidenav .nav-item.active {\n      background-color: #3F51B5;\n      color: #fff; }\n  .sidenav-container .sidenav .mat-toolbar {\n    background: inherit; }\n  .sidenav-container .mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1; }\n  .sidenav-container .mat-toolbar.mat-primary .navbar-logo {\n      margin-left: 1rem;\n      margin-right: 1rem;\n      cursor: pointer; }\n  .sidenav-container .mat-toolbar.mat-primary .navbar-logo mat-icon {\n        position: relative;\n        top: 0.25rem; }\n  .sidenav-container .mat-toolbar.mat-primary .signed-in-menu-items {\n      padding-top: 0.43rem; }\n  .sidenav-container .mat-toolbar.mat-primary .signed-in-menu-items .user-display-name {\n        margin: 1rem 1rem 1rem 0; }\n  .sidenav-container .content-wrapper {\n    margin: 0;\n    padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQWtEYjtFQW5ERDtJQUlJLGFBQVksRUFZYjtFQWhCSDtNQVFRLHFCQUFvQixFQUNyQjtFQVRQO01BWVEsMEJBQXlCO01BQ3pCLFlBQVcsRUFDWjtFQWRQO0lBbUJJLG9CQUFtQixFQUNwQjtFQXBCSDtJQXVCSSx5QkFBZ0I7SUFBaEIsaUJBQWdCO0lBQ2hCLE9BQU07SUFDTixXQUFVLEVBb0JYO0VBN0NIO01BNEJNLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsZ0JBQWUsRUFNaEI7RUFwQ0w7UUFpQ1EsbUJBQWtCO1FBQ2xCLGFBQVksRUFDYjtFQW5DUDtNQXVDTSxxQkFBb0IsRUFLckI7RUE1Q0w7UUEwQ1EseUJBQXdCLEVBQ3pCO0VBM0NQO0lBZ0RJLFVBQVM7SUFDVCxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zaWRlbmF2IHtcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgbWF0LWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgXG4gICAgLm5hdmJhci1sb2dvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zaWduZWQtaW4tbWVudS1pdGVtcyB7XG4gICAgICBwYWRkaW5nLXRvcDogMC40M3JlbTtcblxuICAgICAgLnVzZXItZGlzcGxheS1uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver, iconRegistry, sanitizer, authService) {
        this.breakpointObserver = breakpointObserver;
        this.iconRegistry = iconRegistry;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        iconRegistry.addSvgIcon('pomodor', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tomato-icon.svg'));
    }
    NavbarComponent.prototype.login = function () {
        return this.authService.login();
    };
    NavbarComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"settings-page\">\n  <div class=\"settings-form\">\n    <h2 class=\"header-text\">Settings</h2>\n    <mat-form-field>\n      <input matInput type=\"number\" placeholder=\"Timer length in minutes\" [formControl]=\"timerLength\">\n    </mat-form-field>\n    <div>\n      <mat-form-field>\n        <input matInput type=\"number\" placeholder=\"Recharge length in minutes\" [formControl]=\"breakLength\">\n      </mat-form-field>\n    </div>\n    <div class=\"checkbox-field\">\n      <mat-checkbox [formControl]=\"useTimerBumpers\">Use Timer Bumpers?</mat-checkbox>\n    </div>\n    <mat-form-field class=\"shorter-number-field\" *ngIf=\"useTimerBumpers.value\">\n      <input matInput type=\"number\" class=\"shorter-number-field\" placeholder=\"Timer bumper length in minutes\" [formControl]=\"bumperLengthInMinutes\">\n    </mat-form-field>\n    <div class=\"settings-button-group\">\n      <button type=\"button\" class=\"save-settings\" aria-label=\"save settings\" mat-raised-button color=\"primary\" (click)=\"onSaveSettings()\" [disabled]=\"!timerLength.value || !breakLength.value\">\n        Save\n      </button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\n.settings-page {\n  text-align: center; }\n.settings-page .settings-form {\n    text-align: center;\n    max-width: 50rem;\n    margin: auto; }\n.settings-page .settings-form .header-text {\n      color: #3E51B5; }\n.settings-page .settings-form .checkbox-field {\n      margin: 1rem 0 2rem 0; }\n.settings-page .settings-form mat-form-field {\n      min-width: 70%;\n      text-align: center;\n      font-size: 1.25rem;\n      color: #3E51B5; }\n.settings-page .settings-form .shorter-number-field {\n      width: 10rem; }\n.settings-page .settings-form input {\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQW1CbkIsZ0JBQWdCO0FBOEJoQixxQkFBcUI7QUFFckI7RUFBYSxhQUFZLEVBQUk7QUFDN0I7RUFDRSxVQUFTO0VBQ1Qsa0RBQWlELEVBY2xEO0FBaEJEO0lBS0ksc0JBQXFCO0lBQ3JCLGVBckRXLEVBMERaO0FBWEg7TUFTTSxlQUFjLEVBQ2Y7QUFWTDtJQWNJLGtCQUFpQixFQUNsQjtBQ2pFSDtFQUNFLG1CQUFrQixFQThCbkI7QUEvQkQ7SUFJSSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGFBQVksRUF3QmI7QUE5Qkg7TUFTTSxlREpXLEVDS1o7QUFWTDtNQWFNLHNCQUFxQixFQUN0QjtBQWRMO01BaUJNLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLGVEZlcsRUNnQlo7QUFyQkw7TUF3Qk0sYUFBWSxFQUNiO0FBekJMO01BNEJNLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBWYXJpYWJsZXMgKioqL1xuXG4kc29mdEJsdWU6ICMwMGE5ZmY7XG4kcG9tQ29sb3I6ICNmZjY4Njg7XG4kbWVsbG93OiAjZmZjMjcwO1xuJGJyZWFrOiAjRkY3RjFDO1xuJGRhcmtlckJhY2tncm91bmQ6ICMzMzM7XG4kcHJpbWFyeTogIzNFNTFCNTtcbiRwcmltYXJ5TGlnaHRlcjogIzc4ODFiNTtcbiRsaWdodE9uQnJlYWs6ICNmZmUyYmU7XG4kbGlnaHRQcmltYXJ5OiAjZGZlZmZmO1xuXG4kbGlnaHRHcmV5OiAjYWFhO1xuJGdyZXk6ICM3Nzc7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kYWxtb3N0QmxhY2s6ICMyMjI7XG4kZGFya2lzaFB1cnBsZTogIzY3NDhkODtcblxuLyoqKiBNaXhpbnMgKioqL1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHB4LCAkcHgyLCAkY29sb3IpIHtcbiAgYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1vLWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkcHgsICRweDIsICRjb2xvcikge1xuICB0ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW8tdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8qKiogTWFpbiBTdHlsZXMgKioqL1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkYnJlYWs7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYmU0NzBjO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnNldHRpbmdzLXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLnNldHRpbmdzLWZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC5oZWFkZXItdGV4dCB7XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveC1maWVsZCB7XG4gICAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuXG4gICAgLnNob3J0ZXItbnVtYmVyLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.timerLength = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.settingsService.getTimerLength() / 60);
        this.breakLength = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.settingsService.getBreakLength() / 60);
        this.bumperLengthInMinutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.settingsService.getBumperLengthInMinutes());
        this.useTimerBumpers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.settingsService.getUseTimerBumpers());
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.onSaveSettings = function () {
        this.settingsService.setTimerLengthInSeconds(this.timerLength.value);
        this.settingsService.setBreakLengthInSeconds(this.breakLength.value);
        this.settingsService.setBumperLengthInMinutes(this.bumperLengthInMinutes.value);
        this.settingsService.setUseTimerBumpers(this.useTimerBumpers.value);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found-container\">\n  <h1>Ooops.. That page doesn't exist.</h1>\n  <h3><a href=\"\" routerLink=\"/home\">Go Home</a>?</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-container {\n  padding: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/usbLight.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/interceptors/usbLight.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: UsbLightInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsbLightInterceptor", function() { return UsbLightInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsbLightInterceptor = /** @class */ (function () {
    function UsbLightInterceptor() {
    }
    // This interceptor's job is to catch any error that might be thrown from calling the USB LED light API.
    // We don't want to show the user errors when there is no USB LED light connected in case they are using the app without one
    UsbLightInterceptor.prototype.intercept = function (request, next) {
        var pattern = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localUSBLightBaseUrl + 'light/';
        if (request.url.startsWith(pattern)) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            }));
        }
        else {
            return next.handle(request);
        }
    };
    UsbLightInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UsbLightInterceptor);
    return UsbLightInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/pipes/timer.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/timer.pipe.ts ***!
  \********************************************/
/*! exports provided: TimerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPipe", function() { return TimerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimerPipe = /** @class */ (function () {
    function TimerPipe() {
    }
    TimerPipe.prototype.transform = function (seconds, args) {
        var wholeSeconds = Math.floor(seconds);
        var minutes = Math.floor(seconds / 60);
        var secondsLeft = wholeSeconds % 60;
        if (secondsLeft < 10) {
            secondsLeft = '0' + secondsLeft;
        }
        var output = minutes + ':' + secondsLeft;
        return output;
    };
    TimerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timer'
        })
    ], TimerPipe);
    return TimerPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        // TODO this should probably be in ngOnInit
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    AuthService.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [2 /*return*/, this.updateUserData(credential.user)];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.updateUserData = function (_a) {
        var uid = _a.uid, displayName = _a.displayName, tasks = _a.tasks;
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + uid);
        var data = {
            uid: uid,
            displayName: displayName,
            tasks: tasks
        };
        userRef.set(data, { merge: true });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/settings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
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

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        // Defaults set
        this.timerLengthInSeconds = 1500;
        this.breakLengthInSeconds = 300;
        this.bumperLengthInMinutes = 1;
        this.useTimerBumpers = false;
    }
    SettingsService.prototype.getTimerLength = function () {
        return this.timerLengthInSeconds;
    };
    SettingsService.prototype.setTimerLengthInSeconds = function (seconds) {
        this.timerLengthInSeconds = seconds * 60;
    };
    SettingsService.prototype.getBreakLength = function () {
        return this.breakLengthInSeconds;
    };
    SettingsService.prototype.setBreakLengthInSeconds = function (seconds) {
        this.breakLengthInSeconds = seconds * 60;
    };
    SettingsService.prototype.getBumperLengthInMinutes = function () {
        return this.bumperLengthInMinutes;
    };
    SettingsService.prototype.setBumperLengthInMinutes = function (minutes) {
        this.bumperLengthInMinutes = minutes;
    };
    SettingsService.prototype.getUseTimerBumpers = function () {
        return this.useTimerBumpers;
    };
    SettingsService.prototype.setUseTimerBumpers = function (bool) {
        this.useTimerBumpers = bool;
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/services/usb-light.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/usb-light.service.ts ***!
  \******************************************************/
/*! exports provided: UsbLightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsbLightService", function() { return UsbLightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsbLightService = /** @class */ (function () {
    function UsbLightService(http) {
        this.http = http;
    }
    UsbLightService.prototype.setLight = function (hexColor) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].localUSBLightBaseUrl + 'light/';
        // Need to do this more gracefully. Only if usb led light is detected
        return this.http.get(url + hexColor);
    };
    UsbLightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsbLightService);
    return UsbLightService;
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
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pipes_timer_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/timer.pipe */ "./src/app/shared/pipes/timer.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_usbLight_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/usbLight.interceptor */ "./src/app/shared/interceptors/usbLight.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var USB_LIGHT_INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
    useClass: _interceptors_usbLight_interceptor__WEBPACK_IMPORTED_MODULE_6__["UsbLightInterceptor"],
    multi: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
                _pipes_timer_pipe__WEBPACK_IMPORTED_MODULE_4__["TimerPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            ],
            exports: [
                _pipes_timer_pipe__WEBPACK_IMPORTED_MODULE_4__["TimerPipe"],
            ],
            providers: [
                USB_LIGHT_INTERCEPTOR_PROVIDER
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/timer/components/timer-container/timer-container.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/timer/components/timer-container/timer-container.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timer-page-container\" [class.container-timer-on]=\"timerOn\" [class.container-on-break]=\"onBreak && timerOn\">\n  <h2 class=\"header-text\" *ngIf=\"!onBreak && !timerOn\">Timer</h2>\n  <h2 class=\"header-text\" *ngIf=\"!onBreak && timerOn\">Focus</h2>\n  <h2 class=\"on-break\" *ngIf=\"onBreak && !timerOn\">Recharge</h2>\n  <h2 class=\"on-break\" *ngIf=\"onBreak && timerOn\">Recharging...</h2>\n  <section class=\"timer-container\">\n    <pm-timer [timerLength]=\"timerLengthInSeconds\"\n              [breakLength]=\"breakLengthInSeconds\"\n              [timerBumperLength]=\"timerBumperLengthInMinutes\">\n    </pm-timer>\n  </section>\n  <h4>Completed Timers</h4>\n  <hr class=\"completed-timers-hr\">\n  <section class=\"timer-history-container\">\n    <pm-timer-history-container></pm-timer-history-container>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/timer/components/timer-container/timer-container.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/timer/components/timer-container/timer-container.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\n.timer-page-container {\n  width: 100%;\n  min-height: 83vh;\n  text-align: center;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #dfefff;\n  transition: 1s; }\n.timer-page-container .header-text {\n    color: #3E51B5; }\n.timer-page-container .timer-container {\n    max-width: 50rem;\n    margin: auto;\n    margin-bottom: 4rem;\n    border: 1px solid #cdd;\n    transition: 1s; }\n.timer-page-container .completed-timers-hr {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)); }\n.container-timer-on {\n  background-color: #222222;\n  color: #fff; }\n.container-timer-on .header-text {\n    color: #fff; }\n.container-timer-on .timer-container {\n    border: 1px solid transparent; }\n.container-on-break {\n  background-color: #ffe2be;\n  color: #222; }\n.container-on-break .timer-container {\n    border: 1px solid transparent; }\n.timer-history-container {\n  margin: 2rem;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXItY29udGFpbmVyL3RpbWVyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFtQm5CLGdCQUFnQjtBQThCaEIscUJBQXFCO0FBRXJCO0VBQWEsYUFBWSxFQUFJO0FBQzdCO0VBQ0UsVUFBUztFQUNULGtEQUFpRCxFQWNsRDtBQWhCRDtJQUtJLHNCQUFxQjtJQUNyQixlQXJEVyxFQTBEWjtBQVhIO01BU00sZUFBYyxFQUNmO0FBVkw7SUFjSSxrQkFBaUIsRUFDbEI7QUNqRUg7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLDBCREVvQjtFQWdCcEIsZUNqQnNCLEVBbUJ2QjtBQTFCRDtJQVVJLGVETGEsRUNNZDtBQVhIO0lBY0ksaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsdUJBQXNCO0lET3hCLGVDTndCLEVBQ3ZCO0FBbkJIO0lBc0JJLFVBQVM7SUFDVCxZQUFXO0lBQ1gscUdBQW9HLEVBQ3JHO0FBR0g7RUFDRSwwQkFBeUI7RUFDekIsWUFBVyxFQVNaO0FBWEQ7SUFLSSxZQUFXLEVBQ1o7QUFOSDtJQVNJLDhCQUE2QixFQUM5QjtBQUdIO0VBQ0UsMEJEbkNvQjtFQ29DcEIsWUFBVyxFQUtaO0FBUEQ7SUFLSSw4QkFBNkIsRUFDOUI7QUFHSDtFQUNFLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0IsY0FBYTtFQUNiLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGltZXIvY29tcG9uZW50cy90aW1lci1jb250YWluZXIvdGltZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBWYXJpYWJsZXMgKioqL1xuXG4kc29mdEJsdWU6ICMwMGE5ZmY7XG4kcG9tQ29sb3I6ICNmZjY4Njg7XG4kbWVsbG93OiAjZmZjMjcwO1xuJGJyZWFrOiAjRkY3RjFDO1xuJGRhcmtlckJhY2tncm91bmQ6ICMzMzM7XG4kcHJpbWFyeTogIzNFNTFCNTtcbiRwcmltYXJ5TGlnaHRlcjogIzc4ODFiNTtcbiRsaWdodE9uQnJlYWs6ICNmZmUyYmU7XG4kbGlnaHRQcmltYXJ5OiAjZGZlZmZmO1xuXG4kbGlnaHRHcmV5OiAjYWFhO1xuJGdyZXk6ICM3Nzc7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kYWxtb3N0QmxhY2s6ICMyMjI7XG4kZGFya2lzaFB1cnBsZTogIzY3NDhkODtcblxuLyoqKiBNaXhpbnMgKioqL1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHB4LCAkcHgyLCAkY29sb3IpIHtcbiAgYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1vLWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkcHgsICRweDIsICRjb2xvcikge1xuICB0ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW8tdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8qKiogTWFpbiBTdHlsZXMgKioqL1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkYnJlYWs7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYmU0NzBjO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnRpbWVyLXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgzdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRQcmltYXJ5O1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKDFzKTtcblxuICAuaGVhZGVyLXRleHQge1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC50aW1lci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDFzKTtcbiAgfVxuXG4gIC5jb21wbGV0ZWQtdGltZXJzLWhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxufVxuXG4uY29udGFpbmVyLXRpbWVyLW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgY29sb3I6ICNmZmY7XG5cbiAgLmhlYWRlci10ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC50aW1lci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5jb250YWluZXItb24tYnJlYWsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRPbkJyZWFrO1xuICBjb2xvcjogIzIyMjtcblxuICAudGltZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4udGltZXItaGlzdG9yeS1jb250YWluZXIge1xuICBtYXJnaW46IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/timer/components/timer-container/timer-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/timer/components/timer-container/timer-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TimerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerContainerComponent", function() { return TimerContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../timer.service */ "./src/app/timer/timer.service.ts");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerContainerComponent = /** @class */ (function () {
    function TimerContainerComponent(timerService, settingsService) {
        this.timerService = timerService;
        this.settingsService = settingsService;
        this.onBreak = false;
        this.timerOn = false;
    }
    TimerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerService.onBreak$.subscribe(function (val) { return _this.onBreak = val; });
        this.timerService.timerOn$.subscribe(function (val) { return _this.timerOn = val; });
        this.timerLengthInSeconds = this.settingsService.getTimerLength();
        this.breakLengthInSeconds = this.settingsService.getBreakLength();
        this.timerBumperLengthInMinutes = this.settingsService.getBumperLengthInMinutes();
    };
    TimerContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-timer-container',
            template: __webpack_require__(/*! ./timer-container.component.html */ "./src/app/timer/components/timer-container/timer-container.component.html"),
            styles: [__webpack_require__(/*! ./timer-container.component.scss */ "./src/app/timer/components/timer-container/timer-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"],
            _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], TimerContainerComponent);
    return TimerContainerComponent;
}());



/***/ }),

/***/ "./src/app/timer/components/timer-history-container/timer-history-container.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/timer/components/timer-history-container/timer-history-container.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"timer-history-container\">\n  <div class=\"timer-history-container-heading\">\n    <h4 class=\"number-completed\" [class.timeron]=\"timerOn\">{{timerHistoryList.length}}</h4>\n  </div>\n  <div class=\"timer-history-item\" *ngFor=\"let timerItem of timerHistoryList\">\n    <pm-timer-history [timerObject]=\"timerItem\"></pm-timer-history>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/timer/components/timer-history-container/timer-history-container.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/timer/components/timer-history-container/timer-history-container.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\n.timer-history-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto;\n  text-align: center; }\n.timer-history-container .timer-history-container-heading {\n    margin-top: 0.6rem;\n    margin-left: 1rem;\n    width: 5.8rem;\n    height: 5.8rem;\n    font-size: 1.5rem;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    border: 1px solid rgba(60, 60, 60, 0.3); }\n.timer-history-container .timer-history-container-heading .number-completed {\n      font-size: 1.5rem; }\n.timer-history-container .timer-history-container-heading .number-completed.timerOn {\n        color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXItaGlzdG9yeS1jb250YWluZXIvdGltZXItaGlzdG9yeS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBbUJuQixnQkFBZ0I7QUE4QmhCLHFCQUFxQjtBQUVyQjtFQUFhLGFBQVksRUFBSTtBQUM3QjtFQUNFLFVBQVM7RUFDVCxrREFBaUQsRUFjbEQ7QUFoQkQ7SUFLSSxzQkFBcUI7SUFDckIsZUFyRFcsRUEwRFo7QUFYSDtNQVNNLGVBQWMsRUFDZjtBQVZMO0lBY0ksa0JBQWlCLEVBQ2xCO0FDakVIO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQixFQW1CbkI7QUF2QkQ7SUFPSSxtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGNBQWE7SUFDYixlQUFjO0lBQ2Qsa0JBQWlCO0lEK0JuQixtQkM5QjRCO0lEK0I1QiwyQkMvQjRCO0lEZ0M1Qix3QkNoQzRCO0lBQzFCLHdDQUF1QyxFQVN4QztBQXRCSDtNQWdCTSxrQkFBaUIsRUFLbEI7QUFyQkw7UUFtQlEsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdGltZXIvY29tcG9uZW50cy90aW1lci1oaXN0b3J5LWNvbnRhaW5lci90aW1lci1oaXN0b3J5LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogVmFyaWFibGVzICoqKi9cblxuJHNvZnRCbHVlOiAjMDBhOWZmO1xuJHBvbUNvbG9yOiAjZmY2ODY4O1xuJG1lbGxvdzogI2ZmYzI3MDtcbiRicmVhazogI0ZGN0YxQztcbiRkYXJrZXJCYWNrZ3JvdW5kOiAjMzMzO1xuJHByaW1hcnk6ICMzRTUxQjU7XG4kcHJpbWFyeUxpZ2h0ZXI6ICM3ODgxYjU7XG4kbGlnaHRPbkJyZWFrOiAjZmZlMmJlO1xuJGxpZ2h0UHJpbWFyeTogI2RmZWZmZjtcblxuJGxpZ2h0R3JleTogI2FhYTtcbiRncmV5OiAjNzc3O1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJGFsbW9zdEJsYWNrOiAjMjIyO1xuJGRhcmtpc2hQdXJwbGU6ICM2NzQ4ZDg7XG5cbi8qKiogTWl4aW5zICoqKi9cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbW96LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1zLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICB0cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRweCwgJHB4MiwgJGNvbG9yKSB7XG4gIGJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1tb3otYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtby1ib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHB4LCAkcHgyLCAkY29sb3IpIHtcbiAgdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1vLXRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vKioqIE1haW4gU3R5bGVzICoqKi9cblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJGJyZWFrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2JlNDcwYztcbiAgICB9XG4gIH1cblxuICAuYnRuLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi50aW1lci1oaXN0b3J5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLnRpbWVyLWhpc3RvcnktY29udGFpbmVyLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB3aWR0aDogNS44cmVtO1xuICAgIGhlaWdodDogNS44cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIDAuMyk7XG5cbiAgICAubnVtYmVyLWNvbXBsZXRlZCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgICAgJi50aW1lck9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/timer/components/timer-history-container/timer-history-container.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/timer/components/timer-history-container/timer-history-container.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TimerHistoryContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerHistoryContainerComponent", function() { return TimerHistoryContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../timer.service */ "./src/app/timer/timer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerHistoryContainerComponent = /** @class */ (function () {
    function TimerHistoryContainerComponent(timerService) {
        this.timerService = timerService;
        this.onBreak = false;
        this.timerOn = false;
        this.timerHistoryList = [];
    }
    TimerHistoryContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerService.onBreak$.subscribe(function (val) { return _this.onBreak = val; });
        this.timerService.timerOn$.subscribe(function (val) { return _this.timerOn = val; });
        this.timerService.completedTimerList$.subscribe(function (val) {
            if (val) {
                _this.timerHistoryList.unshift(JSON.parse(JSON.stringify(val)));
            }
        });
    };
    TimerHistoryContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-timer-history-container',
            template: __webpack_require__(/*! ./timer-history-container.component.html */ "./src/app/timer/components/timer-history-container/timer-history-container.component.html"),
            styles: [__webpack_require__(/*! ./timer-history-container.component.scss */ "./src/app/timer/components/timer-history-container/timer-history-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]])
    ], TimerHistoryContainerComponent);
    return TimerHistoryContainerComponent;
}());



/***/ }),

/***/ "./src/app/timer/components/timer-history/timer-history.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/timer/components/timer-history/timer-history.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timer-history-item\" [class.completed]=\"timerObject?.completed && !timerObject?.completedWithBreak\" [class.completed-with-break]=\"timerObject?.completedWithBreak\">\n  <mat-icon *ngIf=\"!timerObject.completedWithBreak\" svgIcon=\"done-checkmark\"></mat-icon>\n  <mat-icon *ngIf=\"timerObject.completedWithBreak\" svgIcon=\"done-checkmark-outline\"></mat-icon>\n</div>\n"

/***/ }),

/***/ "./src/app/timer/components/timer-history/timer-history.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/timer/components/timer-history/timer-history.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\n.timer-history-item {\n  height: 4rem;\n  width: 4rem;\n  background-color: #3E51B5;\n  margin: 1.4rem;\n  color: #fff; }\n.timer-history-item.completed {\n    background-color: #7881b5; }\n.timer-history-item.completed-with-break {\n    background-color: #3E51B5;\n    box-shadow: 0 0 25px #6d8aee;\n    border: 1px solid #5975ee; }\n.timer-history-item mat-icon {\n    margin: 32%;\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXItaGlzdG9yeS90aW1lci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQW1CbkIsZ0JBQWdCO0FBOEJoQixxQkFBcUI7QUFFckI7RUFBYSxhQUFZLEVBQUk7QUFDN0I7RUFDRSxVQUFTO0VBQ1Qsa0RBQWlELEVBY2xEO0FBaEJEO0lBS0ksc0JBQXFCO0lBQ3JCLGVBckRXLEVBMERaO0FBWEg7TUFTTSxlQUFjLEVBQ2Y7QUFWTDtJQWNJLGtCQUFpQixFQUNsQjtBQ2pFSDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsMEJERWU7RUNEZixlQUFjO0VBQ2QsWUFBVyxFQWdCWjtBQXJCRDtJQVFJLDBCREZvQixFQ0dyQjtBQVRIO0lBWUksMEJEUGE7SUNRYiw2QkFBdUM7SUFDdkMsMEJBQW1DLEVBQ3BDO0FBZkg7SUFrQkksWUFBVztJQUNYLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXItaGlzdG9yeS90aW1lci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBWYXJpYWJsZXMgKioqL1xuXG4kc29mdEJsdWU6ICMwMGE5ZmY7XG4kcG9tQ29sb3I6ICNmZjY4Njg7XG4kbWVsbG93OiAjZmZjMjcwO1xuJGJyZWFrOiAjRkY3RjFDO1xuJGRhcmtlckJhY2tncm91bmQ6ICMzMzM7XG4kcHJpbWFyeTogIzNFNTFCNTtcbiRwcmltYXJ5TGlnaHRlcjogIzc4ODFiNTtcbiRsaWdodE9uQnJlYWs6ICNmZmUyYmU7XG4kbGlnaHRQcmltYXJ5OiAjZGZlZmZmO1xuXG4kbGlnaHRHcmV5OiAjYWFhO1xuJGdyZXk6ICM3Nzc7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kYWxtb3N0QmxhY2s6ICMyMjI7XG4kZGFya2lzaFB1cnBsZTogIzY3NDhkODtcblxuLyoqKiBNaXhpbnMgKioqL1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHB4LCAkcHgyLCAkY29sb3IpIHtcbiAgYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC1vLWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkcHgsICRweDIsICRjb2xvcikge1xuICB0ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW1vei10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW8tdGV4dC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8qKiogTWFpbiBTdHlsZXMgKioqL1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkYnJlYWs7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYmU0NzBjO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnRpbWVyLWhpc3RvcnktaXRlbSB7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBtYXJnaW46IDEuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJi5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5TGlnaHRlcjtcbiAgfVxuXG4gICYuY29tcGxldGVkLXdpdGgtYnJlYWsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYigxMDksIDEzOCwgMjM4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODksIDExNywgMjM4KTtcbiAgfVxuXG4gIG1hdC1pY29uIHtcbiAgICBtYXJnaW46IDMyJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/timer/components/timer-history/timer-history.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/timer/components/timer-history/timer-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: TimerHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerHistoryComponent", function() { return TimerHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerHistoryComponent = /** @class */ (function () {
    function TimerHistoryComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('done-checkmark-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done_outline-24px.svg'));
        iconRegistry.addSvgIcon('done-checkmark', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done-24px.svg'));
    }
    TimerHistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimerHistoryComponent.prototype, "timerObject", void 0);
    TimerHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-timer-history',
            template: __webpack_require__(/*! ./timer-history.component.html */ "./src/app/timer/components/timer-history/timer-history.component.html"),
            styles: [__webpack_require__(/*! ./timer-history.component.scss */ "./src/app/timer/components/timer-history/timer-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TimerHistoryComponent);
    return TimerHistoryComponent;
}());



/***/ }),

/***/ "./src/app/timer/components/timer/timer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/timer/components/timer/timer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timer-container\" [class.timeron]=\"timerOn\" [class.onbreak]=\"onBreak\">\n  <p class=\"timer-countdown\">{{timeLeft | timer}}</p>\n  <div class=\"timer-button-container\">\n    <button type=\"button\" class=\"timer-minus-bumper\" [class.onbreak]=\"onBreak\" aria-label=\"minus time\" mat-raised-button color=\"primary\" *ngIf=\"showTimerBumpers && !onBreak\" (click)=\"bumpTimerBack()\">\n      - {{timerBumperLength}}\n    </button>\n    <button type=\"button\" class=\"timer-start-button\" [class.onbreak]=\"onBreak\" aria-label=\"start timer\" mat-raised-button color=\"primary\" *ngIf=\"!timerOn\" (click)=\"onStartTime()\">\n      Start\n    </button>\n    <button type=\"button\" class=\"timer-reset-button\" aria-label=\"reset timer\" mat-raised-button color=\"secondary\" *ngIf=\"timerOn\" (click)=\"onResetTimer()\">\n      Reset\n    </button>\n    <button type=\"button\" class=\"timer-plus-bumper\" [class.onbreak]=\"onBreak\" aria-label=\"plus time\" mat-raised-button color=\"primary\" *ngIf=\"showTimerBumpers && !onBreak\" (click)=\"bumpTimerForward()\">\n      + {{timerBumperLength}}\n    </button>\n    <button type=\"button\" class=\"timer-end-break\" aria-label=\"end break timer\" mat-raised-button color=\"secondary\" *ngIf=\"(timerOn && onBreak) || onBreak\" (click)=\"onEndBreak()\">\n      End Break\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timer/components/timer/timer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/timer/components/timer/timer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Variables ***/\n/*** Mixins ***/\n/*** Main Styles ***/\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\nbody a {\n    text-decoration: none;\n    color: #FF7F1C; }\nbody a:hover {\n      color: #be470c; }\nbody .btn-large {\n    font-size: 1.2rem; }\nbody {\n  color: #777;\n  background-color: #fff;\n  transition: 1s; }\n.timer-container {\n  padding: 1rem;\n  width: auto;\n  margin: auto;\n  background-color: #FAFAFA;\n  transition: 1s;\n  box-shadow: 0px 0px 0px #222;\n  -moz-box-shadow: 0px 0px 0px #222;\n  -webkit-box-shadow: 0px 0px 0px #222;\n  -o-box-shadow: 0px 0px 0px #222;\n  transition: 1s; }\n.timer-container .timer-countdown {\n    font-size: 2rem;\n    color: #222;\n    transition: 1s; }\n.timer-container .timer-start-button {\n    box-shadow: 0px 0px 0px #222;\n    -moz-box-shadow: 0px 0px 0px #222;\n    -webkit-box-shadow: 0px 0px 0px #222;\n    -o-box-shadow: 0px 0px 0px #222;\n    transition: 1s; }\n.timer-container .timer-reset-button {\n    box-shadow: 0px 0px 0px #222;\n    -moz-box-shadow: 0px 0px 0px #222;\n    -webkit-box-shadow: 0px 0px 0px #222;\n    -o-box-shadow: 0px 0px 0px #222;\n    transition: 1s; }\n.timer-container .timer-minus-bumper {\n    font-size: 0.7rem;\n    box-shadow: 0px 0px 0px #222;\n    -moz-box-shadow: 0px 0px 0px #222;\n    -webkit-box-shadow: 0px 0px 0px #222;\n    -o-box-shadow: 0px 0px 0px #222;\n    transition: 1s;\n    border-radius: 5px 100px 5px 100px; }\n.timer-container .timer-plus-bumper {\n    font-size: 0.7rem;\n    box-shadow: 0px 0px 0px #222;\n    -moz-box-shadow: 0px 0px 0px #222;\n    -webkit-box-shadow: 0px 0px 0px #222;\n    -o-box-shadow: 0px 0px 0px #222;\n    transition: 1s;\n    border-radius: 100px 0px 100px 5px; }\n.timer-container.timeron {\n  background-color: #3E51B5;\n  box-shadow: 0px 0px 55px #111;\n  -moz-box-shadow: 0px 0px 55px #111;\n  -webkit-box-shadow: 0px 0px 55px #111;\n  -o-box-shadow: 0px 0px 55px #111; }\n.timer-container.timeron .timer-countdown {\n    color: #fff;\n    font-size: 4rem; }\n.timer-container.timeron .timer-reset-button {\n    box-shadow: 0px 0px 20px #333;\n    -moz-box-shadow: 0px 0px 20px #333;\n    -webkit-box-shadow: 0px 0px 20px #333;\n    -o-box-shadow: 0px 0px 20px #333; }\n.timer-container.timeron .timer-start-button {\n    box-shadow: 0px 0px 20px #444;\n    -moz-box-shadow: 0px 0px 20px #444;\n    -webkit-box-shadow: 0px 0px 20px #444;\n    -o-box-shadow: 0px 0px 20px #444; }\n.timer-container.timeron .timer-end-break {\n    box-shadow: 0px 0px 20px #333;\n    -moz-box-shadow: 0px 0px 20px #333;\n    -webkit-box-shadow: 0px 0px 20px #333;\n    -o-box-shadow: 0px 0px 20px #333; }\n.timer-container.timeron .timer-minus-bumper {\n    box-shadow: 0px 0px 30px #222;\n    -moz-box-shadow: 0px 0px 30px #222;\n    -webkit-box-shadow: 0px 0px 30px #222;\n    -o-box-shadow: 0px 0px 30px #222;\n    background-color: #fff;\n    color: #3E51B5; }\n.timer-container.timeron .timer-plus-bumper {\n    box-shadow: 0px 0px 15px #222;\n    -moz-box-shadow: 0px 0px 15px #222;\n    -webkit-box-shadow: 0px 0px 15px #222;\n    -o-box-shadow: 0px 0px 15px #222;\n    background-color: #fff;\n    color: #3E51B5; }\n.timer-container.timeron.onbreak {\n  background-color: #FF7F1C;\n  box-shadow: 0px 0px 55px #803a19;\n  -moz-box-shadow: 0px 0px 55px #803a19;\n  -webkit-box-shadow: 0px 0px 55px #803a19;\n  -o-box-shadow: 0px 0px 55px #803a19; }\n.timer-button-container {\n  width: auto; }\n.timer-button-container button {\n    margin: 1rem; }\n.timer-button-container .timer-start-button.onbreak {\n    border: 1px solid #ff7332;\n    background-color: #FF7F1C;\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGh1ZWJuZXIvQ29kZS9TUEFzL3BvbW9kb3Ivc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RhdmlkaHVlYm5lci9Db2RlL1NQQXMvcG9tb2Rvci9zcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBbUJuQixnQkFBZ0I7QUE4QmhCLHFCQUFxQjtBQUVyQjtFQUFhLGFBQVksRUFBSTtBQUM3QjtFQUNFLFVBQVM7RUFDVCxrREFBaUQsRUFjbEQ7QUFoQkQ7SUFLSSxzQkFBcUI7SUFDckIsZUFyRFcsRUEwRFo7QUFYSDtNQVNNLGVBQWMsRUFDZjtBQVZMO0lBY0ksa0JBQWlCLEVBQ2xCO0FDakVIO0VBQ0UsWUFBVztFQUNYLHVCQUFzQjtFRHNCdEIsZUNyQnNCLEVBQ3ZCO0FBRUQ7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUI7RURjekIsZUNic0I7RURpQnRCLDZCQ2hCa0M7RURpQmxDLGtDQ2pCa0M7RURrQmxDLHFDQ2xCa0M7RURtQmxDLGdDQ25Ca0M7RURZbEMsZUNYc0IsRUFtQ3ZCO0FBMUNEO0lBVUksZ0JBQWU7SUFDZixZQUFXO0lET2IsZUNOd0IsRUFDdkI7QUFiSDtJRHNCRSw2QkNOb0M7SURPcEMsa0NDUG9DO0lEUXBDLHFDQ1JvQztJRFNwQyxnQ0NUb0M7SURFcEMsZUNEd0IsRUFDdkI7QUFsQkg7SURzQkUsNkJDRG9DO0lERXBDLGtDQ0ZvQztJREdwQyxxQ0NIb0M7SURJcEMsZ0NDSm9DO0lESHBDLGVDSXdCLEVBQ3ZCO0FBdkJIO0lBMEJJLGtCQUFpQjtJREpuQiw2QkNLb0M7SURKcEMsa0NDSW9DO0lESHBDLHFDQ0dvQztJREZwQyxnQ0NFb0M7SURUcEMsZUNVd0I7SUFHdEIsbUNBQWtDLEVBQ25DO0FBaENIO0lBbUNJLGtCQUFpQjtJRGJuQiw2QkNjb0M7SURicEMsa0NDYW9DO0lEWnBDLHFDQ1lvQztJRFhwQyxnQ0NXb0M7SURsQnBDLGVDbUJ3QjtJQUd0QixtQ0FBa0MsRUFDbkM7QUFHSDtFQUNFLDBCRDlDZTtFQXVCZiw4QkN3Qm1DO0VEdkJuQyxtQ0N1Qm1DO0VEdEJuQyxzQ0NzQm1DO0VEckJuQyxpQ0NxQm1DLEVBOEJwQztBQWhDRDtJQUtJLFlBQVc7SUFDWCxnQkFBZSxFQUNoQjtBQVBIO0lEdEJFLDhCQ2dDcUM7SUQvQnJDLG1DQytCcUM7SUQ5QnJDLHNDQzhCcUM7SUQ3QnJDLGlDQzZCcUMsRUFDcEM7QUFYSDtJRHRCRSw4QkNvQ3FDO0lEbkNyQyxtQ0NtQ3FDO0lEbENyQyxzQ0NrQ3FDO0lEakNyQyxpQ0NpQ3FDLEVBQ3BDO0FBZkg7SUR0QkUsOEJDd0NxQztJRHZDckMsbUNDdUNxQztJRHRDckMsc0NDc0NxQztJRHJDckMsaUNDcUNxQyxFQUNwQztBQW5CSDtJRHRCRSw4QkM0Q3FDO0lEM0NyQyxtQ0MyQ3FDO0lEMUNyQyxzQ0MwQ3FDO0lEekNyQyxpQ0N5Q3FDO0lBQ25DLHVCQUFzQjtJQUN0QixlRHJFYSxFQ3NFZDtBQXpCSDtJRHRCRSw4QkNrRHFDO0lEakRyQyxtQ0NpRHFDO0lEaERyQyxzQ0NnRHFDO0lEL0NyQyxpQ0MrQ3FDO0lBQ25DLHVCQUFzQjtJQUN0QixlRDNFYSxFQzRFZDtBQUdIO0VBQ0UsMEJEbEZhO0VBeUJiLGlDQzBEc0M7RUR6RHRDLHNDQ3lEc0M7RUR4RHRDLHlDQ3dEc0M7RUR2RHRDLG9DQ3VEc0MsRUFDdkM7QUFFRDtFQUNFLFlBQVcsRUFXWjtBQVpEO0lBSUksYUFBWSxFQUNiO0FBTEg7SUFRSSwwQkFBeUI7SUFDekIsMEJEL0ZXO0lDZ0dYLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIFZhcmlhYmxlcyAqKiovXG5cbiRzb2Z0Qmx1ZTogIzAwYTlmZjtcbiRwb21Db2xvcjogI2ZmNjg2ODtcbiRtZWxsb3c6ICNmZmMyNzA7XG4kYnJlYWs6ICNGRjdGMUM7XG4kZGFya2VyQmFja2dyb3VuZDogIzMzMztcbiRwcmltYXJ5OiAjM0U1MUI1O1xuJHByaW1hcnlMaWdodGVyOiAjNzg4MWI1O1xuJGxpZ2h0T25CcmVhazogI2ZmZTJiZTtcbiRsaWdodFByaW1hcnk6ICNkZmVmZmY7XG5cbiRsaWdodEdyZXk6ICNhYWE7XG4kZ3JleTogIzc3NztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRhbG1vc3RCbGFjazogIzIyMjtcbiRkYXJraXNoUHVycGxlOiAjNjc0OGQ4O1xuXG4vKioqIE1peGlucyAqKiovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tcy10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1vLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkcHgsICRweDIsICRjb2xvcikge1xuICBib3gtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtbW96LWJveC1zaGFkb3c6ICRweCAkcHggJHB4MiAkY29sb3I7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbiAgLW8tYm94LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRweCwgJHB4MiwgJGNvbG9yKSB7XG4gIHRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtbW96LXRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcHggJHB4ICRweDIgJGNvbG9yO1xuICAtby10ZXh0LXNoYWRvdzogJHB4ICRweCAkcHgyICRjb2xvcjtcbn1cblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLyoqKiBNYWluIFN0eWxlcyAqKiovXG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRicmVhaztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNiZTQ3MGM7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5ib2R5IHtcbiAgY29sb3I6ICM3Nzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oMXMpO1xufVxuXG4udGltZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbigxcyk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAwcHgsICMyMjIpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKDFzKTtcblxuICAudGltZXItY291bnRkb3duIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigxcyk7XG4gIH1cblxuICAudGltZXItc3RhcnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMHB4LCAjMjIyKTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDFzKTtcbiAgfVxuXG4gIC50aW1lci1yZXNldC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAwcHgsICMyMjIpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMXMpO1xuICB9XG5cbiAgLnRpbWVyLW1pbnVzLWJ1bXBlciB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDBweCwgIzIyMik7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigxcyk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMTAwcHggNXB4IDEwMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDEwMHB4IDVweCAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMTAwcHggNXB4IDEwMHB4O1xuICB9XG5cbiAgLnRpbWVyLXBsdXMtYnVtcGVyIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMHB4LCAjMjIyKTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDFzKTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAxMDBweCA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMTAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAxMDBweCA1cHg7XG4gIH1cbn1cblxuLnRpbWVyLWNvbnRhaW5lci50aW1lcm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCA1NXB4LCAjMTExKTtcbiAgXG4gIC50aW1lci1jb3VudGRvd24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuXG4gIC50aW1lci1yZXNldC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAyMHB4LCAjMzMzKTtcbiAgfVxuXG4gIC50aW1lci1zdGFydC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAyMHB4LCAjNDQ0KTtcbiAgfVxuXG4gIC50aW1lci1lbmQtYnJlYWsge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAyMHB4LCAjMzMzKTtcbiAgfVxuXG4gIC50aW1lci1taW51cy1idW1wZXIge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAzMHB4LCAjMjIyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC50aW1lci1wbHVzLWJ1bXBlciB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDE1cHgsICMyMjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICB9XG59XG5cbi50aW1lci1jb250YWluZXIudGltZXJvbi5vbmJyZWFrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyZWFrO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgNTVweCwgIzgwM2ExOSk7XG59XG5cbi50aW1lci1idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbiAgXG4gIC50aW1lci1zdGFydC1idXR0b24ub25icmVhayB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNzMzMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJlYWs7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/timer/components/timer/timer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/timer/components/timer/timer.component.ts ***!
  \***********************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../timer.service */ "./src/app/timer/timer.service.ts");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _shared_services_usb_light_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/usb-light.service */ "./src/app/shared/services/usb-light.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerComponent = /** @class */ (function () {
    function TimerComponent(timerService, settingsService, usbLightService) {
        this.timerService = timerService;
        this.settingsService = settingsService;
        this.usbLightService = usbLightService;
        this.timeLeft = this.timerLength;
        this.onBreak = false;
        this.timerOn = false;
        this.currentTimer = {
            completed: false,
            completedWithBreak: false
        };
        this.showTimerBumpers = false;
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to onBreak$ subject observable and set value to this.onBreak
        this.timerService.onBreak$.subscribe(function (val) { return _this.onBreak = val; });
        this.timerService.timerOn$.subscribe(function (val) { return _this.timerOn = val; });
        this.showTimerBumpers = this.settingsService.getUseTimerBumpers();
        this.onResetTimer();
    };
    TimerComponent.prototype.onStartTime = function () {
        var _this = this;
        this.handleStartTimerUSBLight();
        this.timerService.setTimerOn(true);
        this.timeLeft--;
        this.timerInterval = setInterval(function () {
            _this.timeLeft--;
            // If the time is up
            if (_this.timeLeft < 0) {
                _this.handleTimerIsUp();
            }
        }, 1000);
    };
    TimerComponent.prototype.onResetTimer = function () {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.endTimer();
    };
    TimerComponent.prototype.onEndBreak = function () {
        if (this.onBreak) {
            this.timerService.addCompletedTimer(this.currentTimer);
        }
        this.timerService.setOnBreak(false);
        this.onResetTimer();
    };
    TimerComponent.prototype.bumpTimerBack = function () {
        this.timeLeft -= (this.timerBumperLength * 60);
    };
    TimerComponent.prototype.bumpTimerForward = function () {
        this.timeLeft += (this.timerBumperLength * 60);
    };
    TimerComponent.prototype.endTimer = function () {
        this.timerService.setTimerOn(false);
        this.timeLeft = this.onBreak ? this.breakLength : this.timerLength;
        // Turn off USB light
        this.usbLightService.setLight('ff9900').subscribe();
    };
    TimerComponent.prototype.setTimeLeft = function () {
        this.timeLeft = this.onBreak ? this.breakLength : this.timerLength;
    };
    TimerComponent.prototype.handleStartTimerUSBLight = function () {
        // Determine what color the USB light should be
        var usbLightColor = this.onBreak ? '00ff00' : 'ff0000';
        // Turn on USB light if it is connected
        this.usbLightService.setLight(usbLightColor).subscribe();
    };
    TimerComponent.prototype.handleTimerIsUp = function () {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.endTimer();
        this.currentTimer.completed = true;
        if (this.onBreak) {
            this.currentTimer.completedWithBreak = true;
            this.timerService.addCompletedTimer(this.currentTimer);
            this.currentTimer = {
                completed: false,
                completedWithBreak: false
            };
        }
        this.timerService.setOnBreak(!this.onBreak);
        this.setTimeLeft();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timerLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "breakLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timerBumperLength", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer/components/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.scss */ "./src/app/timer/components/timer/timer.component.scss")]
        }),
        __metadata("design:paramtypes", [_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"],
            _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _shared_services_usb_light_service__WEBPACK_IMPORTED_MODULE_3__["UsbLightService"]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.module.ts":
/*!***************************************!*\
  !*** ./src/app/timer/timer.module.ts ***!
  \***************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/timer/timer.component */ "./src/app/timer/components/timer/timer.component.ts");
/* harmony import */ var _components_timer_container_timer_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timer-container/timer-container.component */ "./src/app/timer/components/timer-container/timer-container.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer.service */ "./src/app/timer/timer.service.ts");
/* harmony import */ var _components_timer_history_timer_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/timer-history/timer-history.component */ "./src/app/timer/components/timer-history/timer-history.component.ts");
/* harmony import */ var _components_timer_history_container_timer_history_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/timer-history-container/timer-history-container.component */ "./src/app/timer/components/timer-history-container/timer-history-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TimerModule = /** @class */ (function () {
    function TimerModule() {
    }
    TimerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"],
                _components_timer_container_timer_container_component__WEBPACK_IMPORTED_MODULE_3__["TimerContainerComponent"],
                _components_timer_history_timer_history_component__WEBPACK_IMPORTED_MODULE_7__["TimerHistoryComponent"],
                _components_timer_history_container_timer_history_container_component__WEBPACK_IMPORTED_MODULE_8__["TimerHistoryContainerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: [
                _components_timer_container_timer_container_component__WEBPACK_IMPORTED_MODULE_3__["TimerContainerComponent"],
                _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"]
            ],
            providers: [
                _timer_service__WEBPACK_IMPORTED_MODULE_6__["TimerService"]
            ],
        })
    ], TimerModule);
    return TimerModule;
}());



/***/ }),

/***/ "./src/app/timer/timer.service.ts":
/*!****************************************!*\
  !*** ./src/app/timer/timer.service.ts ***!
  \****************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerService = /** @class */ (function () {
    function TimerService() {
        this.completedTimerList = [];
        this.onBreakSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.onBreak$ = this.onBreakSubject.asObservable();
        this.timerOnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.timerOn$ = this.timerOnSubject.asObservable();
        this.completedTimerListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.completedTimerList$ = this.completedTimerListSubject.asObservable();
    }
    TimerService.prototype.setOnBreak = function (bool) {
        this.onBreakSubject.next(bool);
    };
    TimerService.prototype.setTimerOn = function (bool) {
        this.timerOnSubject.next(bool);
    };
    TimerService.prototype.addCompletedTimer = function (completedTimer) {
        this.completedTimerListSubject.next(completedTimer);
    };
    TimerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TimerService);
    return TimerService;
}());



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
        apiKey: 'AIzaSyDNVHmGrS9hWxnyiwUWHPyKQL_Tv4f3p0M',
        authDomain: 'pomodor-7bdd1.firebaseapp.com',
        databaseURL: 'https://pomodor-7bdd1.firebaseio.com',
        projectId: 'pomodor-7bdd1',
        storageBucket: 'pomodor-7bdd1.appspot.com',
        messagingSenderId: '262740402954'
    },
    localUSBLightBaseUrl: 'http://127.0.0.1:5033/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidhuebner/Code/SPAs/pomodor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map