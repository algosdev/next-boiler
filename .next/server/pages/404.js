module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/seo.jsx":
/*!****************************!*\
  !*** ./components/seo.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/algo/repos/survey/components/seo.jsx\";\n\nfunction SEO({\n  title,\n  description,\n  image,\n  keywords\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      charSet: \"utf-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title ? `${title} | MacBro` : `MacBro`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"keywords\",\n      content: keywords\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"apple-touch-icon\",\n      sizes: \"180x180\",\n      href: \"/apple-touch-icon.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      sizes: \"32x32\",\n      href: \"/favicon-32x32.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      sizes: \"192x192\",\n      href: \"/android-chrome-192x192.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      sizes: \"16x16\",\n      href: \"/favicon-16x16.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"mask-icon\",\n      href: \"/safari-pinned-tab.svg\",\n      color: \"#1d1d1d\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"msapplication-TileColor\",\n      content: \"#2d89ef\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"msapplication-TileImage\",\n      content: \"/mstile-144x144.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:type\",\n      content: \"website\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:title\",\n      content: title ? `${title} | MacBro` : `MacBro`\n    }, 'ogtitle', false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"theme-color\",\n      content: \"#1d1d1d\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:description\",\n      content: description\n    }, 'ogdesc', false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:site_name\",\n      content: \"MacBro\"\n    }, 'ogsitename', false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"manifest\",\n      href: \"/manifest.json\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:card\",\n      content: \"summary\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:title\",\n      content: title ? `${title} | MacBro` : `MacBro`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:site\",\n      content: \"MacBro\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:creator\",\n      content: \"DeveloperBoy\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nlby5qc3g/YmFhMyJdLCJuYW1lcyI6WyJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJrZXl3b3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxPQUFGO0FBQVNDLGFBQVQ7QUFBc0JDLE9BQXRCO0FBQTZCQztBQUE3QixDQUFiLEVBQXNEO0FBQ25FLHNCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUFRSCxLQUFLLEdBQUksR0FBRUEsS0FBTSxXQUFaLEdBQTBCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFFQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBRUU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFDRSxTQUFHLEVBQUMsa0JBRE47QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLFVBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVdFO0FBQ0UsU0FBRyxFQUFDLE1BRE47QUFFRSxVQUFJLEVBQUMsV0FGUDtBQUdFLFdBQUssRUFBQyxPQUhSO0FBSUUsVUFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBaUJFO0FBQ0UsU0FBRyxFQUFDLE1BRE47QUFFRSxVQUFJLEVBQUMsV0FGUDtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsVUFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixlQXVCRTtBQUNFLFNBQUcsRUFBQyxNQUROO0FBRUUsVUFBSSxFQUFDLFdBRlA7QUFHRSxXQUFLLEVBQUMsT0FIUjtBQUlFLFVBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsZUE2QkU7QUFBTSxTQUFHLEVBQUMsV0FBVjtBQUFzQixVQUFJLEVBQUMsd0JBQTNCO0FBQW9ELFdBQUssRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGLGVBOEJFO0FBQU0sVUFBSSxFQUFDLHlCQUFYO0FBQXFDLGFBQU8sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGLGVBK0JFO0FBQU0sVUFBSSxFQUFDLHlCQUFYO0FBQXFDLGFBQU8sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGLGVBZ0NFO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0YsZUFpQ0U7QUFDRSxjQUFRLEVBQUMsVUFEWDtBQUVFLGFBQU8sRUFBRUgsS0FBSyxHQUFJLEdBQUVBLEtBQU0sV0FBWixHQUEwQjtBQUYxQyxPQUdNLFNBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRixlQXNDRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGLGVBdUNFO0FBQU0sY0FBUSxFQUFDLGdCQUFmO0FBQWdDLGFBQU8sRUFBRUM7QUFBekMsT0FBMEQsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRixlQXdDRTtBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBQztBQUF0QyxPQUFtRCxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENGLGVBeUNFO0FBQU0sU0FBRyxFQUFDLFVBQVY7QUFBcUIsVUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0YsZUEwQ0U7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixhQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRixlQTJDRTtBQUNFLFVBQUksRUFBQyxlQURQO0FBRUUsYUFBTyxFQUFFRCxLQUFLLEdBQUksR0FBRUEsS0FBTSxXQUFaLEdBQTBCO0FBRjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0YsZUErQ0U7QUFBTSxVQUFJLEVBQUMscUJBQVg7QUFBaUMsYUFBTyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NGLGVBZ0RFO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsYUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREYsZUFpREU7QUFBTSxVQUFJLEVBQUMsaUJBQVg7QUFBNkIsYUFBTyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Nlby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBrZXl3b3JkcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDx0aXRsZT57dGl0bGUgPyBgJHt0aXRsZX0gfCBNYWNCcm9gIDogYE1hY0Jyb2B9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PXtrZXl3b3Jkc30gLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD0nYXBwbGUtdG91Y2gtaWNvbidcbiAgICAgICAgc2l6ZXM9JzE4MHgxODAnXG4gICAgICAgIGhyZWY9Jy9hcHBsZS10b3VjaC1pY29uLnBuZydcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9J2ljb24nXG4gICAgICAgIHR5cGU9J2ltYWdlL3BuZydcbiAgICAgICAgc2l6ZXM9JzMyeDMyJ1xuICAgICAgICBocmVmPScvZmF2aWNvbi0zMngzMi5wbmcnXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPSdpY29uJ1xuICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAgIHNpemVzPScxOTJ4MTkyJ1xuICAgICAgICBocmVmPScvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPSdpY29uJ1xuICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAgIHNpemVzPScxNngxNidcbiAgICAgICAgaHJlZj0nL2Zhdmljb24tMTZ4MTYucG5nJ1xuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD0nbWFzay1pY29uJyBocmVmPScvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyBjb2xvcj0nIzFkMWQxZCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMmQ4OWVmJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnIGNvbnRlbnQ9Jy9tc3RpbGUtMTQ0eDE0NC5wbmcnIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcbiAgICAgICAgY29udGVudD17dGl0bGUgPyBgJHt0aXRsZX0gfCBNYWNCcm9gIDogYE1hY0Jyb2B9XG4gICAgICAgIGtleT0nb2d0aXRsZSdcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nIzFkMWQxZCcgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IGtleT0nb2dkZXNjJyAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD0nTWFjQnJvJyBrZXk9J29nc2l0ZW5hbWUnIC8+XG4gICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvbWFuaWZlc3QuanNvbicgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6Y2FyZCcgY29udGVudD0nc3VtbWFyeScgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9J3R3aXR0ZXI6dGl0bGUnXG4gICAgICAgIGNvbnRlbnQ9e3RpdGxlID8gYCR7dGl0bGV9IHwgTWFjQnJvYCA6IGBNYWNCcm9gfVxuICAgICAgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgbmFtZT0ndHdpdHRlcjpzaXRlJyBjb250ZW50PSdNYWNCcm8nIC8+XG4gICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNyZWF0b3InIGNvbnRlbnQ9J0RldmVsb3BlckJveScgLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/seo.jsx\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst nextI18n = new NextI18Next({\n  defaultLanguage: 'ru',\n  otherLanguages: ['uz', 'en'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});\nmodule.exports = nextI18n;\nexports.i18n = nextI18n.i18n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJuZXh0STE4biIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaTE4biJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFxQkYsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCQyxPQUF2QixHQUFpQ0UsbUJBQTVEOztBQUNBLE1BQU1DLElBQUksR0FBR0osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQSxNQUFNSyxRQUFRLEdBQUcsSUFBSU4sV0FBSixDQUFnQjtBQUMvQk8saUJBQWUsRUFBRSxJQURjO0FBRS9CQyxnQkFBYyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGZTtBQUcvQkwsZ0JBSCtCO0FBSS9CTSxZQUFVLEVBQUVKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLHlCQUFiO0FBSm1CLENBQWhCLENBQWpCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sUUFBakI7QUFDQU0sT0FBTyxDQUFDQyxJQUFSLEdBQWVQLFFBQVEsQ0FBQ08sSUFBeEIiLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XG5jb25zdCB7IGxvY2FsZVN1YnBhdGhzIH0gPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbmNvbnN0IG5leHRJMThuID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAncnUnLFxuICBvdGhlckxhbmd1YWdlczogWyd1eicsICdlbiddLFxuICBsb2NhbGVTdWJwYXRocyxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpLFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBuZXh0STE4blxuZXhwb3J0cy5pMThuID0gbmV4dEkxOG4uaTE4blxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ \"./components/seo.jsx\");\n\n\nvar _jsxFileName = \"/home/algo/repos/survey/pages/404.js\";\n\n\n\n\nfunction Page404() {\n  const {\n    t\n  } = Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: t('seo.not_found')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: t('to-main-page')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page404);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQuanM/YjhkYyJdLCJuYW1lcyI6WyJQYWdlNDA0IiwidCIsInVzZVRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFFBQU07QUFBRUM7QUFBRixNQUFRQyw0REFBYyxFQUE1QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBSyxXQUFLLEVBQUVELENBQUMsQ0FBQyxlQUFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsMENBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUEsa0JBQUlBLENBQUMsQ0FBQyxjQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBUUQ7O0FBQ2NELHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvNDA0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuaW1wb3J0IFNFTyBmcm9tICcuLi9jb21wb25lbnRzL3NlbydcbmZ1bmN0aW9uIFBhZ2U0MDQoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPIHRpdGxlPXt0KCdzZW8ubm90X2ZvdW5kJyl9IC8+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGE+e3QoJ3RvLW1haW4tcGFnZScpfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZTQwNFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });