/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/Montserrat-Regular.ttf */ "./src/fonts/montserrat/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/Montserrat-Bold.ttf */ "./src/fonts/montserrat/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/3692584.jpg */ "./src/images/3692584.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/3692590.jpg */ "./src/images/3692590.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Montserrat-Regular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n}\n\n@font-face {\n    font-family: 'Montserrat-Bold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\nbody {\n    margin: 0;\n    overflow-x: hidden;\n}\n\n\nhtml {\n    box-sizing: border-box;\n    font-family: sans-serif;\n    transition: opacity 0ms 350ms ease-in-out;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\n.transition-wrapper {\n\t-webkit-transition: opacity 400ms 0ms ease-in;\n\t-moz-transition: opacity 400ms 0ms ease-in;\n\t-ms-transition: opacity 400ms 0ms ease-in;\n\t-o-transition: opacity 400ms 0ms ease-in;\n\ttransition: opacity 400ms 0ms ease-in;\n    opacity: 0;\n}\n\n.show {\n    opacity: 1;\n}\n\n#nav-ul {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end;\n    list-style: none;\n    margin: 0;\n    background: rgba(18, 18, 18, 1);\n    color: white;\n    height: 125px;\n    width: 100%;\n    position: fixed;\n    z-index: 900;\n}\n\n.logo {\n    justify-self: flex-start;\n    margin: 35px auto auto 0;\n    font-size: 40px;\n    font-family: sans-serif;\n}\n\n.nav-list {\n    text-decoration: none;\n    display: block;\n    padding: 35px 20px 0px 20px;\n    font-size: 40px;\n    font-family: Montserrat-Regular, sans-serif;\n    font-weight: bold;\n    border-radius: 40%;\n}\n\n.nav-list:hover {\n    background: rgba(255, 255, 255, 0.13);\n    border-radius: 40%;\n    text-shadow: 1px 1px black;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.nav-spacer {\n    width: 100%;\n    height: 125px;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(255, 255, 255);\n}\n\n.home-content {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    background-color: white;\n    filter: brightness(65%);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-position: center center;\n}\n\n.headline {\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-content: center;\n    padding-top: 150px;\n    color: rgba(255, 255, 255, 1);\n    font-family: Montserrat-Regular, sans-serif;\n    font-size: 80px;\n    text-shadow: 2px 2px black;\n    position: relative;\n    \n}\n\n.sub-headline {\n    text-align: center;\n    font-size: 36px;\n    padding-top: 30px;\n    color: rgba(255, 255, 255, 1);\n}\n\n.reserve {\n    align-self: center;\n    width: 500px;\n    height: 200px;\n    margin-top: 100px;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    font-family: Montserrat-Regular, sans-serif;\n    font-size: 72px;\n    text-shadow: inherit;\n    border: 2px solid white;\n    border-radius: 5px;\n}\n\n.reserve:hover {\n    background-color: rgba(18, 18, 18, 1);\n    border: rgba(18, 18, 18, 1);\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.about-page {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: white;\n    position: absolute;\n    margin: auto;\n    filter: brightness(65%);\n    overflow: auto;\n}\n\n.desc-headline {\n    height: 600px;\n    width: 500px;\n    display: flex;\n    flex-flow: column;\n    align-content: center;\n    background-color: rgba(18, 18, 18, 0.7);\n    color: white;\n    outline: 3px solid black;\n    margin: 100px 0px 0px 200px;\n    padding-top: 20px;\n    font-size: 48px;\n    font-family: Montserrat-Regular, sans-serif;\n    text-align: center;\n    text-shadow: 2px 2px black;\n    position: relative;\n}\n\n.home-desc {\n    margin: 30px 0px 0px 20px;\n    font-size: 22px;\n    text-align: left;\n}\n\n.menu-content {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-color: rgb(255, 255, 255);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n.menu-head {\n    text-align: center;\n    font-size: 80px;\n    color: rgb(255, 255, 255);\n    background-color: rgb(190, 49, 49);\n    width: 50%;\n    margin: 60px auto 40px auto;\n    font-family: Montserrat-Regular, sans-serif;\n}\n\n.break {\n    color: rgba(0, 0, 0, 0.705);\n    width: 60%;\n    margin-bottom: 15px;\n}\n\n\n.section-header {\n    font-size: 24px;\n    font-weight: 800;\n    text-align: center;\n    margin-bottom: 30px;\n    color: black;\n}\n\n.menu-section {\n    display: grid;\n    grid-template-columns: repeat(3, 18em);\n    grid-template-rows: repeat(2, 5em);\n    gap: 3em;\n    width: 60%;\n    height: auto;\n    margin: auto auto 100px auto;\n    justify-content: center;\n    justify-items: start;\n}\n\n.menu-item {\n    width: 100%;\n    margin: auto;\n    padding-bottom: 2em;\n    color: rgb(0, 0, 0);\n    font-size: 13px;\n    font-weight: 800;\n    font-family: Montserrat-Bold, sans-serif;\n    line-height: 1.2em;\n    break-inside: avoid;\n}\n\n.menu-price {\n    float: right;\n    color: rgba(0, 0, 0, 0.767);\n}\n\n.menu-ingredient {\n    font-size: 11px;\n    color: rgba(0, 0, 0, 0.767);\n    margin-top: 3px;\n    width: 70%;\n    font-family: Montserrat-Regular, sans-serif;\n}\n\n.contact-content {\n    display: block;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-color: rgba(18, 18, 18, 1);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n.contact-head {\n    text-align: center;\n    font-size: 72px;\n    color: rgba(18, 18, 18, 1);\n    margin: 60px auto 40px auto;\n    font-family: Montserrat-Regular, sans-serif;\n    background-color: white;\n}\n\n.contact-section {\n    display: flex;\n}\n\n.contact-list {\n    display: flex;\n    flex-flow: column;\n    width: 500px;\n    height: auto;\n    margin: 50px auto auto 200px;\n    font-family: Montserrat-Regular, sans-serif;\n    background-color: white;\n}\n\n.contact-list-item {\n    font-size: 30px;\n    margin: 10px 0 10px 10px;\n}\n\n.contact-desc {\n    margin: 10px 0 auto 10px;\n    color: rgba(0, 0, 0, 0.7)\n}\n\n.br {\n    margin-bottom: 60px;\n}\n\n.review-block {\n    display: flex;\n    flex-flow: column;\n    width: 550px;\n    height: 540px;\n    margin: 50px auto auto 200px;\n    font-family: Montserrat-Bold, sans-serif;\n    font-size: 18px;\n    line-height: 1.8em;\n    break-inside: avoid;\n   \n    \n}\n\n.review {\n    color: rgba(255, 255, 255, 0.781);\n    margin: 15px 0 30px 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Montserrat-Regular';\n    src: url(./fonts/montserrat/Montserrat-Regular.ttf); \n}\n\n@font-face {\n    font-family: 'Montserrat-Bold';\n    src: url(./fonts/montserrat/Montserrat-Bold.ttf);\n}\n\n\nbody {\n    margin: 0;\n    overflow-x: hidden;\n}\n\n\nhtml {\n    box-sizing: border-box;\n    font-family: sans-serif;\n    transition: opacity 0ms 350ms ease-in-out;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\n.transition-wrapper {\n\t-webkit-transition: opacity 400ms 0ms ease-in;\n\t-moz-transition: opacity 400ms 0ms ease-in;\n\t-ms-transition: opacity 400ms 0ms ease-in;\n\t-o-transition: opacity 400ms 0ms ease-in;\n\ttransition: opacity 400ms 0ms ease-in;\n    opacity: 0;\n}\n\n.show {\n    opacity: 1;\n}\n\n#nav-ul {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end;\n    list-style: none;\n    margin: 0;\n    background: rgba(18, 18, 18, 1);\n    color: white;\n    height: 125px;\n    width: 100%;\n    position: fixed;\n    z-index: 900;\n}\n\n.logo {\n    justify-self: flex-start;\n    margin: 35px auto auto 0;\n    font-size: 40px;\n    font-family: sans-serif;\n}\n\n.nav-list {\n    text-decoration: none;\n    display: block;\n    padding: 35px 20px 0px 20px;\n    font-size: 40px;\n    font-family: Montserrat-Regular, sans-serif;\n    font-weight: bold;\n    border-radius: 40%;\n}\n\n.nav-list:hover {\n    background: rgba(255, 255, 255, 0.13);\n    border-radius: 40%;\n    text-shadow: 1px 1px black;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.nav-spacer {\n    width: 100%;\n    height: 125px;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(255, 255, 255);\n}\n\n.home-content {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(./images/3692584.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    background-color: white;\n    filter: brightness(65%);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-position: center center;\n}\n\n.headline {\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-content: center;\n    padding-top: 150px;\n    color: rgba(255, 255, 255, 1);\n    font-family: Montserrat-Regular, sans-serif;\n    font-size: 80px;\n    text-shadow: 2px 2px black;\n    position: relative;\n    \n}\n\n.sub-headline {\n    text-align: center;\n    font-size: 36px;\n    padding-top: 30px;\n    color: rgba(255, 255, 255, 1);\n}\n\n.reserve {\n    align-self: center;\n    width: 500px;\n    height: 200px;\n    margin-top: 100px;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    font-family: Montserrat-Regular, sans-serif;\n    font-size: 72px;\n    text-shadow: inherit;\n    border: 2px solid white;\n    border-radius: 5px;\n}\n\n.reserve:hover {\n    background-color: rgba(18, 18, 18, 1);\n    border: rgba(18, 18, 18, 1);\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.about-page {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(./images/3692590.jpg);\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: white;\n    position: absolute;\n    margin: auto;\n    filter: brightness(65%);\n    overflow: auto;\n}\n\n.desc-headline {\n    height: 600px;\n    width: 500px;\n    display: flex;\n    flex-flow: column;\n    align-content: center;\n    background-color: rgba(18, 18, 18, 0.7);\n    color: white;\n    outline: 3px solid black;\n    margin: 100px 0px 0px 200px;\n    padding-top: 20px;\n    font-size: 48px;\n    font-family: Montserrat-Regular, sans-serif;\n    text-align: center;\n    text-shadow: 2px 2px black;\n    position: relative;\n}\n\n.home-desc {\n    margin: 30px 0px 0px 20px;\n    font-size: 22px;\n    text-align: left;\n}\n\n.menu-content {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-color: rgb(255, 255, 255);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n.menu-head {\n    text-align: center;\n    font-size: 80px;\n    color: rgb(255, 255, 255);\n    background-color: rgb(190, 49, 49);\n    width: 50%;\n    margin: 60px auto 40px auto;\n    font-family: Montserrat-Regular, sans-serif;\n}\n\n.break {\n    color: rgba(0, 0, 0, 0.705);\n    width: 60%;\n    margin-bottom: 15px;\n}\n\n\n.section-header {\n    font-size: 24px;\n    font-weight: 800;\n    text-align: center;\n    margin-bottom: 30px;\n    color: black;\n}\n\n.menu-section {\n    display: grid;\n    grid-template-columns: repeat(3, 18em);\n    grid-template-rows: repeat(2, 5em);\n    gap: 3em;\n    width: 60%;\n    height: auto;\n    margin: auto auto 100px auto;\n    justify-content: center;\n    justify-items: start;\n}\n\n.menu-item {\n    width: 100%;\n    margin: auto;\n    padding-bottom: 2em;\n    color: rgb(0, 0, 0);\n    font-size: 13px;\n    font-weight: 800;\n    font-family: Montserrat-Bold, sans-serif;\n    line-height: 1.2em;\n    break-inside: avoid;\n}\n\n.menu-price {\n    float: right;\n    color: rgba(0, 0, 0, 0.767);\n}\n\n.menu-ingredient {\n    font-size: 11px;\n    color: rgba(0, 0, 0, 0.767);\n    margin-top: 3px;\n    width: 70%;\n    font-family: Montserrat-Regular, sans-serif;\n}\n\n.contact-content {\n    display: block;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-color: rgba(18, 18, 18, 1);\n    position: absolute;\n    top: 125px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n.contact-head {\n    text-align: center;\n    font-size: 72px;\n    color: rgba(18, 18, 18, 1);\n    margin: 60px auto 40px auto;\n    font-family: Montserrat-Regular, sans-serif;\n    background-color: white;\n}\n\n.contact-section {\n    display: flex;\n}\n\n.contact-list {\n    display: flex;\n    flex-flow: column;\n    width: 500px;\n    height: auto;\n    margin: 50px auto auto 200px;\n    font-family: Montserrat-Regular, sans-serif;\n    background-color: white;\n}\n\n.contact-list-item {\n    font-size: 30px;\n    margin: 10px 0 10px 10px;\n}\n\n.contact-desc {\n    margin: 10px 0 auto 10px;\n    color: rgba(0, 0, 0, 0.7)\n}\n\n.br {\n    margin-bottom: 60px;\n}\n\n.review-block {\n    display: flex;\n    flex-flow: column;\n    width: 550px;\n    height: 540px;\n    margin: 50px auto auto 200px;\n    font-family: Montserrat-Bold, sans-serif;\n    font-size: 18px;\n    line-height: 1.8em;\n    break-inside: avoid;\n   \n    \n}\n\n.review {\n    color: rgba(255, 255, 255, 0.781);\n    margin: 15px 0 30px 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactPage(main) {
    const body = document.createElement('div')
    body.classList.add("contact-content")
    
    //headline
    const headline = document.createElement('div')
    headline.textContent = "GIVE US A CALL"
    headline.classList.add("contact-head")
    headline.classList.add("transition-wrapper")
    body.appendChild(headline)

    //contact container
    const contactSection = document.createElement('div')
    contactSection.classList.add("contact-section")
    contactSection.classList.add("transition-wrapper")
    body.appendChild(contactSection)

    //contact list
    const contactList = document.createElement('div')
    contactList.classList.add("contact-list")
    contactSection.appendChild(contactList)    
    
    createListItem("Location", contactList)
    createItemDesc(
        "123 Template Street",
        contactList
        )
    createItemDesc(
        "Template City, Tx 78702",
        contactList
        )
    linebreak(contactList)

    createListItem("Hours", contactList)
    createItemDesc(
        "Tue-Thu, 8am - 10pm",
        contactList
        )
    createItemDesc(
        "Fri-Sun, 8am - 11pm",
        contactList
        )
    linebreak(contactList)

    createListItem("Contact", contactList)
    createItemDesc(
        "(210) 555-1234",
        contactList
        )
    createItemDesc(
        "template.placeholder@gmail.com",
        contactList
        )
    linebreak(contactList)

    //reviews
    const reviewBlock = document.createElement('div')
    reviewBlock.classList.add("review-block")
    contactSection.appendChild(reviewBlock)

    createReview(
        `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit magna eget mi auctor, vitae tincidunt erat iaculis. Duis nec." — Food Magazine`,
        reviewBlock
    )
    createReview(
        `"Sed sollicitudin congue nulla, at dignissim ex faucibus ac. Nunc molestie, ligula nec fermentum lobortis, mauris est fringilla purus, eget accumsan eros dolor vitae massa. Sed." — Hungry Times`,
        reviewBlock
    )
    createReview(
        `"Proin tristique dictum velit, ut malesuada nulla egestas ornare. Nullam blandit fringilla laoreet. Ut quis mi condimentum, ullamcorper." — OpenTable`,
        reviewBlock
    )
    
    //Append
    main.appendChild(body)
   
    setTimeout(function () {transition(headline)}, 500)
    setTimeout(function () {transition(contactSection)}, 900)
    
 
}

function createListItem(name, element) {
    const item = document.createElement('h2')
    item.classList.add("contact-list-item")
    item.id = name
    item.textContent = name
    element.appendChild(item)
}

function createItemDesc(value, element) {
    const desc = document.createElement('p')
    desc.classList.add('contact-desc')
    desc.textContent = value
    element.appendChild(desc)
}

function createReview(value, element) {
    const review = document.createElement('p')
    review.classList.add('review')
    review.textContent = value
    element.appendChild(review)
}

function transition(element) {
    element.classList.add("show")
}
function linebreak(element) {
    const lineBreak = document.createElement('br')
    lineBreak.classList.add("br")
    element.appendChild(lineBreak)
    return lineBreak
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHomePage(main) {
    const body = document.createElement('div')
    body.classList.add("home-content")
    
    //Headline
    const headline = document.createElement('div')
    headline.textContent = "PARADISE IS JUST A VISIT AWAY"
    headline.classList.add("headline")
    headline.classList.add("transition-wrapper")
    
    //Subheadline
    const subHeadline = document.createElement('div')
    subHeadline.textContent = "Reserve your table today"
    subHeadline.classList.add('sub-headline')
    headline.appendChild(subHeadline)
    
    //Book table button
    const reserveBtn = document.createElement('button')
    reserveBtn.classList.add('reserve')
    reserveBtn.classList.add('transition-wrapper')
    reserveBtn.value = "#"
    reserveBtn.textContent = "Book Table"
    headline.appendChild(reserveBtn)

    //about body
    const aboutPage = document.createElement('div')
    aboutPage.classList.add('about-page')
    
    //desc headline
    const descHeadline = document.createElement('div')
    descHeadline.classList.add('desc-headline')
    descHeadline.classList.add('transition-wrapper')
    descHeadline.textContent = "STORY"

    //Description
    const desc = document.createElement('p')
    desc.classList.add('home-desc')
    desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sapien, ultricies sit amet condimentum eget, scelerisque et erat. Duis vitae nibh lectus. Aenean ullamcorper iaculis arcu vel hendrerit. Pellentesque justo odio, elementum ac elit in, iaculis eleifend nisl. Nunc non consectetur dolor. Donec quam metus, dictum vel consectetur quis, bibendum sed orci. Donec vel sagittis lectus, blandit egestas erat. Quisque tincidunt eros mi, vitae suscipit neque imperdiet eget. Curabitur quam velit, lacinia ut metus sed, volutpat scelerisque leo. Phasellus sed purus at velit condimentum rutrum in in mauris. "
    descHeadline.appendChild(desc)

    //Append
    main.appendChild(body)
    main.appendChild(headline)
    main.appendChild(aboutPage)
    main.appendChild(descHeadline)
    setTimeout(function () {transition(headline)}, 500)
    setTimeout(function () {transition(reserveBtn)}, 800)
    setTimeout(function () {transition(descHeadline)}, 1000)
}

function transition(element) {
    element.classList.add("show")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuPage(main) {
    const body = document.createElement('div')
    body.classList.add("menu-content")
    
    //menu headline
    const menuHead = document.createElement('h1')
    menuHead.textContent = "MENU"
    menuHead.classList.add("menu-head")
    menuHead.classList.add("transition-wrapper")
    body.appendChild(menuHead)

    //header breaker
    const line = linebreak(body)
    line.classList.add("transition-wrapper")

    //menu contents
    const menuBody = document.createElement('div')
    menuBody.classList.add('menu-body')
    menuBody.classList.add('transition-wrapper')
    body.appendChild(menuBody)

    //breakfast
    createSectionHeader("Breakfast", menuBody)
    menuBody.appendChild(
        createMenuSection("Breakfast")
    )
    linebreak(menuBody)
    //lunch
    createSectionHeader("Lunch", menuBody)
    menuBody.appendChild(
        createMenuSection("Lunch")
    )
    linebreak(menuBody)
    //dinner
    createSectionHeader("Dinner", menuBody)
    menuBody.appendChild(
        createMenuSection("Dinner")
    )
    //Append
    main.appendChild(body)
    setTimeout(function () {transition(menuHead)}, 500)
    setTimeout(function () {transition(line)}, 800)
    setTimeout(function () {transition(menuBody)}, 1000)
    
}

function transition(element) {
    element.classList.add("show")
}

function createSectionHeader(name, element) {
    const sectionHeader = document.createElement('div')
    sectionHeader.classList.add('section-header')
    sectionHeader.textContent = name
    element.appendChild(sectionHeader)
    // return sectionHeader
}

function createMenuSection(name) {
    const menuSection = document.createElement('div')
    menuSection.classList.add('menu-section')
    menuSection.id = name
    switch(name) {
       case "Breakfast":
           menuSection.appendChild(
                createMenuItem(
                    "EGGS BENEDICT",
                    "11",
                    "Poached eggs, cured ham and harissa hollandaise on an English muffin"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "VEGGIE BREAKFAST PLATE",
                    "10",
                    "Smashed avo, veggie sausage, mushrooms, confit tomatoes, hash brown, toasted white bloomer and eggs"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MOROCCAN BREAKFAST",
                    "13",
                    "French toast with figs, honey, labneh and crushed hazelnuts"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SALMON AND CREAM CHEESE",
                    "7",
                    "Smoked salmon with a lemon, dill and pepper cream cheese on a toasted wheat grain bloomer"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MAPLE AND BACON PANCAKES",
                    "11",
                    "American-style pancakes, streaky bacon, maple syrup and maple butter"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MEXICAN TOSTADA PLATE",
                    "9.5",
                    "Slow cooked marinated pork, avocado, refried beans and a fried egg on a flour tortilla"
                    )
                );    
            break
        case "Lunch":
            menuSection.appendChild(
                createMenuItem(
                    "PORK CUBAN SANDWICH",
                    "13",
                    "Slow cooked marinated pork, cured ham, gherkin and mature Cheddar in toasted white bloomer slices"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "FISH FINGER SANDWICH",
                    "14",
                    "Breaded fish goujons with pico de gallo, baby gem and tartar sauce in a bun"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SOFT SHELL CRAB BURGER",
                    "14",
                    "Tempura soft shell crab, spring onion, chilli, red cabbage slaw and cayenne ranch sauce."
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SMOKED GRAVY BURGER",
                    "13",
                    "Grilled beef patty, pulled beef, red onion, gherkin, smoked gravy butter and Giraffe burger sauce"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "CLASSIC CHEESE BURGER",
                    "13",
                    "Grilled beef patty, smoked Cheddar cheese, red onion, crispy fried onions and special burger sauce. Add bacon"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "PINK CAESAR SALAD",
                    "10",
                    "Baby gem, croutons, tomatoes, Parmigiano Reggiano, chopped beetroot boiled egg and smoked Caesar salad dressing"
                    )
                );    
            break
        case "Dinner":
            menuSection.appendChild(
                createMenuItem(
                    "JAPANESE KATSU CURRY",
                    "16",
                    "Breaded chicken in a creamy katsu sauce, spring onion and chilli. Served with veg and noodles"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "THAI DUCK STIR FRY",
                    "18",
                    "Shredded duck and noodles with crispy onions, sweet chilli jam and Asian slaw in a teriyaki sauce. Swap duck for prawns"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "HOISIN DUCK NOODLE SALAD",
                    "17",
                    "Sweet and sticky shredded duck, chargrilled pineapple, carrots, cucumber and vermicelli noodles in a soy and ginger dressing"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "STEAK AND CHIPS",
                    "17",
                    "8oz British sirloin steak served with chipotle butter, confit tomatoes, crispy onions and lemon and pepper seasoned fries"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "HANGING KEBABS",
                    "17",
                    "Grilled swinging kebabs served with Greek salad, hummus and flatbread"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "KOREAN BBQ CHICKEN",
                    "15",
                    "Sticky crispy fried chicken with vermicelli noodles, grated carrots, slaw and spring onion."
                    )
                );    
            break
    }
    return menuSection
}


function createMenuItem (name, amount, ingredients) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')
    menuItem.textContent = name
    const price = document.createElement('span')
    price.classList.add('menu-price')
    price.textContent = amount
    menuItem.appendChild(price)

    const menuIngredient = document.createElement('div')
    menuIngredient.classList.add("menu-ingredient")
    menuIngredient.textContent = ingredients
    menuItem.appendChild(menuIngredient)
    return menuItem
}

function linebreak(element) {
    const lineBreak = document.createElement('hr')
    lineBreak.classList.add("break")
    element.appendChild(lineBreak)
    return lineBreak
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function loadPage(state, main) {
    switch (state) {
        case "home":
            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)(main)
            break;
        case "menu":
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)(main)
            break;
        case "contact":
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)(main)
            break;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/fonts/montserrat/Montserrat-Bold.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/montserrat/Montserrat-Bold.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "733964aa5261b1af4852.ttf";

/***/ }),

