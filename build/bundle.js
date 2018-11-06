/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n\treturn _react2.default.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\t\"This is dell lee 12!\"\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t\"button\",\n\t\t\t{ onClick: function onClick() {\n\t\t\t\t\talert(\"click\");\n\t\t\t\t} },\n\t\t\t\"click\"\n\t\t)\n\t);\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Home = __webpack_require__(/*! ../containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\nvar content = (0, _server.renderToString)(_react2.default.createElement(_Home2.default, null));\napp.get('/', function (req, res) {\n  return res.send('\\n<!DOCTYPE html>\\n<html lang=\"en\">\\n  <head>\\n    <meta charset=\"utf-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\\n    <meta name=\"theme-color\" content=\"#000000\">\\n    <meta name=\"description\" content=\"\\u7B80\\u4E66\\u662F\\u4E00\\u4E2A\\u4F18\\u8D28\\u7684\\u521B\\u4F5C\\u793E\\u533A\\uFF0C\\u5728\\u8FD9\\u91CC\\uFF0C\\u4F60\\u53EF\\u4EE5\\u4EFB\\u6027\\u5730\\u521B\\u4F5C\\uFF0C\\u4E00\\u7BC7\\u77ED\\u6587\\u3001\\u4E00\\u5F20\\u7167\\u7247\\u3001\\u4E00\\u9996\\u8BD7\\u3001\\u4E00\\u5E45\\u753B\\u2026\\u2026\\u6211\\u4EEC\\u76F8\\u4FE1\\uFF0C\\u6BCF\\u4E2A\\u4EBA\\u90FD\\u662F\\u751F\\u6D3B\\u4E2D\\u7684\\u827A\\u672F\\u5BB6\\uFF0C\\u6709\\u7740\\u65E0\\u7A77\\u7684\\u521B\\u9020\\u529B\\u3002\">\\n    <meta name=\"keywords\" content=\"\\u7B80\\u4E66,\\u7B80\\u4E66\\u5B98\\u7F51,\\u56FE\\u6587\\u7F16\\u8F91\\u8F6F\\u4EF6,\\u7B80\\u4E66\\u4E0B\\u8F7D,\\u56FE\\u6587\\u521B\\u4F5C,\\u521B\\u4F5C\\u8F6F\\u4EF6,\\u539F\\u521B\\u793E\\u533A,\\u5C0F\\u8BF4,\\u6563\\u6587,\\u5199\\u4F5C,\\u9605\\u8BFB\">\\n    <title>React - \\u521B\\u4F5C\\u4F60\\u7684\\u521B\\u4F5C</title>\\n  </head>\\n  <body>\\n    <noscript>\\n      You need to enable JavaScript to run this app.\\n    </noscript>\\n    \\n    <div id=\"root\">' + content + '</div>\\n    <script src=\\'/index.js\\'></script>   \\n  </body>\\n</html>\\n\\n    ');\n});\n\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });