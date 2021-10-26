/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/initial.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/initial.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.context{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.header{\r\n    padding:10px;    \r\n}\r\n\r\n.main-container{\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.nav-container{\r\n    flex:2.2;\r\n}\r\n\r\n.right-container{\r\n    flex:6;\r\n}", "",{"version":3,"sources":["webpack://./src/style/initial.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,QAAQ;AACZ;;AAEA;IACI,MAAM;AACV","sourcesContent":["*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.context{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.header{\r\n    padding:10px;    \r\n}\r\n\r\n.main-container{\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.nav-container{\r\n    flex:2.2;\r\n}\r\n\r\n.right-container{\r\n    flex:6;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/modalToDo.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/modalToDo.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    \r\n    border: 1px solid #888;\r\n    width: 50%; /* Could be more or less, depending on screen size */\r\n    height: calc(50% - 4rem);\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .create-header{\r\n      display:flex;\r\n      justify-content: space-between;\r\n      padding:10px;\r\n  }\r\n  \r\n  .prior-left input[type=\"radio\"]{\r\n    position: relative;\r\n    left:2rem;\r\n    opacity: 0;\r\n    height:1px;\r\n  }\r\n  .create-form{\r\n      height: calc(100% - 3rem);\r\n      display:flex;\r\n      flex-direction: column;\r\n      gap:5px;\r\n      padding:10px;\r\n  }\r\n\r\n  .create-priority{\r\n    display: inline-block;\r\n    margin:0 1.5rem 0 -5px;\r\n    padding:0.5rem 1rem;\r\n    border-radius: 3px;\r\n    font-size: 0.8rem;    \r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .create-low{\r\n    border:1px solid green;\r\n  }\r\n\r\n  .create-low-active{\r\n    background:green;\r\n  }\r\n  .create-medium{\r\n    border:1px solid orange;\r\n  }\r\n  .create-medium-active{\r\n    background:orange;\r\n  }\r\n  .create-high{\r\n    border:1px solid red;\r\n  }\r\n  .create-high-active{\r\n    background:red;\r\n  }\r\n  .priority-container,\r\n  .date-container,\r\n  .prior-left{\r\n    display:flex;\r\n    gap:10px;\r\n    \r\n  }\r\n  .add-btn{\r\n    margin-left:auto;\r\n  }\r\n  \r\n  .create-form .details-text{\r\n    height:10rem;\r\n    margin-bottom: auto;\r\n    }\r\n  .desc-text,\r\n  .details-text{\r\n      width:100%;\r\n  };\r\n\r\n  \r\n \r\n  \r\n  \r\n  ", "",{"version":3,"sources":["webpack://./src/style/modalToDo.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;EAEA,sBAAsB;EACtB;IACE,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;;IAEpD,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;IAChE,wBAAwB;EAC1B;;EAEA,qBAAqB;EACrB;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;EAEA;MACI,YAAY;MACZ,8BAA8B;MAC9B,YAAY;EAChB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;EACZ;EACA;MACI,yBAAyB;MACzB,YAAY;MACZ,sBAAsB;MACtB,OAAO;MACP,YAAY;EAChB;;EAEA;IACE,qBAAqB;IACrB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;EAClB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,cAAc;EAChB;EACA;;;IAGE,YAAY;IACZ,QAAQ;;EAEV;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,mBAAmB;IACnB;EACF;;MAEI,UAAU;EACd,CAAA","sourcesContent":["/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    \r\n    border: 1px solid #888;\r\n    width: 50%; /* Could be more or less, depending on screen size */\r\n    height: calc(50% - 4rem);\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .create-header{\r\n      display:flex;\r\n      justify-content: space-between;\r\n      padding:10px;\r\n  }\r\n  \r\n  .prior-left input[type=\"radio\"]{\r\n    position: relative;\r\n    left:2rem;\r\n    opacity: 0;\r\n    height:1px;\r\n  }\r\n  .create-form{\r\n      height: calc(100% - 3rem);\r\n      display:flex;\r\n      flex-direction: column;\r\n      gap:5px;\r\n      padding:10px;\r\n  }\r\n\r\n  .create-priority{\r\n    display: inline-block;\r\n    margin:0 1.5rem 0 -5px;\r\n    padding:0.5rem 1rem;\r\n    border-radius: 3px;\r\n    font-size: 0.8rem;    \r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .create-low{\r\n    border:1px solid green;\r\n  }\r\n\r\n  .create-low-active{\r\n    background:green;\r\n  }\r\n  .create-medium{\r\n    border:1px solid orange;\r\n  }\r\n  .create-medium-active{\r\n    background:orange;\r\n  }\r\n  .create-high{\r\n    border:1px solid red;\r\n  }\r\n  .create-high-active{\r\n    background:red;\r\n  }\r\n  .priority-container,\r\n  .date-container,\r\n  .prior-left{\r\n    display:flex;\r\n    gap:10px;\r\n    \r\n  }\r\n  .add-btn{\r\n    margin-left:auto;\r\n  }\r\n  \r\n  .create-form .details-text{\r\n    height:10rem;\r\n    margin-bottom: auto;\r\n    }\r\n  .desc-text,\r\n  .details-text{\r\n      width:100%;\r\n  };\r\n\r\n  \r\n \r\n  \r\n  \r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/todo.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/todo.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item-div{\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n    padding:10px;\r\n    gap:10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style/todo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,QAAQ;AACZ","sourcesContent":[".item-div{\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n    padding:10px;\r\n    gap:10px;\r\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style/initial.css":
/*!*******************************!*\
  !*** ./src/style/initial.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./initial.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/initial.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/modalToDo.css":
/*!*********************************!*\
  !*** ./src/style/modalToDo.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modalToDo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modalToDo.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/modalToDo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modalToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modalToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modalToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modalToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/todo.css":
/*!****************************!*\
  !*** ./src/style/todo.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/initialLayout.js":
/*!*****************************************!*\
  !*** ./src/components/initialLayout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){
    const body=document.querySelector("body");
    const context=document.createElement("div");
    const header=document.createElement("header");
    const headerIMG=new Image();
    const mainContainer=document.createElement("div");
    const navContainer=document.createElement("div");
    const rightContainer=document.createElement("div");
   

    //textContent
   
    headerIMG.src=_images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    //classes
    context.classList.add("context");
    header.classList.add("header");
    headerIMG.classList.add("header-img");
    mainContainer.classList.add("main-container");
    navContainer.classList.add("nav-container");
  
    rightContainer.classList.add("right-container");
    
    //appending
    body.appendChild(context);
    context.append(header,mainContainer);
    header.appendChild(headerIMG);
    mainContainer.append(navContainer,rightContainer);
    
    

})());

/***/ }),

