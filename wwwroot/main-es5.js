(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/q5U":
    /*!***************************************!*\
      !*** ./src/app/shared/validations.ts ***!
      \***************************************/

    /*! exports provided: checkDate, mustMatch */

    /***/
    function q5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkDate", function () {
        return checkDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mustMatch", function () {
        return mustMatch;
      });

      function checkDate(date) {
        return function (control) {
          var year = new Date(control.value).getUTCFullYear();
          var month = new Date(control.value).getUTCMonth();
          var date2 = new Date(control.value).getUTCDate();

          if (date.getFullYear() === year) {
            if (date.getMonth() === month) {
              if (date.getDate() > date2) {
                return {
                  value: true
                };
              }
            } else if (date.getMonth() > month) {
              return {
                value: true
              };
            }
          } else if (date.getFullYear() > year) {
            return {
              value: true
            };
          }

          return null;
        };
      }

      function mustMatch(firstText) {
        return function (secondText) {
          if (!firstText && !secondText) {
            return null;
          } else if (secondText.hasError && !firstText.hasError) {
            return null;
          } else if (firstText.value !== secondText.value) {
            return {
              value: true
            };
          } else {
            return null;
          }
        };
      }
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\huy\Desktop\New folder\GroupUp\ClientApp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1+r1":
    /*!********************************************!*\
      !*** ./src/app/modules/material.module.ts ***!
      \********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function r1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["GU-home"]],
        decls: 15,
        vars: 0,
        consts: [[1, "home"], [1, "background-image"], [1, "content"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Welcome to GroupUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Want to find something to do on the weekends?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "New to the city and looking for new friends?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Have a project need a helping hand?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Have a class you wanted to take but didn't want to do alone?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Use GroupUp to discover events to do on that day off or for the weekends. Post a project to find that helping hand. Or post an adventure and meet people with similar interests. Find your group to collaborate, explore, and create something amazing while making new connections.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".home[_ngcontent-%COMP%] {\n  pointer-events: relative;\n  text-align: center;\n  color: white;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/gathering.jpg\");\n  height: 100%;\n  width: 100%;\n  display: cover;\n  position: absolute;\n  top: -100px;\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n}\n\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 500px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding-bottom: 200px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n@media screen and (min-width: 0px) and (max-width: 599px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 899px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 900px) and (max-width: 1280px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBRUU7SUFDRSxlQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsZUFBQTtFQUZGOztFQUtBO0lBQ0UsZUFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFFRTtJQUNFLGVBQUE7RUFKRjs7RUFPQTtJQUNFLGVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2dhdGhlcmluZy5qcGcnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwMHB4O1xyXG5cclxuICAtd2Via2l0LWZpbHRlcjogYmx1cigycHgpO1xyXG4gIC1tb3otZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgLW8tZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgLW1zLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIGZpbHRlcjogYmx1cigycHgpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDUwMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3O32":
    /*!**********************************************************!*\
      !*** ./src/app/forms/text-input/text-input.component.ts ***!
      \**********************************************************/

    /*! exports provided: TextInputComponent */

    /***/
    function O32(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
        return TextInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TextInputComponent_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Please enter a ", ctx_r0.label, "");
        }
      }

      function TextInputComponent_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Please enter a valid ", ctx_r1.label, "");
        }
      }

      function TextInputComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r2.label, " doesn't match");
        }
      }

      function TextInputComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password needs at least 1 uppercase, 1 lowercase, 1 number and 1 special character ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var TextInputComponent = /*#__PURE__*/function () {
        function TextInputComponent(ngControl) {
          _classCallCheck(this, TextInputComponent);

          this.ngControl = ngControl;
          this.ngControl.valueAccessor = this;
        }

        _createClass(TextInputComponent, [{
          key: "writeValue",
          value: function writeValue(obj) {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {}
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }]);

        return TextInputComponent;
      }();

      TextInputComponent.??fac = function TextInputComponent_Factory(t) {
        return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 2));
      };

      TextInputComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TextInputComponent,
        selectors: [["GU-text-input"]],
        inputs: {
          label: "label",
          type: "type"
        },
        decls: 6,
        vars: 7,
        consts: [["matInput", "", 3, "placeholder", "type", "formControl"], [4, "ngIf"]],
        template: function TextInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TextInputComponent_mat_error_2_Template, 2, 1, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TextInputComponent_mat_error_3_Template, 2, 1, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TextInputComponent_mat_error_4_Template, 2, 1, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TextInputComponent_mat_error_5_Template, 2, 0, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.ngControl.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.isMatching);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.pattern);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TextInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-text-input',
            templateUrl: './text-input.component.html',
            styleUrls: ['./text-input.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "3d/4":
    /*!*************************************************************!*\
      !*** ./src/app/errors/text-errors/text-errors.component.ts ***!
      \*************************************************************/

    /*! exports provided: TextErrorsComponent */

    /***/
    function d4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextErrorsComponent", function () {
        return TextErrorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TextErrorsComponent = /*#__PURE__*/function () {
        function TextErrorsComponent() {
          _classCallCheck(this, TextErrorsComponent);

          this.baseUrl = 'http://localhost:5001/api/';
        }

        _createClass(TextErrorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextErrorsComponent;
      }();

      TextErrorsComponent.??fac = function TextErrorsComponent_Factory(t) {
        return new (t || TextErrorsComponent)();
      };

      TextErrorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TextErrorsComponent,
        selectors: [["GU-text-errors"]],
        decls: 2,
        vars: 0,
        template: function TextErrorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "text-errors works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWVycm9ycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TextErrorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-text-errors',
            templateUrl: './text-errors.component.html',
            styleUrls: ['./text-errors.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3gWd":
    /*!**********************************************************!*\
      !*** ./src/app/forms/date-input/date-input.component.ts ***!
      \**********************************************************/

    /*! exports provided: DateInputComponent */

    /***/
    function gWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateInputComponent", function () {
        return DateInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateInputComponent = /*#__PURE__*/function () {
        function DateInputComponent() {
          _classCallCheck(this, DateInputComponent);
        }

        _createClass(DateInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateInputComponent;
      }();

      DateInputComponent.??fac = function DateInputComponent_Factory(t) {
        return new (t || DateInputComponent)();
      };

      DateInputComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DateInputComponent,
        selectors: [["GU-date-input"]],
        decls: 2,
        vars: 0,
        template: function DateInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "date-input works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DateInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-date-input',
            templateUrl: './date-input.component.html',
            styleUrls: ['./date-input.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3y7C":
    /*!********************************************!*\
      !*** ./src/app/google-places.component.ts ***!
      \********************************************/

    /*! exports provided: GooglePlacesComponent */

    /***/
    function y7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglePlacesComponent", function () {
        return GooglePlacesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["addressText"];

      var GooglePlacesComponent = /*#__PURE__*/function () {
        function GooglePlacesComponent() {
          _classCallCheck(this, GooglePlacesComponent);

          this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(GooglePlacesComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getPlaceAutocomplete();
          }
        }, {
          key: "getPlaceAutocomplete",
          value: function getPlaceAutocomplete() {
            var autocomplete = new google.maps.places.Autocomplete(this.addressText.nativeElement, {
              componentRestrictions: {
                country: 'US'
              }
            });
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
              var place = autocomplete.getPlace();

              if (place.address_components) {// this.setAddress.emit(this.getAddress(place));
              }
            });
          }
        }]);

        return GooglePlacesComponent;
      }();

      GooglePlacesComponent.??fac = function GooglePlacesComponent_Factory(t) {
        return new (t || GooglePlacesComponent)();
      };

      GooglePlacesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GooglePlacesComponent,
        selectors: [["GU-google-place"]],
        viewQuery: function GooglePlacesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.addressText = _t.first);
          }
        },
        inputs: {
          addressType: "addressType"
        },
        outputs: {
          setAddress: "setAddress"
        },
        decls: 2,
        vars: 0,
        consts: [["type", "text", 1, "input", 2, "padding", "12px 20px", "border", "1px solid #ccc", "width", "400px"], ["addressText", ""]],
        template: function GooglePlacesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "input", 0, 1);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GooglePlacesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-google-place',
            template: "\n  <input class=\"input\"\n    type=\"text\"\n    #addressText style=\"padding: 12px 20px; border: 1px solid #ccc; width: 400px\"\n    >\n"
          }]
        }], null, {
          addressType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          setAddress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          addressText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addressText', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "4rg4":
    /*!*********************************************************!*\
      !*** ./src/app/errors/not-found/not-found.component.ts ***!
      \*********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function rg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.??fac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotFoundComponent,
        selectors: [["GU-not-found"]],
        decls: 5,
        vars: 0,
        consts: [[1, "container"], ["routerLink", "/", 1, "btn", "btn-info", "btn-lg"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Return to home page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6BoG":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/event.service.ts ***!
      \**************************************************/

    /*! exports provided: EventService */

    /***/
    function BoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EventService = function EventService(http) {
        var _this = this;

        _classCallCheck(this, EventService);

        this.http = http;

        this.getAll = function () {
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl);
        };

        this.getByDistance = function (latitude, longitude, distance) {
          var data = "?latitude=".concat(latitude, "&longitude=").concat(longitude, "&distance=").concat(distance);
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + data);
        };

        this.getByCity = function (city, state) {
          var data = "?city=".concat(city, "&state=").concat(state);
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + data);
        };

        this.getStates = function () {
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl);
        };

        this.getCities = function (state) {
          var data = "?state=".concat(state);
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + data);
        };

        this.getEvent = function (id) {
          return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + id);
        };

        this.put = function (event) {
          return _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, event);
        };

        this.addParticipant = function (data) {
          return _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, data);
        };

        this.remove = function (id) {
          return _this.http["delete"]("/".concat(id));
        };
      };

      EventService.??fac = function EventService_Factory(t) {
        return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EventService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: EventService,
        factory: EventService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EventService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        environmentName: 'Developing',
        baseUrl: 'https://localhost:5001/api/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services */
      "ZF+8");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function LoginComponent_label_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.errorMessage, " ");
        }
      }

      function LoginComponent_mat_spinner_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, accountService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.accountService = accountService;
          this.isLoginError = false;
          this.isEmailError = false;
          this.hidePassword = true;
          this.errorMessage = '';
          this.rememberMe = false;
          this.isLoading = false;
          this.loginApiUrl = '/api/v1/account/login';
          this.getUserProfileUrl = '/api/v1/profile/getUserProfile';
        }

        _createClass(LoginComponent, [{
          key: "gotoDashBoard",
          value: function gotoDashBoard() {
            this.router.navigate(['/dashboard']);
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this2 = this;

            this.isLoading = true;
            this.accountService.login(form.email, form.password, form.rememberMe).subscribe(function (user) {
              _this2.isLoading = false;

              _this2.gotoDashBoard();
            }, function (error) {
              _this2.isLoginError = true;
              _this2.isLoading = false;
              _this2.errorMessage = error.error.loginError;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["GU-login"]],
        decls: 27,
        vars: 7,
        consts: [[3, "ngSubmit"], ["loginForm", "ngForm"], ["matInput", "", "placeholder", "Email", "name", "email", "ngModel", "", "required", ""], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "placeholder", "Password", "name", "password", "ngModel", "", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-button", "", "routerLink", "[registerPageUrl]"], ["mat-button", "", "routerLink", "[forgotPasswordPageUrl]"], [1, "alert", "alert-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

              return ctx.login(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Login Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, LoginComponent_label_10_Template, 2, 0, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_mat_icon_click_13_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_mat_checkbox_ngModelChange_15_listener($event) {
              return ctx.rememberMe = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Remember Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, LoginComponent_mat_error_17_Template, 2, 1, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, LoginComponent_mat_spinner_25_Template, 1, 0, "mat-spinner", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isEmailError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hidePassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.hidePassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.rememberMe);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
        styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 50px auto;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LStI":
    /*!************************************************!*\
      !*** ./src/app/menu-nav/menu-nav.component.ts ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function LStI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return MenuNavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/services */
      "ZF+8");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function MenuNavComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MenuNavComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Create new event");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MenuNavComponent_ng_container_8_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MenuNavComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "*Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "*Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MenuNavComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "*Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "*Create new event");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "*Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      var _c0 = ["*"];

      var MenuNavComponent = /*#__PURE__*/function () {
        function MenuNavComponent(router, accountService, indexedDBService) {
          var _this3 = this;

          _classCallCheck(this, MenuNavComponent);

          this.router = router;
          this.accountService = accountService;
          this.indexedDBService = indexedDBService;
          this.isLoggedIn = false;
          /**
           * Log user out,
           * delete database in browser,
           * then navigate user to login page.
           */

          this.logout = function () {
            _this3.accountService.logout().subscribe(function () {
              _this3.indexedDBService.deleteDBAsync(); //  this.router.navigate(['/login']);

            }, function (error) {
              console.log(error);
            });
          };
        }

        _createClass(MenuNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.user) {
                        _context.next = 3;
                        break;
                      }

                      _context.next = 3;
                      return this.indexedDBService.deleteDBAsync();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MenuNavComponent;
      }();

      MenuNavComponent.??fac = function MenuNavComponent_Factory(t) {
        return new (t || MenuNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["IndexedDBService"]));
      };

      MenuNavComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MenuNavComponent,
        selectors: [["GU-menu-nav"]],
        ngContentSelectors: _c0,
        decls: 25,
        vars: 12,
        consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav"], ["drawer", ""], [4, "ngIf"], ["color", "primary"], [1, "logo-container"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["src", "/assets/images/logo/logo_transparent.png", 1, "logo"], [1, "nav-links-container"], ["mat-list-item", "", "routerLink", "/login", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "/register", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "/dashboard", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "/event-edit", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "/event-list", "routerLinkActive", "active"], ["mat-list-item", "", 3, "click"]],
        template: function MenuNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MenuNavComponent_ng_container_6_Template, 5, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MenuNavComponent_ng_container_8_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MenuNavComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "GroupUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, MenuNavComponent_ng_container_20_Template, 7, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MenuNavComponent_ng_container_22_Template, 10, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 4, ctx.accountService.currentUser$) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](9, 6, ctx.accountService.currentUser$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](21, 8, ctx.accountService.currentUser$) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](23, 10, ctx.accountService.currentUser$));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-nav-list[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: rgba(36, 18, 18, 0.85);\n  box-shadow: 0px 21px 26px 0px rgba(0, 0, 0, 0.75);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: 80px;\n  vertical-align: middle;\n}\n\n.nav-links-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.nav-links-container[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: white;\n}\n\n@media screen and (min-width: 699px) {\n  .logo-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .nav-links-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBSUEsaURBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoibWVudS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMTgsIDE4LCAwLjg1KTtcclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMjFweCAyNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDIxcHggMjZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMjFweCAyNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIGltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5uYXYtbGlua3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzLWNvbnRhaW5lciAubWF0LWxpc3QtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2OTlweCkge1xyXG4gIC5sb2dvLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLm5hdi1saW5rcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MenuNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-menu-nav',
            templateUrl: './menu-nav.component.html',
            styleUrls: ['./menu-nav.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["IndexedDBService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Lr3h":
    /*!**********************************************************!*\
      !*** ./src/app/pages/event-edit/event-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: EventEditComponent */

    /***/
    function Lr3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventEditComponent", function () {
        return EventEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/validations */
      "/q5U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services */
      "ZF+8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _google_places_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../google-places.component */
      "3y7C");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function EventEditComponent_form_24_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Mondays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Tuesdays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Wednesdays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Thursdays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Fridays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Saturdays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Sundays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Event's end time needs to be a time after the event's start time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventEditComponent_form_24_div_2_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r6.removeDay(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r5);
        }
      }

      function EventEditComponent_form_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, EventEditComponent_form_24_div_2_Template, 25, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventEditComponent_form_24_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.addDay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Add another day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r1.repeatingDaysForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.daysArray.controls);
        }
      }

      function EventEditComponent_button_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventEditComponent_button_33_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.deleteEvent(ctx_r10.event.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var EventEditComponent = /*#__PURE__*/function () {
        function EventEditComponent(router, eventService, formBuilder, indexedDBService, location) {
          _classCallCheck(this, EventEditComponent);

          this.router = router;
          this.eventService = eventService;
          this.formBuilder = formBuilder;
          this.indexedDBService = indexedDBService;
          this.todaysDate = new Date();
          this.startsDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', Object(_shared_validations__WEBPACK_IMPORTED_MODULE_2__["checkDate"])(this.todaysDate));
          this.formErrorMessage = '';
          this.location = location;
        }

        _createClass(EventEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // If there's no event selected then a new event is being created
            // if (!this.event) { this.event = new EventModel(); }
            this.repeatingDaysForm = this.formBuilder.group({
              days: this.formBuilder.array([this.addDayGroup()])
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "getAddress",
          value: function getAddress(address) {
            this.event.location = address;
          }
        }, {
          key: "addDayGroup",
          value: function addDayGroup() {
            return this.formBuilder.group({
              day: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "addDay",
          value: function addDay() {
            this.daysArray.push(this.addDayGroup());
          }
        }, {
          key: "removeDay",
          value: function removeDay(index) {
            this.daysArray.removeAt(index);
          }
        }, {
          key: "removeRepeatingDays",
          value: function removeRepeatingDays() {
            for (var i = 0; i < this.daysArray.length; i++) {
              this.daysArray.removeAt(i);
            }
          }
        }, {
          key: "saveEvent",
          value: function saveEvent() {
            if (!this.event.location) {
              this.formErrorMessage = 'Please enter a valid address or establishment name.';
            } else if (this.repeatingDaysForm.invalid && this.event.isRepeating) {
              this.formErrorMessage = 'Please enter the day and time for the event or remove that day.';
            } else if (this.event.startsTime > this.event.endsTime) {
              this.formErrorMessage = 'Event\'s end time needs to be a time after the event\'s start time.';
            } else {
              this.formErrorMessage = '';
            }

            if (this.formErrorMessage === '' && this.startsDate.valid) {
              this.event.creatorEmail = this.user.email;
              this.event.startsDate = this.startsDate.value;
              this.event.repeatingDaysTimes = this.daysArray.value; // this.eventService.put(this.event).subscribe(
              //   result => {
              //     this.indexedDBService.addEvent(result, eventCreated);
              //     this.gotoDashBoard();
              //   },
              //   error => {
              //     console.error(error);
              //   });
            }
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(id) {
            var _this4 = this;

            this.eventService.remove(id).subscribe(function (result) {
              _this4.gotoDashBoard();
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "gotoDashBoard",
          value: function gotoDashBoard() {
            this.router.navigate(['/dashboard']);
          }
        }, {
          key: "daysArray",
          get: function get() {
            return this.repeatingDaysForm.get('days');
          }
        }]);

        return EventEditComponent;
      }();

      EventEditComponent.??fac = function EventEditComponent_Factory(t) {
        return new (t || EventEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_4__["IndexedDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
      };

      EventEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EventEditComponent,
        selectors: [["GU-event-edit"]],
        decls: 37,
        vars: 12,
        consts: [["name", "editEventForm"], ["editEventForm", "ngForm"], ["matInput", "", "placeholder", "Name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "matInput", "", "placeholder", "Spots Available", "name", "spotsAvailable", "required", "", 3, "ngModel", "ngModelChange"], ["name", "isRepeating", 3, "ngModel", "change", "ngModelChange"], ["matInput", "", "placeholder", "Description", "name", "description", "required", "", 3, "ngModel", "ngModelChange"], ["required", "", 3, "setAddress"], ["matInput", "", "type", "date", "placeholder", "Choose the event starts date", "required", "", 3, "formControl"], ["matInput", "", "type", "time", "placeholder", "Choose the event starts time", "name", "startsTime", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "time", "placeholder", "Choose the event ends time", "name", "endsTime", "required", "", 3, "ngModel", "ngModelChange"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "secondary", "type", "button", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], [3, "formGroup"], ["formArrayName", "days"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "secondary", 3, "click"], [3, "formGroupName"], ["matNativeControl", "", "placeholder", "Day of the Week", "formControlName", "day"], ["value", "Monday"], ["value", "Tuesday"], ["value", "Wednesday"], ["value", "Thursday"], ["value", "Friday"], ["value", "Saturday"], ["value", "Sunday"], ["matInput", "", "type", "time", "placeholder", "Choose the event starts time", "formControlName", "startsTime", "required", ""], ["matInput", "", "type", "time", "placeholder", "Choose the event ends time", "formControlName", "endsTime", "required", ""], ["mat-raised-button", "", "color", "secondary", "type", "button", 3, "click"]],
        template: function EventEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventEditComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.event.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventEditComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.event.spotsAvailable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EventEditComponent_Template_mat_checkbox_change_11_listener() {
              return ctx.removeRepeatingDays();
            })("ngModelChange", function EventEditComponent_Template_mat_checkbox_ngModelChange_11_listener($event) {
              return ctx.event.isRepeating = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Event Repeats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventEditComponent_Template_textarea_ngModelChange_14_listener($event) {
              return ctx.event.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "GU-google-place", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("setAddress", function EventEditComponent_Template_GU_google_place_setAddress_15_listener($event) {
              return ctx.getAddress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Please enter date on or after today's date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventEditComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.event.startsTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventEditComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.event.endsTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, EventEditComponent_form_24_Template, 5, 2, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventEditComponent_Template_button_click_31_listener() {
              return ctx.saveEvent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, EventEditComponent_button_33_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventEditComponent_Template_a_click_34_listener() {
              return ctx.location.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.event.id ? "Edit" : "Add", " event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.spotsAvailable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.isRepeating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.startsDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.startsTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.event.endsTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.event.isRepeating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.formErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.event.id);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _google_places_component__WEBPACK_IMPORTED_MODULE_10__["GooglePlacesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
        styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 50px auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldmVudC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImV2ZW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EventEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'GU-event-edit',
            templateUrl: './event-edit.component.html',
            styleUrls: ['./event-edit.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["EventService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["IndexedDBService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-nav/menu-nav.component */
      "LStI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(breakpointObserver) {
        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }));
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["GU-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "GU-menu-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DashboardComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r20.name, " ");
        }
      }

      function DashboardComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Number Of Participants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", event_r21.numParticipants, "/", event_r21.spotsAvailable, " ");
        }
      }

      function DashboardComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Start Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r22.startDate, " ");
        }
      }

      function DashboardComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Start Time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r23.startTime, " ");
        }
      }

      function DashboardComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 15);
        }
      }

      function DashboardComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_tr_23_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var row_r24 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.selectEvent(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r27.name, " ");
        }
      }

      function DashboardComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Number Of Participants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", event_r28.numParticipants, "/", event_r28.spotsAvailable, " ");
        }
      }

      function DashboardComponent_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Start Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r29.startDate, " ");
        }
      }

      function DashboardComponent_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Start Time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", event_r30.startTime, " ");
        }
      }

      function DashboardComponent_tr_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 15);
        }
      }

      function DashboardComponent_tr_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_tr_42_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var row_r31 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.selectEvent(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
          this.displayedColumns = ['name', 'numParticipants', 'startDate', 'startTime'];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.eventsCreated);
            this.dataSource.paginator = this.paginator;
            this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.eventsParticipating);
            this.dataSource2.paginator = this.paginator;
          }
        }, {
          key: "selectEvent",
          value: function selectEvent(event) {
            this.router.navigate(['/event-edit']);
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["GU-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 44,
        vars: 13,
        consts: [[1, "dashboard-container"], [1, "main-events-container"], [1, "events-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "numParticipants"], ["matColumnDef", "startDate"], ["matColumnDef", "startTime"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Events Created");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, DashboardComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DashboardComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DashboardComponent_th_14_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DashboardComponent_td_15_Template, 2, 2, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DashboardComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DashboardComponent_td_18_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, DashboardComponent_th_20_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, DashboardComponent_td_21_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, DashboardComponent_tr_22_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, DashboardComponent_tr_23_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "mat-paginator", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Events Attending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](29, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, DashboardComponent_th_30_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, DashboardComponent_td_31_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, DashboardComponent_th_33_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, DashboardComponent_td_34_Template, 2, 2, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](35, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DashboardComponent_th_36_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, DashboardComponent_td_37_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](38, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, DashboardComponent_th_39_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, DashboardComponent_td_40_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, DashboardComponent_tr_41_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, DashboardComponent_tr_42_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "mat-paginator", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Hi ", ctx.user.firstName, " ", ctx.user.lastName, ", welcome to your dashboard! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" email: ", ctx.user.email, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: [".dashboard-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.main-events-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.events-container[_ngcontent-%COMP%] {\n  width: 45%;\n  margin: auto;\n}\n\n@media screen and (max-width: 600px) {\n  .main-events-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB0ZHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWV2ZW50cy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV2ZW50cy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluLWV2ZW50cy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/event-list/event-list.component */
      "meAL");
      /* harmony import */


      var _pages_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/event-edit/event-edit.component */
      "Lr3h");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/guard/auth.guard */
      "eRTK");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/services */
      "ZF+8");
      /* harmony import */


      var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./menu-nav/menu-nav.component */
      "LStI");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _google_places_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./google-places.component */
      "3y7C");
      /* harmony import */


      var _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/event-details/event-details.component */
      "ZaV5");
      /* harmony import */


      var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/forgot-password/forgot-password.component */
      "lL8u");
      /* harmony import */


      var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/change-password/change-password.component */
      "ohFK");
      /* harmony import */


      var _modules_material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./modules/material.module */
      "1+r1");
      /* harmony import */


      var _errors_text_errors_text_errors_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./errors/text-errors/text-errors.component */
      "3d/4");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./interceptors/error.interceptor */
      "t2gh");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");
      /* harmony import */


      var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./interceptors/jwt.interceptor */
      "hzlp");
      /* harmony import */


      var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./forms/text-input/text-input.component */
      "3O32");
      /* harmony import */


      var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./forms/date-input/date-input.component */
      "3gWd");
      /* harmony import */


      var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./members/member-edit/member-edit.component */
      "u2he"); // pages
      // services


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_shared_services__WEBPACK_IMPORTED_MODULE_15__["EventService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["AccountService"], _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["IndexedDBService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyCTAv20qgxgOCCMNMsMfWZaDmXDTJT2vfw'
        }), ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
          timeOut: 10000,
          positionClass: 'toast-top-right'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__["EventListComponent"], _pages_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_9__["EventEditComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_16__["default"], _google_places_component__WEBPACK_IMPORTED_MODULE_18__["GooglePlacesComponent"], _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_19__["EventDetailsComponent"], _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"], _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordComponent"], _errors_text_errors_text_errors_component__WEBPACK_IMPORTED_MODULE_23__["TextErrorsComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_28__["TextInputComponent"], _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_29__["DateInputComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_30__["MemberEditComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__["EventListComponent"], _pages_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_9__["EventEditComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_16__["default"], _google_places_component__WEBPACK_IMPORTED_MODULE_18__["GooglePlacesComponent"], _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_19__["EventDetailsComponent"], _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"], _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordComponent"], _errors_text_errors_text_errors_component__WEBPACK_IMPORTED_MODULE_23__["TextErrorsComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_28__["TextInputComponent"], _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_29__["DateInputComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_30__["MemberEditComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyCTAv20qgxgOCCMNMsMfWZaDmXDTJT2vfw'
            }), ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
              timeOut: 10000,
              positionClass: 'toast-top-right'
            })],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_15__["EventService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["AccountService"], _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["IndexedDBService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZF+8":
    /*!******************************************!*\
      !*** ./src/app/shared/services/index.ts ***!
      \******************************************/

    /*! exports provided: EventService, AccountService, IndexedDBService */

    /***/
    function ZF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./event.service */
      "6BoG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"];
      });
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account.service */
      "hztc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"];
      });
      /* harmony import */


      var _indexedDb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./indexedDb.service */
      "qw5W");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IndexedDBService", function () {
        return _indexedDb_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDBService"];
      });
      /***/

    },

    /***/
    "ZaV5":
    /*!****************************************************************!*\
      !*** ./src/app/pages/event-details/event-details.component.ts ***!
      \****************************************************************/

    /*! exports provided: EventDetailsComponent */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
        return EventDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services */
      "ZF+8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");

      function EventDetailsComponent_div_0_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventDetailsComponent_div_0_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r4.addEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EventDetailsComponent_div_0_p_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EventDetailsComponent_div_0_p_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Already Participating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EventDetailsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, EventDetailsComponent_div_0_button_17_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "agm-map", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "agm-marker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, EventDetailsComponent_div_0_p_20_Template, 2, 0, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, EventDetailsComponent_div_0_p_21_Template, 2, 0, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.event.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.event.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.event.location.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate5"](" ", ctx_r0.event.location.street, " ", ctx_r0.event.location.city, " ", ctx_r0.event.location.state, " ", ctx_r0.event.location.country, " ", ctx_r0.event.location.zipCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r0.event.numParticipants, "/", ctx_r0.event.spotsAvailable, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.event.startTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.event.endTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isParticipating && ctx_r0.event.numParticipants < ctx_r0.event.spotsAvailable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx_r0.event.location.latitude)("longitude", ctx_r0.event.location.longitude)("mapTypeId", ctx_r0.mapType)("zoom", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx_r0.event.location.latitude)("longitude", ctx_r0.event.location.longitude)("label", ctx_r0.event.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.event.numParticipants >= ctx_r0.event.spotsAvailable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isParticipating);
        }
      }

      var EventDetailsComponent = /*#__PURE__*/function () {
        function EventDetailsComponent(router, eventService, indexedDBService, route) {
          _classCallCheck(this, EventDetailsComponent);

          this.router = router;
          this.eventService = eventService;
          this.indexedDBService = indexedDBService;
          this.route = route;
          this.mapType = 'roadmap';
        }

        _createClass(EventDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadEvent(); // this.dataService.selectedEvent$.subscribe(response => {
            //   if (!response) {
            //     this.router.navigate([eventListPageUrl]);
            //   }
            //   this.event = response;
            //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            //   const date = new Date(this.event.startDate);
            //   this.startDate = date.toLocaleDateString('en-US', options);
            // });

            this.isParticipating = this.checkEventIfParticipating();
          }
        }, {
          key: "loadEvent",
          value: function loadEvent() {
            var _this5 = this;

            this.eventService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe(function (event) {
              _this5.event = event;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// this.dataService.setSelectedEvent(null);
          }
        }, {
          key: "addEvent",
          value: function addEvent() {// const data = { userId: this.user.id, eventId: this.event.id };
            // this.eventService.addParticipant(data).subscribe(
            //   response => {
            //     this.indexedDBService.addEvent(response, eventParticipating);
            //     // this.dataService.setUser();
            //     this.router.navigate([dashboardPageUrl]);
            //   },
            //   err => console.log(err)
            // );
          }
        }, {
          key: "checkEventIfParticipating",
          value: function checkEventIfParticipating() {
            var _this6 = this;

            this.user.eventsParticipating.forEach(function (event) {
              if (event.id === _this6.event.id) {
                return true;
              }
            });
            this.user.eventsCreated.forEach(function (event) {
              if (event.id === _this6.event.id) {
                return true;
              }
            });
            return false;
          }
        }]);

        return EventDetailsComponent;
      }();

      EventDetailsComponent.??fac = function EventDetailsComponent_Factory(t) {
        return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["IndexedDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      EventDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EventDetailsComponent,
        selectors: [["GU-event-details"]],
        decls: 1,
        vars: 1,
        consts: [["class", "event-details-container", 4, "ngIf"], [1, "event-details-container"], [3, "click", 4, "ngIf"], [3, "latitude", "longitude", "mapTypeId", "zoom"], [3, "latitude", "longitude", "label"], [4, "ngIf"], [3, "click"]],
        template: function EventDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EventDetailsComponent_div_0_Template, 22, 23, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.event);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"]],
        styles: [".event-details-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImV2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtZGV0YWlscy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EventDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-event-details',
            templateUrl: './event-details.component.html',
            styleUrls: ['./event-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["EventService"]
          }, {
            type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["IndexedDBService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eRTK":
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eRTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services */
      "ZF+8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(accountService, router) {
          _classCallCheck(this, AuthGuard);

          this.accountService = accountService;
          this.router = router;
        }
        /**
         * Check if user's token is valid
         * @returns boolean
         */


        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this7 = this;

            return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (user) return true;

              _this7.router.navigate(['/login']);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fNfI":
    /*!******************************************************!*\
      !*** ./src/app/pages/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function fNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services */
      "ZF+8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../forms/text-input/text-input.component */
      "3O32");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function RegisterComponent_mat_spinner_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner");
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(route, router, accountService, fb, toastr) {
          _classCallCheck(this, RegisterComponent);

          this.route = route;
          this.router = router;
          this.accountService = accountService;
          this.fb = fb;
          this.toastr = toastr;
          this.hidePassword = true;
          this.hideConfirmPassword = true;
          this.isLoading = false;
          this.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.registerForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              confirmEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.matchValues('email')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passwordPattern)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.matchValues('password')]],
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "matchValues",
          value: function matchValues(matchTo) {
            return function (control) {
              var _a;

              return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value) ? null : {
                isMatching: true
              };
            };
          }
        }, {
          key: "register",
          value: function register() {
            var _this8 = this;

            this.isLoading = true;
            this.registerForm.controls['DOB'].setValue(JSON.stringify(this.registerForm.controls['DOB'].value).replace(/"/g, ""));
            this.accountService.register(this.registerForm.value).subscribe(function (response) {
              console.log(response); // this.toastr.success(response.);

              _this8.router.navigateByUrl('login');

              _this8.isLoading = false;
            }, function (error) {
              console.log(error.error);
              _this8.isLoading = false;
            });
            this.isLoading = false;
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["GU-register"]],
        decls: 41,
        vars: 27,
        consts: [[3, "formGroup", "ngSubmit"], [3, "formControl", "label", "type"], ["matSuffix", "", 3, "click"], ["matNativeControl", "", "placeholder", "Gender", 3, "formControl"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", "format", "DD/MM/YYYY", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-button", "", "routerLink", "/"], [4, "ngIf"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
              return ctx.registerForm.valid && ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Register Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_mat_icon_click_10_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_mat_icon_click_13_listener() {
              return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "GU-text-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Date of birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "mat-datepicker-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "mat-datepicker", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, RegisterComponent_mat_spinner_40_Template, 1, 0, "mat-spinner", 13);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["email"])("label", "email")("type", "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["confirmEmail"])("label", "Confirm email")("type", "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["password"])("label", "password")("type", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.hidePassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["confirmPassword"])("label", "Confirm password")("type", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hideConfirmPassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["firstName"])("label", "First name")("type", "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["lastName"])("label", "Last name")("type", "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.registerForm.controls["gender"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r0)("formControl", ctx.registerForm.controls["DOB"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.registerForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]],
        styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 50px auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nGU-text-input[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuR1UtdGV4dC1pbnB1dCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'GU-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hzlp":
    /*!*************************************************!*\
      !*** ./src/app/interceptors/jwt.interceptor.ts ***!
      \*************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function hzlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services */
      "ZF+8");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(accountService) {
          _classCallCheck(this, JwtInterceptor);

          this.accountService = accountService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser;
            this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
              return currentUser = user;
            });

            if (currentUser) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.??fac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      JwtInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hztc":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/account.service.ts ***!
      \****************************************************/

    /*! exports provided: AccountService */

    /***/
    function hztc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http) {
          var _this9 = this;

          _classCallCheck(this, AccountService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
          this.currentUser$ = this.currentUserSubject.asObservable();

          this.getAll = function () {
            return _this9.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl);
          };

          this.login = function (email, password, rememberMe) {
            var user = {
              email: email,
              password: password,
              rememberMe: rememberMe
            };
            return _this9.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'account/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              console.log(user);

              _this9.currentUserSubject.next(user); //TODO: use local storage for now, move to IndexedDB later


              localStorage.setItem('user', JSON.stringify(user));
            }));
          };
        }

        _createClass(AccountService, [{
          key: "register",
          value: function register(model) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'account/register', model);
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            this.currentUserSubject.next(user);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'account/logout');
          }
        }]);

        return AccountService;
      }();

      AccountService.??fac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AccountService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AccountService,
        factory: AccountService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccountService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lL8u":
    /*!********************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function lL8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ForgotPasswordComponent_div_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ForgotPasswordComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ForgotPasswordComponent_div_16_span_1_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.Email.hasError("required"));
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fb, http) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fb = fb;
          this.http = http;
          this.forgotPasswordApiUrl = '/api/v1/account/forgotPassword';
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
            this.forgotPasswordForm = this.fb.group({
              Email: this.Email
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var userInfo = this.forgotPasswordForm.value;
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + this.forgotPasswordApiUrl + '/' + this.Email, {}).subscribe(function (result) {
              if (result && result.message == 'Success') {}
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["GU-forgot-password"]],
        decls: 22,
        vars: 3,
        consts: [[1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], ["id", "forgotPassCard", 1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["formControlName", "Email", "type", "email", "placeholder", "john@GroupUp.com", 1, "form-control"], [1, "form-group"], ["type", "submit", "value", "Submit", 1, "btn", "float-right", "forgot_btn", 3, "disabled"], ["id", "errors"], ["class", "errorMessage", 4, "ngIf"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/register"], [1, "errorMessage"], [4, "ngIf"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Password Recovery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ForgotPasswordComponent_div_16_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.forgotPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.forgotPasswordForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Email.touched && ctx.Email.errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "meAL":
    /*!**********************************************************!*\
      !*** ./src/app/pages/event-list/event-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: EventListComponent */

    /***/
    function meAL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListComponent", function () {
        return EventListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services */
      "ZF+8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function EventListComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var state_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", state_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](state_r4);
        }
      }

      function EventListComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var city_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", city_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](city_r5);
        }
      }

      function EventListComponent_agm_marker_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "agm-marker", 16);
        }

        if (rf & 2) {
          var marker_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", marker_r6.lat)("longitude", marker_r6.lng)("agmFitBounds", true);
        }
      }

      function EventListComponent_mat_card_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var event_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "event/", event_r7.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](event_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](event_r7.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](event_r7.location.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate5"](" ", event_r7.location.street, " ", event_r7.location.city, " ", event_r7.location.state, " ", event_r7.location.country, " ", event_r7.location.zipCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](event_r7.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](event_r7.startTime);
        }
      }

      var EventListComponent = /*#__PURE__*/function () {
        function EventListComponent(eventService, router) {
          _classCallCheck(this, EventListComponent);

          this.eventService = eventService;
          this.router = router;
          this.errorMessage = '';
          this.mapType = 'roadmap';
          this.markers = [];
        }

        _createClass(EventListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.eventService.getStates().subscribe(function (result) {
              return _this10.states = result;
            }, function (error) {
              return _this10.errorMessage = error;
            });
          }
        }, {
          key: "getEventsByLocation",
          value: function getEventsByLocation() {
            var _this11 = this;

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                if (_this11.distance) {
                  _this11.latitude = position.coords.latitude;
                  _this11.longitude = position.coords.longitude;

                  _this11.eventService.getByDistance(position.coords.latitude, position.coords.longitude, _this11.distance).subscribe(function (result) {
                    console.log(typeof result[0].startDate);
                    _this11.events = result;
                    _this11.events.length === 0 ? _this11.errorMessage = 'Can\'t find any event.' : _this11.errorMessage = '';

                    _this11.addMarkers();
                  }, function (error) {
                    return _this11.errorMessage = error;
                  });
                }
              });
            } else {
              this.userLocation = 'Geolocation is not supported by this browser';
            }
          }
        }, {
          key: "getEventsByCity",
          value: function getEventsByCity() {
            var _this12 = this;

            if (!this.state) {
              this.cityError = 'Please select a state.';
            } else if (!this.city) {
              this.cityError = 'Please select a city.';
            } else {
              this.eventService.getByCity(this.city, this.state).subscribe(function (result) {
                _this12.events = result;
                _this12.events.length === 0 ? _this12.errorMessage = 'Can\'t find any event.' : _this12.errorMessage = '';

                _this12.addMarkers();
              }, function (error) {
                return _this12.errorMessage = error;
              });
            }
          }
        }, {
          key: "addMarkers",
          value: function addMarkers() {
            var _this13 = this;

            this.markers = [];
            this.events.forEach(function (event) {
              _this13.markers.push({
                lat: event.location.latitude,
                lng: event.location.longitude,
                label: event.name
              });
            });
          } // Get all the cities that have events

        }, {
          key: "getEventsCities",
          value: function getEventsCities() {
            var _this14 = this;

            this.eventService.getCities(this.state).subscribe(function (result) {
              return _this14.cities = result;
            }, function (error) {
              return _this14.errorMessage = error;
            });
          }
        }, {
          key: "sortByDate",
          value: function sortByDate() {
            console.log(this.events);
            this.events.forEach(function () {});
          }
        }]);

        return EventListComponent;
      }();

      EventListComponent.??fac = function EventListComponent_Factory(t) {
        return new (t || EventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EventListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EventListComponent,
        selectors: [["GU-event-list"]],
        decls: 39,
        vars: 12,
        consts: [[1, "event-list-container"], [1, "search-container"], ["matNativeControl", "", "placeholder", "Within", "name", "distance", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], [3, "click"], ["matNativeControl", "", "placeholder", "State", "name", "state", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "placeholder", "City", "name", "city", 3, "ngModel", "ngModelChange"], [3, "latitude", "longitude", "mapTypeId", "fitBounds"], [3, "latitude", "longitude", "agmFitBounds", 4, "ngFor", "ngForOf"], [1, "sort-selection-container"], [1, "events-container"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "value"], [3, "latitude", "longitude", "agmFitBounds"], [3, "routerLink"]],
        template: function EventListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Search events by: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventListComponent_Template_select_ngModelChange_6_listener($event) {
              return ctx.distance = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "10 miles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "25 miles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "50 miles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventListComponent_Template_button_click_15_listener() {
              return ctx.getEventsByLocation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "search by location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventListComponent_Template_select_ngModelChange_19_listener($event) {
              return ctx.state = $event;
            })("change", function EventListComponent_Template_select_change_19_listener() {
              return ctx.getEventsCities();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, EventListComponent_option_20_Template, 2, 2, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EventListComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.city = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, EventListComponent_option_23_Template, 2, 2, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventListComponent_Template_button_click_24_listener() {
              return ctx.getEventsByCity();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "search by city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "agm-map", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, EventListComponent_agm_marker_27_Template, 1, 3, "agm-marker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Sort Events by: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "distance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EventListComponent_Template_button_click_33_listener() {
              return ctx.sortByDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, EventListComponent_mat_card_38_Template, 16, 11, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.distance);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cities);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.latitude)("longitude", ctx.longitude)("mapTypeId", ctx.mapType)("fitBounds", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.markers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.events);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmFitBounds"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"]],
        styles: [".event-list-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: inline-block;\n}\n\n.sort-selection-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: inline;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 5px;\n  cursor: pointer;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.events-container[_ngcontent-%COMP%] {\n  padding: auto;\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNGIiwiZmlsZSI6ImV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtbGlzdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zb3J0LXNlbGVjdGlvbi1jb250YWluZXIgKiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmV2ZW50cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EventListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'GU-event-list',
            templateUrl: './event-list.component.html',
            styleUrls: ['./event-list.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["EventService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ohFK":
    /*!********************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function ohFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function ChangePasswordComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.errorMessage, " ");
        }
      }

      function ChangePasswordComponent_mat_spinner_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner");
        }
      }

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(http) {
          _classCallCheck(this, ChangePasswordComponent);

          this.http = http;
          this.hidePassword = false;
          this.errorMessage = '';
          this.isLoading = false;
          this.changePasswordUrl = '/api/v1/profile/changePassword';
        }

        _createClass(ChangePasswordComponent, [{
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this15 = this;

            this.isLoading = true;
            var changePasswordModel = {
              oldPassword: form.oldPassword,
              newPassword: form.newPassword
            };
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + this.changePasswordUrl, changePasswordModel).subscribe(function (result) {
              _this15.isLoading = false;
              console.log(result);
            }, function (error) {
              _this15.errorMessage = error;
            });
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.??fac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ChangePasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["GU-change-password"]],
        decls: 26,
        vars: 9,
        consts: [[3, "ngSubmit"], ["changeForm", "ngForm"], ["matInput", "", "placeholder", "Old Password", "name", "oldPassword", "ngModel", "", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "New Password", "name", "newPassword", "ngModel", "", "required", "", 3, "type"], ["matInput", "", "placeholder", "Confirm New Password", "name", "confirmPassword", "ngModel", "", "required", "", 3, "type"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

              return ctx.onSubmit(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Change Password Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangePasswordComponent_Template_mat_icon_click_10_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangePasswordComponent_Template_mat_icon_click_14_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangePasswordComponent_Template_mat_icon_click_18_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ChangePasswordComponent_mat_error_20_Template, 2, 1, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ChangePasswordComponent_mat_spinner_24_Template, 1, 0, "mat-spinner", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hidePassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.hidePassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hidePassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.hidePassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hidePassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.hidePassword ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qw5W":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/indexedDb.service.ts ***!
      \******************************************************/

    /*! exports provided: IndexedDBService */

    /***/
    function qw5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexedDBService", function () {
        return IndexedDBService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var dexie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! dexie */
      "Texg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexedDBService = /*#__PURE__*/function (_dexie__WEBPACK_IMPOR) {
        _inherits(IndexedDBService, _dexie__WEBPACK_IMPOR);

        var _super = _createSuper(IndexedDBService);

        function IndexedDBService() {
          var _this16;

          _classCallCheck(this, IndexedDBService);

          _this16 = _super.call(this, 'IndexedDBService');

          _this16.openDB();

          return _this16;
        }

        _createClass(IndexedDBService, [{
          key: "openDB",
          value: function openDB() {
            this.db = new dexie__WEBPACK_IMPORTED_MODULE_1__["default"]('GroupUpDB');
            this.db.version(1).stores({
              user: 'id, email, firstName, lastName, gender, DOB',
              eventsCreated: 'id , name, numParticipants, spotsAvailable, isRepeating, description, location, startDate, startTime, endTime',
              // tslint:disable-next-line:max-line-length
              eventsParticipating: 'id , name, numParticipants, spotsAvailable, isRepeating, description, location, startDate, startTime, endTime',
              repeatingDaysTimes: 'id, day, startTime, endTime, eventCreatedId, eventParticipatingId'
            });
          }
        }, {
          key: "addUser",
          value: function addUser(user) {
            this.openDB();
            this.db.user.put({
              token: user.token,
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              gender: user.gender,
              DOB: user.DOB
            }).then(function (userId) {// user.eventsCreated.forEach(event => this.addEvent(event, eventCreated));
              // user.eventsParticipating.forEach(event => this.addEvent(event, eventParticipating));
            })["catch"](function (e) {
              return console.log('Error: ' + (e.stack || e));
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent(event, kindOfEvent) {
            var _this17 = this;

            console.log("fads");
            this.db[kindOfEvent === 'eventCreated' ? 'eventsCreated' : 'eventsParticipating'].put({
              id: event.id,
              name: event.name,
              numParticipants: event.numParticipants,
              spotsAvailable: event.spotsAvailable,
              isRepeating: event.isRepeating,
              description: event.description,
              location: event.location,
              startDate: event.startDate,
              startTime: event.startTime,
              endTime: event.endTime
            }).then(function (eventId) {
              event.repeatingDaysTimes.forEach(function (r) {
                _this17.db.repeatingDaysTimes.add(_defineProperty({
                  id: r.id,
                  day: r.day,
                  startTime: r.startTime,
                  endTime: r.endTime
                }, kindOfEvent + 'Id', eventId))["catch"](function (e) {
                  return console.log('Error: ' + (e.stack || e));
                });
              });
            })["catch"](function (e) {
              return console.log('Error: ' + (e.stack || e));
            });
          }
        }, {
          key: "getUserDataAsync",
          value: function getUserDataAsync() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this18 = this;

              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.db.user.toArray();

                    case 2:
                      user = _context2.sent;

                      if (!user[0]) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.next = 6;
                      return this.db.eventsCreated.toArray();

                    case 6:
                      user[0].eventsCreated = _context2.sent;
                      user[0].eventsCreated.forEach(function (event) {
                        event.repeatingDaysTimes = _this18.db.repeatingDaysTimes.where({
                          eventCreatedId: event.id
                        });
                      });
                      _context2.next = 10;
                      return this.db.eventsParticipating.toArray();

                    case 10:
                      user[0].eventsParticipating = _context2.sent;
                      user[0].eventsParticipating.forEach(function (event) {
                        event.repeatingDaysTimes = _this18.db.repeatingDaysTimes.where({
                          eventParticipatingId: event.id
                        });
                      });
                      return _context2.abrupt("return", user[0]);

                    case 13:
                      return _context2.abrupt("return", false);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteDBAsync",
          value: function deleteDBAsync() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.db["delete"]().then(function () {
                        return _this19.db.open();
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return IndexedDBService;
      }(dexie__WEBPACK_IMPORTED_MODULE_1__["default"]);

      IndexedDBService.??fac = function IndexedDBService_Factory(t) {
        return new (t || IndexedDBService)();
      };

      IndexedDBService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: IndexedDBService,
        factory: IndexedDBService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](IndexedDBService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "t2gh":
    /*!***************************************************!*\
      !*** ./src/app/interceptors/error.interceptor.ts ***!
      \***************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function t2gh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router, toastr) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this20 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              if (error) {
                switch (error.status) {
                  case 400:
                    if (error.error.errors) {
                      var modalStateErrors = [];

                      for (var key in error.error.errors) {
                        if (error.error.errors[key]) {
                          modalStateErrors.push(error.error.errors[key]);
                        }
                      }

                      throw modalStateErrors.flat();
                    } else if (typeof error.error === 'object') {
                      _this20.toastr.error(error.statusText, error.status);
                    } else {
                      _this20.toastr.error(error.error, error.status);
                    }

                    break;

                  case 401:
                    _this20.toastr.error(error.statusText, error.status);

                    break;

                  case 404:
                    _this20.router.navigateByUrl('/not-found');

                    break;

                  case 500:
                    var navigationExtras = {
                      state: {
                        error: error.error
                      }
                    };

                    _this20.router.navigateByUrl('/server-error', navigationExtras);

                    break;

                  default:
                    _this20.toastr.error('Something unexpected went wrong');

                    console.log(error);
                    break;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      ErrorInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "u2he":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-edit/member-edit.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberEditComponent */

    /***/
    function u2he(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
        return MemberEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MemberEditComponent = /*#__PURE__*/function () {
        function MemberEditComponent() {
          _classCallCheck(this, MemberEditComponent);
        }

        _createClass(MemberEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MemberEditComponent;
      }();

      MemberEditComponent.??fac = function MemberEditComponent_Factory(t) {
        return new (t || MemberEditComponent)();
      };

      MemberEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MemberEditComponent,
        selectors: [["GU-member-edit"]],
        decls: 2,
        vars: 0,
        template: function MemberEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "member-edit works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'GU-member-edit',
            templateUrl: './member-edit.component.html',
            styleUrls: ['./member-edit.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/event-list/event-list.component */
      "meAL");
      /* harmony import */


      var _pages_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/event-edit/event-edit.component */
      "Lr3h");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/event-details/event-details.component */
      "ZaV5");
      /* harmony import */


      var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/change-password/change-password.component */
      "ohFK");
      /* harmony import */


      var _app_members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../app/members/member-edit/member-edit.component */
      "u2he");
      /* harmony import */


      var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/guard/auth.guard */
      "eRTK");
      /* harmony import */


      var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/forgot-password/forgot-password.component */
      "lL8u");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");

      var routes = [{
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        children: [{
          path: 'dashboard',
          component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
        }, {
          path: 'member/edit',
          component: _app_members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_10__["MemberEditComponent"]
        }, {
          path: 'event-list',
          component: _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"]
        }, {
          path: 'event-edit',
          component: _pages_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_3__["EventEditComponent"]
        }, {
          path: 'event-details',
          component: _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_8__["EventDetailsComponent"]
        }, {
          path: 'change-password',
          component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"]
        }]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: 'forgot-password',
        component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"]
      }, {
        path: 'not-found',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
      }, {
        path: '**',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map