/***/ "./src/fonts/montserrat/Montserrat-Regular.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/montserrat/Montserrat-Regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e20d5327f1a05620c084.ttf";

/***/ }),

/***/ "./src/images/3692584.jpg":
/*!********************************!*\
  !*** ./src/images/3692584.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3491b6cfeab0e808910a.jpg";

/***/ }),

/***/ "./src/images/3692590.jpg":
/*!********************************!*\
  !*** ./src/images/3692590.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb69ef9c7ead83bd1b0d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");



//init 
const content = document.querySelector("#content")
const main = document.createElement('div')
main.id = "home"
main.classList.add("main")
main.classList.add("transition-wrapper")
main.classList.add("show")

const header = (() => {
    const navBar = document.createElement('nav')
    const ul = document.createElement('ul')
    const logo = document.createElement('h1')
    navBar.id = "navbar"
    ul.id = "nav-ul"
    navBar.appendChild(ul)
    ul.appendChild(logo)
    logo.textContent = "RESTAURANT"
    logo.classList.add("logo")
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li')
        li.classList.add("nav-list")
        switch(i) {
            case 0:
                li.id = "home"
                li.textContent = "Home"
                break;
            case 1:
                li.id = "menu"
                li.textContent = "Menu"
                break;
            case 2:
                li.id = "contact"
                li.textContent = "Contact"
                break;
        }
        ul.appendChild(li)
    }
    content.appendChild(navBar)

    //nav spacer 
    const navSpacer = document.createElement('div')
    navSpacer.classList.add("nav-spacer")
    navSpacer.textContent = "&nbsp;"
    content.appendChild(navSpacer)
    content.appendChild(main)

    //event listener
    const tab = document.querySelectorAll('.nav-list')
    tab.forEach(tab => {
        tab.addEventListener('click', () => {
            let change = tab.id
            tabSwitch(change, main.id)
        })
    })

    function tabSwitch(change, state) {
        if (change === state) {
            return
        }
        main.classList.remove('show')
        setTimeout(function () {removePage()}, 500)
        setTimeout(function () {;(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__.default)(change, main)}, 600)
        setTimeout(function () {transition(main)}, 600)
        main.id = change

    }

    function removePage() {
         while (main.firstChild) {
             main.removeChild(main.lastChild)
         }
        }

    function transition(element) {
        element.classList.add("show")
    }
    
        
})();

(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__.default)(main.id, main)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELDRCQUE0QixpQkFBaUI7QUFDN0MsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTlM7QUFDQztBQUNNOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBYztBQUMxQjtBQUNBO0FBQ0EsWUFBWSxpREFBYztBQUMxQjtBQUNBO0FBQ0EsWUFBWSxvREFBaUI7QUFDN0I7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNlOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0Msc0RBQVEsZUFBZTtBQUN2RCxnQ0FBZ0MsaUJBQWlCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscURBQVEsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy8zNjkyNTg0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzLzM2OTI1OTAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1Cb2xkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcblxcbmh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwbXMgMzUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4udHJhbnNpdGlvbi13cmFwcGVyIHtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMG1zIGVhc2UtaW47XFxuXFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIDBtcyBlYXNlLWluO1xcblxcdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIDBtcyBlYXNlLWluO1xcblxcdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMG1zIGVhc2UtaW47XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jbmF2LXVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDkwMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMzVweCBhdXRvIGF1dG8gMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMzVweCAyMHB4IDBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblxcbi5uYXYtbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5uYXYtc3BhY2VyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTI1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDY1JSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmhlYWRsaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG59XFxuXFxuLnN1Yi1oZWFkbGluZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5yZXNlcnZlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJlc2VydmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDEpO1xcbiAgICBib3JkZXI6IHJnYmEoMTgsIDE4LCAxOCwgMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5hYm91dC1wYWdlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmRlc2MtaGVhZGxpbmUge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAzcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogMTAwcHggMHB4IDBweCAyMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaG9tZS1kZXNjIHtcXG4gICAgbWFyZ2luOiAzMHB4IDBweCAwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTI1cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbi5tZW51LWhlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnJlYWsge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxOGVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNWVtKTtcXG4gICAgZ2FwOiAzZW07XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTAwcHggYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nyk7XFxufVxcblxcbi5tZW51LWluZ3JlZGllbnQge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzY3KTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAxKTtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIGF1dG8gMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdC1saXN0LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtZGVzYyB7XFxuICAgIG1hcmdpbjogMTBweCAwIGF1dG8gMTBweDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KVxcbn1cXG5cXG4uYnIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHdpZHRoOiA1NTBweDtcXG4gICAgaGVpZ2h0OiA1NDBweDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gYXV0byAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucmV2aWV3IHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODEpO1xcbiAgICBtYXJnaW46IDE1cHggMCAzMHB4IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsNENBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUFnRDtBQUNwRDs7O0FBR0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsNkNBQTZDO0NBQzdDLDBDQUEwQztDQUMxQyx5Q0FBeUM7Q0FDekMsd0NBQXdDO0NBQ3hDLHFDQUFxQztJQUNsQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7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ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGYpOyBcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1Cb2xkJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtQm9sZC50dGYpO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcblxcbmh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwbXMgMzUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4udHJhbnNpdGlvbi13cmFwcGVyIHtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMG1zIGVhc2UtaW47XFxuXFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIDBtcyBlYXNlLWluO1xcblxcdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIDBtcyBlYXNlLWluO1xcblxcdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMG1zIGVhc2UtaW47XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jbmF2LXVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDkwMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMzVweCBhdXRvIGF1dG8gMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMzVweCAyMHB4IDBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblxcbi5uYXYtbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5uYXYtc3BhY2VyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTI1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzLzM2OTI1ODQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDY1JSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmhlYWRsaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG59XFxuXFxuLnN1Yi1oZWFkbGluZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5yZXNlcnZlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJlc2VydmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDEpO1xcbiAgICBib3JkZXI6IHJnYmEoMTgsIDE4LCAxOCwgMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5hYm91dC1wYWdlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzLzM2OTI1OTAuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmRlc2MtaGVhZGxpbmUge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAzcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogMTAwcHggMHB4IDBweCAyMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaG9tZS1kZXNjIHtcXG4gICAgbWFyZ2luOiAzMHB4IDBweCAwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTI1cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbi5tZW51LWhlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnJlYWsge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxOGVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNWVtKTtcXG4gICAgZ2FwOiAzZW07XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTAwcHggYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nyk7XFxufVxcblxcbi5tZW51LWluZ3JlZGllbnQge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzY3KTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAxKTtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIGF1dG8gMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdC1saXN0LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtZGVzYyB7XFxuICAgIG1hcmdpbjogMTBweCAwIGF1dG8gMTBweDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KVxcbn1cXG5cXG4uYnIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHdpZHRoOiA1NTBweDtcXG4gICAgaGVpZ2h0OiA1NDBweDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gYXV0byAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucmV2aWV3IHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODEpO1xcbiAgICBtYXJnaW46IDE1cHggMCAzMHB4IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZShtYWluKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250ZW50XCIpXG4gICAgXG4gICAgLy9oZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiR0lWRSBVUyBBIENBTExcIlxuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlYWRcIilcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvbi13cmFwcGVyXCIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkbGluZSlcblxuICAgIC8vY29udGFjdCBjb250YWluZXJcbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc2VjdGlvblwiKVxuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLXdyYXBwZXJcIilcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKVxuXG4gICAgLy9jb250YWN0IGxpc3RcbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlzdFwiKVxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KSAgICBcbiAgICBcbiAgICBjcmVhdGVMaXN0SXRlbShcIkxvY2F0aW9uXCIsIGNvbnRhY3RMaXN0KVxuICAgIGNyZWF0ZUl0ZW1EZXNjKFxuICAgICAgICBcIjEyMyBUZW1wbGF0ZSBTdHJlZXRcIixcbiAgICAgICAgY29udGFjdExpc3RcbiAgICAgICAgKVxuICAgIGNyZWF0ZUl0ZW1EZXNjKFxuICAgICAgICBcIlRlbXBsYXRlIENpdHksIFR4IDc4NzAyXCIsXG4gICAgICAgIGNvbnRhY3RMaXN0XG4gICAgICAgIClcbiAgICBsaW5lYnJlYWsoY29udGFjdExpc3QpXG5cbiAgICBjcmVhdGVMaXN0SXRlbShcIkhvdXJzXCIsIGNvbnRhY3RMaXN0KVxuICAgIGNyZWF0ZUl0ZW1EZXNjKFxuICAgICAgICBcIlR1ZS1UaHUsIDhhbSAtIDEwcG1cIixcbiAgICAgICAgY29udGFjdExpc3RcbiAgICAgICAgKVxuICAgIGNyZWF0ZUl0ZW1EZXNjKFxuICAgICAgICBcIkZyaS1TdW4sIDhhbSAtIDExcG1cIixcbiAgICAgICAgY29udGFjdExpc3RcbiAgICAgICAgKVxuICAgIGxpbmVicmVhayhjb250YWN0TGlzdClcblxuICAgIGNyZWF0ZUxpc3RJdGVtKFwiQ29udGFjdFwiLCBjb250YWN0TGlzdClcbiAgICBjcmVhdGVJdGVtRGVzYyhcbiAgICAgICAgXCIoMjEwKSA1NTUtMTIzNFwiLFxuICAgICAgICBjb250YWN0TGlzdFxuICAgICAgICApXG4gICAgY3JlYXRlSXRlbURlc2MoXG4gICAgICAgIFwidGVtcGxhdGUucGxhY2Vob2xkZXJAZ21haWwuY29tXCIsXG4gICAgICAgIGNvbnRhY3RMaXN0XG4gICAgICAgIClcbiAgICBsaW5lYnJlYWsoY29udGFjdExpc3QpXG5cbiAgICAvL3Jldmlld3NcbiAgICBjb25zdCByZXZpZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmV2aWV3QmxvY2suY2xhc3NMaXN0LmFkZChcInJldmlldy1ibG9ja1wiKVxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlld0Jsb2NrKVxuXG4gICAgY3JlYXRlUmV2aWV3KFxuICAgICAgICBgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgaGVuZHJlcml0IG1hZ25hIGVnZXQgbWkgYXVjdG9yLCB2aXRhZSB0aW5jaWR1bnQgZXJhdCBpYWN1bGlzLiBEdWlzIG5lYy5cIiDigJQgRm9vZCBNYWdhemluZWAsXG4gICAgICAgIHJldmlld0Jsb2NrXG4gICAgKVxuICAgIGNyZWF0ZVJldmlldyhcbiAgICAgICAgYFwiU2VkIHNvbGxpY2l0dWRpbiBjb25ndWUgbnVsbGEsIGF0IGRpZ25pc3NpbSBleCBmYXVjaWJ1cyBhYy4gTnVuYyBtb2xlc3RpZSwgbGlndWxhIG5lYyBmZXJtZW50dW0gbG9ib3J0aXMsIG1hdXJpcyBlc3QgZnJpbmdpbGxhIHB1cnVzLCBlZ2V0IGFjY3Vtc2FuIGVyb3MgZG9sb3Igdml0YWUgbWFzc2EuIFNlZC5cIiDigJQgSHVuZ3J5IFRpbWVzYCxcbiAgICAgICAgcmV2aWV3QmxvY2tcbiAgICApXG4gICAgY3JlYXRlUmV2aWV3KFxuICAgICAgICBgXCJQcm9pbiB0cmlzdGlxdWUgZGljdHVtIHZlbGl0LCB1dCBtYWxlc3VhZGEgbnVsbGEgZWdlc3RhcyBvcm5hcmUuIE51bGxhbSBibGFuZGl0IGZyaW5naWxsYSBsYW9yZWV0LiBVdCBxdWlzIG1pIGNvbmRpbWVudHVtLCB1bGxhbWNvcnBlci5cIiDigJQgT3BlblRhYmxlYCxcbiAgICAgICAgcmV2aWV3QmxvY2tcbiAgICApXG4gICAgXG4gICAgLy9BcHBlbmRcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvZHkpXG4gICBcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKGhlYWRsaW5lKX0sIDUwMClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKGNvbnRhY3RTZWN0aW9uKX0sIDkwMClcbiAgICBcbiBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0obmFtZSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saXN0LWl0ZW1cIilcbiAgICBpdGVtLmlkID0gbmFtZVxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBuYW1lXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtRGVzYyh2YWx1ZSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGVzYycpXG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHZhbHVlXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXZpZXcodmFsdWUsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByZXZpZXcuY2xhc3NMaXN0LmFkZCgncmV2aWV3JylcbiAgICByZXZpZXcudGV4dENvbnRlbnQgPSB2YWx1ZVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmV2aWV3KVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXG59XG5mdW5jdGlvbiBsaW5lYnJlYWsoZWxlbWVudCkge1xuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICBsaW5lQnJlYWsuY2xhc3NMaXN0LmFkZChcImJyXCIpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lQnJlYWspXG4gICAgcmV0dXJuIGxpbmVCcmVha1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJmdW5jdGlvbiBjcmVhdGVIb21lUGFnZShtYWluKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpXG4gICAgXG4gICAgLy9IZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiUEFSQURJU0UgSVMgSlVTVCBBIFZJU0lUIEFXQVlcIlxuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZVwiKVxuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLXdyYXBwZXJcIilcbiAgICBcbiAgICAvL1N1YmhlYWRsaW5lXG4gICAgY29uc3Qgc3ViSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1YkhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJSZXNlcnZlIHlvdXIgdGFibGUgdG9kYXlcIlxuICAgIHN1YkhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3N1Yi1oZWFkbGluZScpXG4gICAgaGVhZGxpbmUuYXBwZW5kQ2hpbGQoc3ViSGVhZGxpbmUpXG4gICAgXG4gICAgLy9Cb29rIHRhYmxlIGJ1dHRvblxuICAgIGNvbnN0IHJlc2VydmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlc2VydmVCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXJ2ZScpXG4gICAgcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXdyYXBwZXInKVxuICAgIHJlc2VydmVCdG4udmFsdWUgPSBcIiNcIlxuICAgIHJlc2VydmVCdG4udGV4dENvbnRlbnQgPSBcIkJvb2sgVGFibGVcIlxuICAgIGhlYWRsaW5lLmFwcGVuZENoaWxkKHJlc2VydmVCdG4pXG5cbiAgICAvL2Fib3V0IGJvZHlcbiAgICBjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0UGFnZS5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlJylcbiAgICBcbiAgICAvL2Rlc2MgaGVhZGxpbmVcbiAgICBjb25zdCBkZXNjSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdkZXNjLWhlYWRsaW5lJylcbiAgICBkZXNjSGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi13cmFwcGVyJylcbiAgICBkZXNjSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlNUT1JZXCJcblxuICAgIC8vRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2MnKVxuICAgIGRlc2MudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBsb3JlbSBzYXBpZW4sIHVsdHJpY2llcyBzaXQgYW1ldCBjb25kaW1lbnR1bSBlZ2V0LCBzY2VsZXJpc3F1ZSBldCBlcmF0LiBEdWlzIHZpdGFlIG5pYmggbGVjdHVzLiBBZW5lYW4gdWxsYW1jb3JwZXIgaWFjdWxpcyBhcmN1IHZlbCBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBqdXN0byBvZGlvLCBlbGVtZW50dW0gYWMgZWxpdCBpbiwgaWFjdWxpcyBlbGVpZmVuZCBuaXNsLiBOdW5jIG5vbiBjb25zZWN0ZXR1ciBkb2xvci4gRG9uZWMgcXVhbSBtZXR1cywgZGljdHVtIHZlbCBjb25zZWN0ZXR1ciBxdWlzLCBiaWJlbmR1bSBzZWQgb3JjaS4gRG9uZWMgdmVsIHNhZ2l0dGlzIGxlY3R1cywgYmxhbmRpdCBlZ2VzdGFzIGVyYXQuIFF1aXNxdWUgdGluY2lkdW50IGVyb3MgbWksIHZpdGFlIHN1c2NpcGl0IG5lcXVlIGltcGVyZGlldCBlZ2V0LiBDdXJhYml0dXIgcXVhbSB2ZWxpdCwgbGFjaW5pYSB1dCBtZXR1cyBzZWQsIHZvbHV0cGF0IHNjZWxlcmlzcXVlIGxlby4gUGhhc2VsbHVzIHNlZCBwdXJ1cyBhdCB2ZWxpdCBjb25kaW1lbnR1bSBydXRydW0gaW4gaW4gbWF1cmlzLiBcIlxuICAgIGRlc2NIZWFkbGluZS5hcHBlbmRDaGlsZChkZXNjKVxuXG4gICAgLy9BcHBlbmRcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkbGluZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0UGFnZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NIZWFkbGluZSlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKGhlYWRsaW5lKX0sIDUwMClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKHJlc2VydmVCdG4pfSwgODAwKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge3RyYW5zaXRpb24oZGVzY0hlYWRsaW5lKX0sIDEwMDApXG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7IiwiZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UobWFpbikge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKVxuICAgIFxuICAgIC8vbWVudSBoZWFkbGluZVxuICAgIGNvbnN0IG1lbnVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG1lbnVIZWFkLnRleHRDb250ZW50ID0gXCJNRU5VXCJcbiAgICBtZW51SGVhZC5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkXCIpXG4gICAgbWVudUhlYWQuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24td3JhcHBlclwiKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudUhlYWQpXG5cbiAgICAvL2hlYWRlciBicmVha2VyXG4gICAgY29uc3QgbGluZSA9IGxpbmVicmVhayhib2R5KVxuICAgIGxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24td3JhcHBlclwiKVxuXG4gICAgLy9tZW51IGNvbnRlbnRzXG4gICAgY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVCb2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtYm9keScpXG4gICAgbWVudUJvZHkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi13cmFwcGVyJylcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVCb2R5KVxuXG4gICAgLy9icmVha2Zhc3RcbiAgICBjcmVhdGVTZWN0aW9uSGVhZGVyKFwiQnJlYWtmYXN0XCIsIG1lbnVCb2R5KVxuICAgIG1lbnVCb2R5LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51U2VjdGlvbihcIkJyZWFrZmFzdFwiKVxuICAgIClcbiAgICBsaW5lYnJlYWsobWVudUJvZHkpXG4gICAgLy9sdW5jaFxuICAgIGNyZWF0ZVNlY3Rpb25IZWFkZXIoXCJMdW5jaFwiLCBtZW51Qm9keSlcbiAgICBtZW51Qm9keS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudVNlY3Rpb24oXCJMdW5jaFwiKVxuICAgIClcbiAgICBsaW5lYnJlYWsobWVudUJvZHkpXG4gICAgLy9kaW5uZXJcbiAgICBjcmVhdGVTZWN0aW9uSGVhZGVyKFwiRGlubmVyXCIsIG1lbnVCb2R5KVxuICAgIG1lbnVCb2R5LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51U2VjdGlvbihcIkRpbm5lclwiKVxuICAgIClcbiAgICAvL0FwcGVuZFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKG1lbnVIZWFkKX0sIDUwMClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt0cmFuc2l0aW9uKGxpbmUpfSwgODAwKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge3RyYW5zaXRpb24obWVudUJvZHkpfSwgMTAwMClcbiAgICBcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uSGVhZGVyKG5hbWUsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJylcbiAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gbmFtZVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcilcbiAgICAvLyByZXR1cm4gc2VjdGlvbkhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbihuYW1lKSB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpXG4gICAgbWVudVNlY3Rpb24uaWQgPSBuYW1lXG4gICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICBjYXNlIFwiQnJlYWtmYXN0XCI6XG4gICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcIkVHR1MgQkVORURJQ1RcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlBvYWNoZWQgZWdncywgY3VyZWQgaGFtIGFuZCBoYXJpc3NhIGhvbGxhbmRhaXNlIG9uIGFuIEVuZ2xpc2ggbXVmZmluXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJWRUdHSUUgQlJFQUtGQVNUIFBMQVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTbWFzaGVkIGF2bywgdmVnZ2llIHNhdXNhZ2UsIG11c2hyb29tcywgY29uZml0IHRvbWF0b2VzLCBoYXNoIGJyb3duLCB0b2FzdGVkIHdoaXRlIGJsb29tZXIgYW5kIGVnZ3NcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcIk1PUk9DQ0FOIEJSRUFLRkFTVFwiLFxuICAgICAgICAgICAgICAgICAgICBcIjEzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJlbmNoIHRvYXN0IHdpdGggZmlncywgaG9uZXksIGxhYm5laCBhbmQgY3J1c2hlZCBoYXplbG51dHNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcIlNBTE1PTiBBTkQgQ1JFQU0gQ0hFRVNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlNtb2tlZCBzYWxtb24gd2l0aCBhIGxlbW9uLCBkaWxsIGFuZCBwZXBwZXIgY3JlYW0gY2hlZXNlIG9uIGEgdG9hc3RlZCB3aGVhdCBncmFpbiBibG9vbWVyXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJNQVBMRSBBTkQgQkFDT04gUEFOQ0FLRVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkFtZXJpY2FuLXN0eWxlIHBhbmNha2VzLCBzdHJlYWt5IGJhY29uLCBtYXBsZSBzeXJ1cCBhbmQgbWFwbGUgYnV0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJNRVhJQ0FOIFRPU1RBREEgUExBVEVcIixcbiAgICAgICAgICAgICAgICAgICAgXCI5LjVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTbG93IGNvb2tlZCBtYXJpbmF0ZWQgcG9yaywgYXZvY2FkbywgcmVmcmllZCBiZWFucyBhbmQgYSBmcmllZCBlZ2cgb24gYSBmbG91ciB0b3J0aWxsYVwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApOyAgICBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJMdW5jaFwiOlxuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiUE9SSyBDVUJBTiBTQU5EV0lDSFwiLFxuICAgICAgICAgICAgICAgICAgICBcIjEzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU2xvdyBjb29rZWQgbWFyaW5hdGVkIHBvcmssIGN1cmVkIGhhbSwgZ2hlcmtpbiBhbmQgbWF0dXJlIENoZWRkYXIgaW4gdG9hc3RlZCB3aGl0ZSBibG9vbWVyIHNsaWNlc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiRklTSCBGSU5HRVIgU0FORFdJQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJyZWFkZWQgZmlzaCBnb3Vqb25zIHdpdGggcGljbyBkZSBnYWxsbywgYmFieSBnZW0gYW5kIHRhcnRhciBzYXVjZSBpbiBhIGJ1blwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiU09GVCBTSEVMTCBDUkFCIEJVUkdFUlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVGVtcHVyYSBzb2Z0IHNoZWxsIGNyYWIsIHNwcmluZyBvbmlvbiwgY2hpbGxpLCByZWQgY2FiYmFnZSBzbGF3IGFuZCBjYXllbm5lIHJhbmNoIHNhdWNlLlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiU01PS0VEIEdSQVZZIEJVUkdFUlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjEzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpbGxlZCBiZWVmIHBhdHR5LCBwdWxsZWQgYmVlZiwgcmVkIG9uaW9uLCBnaGVya2luLCBzbW9rZWQgZ3JhdnkgYnV0dGVyIGFuZCBHaXJhZmZlIGJ1cmdlciBzYXVjZVwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiQ0xBU1NJQyBDSEVFU0UgQlVSR0VSXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiMTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlsbGVkIGJlZWYgcGF0dHksIHNtb2tlZCBDaGVkZGFyIGNoZWVzZSwgcmVkIG9uaW9uLCBjcmlzcHkgZnJpZWQgb25pb25zIGFuZCBzcGVjaWFsIGJ1cmdlciBzYXVjZS4gQWRkIGJhY29uXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJQSU5LIENBRVNBUiBTQUxBRFwiLFxuICAgICAgICAgICAgICAgICAgICBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQmFieSBnZW0sIGNyb3V0b25zLCB0b21hdG9lcywgUGFybWlnaWFubyBSZWdnaWFubywgY2hvcHBlZCBiZWV0cm9vdCBib2lsZWQgZWdnIGFuZCBzbW9rZWQgQ2Flc2FyIHNhbGFkIGRyZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7ICAgIFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcIkRpbm5lclwiOlxuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiSkFQQU5FU0UgS0FUU1UgQ1VSUllcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJyZWFkZWQgY2hpY2tlbiBpbiBhIGNyZWFteSBrYXRzdSBzYXVjZSwgc3ByaW5nIG9uaW9uIGFuZCBjaGlsbGkuIFNlcnZlZCB3aXRoIHZlZyBhbmQgbm9vZGxlc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiVEhBSSBEVUNLIFNUSVIgRlJZXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiMThcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTaHJlZGRlZCBkdWNrIGFuZCBub29kbGVzIHdpdGggY3Jpc3B5IG9uaW9ucywgc3dlZXQgY2hpbGxpIGphbSBhbmQgQXNpYW4gc2xhdyBpbiBhIHRlcml5YWtpIHNhdWNlLiBTd2FwIGR1Y2sgZm9yIHByYXduc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiSE9JU0lOIERVQ0sgTk9PRExFIFNBTEFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiMTdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTd2VldCBhbmQgc3RpY2t5IHNocmVkZGVkIGR1Y2ssIGNoYXJncmlsbGVkIHBpbmVhcHBsZSwgY2Fycm90cywgY3VjdW1iZXIgYW5kIHZlcm1pY2VsbGkgbm9vZGxlcyBpbiBhIHNveSBhbmQgZ2luZ2VyIGRyZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJTVEVBSyBBTkQgQ0hJUFNcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxN1wiLFxuICAgICAgICAgICAgICAgICAgICBcIjhveiBCcml0aXNoIHNpcmxvaW4gc3RlYWsgc2VydmVkIHdpdGggY2hpcG90bGUgYnV0dGVyLCBjb25maXQgdG9tYXRvZXMsIGNyaXNweSBvbmlvbnMgYW5kIGxlbW9uIGFuZCBwZXBwZXIgc2Vhc29uZWQgZnJpZXNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcIkhBTkdJTkcgS0VCQUJTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiMTdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlsbGVkIHN3aW5naW5nIGtlYmFicyBzZXJ2ZWQgd2l0aCBHcmVlayBzYWxhZCwgaHVtbXVzIGFuZCBmbGF0YnJlYWRcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcIktPUkVBTiBCQlEgQ0hJQ0tFTlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU3RpY2t5IGNyaXNweSBmcmllZCBjaGlja2VuIHdpdGggdmVybWljZWxsaSBub29kbGVzLCBncmF0ZWQgY2Fycm90cywgc2xhdyBhbmQgc3ByaW5nIG9uaW9uLlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApOyAgICBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiBtZW51U2VjdGlvblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtIChuYW1lLCBhbW91bnQsIGluZ3JlZGllbnRzKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBuYW1lXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LXByaWNlJylcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGFtb3VudFxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgY29uc3QgbWVudUluZ3JlZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJbmdyZWRpZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWluZ3JlZGllbnRcIilcbiAgICBtZW51SW5ncmVkaWVudC50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUluZ3JlZGllbnQpXG4gICAgcmV0dXJuIG1lbnVJdGVtXG59XG5cbmZ1bmN0aW9uIGxpbmVicmVhayhlbGVtZW50KSB7XG4gICAgY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIGxpbmVCcmVhay5jbGFzc0xpc3QuYWRkKFwiYnJlYWtcIilcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmVCcmVhaylcbiAgICByZXR1cm4gbGluZUJyZWFrXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbmZ1bmN0aW9uIGxvYWRQYWdlKHN0YXRlLCBtYWluKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UobWFpbilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UobWFpbilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UobWFpbilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlbG9hZC5qcydcblxuLy9pbml0IFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5tYWluLmlkID0gXCJob21lXCJcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbm1haW4uY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24td3JhcHBlclwiKVxubWFpbi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxuXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBuYXZCYXIuaWQgPSBcIm5hdmJhclwiXG4gICAgdWwuaWQgPSBcIm5hdi11bFwiXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsKVxuICAgIHVsLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiUkVTVEFVUkFOVFwiXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0XCIpXG4gICAgICAgIHN3aXRjaChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgbGkuaWQgPSBcImhvbWVcIlxuICAgICAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBsaS5pZCA9IFwibWVudVwiXG4gICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGxpLmlkID0gXCJjb250YWN0XCJcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gICAgLy9uYXYgc3BhY2VyIFxuICAgIGNvbnN0IG5hdlNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2U3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc3BhY2VyXCIpXG4gICAgbmF2U3BhY2VyLnRleHRDb250ZW50ID0gXCImbmJzcDtcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2U3BhY2VyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpc3QnKVxuICAgIHRhYi5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFuZ2UgPSB0YWIuaWRcbiAgICAgICAgICAgIHRhYlN3aXRjaChjaGFuZ2UsIG1haW4uaWQpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHRhYlN3aXRjaChjaGFuZ2UsIHN0YXRlKSB7XG4gICAgICAgIGlmIChjaGFuZ2UgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtyZW1vdmVQYWdlKCl9LCA1MDApXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge2xvYWRQYWdlKGNoYW5nZSwgbWFpbil9LCA2MDApXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge3RyYW5zaXRpb24obWFpbil9LCA2MDApXG4gICAgICAgIG1haW4uaWQgPSBjaGFuZ2VcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVBhZ2UoKSB7XG4gICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbiAgICB9XG4gICAgXG4gICAgICAgIFxufSkoKTtcblxubG9hZFBhZ2UobWFpbi5pZCwgbWFpbikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=