/***/ "./src/components/modalToDo.js":
/*!*************************************!*\
  !*** ./src/components/modalToDo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getModal)
/* harmony export */ });
/* harmony import */ var _style_modalToDo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/modalToDo.css */ "./src/style/modalToDo.css");


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

const makeForm=(modalContent,close,modal)=>{
    const form=document.createElement("form");
    const descText=document.createElement("textarea");
    const detailsText=document.createElement("textarea");
    const dueDateText=document.createElement("p");
    const date=document.createElement("input");
    const priorityText=document.createElement("p");
    const buttonLow=document.createElement("input");
    const labelLow=document.createElement("label");
    const buttonMedium=document.createElement("input");
    const labelMedium=document.createElement("label");
    const buttonHigh=document.createElement("input"); 
    const labelHigh=document.createElement("label");
    const createHeader=document.createElement("div");
    const createText=document.createElement("h3");
    const dateContainer=document.createElement("div");
    const priorityContainer=document.createElement("div");
    const addButton= document.createElement("button");
    const priorLeft=document.createElement("div");
    let ok=false;

    //text
    createText.textContent="Create"
    labelLow.textContent="Low";
    labelMedium.textContent="Medium";
    labelHigh.textContent="High";
    dueDateText.textContent="Due Date";
    priorityText.textContent="Priority";
    addButton.textContent="Add";

    //attribute
    descText.setAttribute("maxLength",20);
    descText.setAttribute("placeholder","Title");
    descText.setAttribute("required","");
    detailsText.setAttribute("maxLength",70);
    detailsText.setAttribute("required",'');    
    detailsText.setAttribute("placeholder","Description");
    date.setAttribute("type","date");
    buttonLow.setAttribute("type","radio");
    buttonMedium.setAttribute("type","radio");
    buttonHigh.setAttribute("type","radio");
    addButton.setAttribute("type","submit");
    setAttributes(buttonLow,{
        "id":"create-new-Low",
        "name":"create-new-priority",
        "value":"low",
        "required":""

    });
    setAttributes(buttonMedium,{
        "id":"create-new-Medium",
        "name":"create-new-priority",
        "value":"medium",
        "required":""

    });
    setAttributes(buttonHigh,{
        "id":"create-new-High",
        "name":"create-new-priority",
        "value":"high",
        "required":""

    });
    setAttributes(labelLow,{
        "for":"create-new-Low",
        "class":"create-priority create-low",

    });
    setAttributes(labelMedium,{
        "for":"create-new-Medium",
        "class":"create-priority create-medium",

    });
    setAttributes(labelHigh,{
        "for":"create-new-High",
        "class":"create-priority create-high",

    });



    //class
    createHeader.classList.add("create-header");
    form.classList.add("create-form");
    descText.classList.add("desc-text");
    detailsText.classList.add("details-text");    
    dateContainer.classList.add("date-container");
    priorLeft.classList.add("prior-left");
    addButton.classList.add("add-btn")
    
    priorityContainer.classList.add("priority-container");
    

    //append
    priorLeft.append(priorityText,buttonHigh,labelHigh,buttonMedium,labelMedium,buttonLow,labelLow);
    dateContainer.append(dueDateText,date);
    priorityContainer.append(priorLeft,addButton);

    form.append(descText,detailsText,dateContainer,priorityContainer);
    createHeader.append(createText,close);
    modalContent.append(createHeader,form);

    labelLow.addEventListener("click",function(){
        labelLow.classList.add("create-low-active");
        labelMedium.classList.remove("create-medium-active");
        labelHigh.classList.remove("create-high-active");

    });
    labelMedium.addEventListener("click",function(){
        labelMedium.classList.add("create-medium-active");
        labelLow.classList.remove("create-low-active");
        labelHigh.classList.remove("create-high-active");

    });
    labelHigh.addEventListener("click",function(){
        labelHigh.classList.add("create-high-active");
        labelMedium.classList.remove("create-medium-active");
        labelLow.classList.remove("create-low-active");

    });
    let priority;
    form.onsubmit=function(event){
        event.preventDefault();
         priority= document.querySelector( 'input[name="create-new-priority"]:checked').value;           
        ok=true;
        console.log(ok)
        return true;  
       
    }
    console.log("im out")
    if(ok){
        return {
            descText,
            detailsText,
            date,
            priority
    
        }
    }
    
}

