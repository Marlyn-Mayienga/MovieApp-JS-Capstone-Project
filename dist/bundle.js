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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n// import './style.css';\n\n\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nsetTimeout(() => {\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayLikes();\n  _modules_likes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avtivateLikeBtns();\n}, 1000);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet list = [];\nconst getData = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  list = [];\n  for (let i = 10; i < 18; i += 1) {\n    list.push(data[i]);\n  }\n};\n\nconst display = async () => {\n  const section = document.querySelector('.movies');\n  if (section.innerHTML) {\n    return;\n  }\n  if (list.length === 0) {\n    await getData();\n  }\n  list.forEach((item) => {\n    const div = document.createElement('div');\n    div.classList.add('item');\n    div.innerHTML = `\n    <img src=\"${item.image.medium}\" alt=\"${item.name}\">\n    <div class=\"item-header\">\n      <h3>${item.name}</h3>\n      <span class=\"heart\" style=\"font-size:200%; cursor:pointer;\">&hearts;</span>\n    </div>\n    <div class=\"likes\">\n      <span class=\"num\">0</span> <span>likes</span>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary btn-sm commentBtn\">Comments</button><br>\n    `;\n    section.appendChild(div);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nclass Likes {\n  constructor() {\n    this.URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XlKobHfajRmGKH27GzKm/likes';\n  }\n\n  async getLikes() {\n    const res = await fetch(this.URL);\n    const data = await res.text();\n    if (data === '') {\n      return [];\n    }\n    return JSON.parse(data);\n  }\n\n  async displayLikes() {\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const likesNum = document.querySelectorAll('.num');\n    const likes = await this.getLikes();\n    likes.forEach((ele) => {\n      likesNum[ele.item_id - 1].innerHTML = ele.likes;\n    });\n  }\n\n  async addLike(id) {\n    fetch(this.URL, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n  }\n\n  async avtivateLikeBtns() {\n    await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const likeBtns = document.querySelectorAll('.heart');\n    const likesNum = document.querySelectorAll('.num');\n    likeBtns.forEach((ele, id) => {\n      ele.addEventListener('click', () => {\n        this.addLike(id + 1);\n        likesNum[id].innerHTML = likesNum[id].innerHTML * 1 + 1;\n      });\n    });\n  }\n}\nconst likes = new Likes();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likes);\n\n//# sourceURL=webpack://movieapp-js-capstone-project/./src/modules/likes.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;