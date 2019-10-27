/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ImageObserver.js":
/*!******************************!*\
  !*** ./src/ImageObserver.js ***!
  \******************************/
/*! exports provided: imageObserverSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageObserverSingleton\", function() { return imageObserverSingleton; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _templates_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/data */ \"./src/templates/data.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ImageObserver =\n/*#__PURE__*/\nfunction () {\n  function ImageObserver() {\n    _classCallCheck(this, ImageObserver);\n\n    this.images;\n    this.imageObserver;\n    this.options = {\n      root: null,\n      rootMargin: '0px',\n      threshold: 0.2 // In Edge the threshold is evaluated like 0 and fires when the intersectionRatio is 0.0, why?\n\n    };\n\n    if (_helpers__WEBPACK_IMPORTED_MODULE_0__[\"browserSupportsIntersectionObserver\"]) {\n      window.addEventListener('load', this.onLoaded.bind(this), false); // 'load', to be sure the CSS has been loaded, for the images width and height\n    }\n  }\n\n  _createClass(ImageObserver, [{\n    key: \"createObserver\",\n    value: function createObserver(options) {\n      var _this = this;\n\n      this.imageObserver = new IntersectionObserver(this.onIntersectionEvent, options);\n      this.images.forEach(function (image) {\n        _this.imageObserver.observe(image);\n      });\n    }\n  }, {\n    key: \"onLoaded\",\n    value: function onLoaded() {\n      this.images = document.querySelectorAll('.lazy-image');\n      this.createObserver(this.options);\n    }\n  }, {\n    key: \"onIntersectionEvent\",\n    value: function onIntersectionEvent(images, imageObserver) {\n      // Loop through the images\n      images.forEach(function (entry) {\n        // Is the image in viewport?\n        if (entry.isIntersecting) {\n          // Load the image and stop watching. The image is accessible in entry.target\n          console.log(entry);\n          var image = entry.target;\n          image.src = image.dataset.src;\n          image.alt = image.dataset.alt;\n          image.title = image.dataset.title;\n          image.classList.add('fade-in'); // Because of 'this', imageObserver must be fed as arg to parent function\n\n          imageObserver.unobserve(entry.target);\n          Object(_templates_data__WEBPACK_IMPORTED_MODULE_1__[\"oneImageHasBeenLoaded\"])();\n        }\n      });\n    }\n  }]);\n\n  return ImageObserver;\n}();\n\nvar imageObserverSingleton = new ImageObserver();\n\n//# sourceURL=webpack:///./src/ImageObserver.js?");

/***/ }),

/***/ "./src/OutlineHandler.js":
/*!*******************************!*\
  !*** ./src/OutlineHandler.js ***!
  \*******************************/