function getModal(btn){
    //create
    const modal=document.createElement("div");
    const modalContent=document.createElement("div");
    const close=document.createElement("span");
   
    const text=document.createElement("p");
    const body=document.querySelector("body");

    text.textContent="dsfdssfdfds";
    close.innerHTML="&times";


    //class
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    close.classList.add("close");

    //append
    body.appendChild(modal);
    modal.appendChild(modalContent);
    let newObj=makeForm(modalContent,close,modal);
    console.log(newObj);

    btn.addEventListener("click", function () {
        modal.style.display = "block";
    })
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if(newObj) return newObj;
}

/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "makeProject": () => (/* binding */ makeProject)
/* harmony export */ });

const projects = [
    {
        name: "General",
        todos: [
            {
                desc: "Cook Dinner",
                prior: "high",
            },
            {
                desc: "Cook Dinner",
                prior: "high",
            },
            {
                desc: "Cook Dinner",
                prior: "high",
            },
        ]
    },
    {
        name: "Gym",
        todos: [{
            desc: "exercise",
            prior: "high"
        }]
    },
    {
        name: "Study",
        todos: [{
            desc: "studyyy",
            prior: "high"
        }]
    },
]

const makeProject=name=>{       
        return {
             name,
             todos:[]             
        }
        
};


/***/ }),

/***/ "./src/components/projectsLayout.js":
/*!******************************************!*\
  !*** ./src/components/projectsLayout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/components/projects.js");
/* harmony import */ var _toDoLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoLayout */ "./src/components/toDoLayout.js");



const displayProjects=(ul)=>{
    ul.innerHTML='';
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(proj=>{        
        let li=document.createElement("li");
        li.setAttribute("data-project",proj.name);
        li.textContent=proj.name;        
        ul.appendChild(li);     
        li.addEventListener('click',function(){
            (0,_toDoLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(proj);
        })   
    });
    
}  



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){
    //query
    const navContainer=document.querySelector(".nav-container");
    //create
    const homeText=document.createElement("h2");
    const projectText=document.createElement("h2");
    const ul=document.createElement("ul");
    const addButton=document.createElement("button");
    
    //textContent
    homeText.textContent="Home";
    projectText.textContent="Projects";
    addButton.textContent="ADD PROJECT"

    //append
    
    navContainer.append(homeText,projectText,ul);
    displayProjects(ul,addButton,navContainer);
    navContainer.appendChild(addButton);

    addButton.addEventListener("click",function(){
        let newObj=(0,_projects__WEBPACK_IMPORTED_MODULE_0__.makeProject)("XD");
        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(newObj);
        console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.projects)
        displayProjects(ul);
    });
})());

 



/***/ }),

/***/ "./src/components/toDoLayout.js":
/*!**************************************!*\
  !*** ./src/components/toDoLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoLayout)
/* harmony export */ });
/* harmony import */ var _style_todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/todo.css */ "./src/style/todo.css");
/* harmony import */ var _modalToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalToDo */ "./src/components/modalToDo.js");




const addTask=(desc, prior)=>{
    return {
        desc,
        prior
    }
}

const displayToDos=(layout,todos)=>{
   let items=document.querySelectorAll(".item-div").forEach(e => e.remove());
  
    if(todos){
        todos.forEach(item=>{
            let itemDiv=document.createElement("div");
            let itemDesc=document.createElement("p");
            let itemPrior=document.createElement("p");
            itemDesc.textContent=item.desc;
            itemPrior.textContent=item.prior;
            itemDiv.classList.add("item-div");
            itemDiv.append(itemDesc,itemPrior);
            layout.appendChild(itemDiv);
        });
    }
    
}
function toDoLayout(project){    
    
    console.log(project)
    const layout=document.querySelector(".right-container");    
    const addToDo=document.createElement("button");
    layout.innerHTML="";
    
    addToDo.textContent="ADD TODO";
    let newToDo=(0,_modalToDo__WEBPACK_IMPORTED_MODULE_1__["default"])(addToDo);
    console.log(newToDo);
    
    layout.appendChild(addToDo);
    addToDo.addEventListener("click",function(){
        project.todos.push(addTask("HEHE","HIGH"));        
        displayToDos(layout,todos);
        console.log(todos)
    })
    
    let todos=project.todos;
    displayToDos(layout,todos);
    
}



