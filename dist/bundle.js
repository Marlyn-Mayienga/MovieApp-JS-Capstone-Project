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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  background-color: #ab9e13;\\r\\n  font-size: 14px;\\r\\n  padding: 2% 0;\\r\\n}\\r\\n\\r\\n.headerContent {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  width: 100%;\\r\\n  color: #9d1818;\\r\\n  font-size: 2vw;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: left;\\r\\n  padding: 2%;\\r\\n  font-size: 40px;\\r\\n  color: #f55531;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: black;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  padding: 3px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  color: red;\\r\\n  font-size: 200%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.movie-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding-bottom: 5%;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr repeat(3, 1fr);\\r\\n  gap: 3%;\\r\\n}\\r\\n\\r\\n.filmBoxing {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 0;\\r\\n}\\r\\n\\r\\n.filmTitle,\\r\\n.like,\\r\\n.likes {\\r\\n  margin-top: -7%;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin-top: -7%;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.innerContent {\\r\\n  position: fixed;\\r\\n  display: block;\\r\\n  top: 7vh;\\r\\n  bottom: 3vh;\\r\\n  left: 10vw;\\r\\n  right: 3vw;\\r\\n  padding: 2%;\\r\\n  background: #562e11;\\r\\n  flex-direction: column;\\r\\n  border-radius: 15px;\\r\\n  color: #dfdfdf;\\r\\n  height: 80vh;\\r\\n  width: 80%;\\r\\n  z-index: 30;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.innerContent img {\\r\\n  display: flex;\\r\\n  height: 60vh;\\r\\n  width: auto;\\r\\n  flex-shrink: 0;\\r\\n  margin: 5vh 20px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.commentPop {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.greyblackScreen {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  background: rgba(6, 1, 1, 0.53);\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  z-index: 4;\\r\\n}\\r\\n\\r\\n.Xmark {\\r\\n  font-size: xx-large;\\r\\n  margin: 1%;\\r\\n  padding: 0.2% 0.2%;\\r\\n}\\r\\n\\r\\n.img-info-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5%;\\r\\n}\\r\\n\\r\\n.data {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 7%;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#user_name,\\r\\n#user_comment {\\r\\n  height: 50px;\\r\\n  margin-top: 5%;\\r\\n  font-size: 20px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#submitBtn {\\r\\n  align-self: flex-end;\\r\\n  margin-top: 5%;\\r\\n  width: 30%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_pageAndLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageAndLikes.js */ \"./src/modules/pageAndLikes.js\");\n/* harmony import */ var _modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/COMMENT.js */ \"./src/modules/COMMENT.js\");\n\n\n\n\n(0,_modules_pageAndLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_COMMENT_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/COMMENT.js":
/*!********************************!*\
  !*** ./src/modules/COMMENT.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pageAndLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageAndLikes.js */ \"./src/modules/pageAndLikes.js\");\n\n\nlet list = [];\nconst getData = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  list = [];\n  for (let i = 10; i < 18; i += 1) {\n    list.push(data[i]);\n  }\n};\n\nconst commentPopups = async () => {\n  await getData();\n  await (0,_pageAndLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const popupContent = document.querySelector('.commentPop');\n  const commentBtns = document.querySelectorAll('.comment-btn');\n  const greyScreen = document.querySelector('.greyblackScreen');\n\n  commentBtns.forEach((btn, id) => {\n    btn.addEventListener('click', () => {\n      greyScreen.classList.add('greyblackScreen');\n      greyScreen.style.display = 'block';\n      popupContent.style.display = 'block';\n\n      popupContent.innerHTML = `\n          <div class=\"innerContent\">\n          <div class=\"button-container\"> \n          <button type=\"button\" class=\"Xmark\" >&#10008;</button></div>\n          <div class=\"img-info-container\">\n           <div class=\"img-container\"><img src=\"${list[id].image.original}\" alt=\"\"/></div>\n           <div class=\"info\"> \n              <h2 class=\"film-title\">${list[id].name}</h2>\n              <div class=\"data\">\n                <div>\n                  <p>Genres : ${list[id].genres}</p>\n                  <p>Premiered: ${list[id].premiered}</p>\n                </div>\n                <div>\n                  <p>Runtime : ${list[id].runtime}</p>\n                  <p>Rating : ${list[id].rating.average}</p>\n                </div>\n              </div>\n             <div>\n                <h2 class=\"comment-list\">Comments <span class=\"count\"></span> </h2>\n                <div class=\"allComments\"></div>\n              </div>\n                <h2 class=\"add-comment\">Add comment</h2>\n                <form class=\"form1\" id=\"${id}\"  action=\"#\"> \n                <input  id=\"user_name\"  type=\"text\" required placeholder=\" Your Name\">   \n                <textarea id=\"user_comment\" required  placeholder=\" Kindly add a comment...\" ></textarea>\n                 <button type=\"submit\"> Comment </button> \n                 </form> \n                </div>\n            </div>\n      </div>\n        `;\n\n      const Xmark = document.querySelectorAll('.Xmark');\n      Xmark.forEach((X) => {\n        X.addEventListener('click', () => {\n          popupContent.style.display = 'none';\n          greyScreen.classList.remove('greyblackScreen');\n          greyScreen.style.display = 'none';\n        });\n      });\n\n      const form = document.querySelector('form');\n      const formId = form.getAttribute('id');\n\n      /* eslint-disable */ \n      getComment(`'${formId}'`);\n\n      form.addEventListener('submit', (e) => {\n        /* eslint-disable */ \n        const userName = document.getElementById('user_name').value;\n        const user_comment = document.getElementById('user_comment').value;\n        postComment(`'${formId}'`, `${userName}`, `'${user_comment}'`);\n\n        const commentData = document.querySelector('.allComments');\n        const eachComment = document.createElement('p');\n        eachComment.classList.add('eachComment');\n\n        function convertDate(date) {\n          const dd = date.getDate().toString();\n          const mm = (date.getMonth() + 1).toString();\n          const yyyy = date.getFullYear().toString();\n          const ddChars = dd.split('');\n          const mmChars = mm.split('');\n          return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${ddChars[1] ? dd : `0${ddChars[0]}`}`;\n        }\n        /* eslint-disable */ \n        const todaysDate = new Date();\n        const currentDate = convertDate(todaysDate);\n        eachComment.innerText = `${currentDate} - ${userName} : ${user_comment}`;\n        commentData.appendChild(eachComment);\n\n        const allComments = document.getElementsByClassName('eachComment');\n        const count = allComments.length;\n        const countComments = document.getElementsByClassName('count');\n        countComments[0].innerText = `(${count})`;\n\n        document.getElementById('user_name').value = '';\n        document.getElementById('user_comment').value = '';\n        e.preventDefault();\n      });\n    });\n\n    const postComment = (itemId, username, comment) => {\n      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2yjaO516ihOM58A91oBf/comments', {\n        method: 'POST',\n        headers: { 'Content-type': 'application/json' },\n        body: JSON.stringify({ item_id: itemId, username, comment }),\n      })\n        .then((res) => res.ok)\n        .then((data) => (data));\n    };\n\n    const APIurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n    const appKey = '2yjaO516ihOM58A91oBf';\n\n    const getComment = (itemId) => {\n      fetch(`${APIurl}/${appKey}/comments?item_id=${itemId}`)\n        .then((res) => res.json())\n        .then((data) => {\n          for (let i = 0; i < data.length; i += 1) {\n            const commentData = document.querySelector('.allComments');\n            const eachComment = document.createElement('p');\n            eachComment.classList.add('eachComment');\n            eachComment.innerText = `${data[i].creation_date} - ${data[i].username} : ${data[i].comment}`;\n            commentData.appendChild(eachComment);\n          }\n          const allComments = document.getElementsByClassName('eachComment');\n          const count = allComments.length;\n          const countComments = document.getElementsByClassName('count');\n          countComments[0].innerText = `(${count})`;\n        });\n    };\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopups);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/COMMENT.js?");