/*! exports provided: outlineHandlerSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"outlineHandlerSingleton\", function() { return outlineHandlerSingleton; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar OutlineHandler =\n/*#__PURE__*/\nfunction () {\n  function OutlineHandler() {\n    _classCallCheck(this, OutlineHandler);\n\n    // Compatibility - *if* device has certain GlobalEventHandler, then set a specific event listener\n    if ('onkeydown' in window) {\n      //console.log('Window has onkeydown');\n      window.addEventListener('keydown', this.userIsTabbing.bind(this), false);\n    }\n\n    if ('onmousedown' in window) {\n      //console.log('Window has onmousedown');\n      window.addEventListener('mousedown', this.userIsClicking.bind(this), false);\n    }\n  }\n\n  _createClass(OutlineHandler, [{\n    key: \"userIsTabbing\",\n    value: function userIsTabbing(e) {\n      // If the pressed key is the tab key, and, if there isn't a classname of 'user-is-tabbing' in the body, then, insert that classname\n      if (e.keyCode === 9 && !document.body.classList.contains('user-is-tabbing')) {\n        document.body.classList.add('user-is-tabbing');\n      }\n    }\n  }, {\n    key: \"userIsClicking\",\n    value: function userIsClicking() {\n      // If there's a classname of 'user-is-tabbing' in the body, then, delete that classname\n      if (document.body.classList.contains('user-is-tabbing')) {\n        document.body.classList.remove('user-is-tabbing');\n      }\n    }\n  }]);\n\n  return OutlineHandler;\n}();\n\nvar outlineHandlerSingleton = new OutlineHandler();\n\n//# sourceURL=webpack:///./src/OutlineHandler.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: tinyTransparentGif, browserSupportsIntersectionObserver, getShuffledEntriesIntoArray, counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tinyTransparentGif\", function() { return tinyTransparentGif; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"browserSupportsIntersectionObserver\", function() { return browserSupportsIntersectionObserver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getShuffledEntriesIntoArray\", function() { return getShuffledEntriesIntoArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.shuffle */ \"./node_modules/lodash.shuffle/index.js\");\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n/** Constants */\n\nvar tinyTransparentGif = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';\nvar browserSupportsIntersectionObserver = 'IntersectionObserver' in window;\n/** getShuffledEntriesIntoArray\r\n *  - Returns the given array or a new array,\r\n *  - with the requested ammount of entries (the given number is shuffled).\r\n *  - The injected new entries will have the type of numbers\r\n*/\n\nvar getShuffledEntriesIntoArray = function getShuffledEntriesIntoArray(numberOfWantedEntries) {\n  var arrayToPopulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var temporaryArray = [];\n\n  for (var i = 1; i <= numberOfWantedEntries; i++) {\n    temporaryArray.push(i);\n  }\n\n  var newShuffledEntries = lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default()(temporaryArray);\n  return [].concat(_toConsumableArray(arrayToPopulate), _toConsumableArray(newShuffledEntries));\n};\n/** counter\r\n *  - Adds the first argument to the second argument\r\n *  - Returns a number\r\n */\n\nvar counter = function counter() {\n  var numberToAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var variableToStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return variableToStore + numberToAdd;\n};\n;\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/view */ \"./src/templates/view.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageObserver */ \"./src/ImageObserver.js\");\n/* harmony import */ var _OutlineHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutlineHandler */ \"./src/OutlineHandler.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n //Polyfill needs to be called in order to make scrollTo.behavior work in all browsers\n\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.polyfill(); // Insert sections in the DOM\n\ndocument.getElementById('app').insertAdjacentHTML('afterbegin', _templates_view__WEBPACK_IMPORTED_MODULE_0__[\"HTMLString\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/templates/aboutSection.js":
/*!***************************************!*\
  !*** ./src/templates/aboutSection.js ***!
  \***************************************/
/*! exports provided: aboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutSection\", function() { return aboutSection; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\nvar aboutSection = \"\\n  <section class='about' role='contentinfo' aria-label='About the project'>\\n    \".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"browserSupportsIntersectionObserver\"] ? \"<p class='about-description'>\\n          This page lazy-loads the images. Each Image will load when 20 % of the image height has entered the viewport.\\n        </p>\" : \"<p class='about-description--error'>\\n          The browser you're using doesn't support IntersectionObserver :(\\n        </p>\", \"\\n  </section>\");\n\n//# sourceURL=webpack:///./src/templates/aboutSection.js?");

/***/ }),

/***/ "./src/templates/data.js":
/*!*******************************!*\
  !*** ./src/templates/data.js ***!
  \*******************************/
/*! exports provided: oneImageHasBeenLoaded, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oneImageHasBeenLoaded\", function() { return oneImageHasBeenLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\nvar counterForImageLoader = 0;\nvar oneImageHasBeenLoaded = function oneImageHasBeenLoaded() {\n  counterForImageLoader = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"counter\"])(1, counterForImageLoader);\n  document.querySelector('.image-count').innerHTML = counterForImageLoader;\n};\nvar data = \"\\n  <div class='data'>\\n    Images loaded: <span class='image-count'>0</span>\\n  </div>\\n\";\n\n//# sourceURL=webpack:///./src/templates/data.js?");

/***/ }),

/***/ "./src/templates/header.js":
/*!*********************************!*\
  !*** ./src/templates/header.js ***!
  \*********************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\nvar header = \"\\n  <header class='header'>\\n    <h1>Blazingly Fast</h1>\\n  </header>\\n\";\n\n//# sourceURL=webpack:///./src/templates/header.js?");

/***/ }),

/***/ "./src/templates/imageSection.js":
/*!***************************************!*\
  !*** ./src/templates/imageSection.js ***!
  \***************************************/
