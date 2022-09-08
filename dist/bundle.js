/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n  background-position-y: 100%;\\r\\n  background-attachment: fixed;\\r\\n  background-size: cover;\\r\\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  background-color: #ab9e13;\\r\\n  filter: drop-shadow(0 0 10px) opacity(0.9);\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 5px 0;\\r\\n  max-width: 1200px;\\r\\n  color: #9d1818;\\r\\n  gap: 100px;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.header-container > * {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.header-container > *:hover {\\r\\n  transform: scale(1.05);\\r\\n  filter: drop-shadow(0 0 5px #f55531);\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  z-index: 10;\\r\\n  width: 120px;\\r\\n  filter: drop-shadow(0 0 6px #fff704);\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: left;\\r\\n  padding: 2%;\\r\\n  font-size: 40px;\\r\\n  color: #f55531;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: black;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  padding: 3px !important;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr repeat(3, 1fr);\\r\\n}\\r\\n\\r\\n.series {\\r\\n  text-align: center;\\r\\n  width: auto;\\r\\n  max-width: 1200px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  margin: 50px auto;\\r\\n  column-gap: 100px;\\r\\n  row-gap: 70px;\\r\\n}\\r\\n\\r\\n.movie-container {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.button-container {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  font-size: xx-large;\\r\\n  margin: 1%;\\r\\n  padding: 0.5%;\\r\\n}\\r\\n\\r\\n.mod {\\r\\n  position: fixed;\\r\\n  z-index: 100;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 0 15px #e2cfd2;\\r\\n  color: #e2cfd2;\\r\\n  height: 90vh;\\r\\n  top: 5vh;\\r\\n  bottom: 5vh;\\r\\n  left: 10vw;\\r\\n  right: 10vw;\\r\\n  min-width: 750px;\\r\\n  background: #562e11;\\r\\n  flex-direction: column;\\r\\n  overflow-y: scroll;\\r\\n  overflow-x: auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.mod img {\\r\\n  display: flex;\\r\\n  height: 80vh;\\r\\n  width: auto;\\r\\n  flex-shrink: 0;\\r\\n  margin: 5vh 20px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.activate-popup {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  background: #000;\\r\\n  opacity: 0.7;\\r\\n  z-index: 25;\\r\\n}\\r\\n\\r\\n.img-info-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5%;\\r\\n}\\r\\n\\r\\n.data {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 7%;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.commentForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.username,\\r\\n.comment {\\r\\n  height: 50px;\\r\\n  margin-top: 5%;\\r\\n  font-size: 20px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.submitBtn {\\r\\n  align-self: flex-end;\\r\\n  margin-top: 5%;\\r\\n  width: 30%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/COMMENT.js */ \"./src/modules/COMMENT.js\");\n\r\n\r\n\r\n\r\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nsetTimeout(() => {\r\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayLikes();\r\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].avtivateLikeBtns();\r\n}, 1000);\r\n\r\n\r\n(0,_modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/COMMENT.js":
/*!********************************!*\
  !*** ./src/modules/COMMENT.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\r\n\r\nlet list = [];\r\nconst getData = async () => {\r\n  const res = await fetch('https://api.tvmaze.com/shows');\r\n  const data = await res.json();\r\n  list = [];\r\n  for (let i = 10; i < 18; i += 1) {\r\n    list.push(data[i]);\r\n  }\r\n};\r\n\r\nconst commentPopups = async () => {\r\n  await getData();\r\n  await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const popupContent = document.querySelector('.commentPop');\r\n  const commentBtns = document.querySelectorAll('.commentBtn');\r\n  const greypopup = document.querySelector('.popup');\r\n\r\n  commentBtns.forEach((btn, id) => {\r\n    btn.addEventListener('click', () => {\r\n      greypopup.classList.add('activate-popup');\r\n      document.body.style.overflow = 'hidden';\r\n\r\n      popupContent.innerHTML = `\r\n          <div class=\"mod active\">\r\n          <div class=\"button-container\"> \r\n          <button type=\"button\" class=\"closeBtn\" >&#10008;</button></div>\r\n          <div class=\"img-info-container\">\r\n           <div class=\"img-container\"><img src=\"${list[id].image.original}\" alt=\"\"/></div>\r\n           <div class=\"info\"> \r\n              <h2 class=\"film-title\">${list[id].name}</h2>\r\n              <div class=\"data\">\r\n                <div>\r\n                  <p>Genres : ${list[id].genres}</p>\r\n                  <p>Premiered: ${list[id].premiered}</p>\r\n                </div>\r\n                <div>\r\n                  <p>Runtime : ${list[id].runtime}</p>\r\n                  <p>Rating : ${list[id].rating.average}</p>\r\n                </div>\r\n              </div>\r\n  \r\n             <div>\r\n                <h2 class=\"comment-list\">Comments</h2>\r\n                <div class=\"allComments\"></div>\r\n              </div>\r\n  \r\n                <h2 class=\"add-comment\">Add comment</h2>\r\n                <div class=\"commentForm\">\r\n                <input type=\"text\" class=\"username\" placeholder=\"Your name\"/>\r\n                <input type=\"textarea\" class=\"comment\" placeholder=\"Add Your comment\"/>\r\n                <button type=\"submit\" class=\"submitBtn\">Submit</button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n      </div>\r\n        `;\r\n\r\n      const closeButtons = document.querySelectorAll('.closeBtn');\r\n      const removebtn = document.querySelectorAll('.mod');\r\n\r\n      closeButtons.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n          removebtn.forEach((btn) => {\r\n            btn.classList.remove('active');\r\n          });\r\n          document.body.style.overflow = 'auto';\r\n          greypopup.classList.remove('activate-popup');\r\n        });\r\n      });\r\n\r\n      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n      const key = '2yjaO516ihOM58A91oBf';\r\n      const submitBtn = document.querySelector('.submitBtn');\r\n      submitBtn.addEventListener('click', () => {\r\n        // eslint-disable-next-line camelcase\r\n        const item_id = id;\r\n        const usernameInput = document.querySelector('.username');\r\n        const commentInput = document.querySelector('.comment');\r\n        const username = usernameInput.value;\r\n        const comment = commentInput.value;\r\n        const dataToSend = JSON.stringify({ item_id, username, comment });\r\n        async function postData(url = '', data = {}) {\r\n          const response = await fetch(url, {\r\n            method: 'POST',\r\n            headers: {\r\n              'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n            body: data,\r\n          });\r\n          /* eslint-disable */\r\n          getcommentData();\r\n          const count = document.querySelectorAll('.left');\r\n          const total = count.length;\r\n          const counter = document.querySelector('.comment-list');\r\n          counter.innerHTML = `Comments (${total + 1})`;\r\n          return response;\r\n        }\r\n\r\n        postData(`${url}${key}/comments`, dataToSend)\r\n          .then((json) => {\r\n            // eslint-disable-next-line no-unused-expressions\r\n            json;\r\n          })\r\n          .catch((err) => {\r\n            // eslint-disable-next-line no-unused-expressions\r\n            err;\r\n          });\r\n        usernameInput.value = '';\r\n        commentInput.value = '';\r\n      });\r\n\r\n      async function getData(url = '') {\r\n        const response = await fetch(url, {\r\n          method: 'GET',\r\n          mode: 'cors',\r\n          cache: 'no-cache',\r\n          credentials: 'same-origin',\r\n          redirect: 'follow',\r\n          referrerPolicy: 'no-referrer',\r\n        });\r\n        return response;\r\n      }\r\n      const allComments = document.querySelector('.allComments');\r\n\r\n      const getcommentData = () => {\r\n        getData(`${url}${key}/comments?item_id=${id}`).then(async (res) => {\r\n          const array = await res.json();\r\n          return array;\r\n        })\r\n          .then((array) => {\r\n            if (array.length > 0) {\r\n              const getting = array\r\n                .map((items) => `\r\n                  <div class=\"left\">\r\n                    <p class=\"eachScore\">${items.creation_date} <span>${items.username}:</span>\r\n                    <span class=\"numberSc\">${items.comment}</span></p>\r\n                  </div>`)\r\n                .join(' ');\r\n              allComments.innerHTML = getting;\r\n            // eslint-disable-next-line no-empty\r\n            } else {\r\n            }\r\n          });\r\n      };\r\n      getcommentData();\r\n\r\n      setTimeout(() => {\r\n        const count = document.querySelectorAll('.left');\r\n        const total = count.length;\r\n        const counter = document.querySelector('.comment-list');\r\n        counter.innerHTML = `Comments (${total})`;\r\n      }, 2000);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopups);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/COMMENT.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet list = [];\r\nconst getData = async () => {\r\n  const res = await fetch('https://api.tvmaze.com/shows');\r\n  const data = await res.json();\r\n  list = [];\r\n  for (let i = 10; i < 18; i += 1) {\r\n    list.push(data[i]);\r\n  }\r\n};\r\n\r\nconst display = async () => {\r\n  const section = document.querySelector('.movies');\r\n  if (section.innerHTML) {\r\n    return;\r\n  }\r\n  if (list.length === 0) {\r\n    await getData();\r\n  }\r\n  list.forEach((item) => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('item');\r\n    div.innerHTML = `\r\n    <img src=\"${item.image.medium}\" alt=\"${item.name}\">\r\n    <div class=\"item-header\">\r\n      <h3>${item.name}</h3>\r\n      <span class=\"heart\" style=\"font-size:100%; cursor:pointer;\"><i class=\"fas fa-heart\"></i></span>\r\n      <div class=\"likes\">\r\n      <span class=\"num\">0</span> <span>likes</span>\r\n    </div>\r\n    </div>\r\n    \r\n    <button type=\"button\" class=\"btn btn-primary btn-sm commentBtn\">Comments</button><br>\r\n    `;\r\n    section.appendChild(div);\r\n  });\r\n  const Films = document.querySelector('.Films');\r\n  Films.innerHTML = `Films (${section.childElementCount})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\r\n\r\nclass Likes {\r\n  constructor() {\r\n    this.URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XlKobHfajRmGKH27GzKm/likes';\r\n  }\r\n\r\n  async getLikes() {\r\n    const res = await fetch(this.URL);\r\n    const data = await res.text();\r\n    if (data === '') {\r\n      return [];\r\n    }\r\n    return JSON.parse(data);\r\n  }\r\n\r\n  async displayLikes() {\r\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const likesNum = document.querySelectorAll('.num');\r\n    const likes = await this.getLikes();\r\n    likes.forEach((ele) => {\r\n      likesNum[ele.item_id - 1].innerHTML = ele.likes;\r\n    });\r\n  }\r\n\r\n  async addLike(id) {\r\n    fetch(this.URL, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n  }\r\n\r\n  async avtivateLikeBtns() {\r\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const likeBtns = document.querySelectorAll('.heart');\r\n    const likesNum = document.querySelectorAll('.num');\r\n    likeBtns.forEach((ele, id) => {\r\n      ele.addEventListener('click', () => {\r\n        this.addLike(id + 1);\r\n        likesNum[id].innerHTML = likesNum[id].innerHTML * 1 + 1;\r\n      });\r\n    });\r\n  }\r\n}\r\nconst likes = new Likes();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likes);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/likes.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;