/***/ }),

/***/ "./src/modules/pageAndLikes.js":
/*!*************************************!*\
  !*** ./src/modules/pageAndLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filmList = [];\nconst getfilm = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  for (let i = 10; i < 18; i += 1) {\n    filmList.push(data[i]);\n  }\n};\nconst showFilms = async (films = filmList) => {\n  const allFilms = document.querySelector('.movies');\n  // getting likes Data\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C8E5YouAo1932pr87RVL/likes');\n  const res = await response.json();\n  // creating each Film and Uploading its contents on the main page\n  films.forEach((film, id) => {\n    const filmBox = document.createElement('div');\n    filmBox.classList.add('filmBoxing');\n\n    filmBox.innerHTML = `\n       <img src=\"${film.image.medium}\" alt=\"${film.name}\"><br>\n       <h2 class=\"filmTitle\">${film.name}</h2><br>\n       <i class=\"fas fa-heart like\"></i><br>\n       <div class=\"likes\"> <span class=\"num-of-likes\">${res[id].likes}</span> likes</div><br>\n       <button type=\"button\" class=\"comment-btn\">comment</button> `;\n    allFilms.append(filmBox);\n\n    // adding like\n    const likeBtns = document.querySelectorAll('.like');\n    likeBtns.forEach((postLike, ID) => {\n      postLike.addEventListener('click', async () => {\n        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C8E5YouAo1932pr87RVL/likes',\n          {\n            method: 'POST',\n            body: JSON.stringify({ item_id: ID }),\n            headers: { 'Content-type': 'application/json; charset=UTF-8' },\n          });\n        /* eslint-disable */ \n        location.reload();\n      });\n    });\n  });\n  await getfilm();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showFilms);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/pageAndLikes.js?");

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