/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "995c17d9d9789fa748bf.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_initialLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initialLayout */ "./src/components/initialLayout.js");
/* harmony import */ var _components_projectsLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projectsLayout */ "./src/components/projectsLayout.js");
/* harmony import */ var _style_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/initial.css */ "./src/style/initial.css");






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUM7QUFDckM7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDaEMyQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Z1RDtBQUNFO0FBQ3pEO0FBQzBDO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZS9pbml0aWFsLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlL21vZGFsVG9Eby5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZS90b2RvLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZS9pbml0aWFsLmNzcz8wMjcwIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGUvbW9kYWxUb0RvLmNzcz85NzE2Iiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGUvdG9kby5jc3M/Y2YyYyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY29tcG9uZW50cy9pbml0aWFsTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY29tcG9uZW50cy9tb2RhbFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0c0xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9Eb0xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIHBhZGRpbmc6MTBweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4ubmF2LWNvbnRhaW5lcntcXHJcXG4gICAgZmxleDoyLjI7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXJ7XFxyXFxuICAgIGZsZXg6NjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luaXRpYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxNQUFNO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIHBhZGRpbmc6MTBweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4ubmF2LWNvbnRhaW5lcntcXHJcXG4gICAgZmxleDoyLjI7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXJ7XFxyXFxuICAgIGZsZXg6NjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICAgIFxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogNTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gNHJlbSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiAjYWFhO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZTpob3ZlcixcXHJcXG4gIC5jbG9zZTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWhlYWRlcntcXHJcXG4gICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnByaW9yLWxlZnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OjJyZW07XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGhlaWdodDoxcHg7XFxyXFxuICB9XFxyXFxuICAuY3JlYXRlLWZvcm17XFxyXFxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcmVtKTtcXHJcXG4gICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6NXB4O1xcclxcbiAgICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtcHJpb3JpdHl7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luOjAgMS41cmVtIDAgLTVweDtcXHJcXG4gICAgcGFkZGluZzowLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTsgICAgXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtbG93e1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1sb3ctYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOmdyZWVuO1xcclxcbiAgfVxcclxcbiAgLmNyZWF0ZS1tZWRpdW17XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgb3JhbmdlO1xcclxcbiAgfVxcclxcbiAgLmNyZWF0ZS1tZWRpdW0tYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXHJcXG4gIH1cXHJcXG4gIC5jcmVhdGUtaGlnaHtcXHJcXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XFxyXFxuICB9XFxyXFxuICAuY3JlYXRlLWhpZ2gtYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXHJcXG4gIH1cXHJcXG4gIC5wcmlvcml0eS1jb250YWluZXIsXFxyXFxuICAuZGF0ZS1jb250YWluZXIsXFxyXFxuICAucHJpb3ItbGVmdHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBnYXA6MTBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuYWRkLWJ0bntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1mb3JtIC5kZXRhaWxzLXRleHR7XFxyXFxuICAgIGhlaWdodDoxMHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgLmRlc2MtdGV4dCxcXHJcXG4gIC5kZXRhaWxzLXRleHR7XFxyXFxuICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gIH07XFxyXFxuXFxyXFxuICBcXHJcXG4gXFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21vZGFsVG9Eby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQzs7SUFFcEQsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7SUFDaEUsd0JBQXdCO0VBQzFCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxZQUFZO01BQ1osOEJBQThCO01BQzlCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0VBQ1o7RUFDQTtNQUNJLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLE9BQU87TUFDUCxZQUFZO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7O0lBR0UsWUFBWTtJQUNaLFFBQVE7O0VBRVY7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkI7RUFDRjs7TUFFSSxVQUFVO0VBQ2QsQ0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICAgIHdpZHRoOiA1MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxuICAgIGhlaWdodDogY2FsYyg1MCUgLSA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbiAgLmNsb3NlIHtcXHJcXG4gICAgY29sb3I6ICNhYWE7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNsb3NlOmhvdmVyLFxcclxcbiAgLmNsb3NlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtaGVhZGVye1xcclxcbiAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgcGFkZGluZzoxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucHJpb3ItbGVmdCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6MnJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgaGVpZ2h0OjFweDtcXHJcXG4gIH1cXHJcXG4gIC5jcmVhdGUtZm9ybXtcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDNyZW0pO1xcclxcbiAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDo1cHg7XFxyXFxuICAgICAgcGFkZGluZzoxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1wcmlvcml0eXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW46MCAxLjVyZW0gMCAtNXB4O1xcclxcbiAgICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtOyAgICBcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1sb3d7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWxvdy1hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxyXFxuICB9XFxyXFxuICAuY3JlYXRlLW1lZGl1bXtcXHJcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuICAuY3JlYXRlLW1lZGl1bS1hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6b3JhbmdlO1xcclxcbiAgfVxcclxcbiAgLmNyZWF0ZS1oaWdoe1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcXHJcXG4gIH1cXHJcXG4gIC5jcmVhdGUtaGlnaC1hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6cmVkO1xcclxcbiAgfVxcclxcbiAgLnByaW9yaXR5LWNvbnRhaW5lcixcXHJcXG4gIC5kYXRlLWNvbnRhaW5lcixcXHJcXG4gIC5wcmlvci1sZWZ0e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGdhcDoxMHB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hZGQtYnRue1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWZvcm0gLmRldGFpbHMtdGV4dHtcXHJcXG4gICAgaGVpZ2h0OjEwcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAuZGVzYy10ZXh0LFxcclxcbiAgLmRldGFpbHMtdGV4dHtcXHJcXG4gICAgICB3aWR0aDoxMDAlO1xcclxcbiAgfTtcXHJcXG5cXHJcXG4gIFxcclxcbiBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaXRlbS1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgZ2FwOjEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbS1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgZ2FwOjEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0aWFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5pdGlhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxUb0RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxUb0RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaGVhZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBoZWFkZXJJTUc9bmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBuYXZDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIFxyXG5cclxuICAgIC8vdGV4dENvbnRlbnRcclxuICAgXHJcbiAgICBoZWFkZXJJTUcuc3JjPWxvZ287XHJcbiAgICAvL2NsYXNzZXNcclxuICAgIGNvbnRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRleHRcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgIGhlYWRlcklNRy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWltZ1wiKTtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xyXG4gICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xyXG4gIFxyXG4gICAgcmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJpZ2h0LWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgLy9hcHBlbmRpbmdcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGV4dCk7XHJcbiAgICBjb250ZXh0LmFwcGVuZChoZWFkZXIsbWFpbkNvbnRhaW5lcik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySU1HKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKG5hdkNvbnRhaW5lcixyaWdodENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIFxyXG5cclxufSkoKTsiLCJpbXBvcnQgbW9kYWxUb0RvIGZyb20gJy4uL3N0eWxlL21vZGFsVG9Eby5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcclxuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IG1ha2VGb3JtPShtb2RhbENvbnRlbnQsY2xvc2UsbW9kYWwpPT57XHJcbiAgICBjb25zdCBmb3JtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgY29uc3QgZGVzY1RleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgY29uc3QgZGV0YWlsc1RleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgY29uc3QgZHVlRGF0ZVRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBkYXRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHByaW9yaXR5VGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbkxvdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBsYWJlbExvdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBjb25zdCBidXR0b25NZWRpdW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgbGFiZWxNZWRpdW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uSGlnaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxyXG4gICAgY29uc3QgbGFiZWxIaWdoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY3JlYXRlVGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgcHJpb3JMZWZ0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgb2s9ZmFsc2U7XHJcblxyXG4gICAgLy90ZXh0XHJcbiAgICBjcmVhdGVUZXh0LnRleHRDb250ZW50PVwiQ3JlYXRlXCJcclxuICAgIGxhYmVsTG93LnRleHRDb250ZW50PVwiTG93XCI7XHJcbiAgICBsYWJlbE1lZGl1bS50ZXh0Q29udGVudD1cIk1lZGl1bVwiO1xyXG4gICAgbGFiZWxIaWdoLnRleHRDb250ZW50PVwiSGlnaFwiO1xyXG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQ9XCJEdWUgRGF0ZVwiO1xyXG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50PVwiUHJpb3JpdHlcIjtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudD1cIkFkZFwiO1xyXG5cclxuICAgIC8vYXR0cmlidXRlXHJcbiAgICBkZXNjVGV4dC5zZXRBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIiwyMCk7XHJcbiAgICBkZXNjVGV4dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiVGl0bGVcIik7XHJcbiAgICBkZXNjVGV4dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLFwiXCIpO1xyXG4gICAgZGV0YWlsc1RleHQuc2V0QXR0cmlidXRlKFwibWF4TGVuZ3RoXCIsNzApO1xyXG4gICAgZGV0YWlsc1RleHQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwnJyk7ICAgIFxyXG4gICAgZGV0YWlsc1RleHQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIkRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgYnV0dG9uTG93LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpO1xyXG4gICAgYnV0dG9uTWVkaXVtLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpO1xyXG4gICAgYnV0dG9uSGlnaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKTtcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJzdWJtaXRcIik7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGJ1dHRvbkxvdyx7XHJcbiAgICAgICAgXCJpZFwiOlwiY3JlYXRlLW5ldy1Mb3dcIixcclxuICAgICAgICBcIm5hbWVcIjpcImNyZWF0ZS1uZXctcHJpb3JpdHlcIixcclxuICAgICAgICBcInZhbHVlXCI6XCJsb3dcIixcclxuICAgICAgICBcInJlcXVpcmVkXCI6XCJcIlxyXG5cclxuICAgIH0pO1xyXG4gICAgc2V0QXR0cmlidXRlcyhidXR0b25NZWRpdW0se1xyXG4gICAgICAgIFwiaWRcIjpcImNyZWF0ZS1uZXctTWVkaXVtXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6XCJjcmVhdGUtbmV3LXByaW9yaXR5XCIsXHJcbiAgICAgICAgXCJ2YWx1ZVwiOlwibWVkaXVtXCIsXHJcbiAgICAgICAgXCJyZXF1aXJlZFwiOlwiXCJcclxuXHJcbiAgICB9KTtcclxuICAgIHNldEF0dHJpYnV0ZXMoYnV0dG9uSGlnaCx7XHJcbiAgICAgICAgXCJpZFwiOlwiY3JlYXRlLW5ldy1IaWdoXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6XCJjcmVhdGUtbmV3LXByaW9yaXR5XCIsXHJcbiAgICAgICAgXCJ2YWx1ZVwiOlwiaGlnaFwiLFxyXG4gICAgICAgIFwicmVxdWlyZWRcIjpcIlwiXHJcblxyXG4gICAgfSk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGxhYmVsTG93LHtcclxuICAgICAgICBcImZvclwiOlwiY3JlYXRlLW5ldy1Mb3dcIixcclxuICAgICAgICBcImNsYXNzXCI6XCJjcmVhdGUtcHJpb3JpdHkgY3JlYXRlLWxvd1wiLFxyXG5cclxuICAgIH0pO1xyXG4gICAgc2V0QXR0cmlidXRlcyhsYWJlbE1lZGl1bSx7XHJcbiAgICAgICAgXCJmb3JcIjpcImNyZWF0ZS1uZXctTWVkaXVtXCIsXHJcbiAgICAgICAgXCJjbGFzc1wiOlwiY3JlYXRlLXByaW9yaXR5IGNyZWF0ZS1tZWRpdW1cIixcclxuXHJcbiAgICB9KTtcclxuICAgIHNldEF0dHJpYnV0ZXMobGFiZWxIaWdoLHtcclxuICAgICAgICBcImZvclwiOlwiY3JlYXRlLW5ldy1IaWdoXCIsXHJcbiAgICAgICAgXCJjbGFzc1wiOlwiY3JlYXRlLXByaW9yaXR5IGNyZWF0ZS1oaWdoXCIsXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL2NsYXNzXHJcbiAgICBjcmVhdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1oZWFkZXJcIik7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtZm9ybVwiKTtcclxuICAgIGRlc2NUZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXNjLXRleHRcIik7XHJcbiAgICBkZXRhaWxzVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy10ZXh0XCIpOyAgICBcclxuICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xyXG4gICAgcHJpb3JMZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlvci1sZWZ0XCIpO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpXHJcbiAgICBcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIik7XHJcbiAgICBcclxuXHJcbiAgICAvL2FwcGVuZFxyXG4gICAgcHJpb3JMZWZ0LmFwcGVuZChwcmlvcml0eVRleHQsYnV0dG9uSGlnaCxsYWJlbEhpZ2gsYnV0dG9uTWVkaXVtLGxhYmVsTWVkaXVtLGJ1dHRvbkxvdyxsYWJlbExvdyk7XHJcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZChkdWVEYXRlVGV4dCxkYXRlKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvckxlZnQsYWRkQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZChkZXNjVGV4dCxkZXRhaWxzVGV4dCxkYXRlQ29udGFpbmVyLHByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhlYWRlci5hcHBlbmQoY3JlYXRlVGV4dCxjbG9zZSk7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKGNyZWF0ZUhlYWRlcixmb3JtKTtcclxuXHJcbiAgICBsYWJlbExvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGxhYmVsTG93LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtbG93LWFjdGl2ZVwiKTtcclxuICAgICAgICBsYWJlbE1lZGl1bS5jbGFzc0xpc3QucmVtb3ZlKFwiY3JlYXRlLW1lZGl1bS1hY3RpdmVcIik7XHJcbiAgICAgICAgbGFiZWxIaWdoLmNsYXNzTGlzdC5yZW1vdmUoXCJjcmVhdGUtaGlnaC1hY3RpdmVcIik7XHJcblxyXG4gICAgfSk7XHJcbiAgICBsYWJlbE1lZGl1bS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGxhYmVsTWVkaXVtLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtbWVkaXVtLWFjdGl2ZVwiKTtcclxuICAgICAgICBsYWJlbExvdy5jbGFzc0xpc3QucmVtb3ZlKFwiY3JlYXRlLWxvdy1hY3RpdmVcIik7XHJcbiAgICAgICAgbGFiZWxIaWdoLmNsYXNzTGlzdC5yZW1vdmUoXCJjcmVhdGUtaGlnaC1hY3RpdmVcIik7XHJcblxyXG4gICAgfSk7XHJcbiAgICBsYWJlbEhpZ2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBsYWJlbEhpZ2guY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1oaWdoLWFjdGl2ZVwiKTtcclxuICAgICAgICBsYWJlbE1lZGl1bS5jbGFzc0xpc3QucmVtb3ZlKFwiY3JlYXRlLW1lZGl1bS1hY3RpdmVcIik7XHJcbiAgICAgICAgbGFiZWxMb3cuY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZS1sb3ctYWN0aXZlXCIpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IHByaW9yaXR5O1xyXG4gICAgZm9ybS5vbnN1Ym1pdD1mdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgcHJpb3JpdHk9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiY3JlYXRlLW5ldy1wcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7ICAgICAgICAgICBcclxuICAgICAgICBvaz10cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9rKVxyXG4gICAgICAgIHJldHVybiB0cnVlOyAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiaW0gb3V0XCIpXHJcbiAgICBpZihvayl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGVzY1RleHQsXHJcbiAgICAgICAgICAgIGRldGFpbHNUZXh0LFxyXG4gICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1vZGFsKGJ0bil7XHJcbiAgICAvL2NyZWF0ZVxyXG4gICAgY29uc3QgbW9kYWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2xvc2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgIFxyXG4gICAgY29uc3QgdGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gICAgdGV4dC50ZXh0Q29udGVudD1cImRzZmRzc2ZkZmRzXCI7XHJcbiAgICBjbG9zZS5pbm5lckhUTUw9XCImdGltZXNcIjtcclxuXHJcblxyXG4gICAgLy9jbGFzc1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xyXG5cclxuICAgIC8vYXBwZW5kXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgICBsZXQgbmV3T2JqPW1ha2VGb3JtKG1vZGFsQ29udGVudCxjbG9zZSxtb2RhbCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdPYmopO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KVxyXG4gICAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKG5ld09iaikgcmV0dXJuIG5ld09iajtcclxufSIsIlxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJHZW5lcmFsXCIsXHJcbiAgICAgICAgdG9kb3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzYzogXCJDb29rIERpbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgcHJpb3I6IFwiaGlnaFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkNvb2sgRGlubmVyXCIsXHJcbiAgICAgICAgICAgICAgICBwcmlvcjogXCJoaWdoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiQ29vayBEaW5uZXJcIixcclxuICAgICAgICAgICAgICAgIHByaW9yOiBcImhpZ2hcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiR3ltXCIsXHJcbiAgICAgICAgdG9kb3M6IFt7XHJcbiAgICAgICAgICAgIGRlc2M6IFwiZXhlcmNpc2VcIixcclxuICAgICAgICAgICAgcHJpb3I6IFwiaGlnaFwiXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdHVkeVwiLFxyXG4gICAgICAgIHRvZG9zOiBbe1xyXG4gICAgICAgICAgICBkZXNjOiBcInN0dWR5eXlcIixcclxuICAgICAgICAgICAgcHJpb3I6IFwiaGlnaFwiXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCAgY29uc3QgbWFrZVByb2plY3Q9bmFtZT0+eyAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgIHRvZG9zOltdICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxufTtcclxuIiwiaW1wb3J0IHtwcm9qZWN0cyxtYWtlUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB0b0RvTGF5b3V0IGZyb20gJy4vdG9Eb0xheW91dCc7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHM9KHVsKT0+e1xyXG4gICAgdWwuaW5uZXJIVE1MPScnO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qPT57ICAgICAgICBcclxuICAgICAgICBsZXQgbGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLHByb2oubmFtZSk7XHJcbiAgICAgICAgbGkudGV4dENvbnRlbnQ9cHJvai5uYW1lOyAgICAgICAgXHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpOyAgICAgXHJcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRvRG9MYXlvdXQocHJvaik7XHJcbiAgICAgICAgfSkgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbn0gIFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKXtcclxuICAgIC8vcXVlcnlcclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIik7XHJcbiAgICAvL2NyZWF0ZVxyXG4gICAgY29uc3QgaG9tZVRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdFRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgdWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBcclxuICAgIC8vdGV4dENvbnRlbnRcclxuICAgIGhvbWVUZXh0LnRleHRDb250ZW50PVwiSG9tZVwiO1xyXG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQ9XCJQcm9qZWN0c1wiO1xyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50PVwiQUREIFBST0pFQ1RcIlxyXG5cclxuICAgIC8vYXBwZW5kXHJcbiAgICBcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmQoaG9tZVRleHQscHJvamVjdFRleHQsdWwpO1xyXG4gICAgZGlzcGxheVByb2plY3RzKHVsLGFkZEJ1dHRvbixuYXZDb250YWluZXIpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IG5ld09iaj1tYWtlUHJvamVjdChcIlhEXCIpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3T2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHModWwpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG4gXHJcblxyXG4iLCJpbXBvcnQgdG9kbyBmcm9tICcuLi9zdHlsZS90b2RvLmNzcyc7XHJcbmltcG9ydCBtb2RhbFRvRG8gZnJvbSAnLi9tb2RhbFRvRG8nO1xyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2s9KGRlc2MsIHByaW9yKT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIHByaW9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlUb0Rvcz0obGF5b3V0LHRvZG9zKT0+e1xyXG4gICBsZXQgaXRlbXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWRpdlwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XHJcbiAgXHJcbiAgICBpZih0b2Rvcyl7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGxldCBpdGVtRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBpdGVtRGVzYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Qcmlvcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQ9aXRlbS5kZXNjO1xyXG4gICAgICAgICAgICBpdGVtUHJpb3IudGV4dENvbnRlbnQ9aXRlbS5wcmlvcjtcclxuICAgICAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kaXZcIik7XHJcbiAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kKGl0ZW1EZXNjLGl0ZW1Qcmlvcik7XHJcbiAgICAgICAgICAgIGxheW91dC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9MYXlvdXQocHJvamVjdCl7ICAgIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG4gICAgY29uc3QgbGF5b3V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtY29udGFpbmVyXCIpOyAgICBcclxuICAgIGNvbnN0IGFkZFRvRG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxheW91dC5pbm5lckhUTUw9XCJcIjtcclxuICAgIFxyXG4gICAgYWRkVG9Eby50ZXh0Q29udGVudD1cIkFERCBUT0RPXCI7XHJcbiAgICBsZXQgbmV3VG9Ebz1tb2RhbFRvRG8oYWRkVG9Ebyk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdUb0RvKTtcclxuICAgIFxyXG4gICAgbGF5b3V0LmFwcGVuZENoaWxkKGFkZFRvRG8pO1xyXG4gICAgYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIHByb2plY3QudG9kb3MucHVzaChhZGRUYXNrKFwiSEVIRVwiLFwiSElHSFwiKSk7ICAgICAgICBcclxuICAgICAgICBkaXNwbGF5VG9Eb3MobGF5b3V0LHRvZG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGxldCB0b2Rvcz1wcm9qZWN0LnRvZG9zO1xyXG4gICAgZGlzcGxheVRvRG9zKGxheW91dCx0b2Rvcyk7XHJcbiAgICBcclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW5pdGlhbExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL2luaXRpYWxMYXlvdXRcIjtcclxuaW1wb3J0IHByb2plY3RzTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHNMYXlvdXRcIjtcclxuXHJcbmltcG9ydCBpbml0aWFsIGZyb20gJy4vc3R5bGUvaW5pdGlhbC5jc3MnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9