/*! exports provided: imageSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageSection\", function() { return imageSection; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\nvar arrayOfImageNames = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getShuffledEntriesIntoArray\"])(20, undefined);\nvar imageElements = arrayOfImageNames.map(function (element) {\n  return \"\\n  <img\\n    src=\".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"browserSupportsIntersectionObserver\"] ? _helpers__WEBPACK_IMPORTED_MODULE_0__[\"tinyTransparentGif\"] : \"assets/\".concat(element, \".jpg\"), \"\\n    class='lazy-image'\\n    data-src='assets/\").concat(element, \".jpg'\\n    data-alt='Random photo'\\n    data-title='Random photo'>\\n\");\n}).join('');\nvar imageSection = \"\\n  <section class='image-section' role='contentinfo' aria-label='Section with photos'>\\n    \".concat(imageElements, \"\\n  </section>\\n\");\n\n//# sourceURL=webpack:///./src/templates/imageSection.js?");

/***/ }),

/***/ "./src/templates/scrollToTopBtn.js":
/*!*****************************************!*\
  !*** ./src/templates/scrollToTopBtn.js ***!
  \*****************************************/
/*! exports provided: scrollToTopBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToTopBtn\", function() { return scrollToTopBtn; });\nvar scrollToTopBtn = \"\\n  <button class='scroll-to-top'>\\n    <svg\\n      fill=\\\"white\\\"\\n      xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n      width=\\\"30\\\" height=\\\"30\\\"\\n      viewBox=\\\"0 0 24 24\\\">\\n      <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0V0z\\\"/>\\n      <path d=\\\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\\\"/>\\n    </svg>\\n  </button>\\n\"; // The scroll-to-top button will be targeted after the DOM has loaded the elements (but before it has fully loaded the CSS and JS)\n\nvar targetScrollToTopBtn = null; // Scroll to top functionality\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  targetScrollToTopBtn = document.querySelector('.scroll-to-top');\n  targetScrollToTopBtn.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      left: 0,\n      behavior: 'smooth'\n    });\n  });\n}); // Class toggeling for the animation\n\nwindow.addEventListener('scroll', function () {\n  if (window.pageYOffset > 300) {\n    if (!targetScrollToTopBtn.classList.contains('btn-entrance')) {\n      targetScrollToTopBtn.classList.remove('btn-exit');\n      targetScrollToTopBtn.classList.add('btn-entrance');\n      targetScrollToTopBtn.style.display = 'block';\n    }\n  } else {\n    if (targetScrollToTopBtn.classList.contains('btn-entrance')) {\n      targetScrollToTopBtn.classList.remove('btn-entrance');\n      targetScrollToTopBtn.classList.add('btn-exit');\n      this.setTimeout(function () {\n        targetScrollToTopBtn.style.display = 'none';\n      }, 250); // The timer needed in order to see the animation,\n      // but is also a risk: if user makes many fast scrolls in the intersection, the element will then have the class \"btn-entrance\" at the same time as styling 'display:none'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/templates/scrollToTopBtn.js?");

/***/ }),

/***/ "./src/templates/view.js":
/*!*******************************!*\
  !*** ./src/templates/view.js ***!
  \*******************************/
/*! exports provided: HTMLString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLString\", function() { return HTMLString; });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/templates/header.js\");\n/* harmony import */ var _aboutSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutSection */ \"./src/templates/aboutSection.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/templates/data.js\");\n/* harmony import */ var _imageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageSection */ \"./src/templates/imageSection.js\");\n/* harmony import */ var _scrollToTopBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollToTopBtn */ \"./src/templates/scrollToTopBtn.js\");\n\n\n\n\n // Add all the template literals into one string\n\nvar HTMLString = _header__WEBPACK_IMPORTED_MODULE_0__[\"header\"] + _aboutSection__WEBPACK_IMPORTED_MODULE_1__[\"aboutSection\"] + _data__WEBPACK_IMPORTED_MODULE_2__[\"data\"] + _imageSection__WEBPACK_IMPORTED_MODULE_3__[\"imageSection\"] + _scrollToTopBtn__WEBPACK_IMPORTED_MODULE_4__[\"scrollToTopBtn\"];\n\n//# sourceURL=webpack:///./src/templates/view.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ })

/******/ });