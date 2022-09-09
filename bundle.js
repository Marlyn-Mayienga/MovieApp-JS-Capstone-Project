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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: bisque;\\n  background-position-y: 100%;\\n  background-attachment: fixed;\\n  background-size: cover;\\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\\n}\\n\\nheader {\\n  width: 100%;\\n  background-color: #ab9e13;\\n  filter: drop-shadow(0 0 10px) opacity(0.9);\\n  font-size: 16px;\\n}\\n\\n.header-container {\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 5px 0;\\n  max-width: 1200px;\\n  color: #9d1818;\\n  gap: 100px;\\n  font-size: 24px;\\n}\\n\\n.header-container > * {\\n  cursor: pointer;\\n}\\n\\n.header-container > *:hover {\\n  transform: scale(1.05);\\n  filter: drop-shadow(0 0 5px #f55531);\\n}\\n\\nheader img {\\n  z-index: 10;\\n  width: 120px;\\n  filter: drop-shadow(0 0 6px #fff704);\\n}\\n\\nh2 {\\n  text-align: left;\\n  padding: 2%;\\n  font-size: 40px;\\n  color: #f55531;\\n}\\n\\nfooter {\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  padding: 3px !important;\\n}\\n\\n.movies {\\n  display: grid;\\n  grid-template-columns: 1fr repeat(3, 1fr);\\n}\\n\\n.series {\\n  text-align: center;\\n  width: auto;\\n  max-width: 1200px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  margin: 50px auto;\\n  column-gap: 100px;\\n  row-gap: 70px;\\n}\\n\\n.movie-container {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.item {\\n  padding: 10px;\\n}\\n\\n.button-container {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.closeBtn {\\n  font-size: xx-large;\\n  margin: 1%;\\n  padding: 0.5%;\\n}\\n\\n.mod {\\n  position: fixed;\\n  z-index: 100;\\n  border-radius: 10px;\\n  box-shadow: 0 0 15px #e2cfd2;\\n  color: #e2cfd2;\\n  height: 90vh;\\n  top: 5vh;\\n  bottom: 5vh;\\n  left: 10vw;\\n  right: 10vw;\\n  min-width: 750px;\\n  background: #562e11;\\n  flex-direction: column;\\n  overflow-y: scroll;\\n  overflow-x: auto;\\n  display: none;\\n}\\n\\n.mod img {\\n  display: flex;\\n  height: 80vh;\\n  width: auto;\\n  flex-shrink: 0;\\n  margin: 5vh 20px;\\n  border-radius: 20px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.active {\\n  display: flex;\\n}\\n\\n.activate-popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  background: #000;\\n  opacity: 0.7;\\n  z-index: 25;\\n}\\n\\n.img-info-container {\\n  display: flex;\\n  justify-content: center;\\n  gap: 5%;\\n}\\n\\n.data {\\n  display: flex;\\n  justify-content: center;\\n  gap: 7%;\\n}\\n\\n.comment-list {\\n  text-align: center;\\n}\\n\\n.add-comment {\\n  text-align: center;\\n}\\n\\n.commentForm {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.username,\\n.comment {\\n  height: 50px;\\n  margin-top: 5%;\\n  font-size: 20px;\\n  outline: none;\\n}\\n\\n.submitBtn {\\n  align-self: flex-end;\\n  margin-top: 5%;\\n  width: 30%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/COMMENT.js */ \"./src/modules/COMMENT.js\");\n\n\n\n\n\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nsetTimeout(() => {\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayLikes();\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].avtivateLikeBtns();\n}, 1000);\n(0,_modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/COMMENT.js":
/*!********************************!*\
  !*** ./src/modules/COMMENT.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nlet list = [];\nconst getData = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  list = [];\n  for (let i = 10; i < 18; i += 1) {\n    list.push(data[i]);\n  }\n};\n\nconst commentPopups = async () => {\n  await getData();\n  await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const popupContent = document.querySelector('.commentPop');\n  const commentBtns = document.querySelectorAll('.commentBtn');\n  const greypopup = document.querySelector('.popup');\n\n  commentBtns.forEach((btn, id) => {\n    btn.addEventListener('click', () => {\n      greypopup.classList.add('activate-popup');\n      document.body.style.overflow = 'hidden';\n\n      popupContent.innerHTML = `\n          <div class=\"mod active\">\n          <div class=\"button-container\"> \n          <button type=\"button\" class=\"closeBtn\" >&#10008;</button></div>\n          <div class=\"img-info-container\">\n           <div class=\"img-container\"><img src=\"${list[id].image.original}\" alt=\"\"/></div>\n           <div class=\"info\"> \n              <h2 class=\"film-title\">${list[id].name}</h2>\n              <div class=\"data\">\n                <div>\n                  <p>Genres : ${list[id].genres}</p>\n                  <p>Premiered: ${list[id].premiered}</p>\n                </div>\n                <div>\n                  <p>Runtime : ${list[id].runtime}</p>\n                  <p>Rating : ${list[id].rating.average}</p>\n                </div>\n              </div>\n  \n             <div>\n                <h2 class=\"comment-list\">Comments</h2>\n                <div class=\"allComments\"></div>\n              </div>\n  \n                <h2 class=\"add-comment\">Add comment</h2>\n                <div class=\"commentForm\">\n                <input type=\"text\" class=\"username\" placeholder=\"Your name\"/>\n                <input type=\"textarea\" class=\"comment\" placeholder=\"Add Your comment\"/>\n                <button type=\"submit\" class=\"submitBtn\">Submit</button>\n                </div>\n                </div>\n            </div>\n      </div>\n        `;\n\n      const closeButtons = document.querySelectorAll('.closeBtn');\n      const removebtn = document.querySelectorAll('.mod');\n\n      closeButtons.forEach((btn) => {\n        btn.addEventListener('click', () => {\n          removebtn.forEach((btn) => {\n            btn.classList.remove('active');\n          });\n          document.body.style.overflow = 'auto';\n          greypopup.classList.remove('activate-popup');\n        });\n      });\n\n      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n      const key = '2yjaO516ihOM58A91oBf';\n      const submitBtn = document.querySelector('.submitBtn');\n      submitBtn.addEventListener('click', () => {\n        // eslint-disable-next-line camelcase\n        const item_id = id;\n        const usernameInput = document.querySelector('.username');\n        const commentInput = document.querySelector('.comment');\n        const username = usernameInput.value;\n        const comment = commentInput.value;\n        const dataToSend = JSON.stringify({ item_id, username, comment });\n        async function postData(url = '', data = {}) {\n          const response = await fetch(url, {\n            method: 'POST',\n            headers: {\n              'Content-type': 'application/json; charset=UTF-8',\n            },\n            body: data,\n          });\n          /* eslint-disable */\n          getcommentData();\n          const count = document.querySelectorAll('.left');\n          const total = count.length;\n          const counter = document.querySelector('.comment-list');\n          counter.innerHTML = `Comments (${total + 1})`;\n          return response;\n        }\n\n        postData(`${url}${key}/comments`, dataToSend)\n          .then((json) => {\n            // eslint-disable-next-line no-unused-expressions\n            json;\n          })\n          .catch((err) => {\n            // eslint-disable-next-line no-unused-expressions\n            err;\n          });\n        usernameInput.value = '';\n        commentInput.value = '';\n      });\n\n      async function getData(url = '') {\n        const response = await fetch(url, {\n          method: 'GET',\n          mode: 'cors',\n          cache: 'no-cache',\n          credentials: 'same-origin',\n          redirect: 'follow',\n          referrerPolicy: 'no-referrer',\n        });\n        return response;\n      }\n      const allComments = document.querySelector('.allComments');\n\n      const getcommentData = () => {\n        getData(`${url}${key}/comments?item_id=${id}`).then(async (res) => {\n          const array = await res.json();\n          return array;\n        })\n          .then((array) => {\n            if (array.length > 0) {\n              const getting = array\n                .map((items) => `\n                  <div class=\"left\">\n                    <p class=\"eachScore\">${items.creation_date} <span>${items.username}:</span>\n                    <span class=\"numberSc\">${items.comment}</span></p>\n                  </div>`)\n                .join(' ');\n              allComments.innerHTML = getting;\n            // eslint-disable-next-line no-empty\n            } else {\n            }\n          });\n      };\n      getcommentData();\n\n      setTimeout(() => {\n        const count = document.querySelectorAll('.left');\n        const total = count.length;\n        const counter = document.querySelector('.comment-list');\n        counter.innerHTML = `Comments (${total})`;\n      }, 2000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopups);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/COMMENT.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet list = [];\nconst getData = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  list = [];\n  for (let i = 10; i < 18; i += 1) {\n    list.push(data[i]);\n  }\n};\n\nconst display = async () => {\n  const section = document.querySelector('.movies');\n  if (section.innerHTML) {\n    return;\n  }\n  if (list.length === 0) {\n    await getData();\n  }\n  list.forEach((item) => {\n    const div = document.createElement('div');\n    div.classList.add('item');\n    div.innerHTML = `\n    <img src=\"${item.image.medium}\" alt=\"${item.name}\">\n    <div class=\"item-header\">\n      <h3>${item.name}</h3>\n      <span class=\"heart\" style=\"font-size:100%; cursor:pointer;\"><i class=\"fas fa-heart\"></i></span>\n      <div class=\"likes\">\n      <span class=\"num\">0</span> <span>likes</span>\n    </div>\n    </div>\n    \n    <button type=\"button\" class=\"btn btn-primary btn-sm commentBtn\">Comments</button><br>\n    `;\n    section.appendChild(div);\n  });\n  const Films = document.querySelector('.Films');\n  Films.innerHTML = `Films (${section.childElementCount})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nclass Likes {\n  constructor() {\n    this.URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMc7L9k7LNIsae8S9uHs/likes';\n  }\n\n  async getLikes() {\n    const res = await fetch(this.URL);\n    const data = await res.text();\n    if (data === '') {\n      return [];\n    }\n    return JSON.parse(data);\n  }\n\n  async displayLikes() {\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const likesNum = document.querySelectorAll('.num');\n    const likes = await this.getLikes();\n    likes.forEach((ele) => {\n      likesNum[ele.item_id - 1].innerHTML = ele.likes;\n    });\n  }\n\n  async addLike(id) {\n    fetch(this.URL, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n  }\n\n  async avtivateLikeBtns() {\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const likeBtns = document.querySelectorAll('.heart');\n    const likesNum = document.querySelectorAll('.num');\n    likeBtns.forEach((ele, id) => {\n      ele.addEventListener('click', () => {\n        this.addLike(id + 1);\n        likesNum[id].innerHTML = likesNum[id].innerHTML * 1 + 1;\n      });\n    });\n  }\n}\nconst likes = new Likes();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likes);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/likes.js?");

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