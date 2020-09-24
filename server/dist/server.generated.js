module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/moviesController.js":
/*!*********************************************!*\
  !*** ./src/controllers/moviesController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ \"./src/utils/functions.js\");\n\n //utils \n\nconst readMoviesJson = func => fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(process.cwd() + \"/movies.json\", 'utf8', func);\n\nconst handleError = res => res.status('400').json({\n  error: \"Something went wrong finding the movies.\"\n});\n\nconst findMovie = ({\n  results\n}, id) => results.find(movie => movie.id === parseInt(id)); //validate params\n\n\nconst validateMovieId = (req, res, next, id) => {\n  if (Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__[\"isNotNull\"])(id) && Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__[\"isNotNaN\"])(id)) {\n    next();\n    return;\n  }\n\n  return res.status(400).json({\n    error: \"Search not valid\"\n  });\n};\n\nconst validateBody = (req, res, next) => {\n  body(\"cast\").isString().isLength({\n    min: 3,\n    max: 150\n  });\n  body(\"cast\").isString().isLength({\n    min: 3,\n    max: 150\n  });\n}; //controller methods \n\n\nconst getMovies = async (req, res) => {\n  readMoviesJson((err, data) => {\n    if (err) {\n      return handleError(res);\n    }\n\n    return res.status(200).json({\n      movies: JSON.parse(data)\n    });\n  });\n};\n\nconst showMovie = async (req, res) => {\n  readMoviesJson((err, data) => {\n    if (!err) {\n      const movie = findMovie(JSON.parse(data), req.params.movieId);\n\n      if (!movie) {\n        return handleError(res);\n      }\n\n      return res.status(200).json({\n        movie\n      });\n    }\n\n    return handleError(res);\n  });\n};\n\nconst editMovie = async (req, res) => {\n  readMoviesJson((err, data) => {\n    if (!err) {\n      let movies = JSON.parse(data);\n      let movie = findMovie(movies, req.params.movieId);\n      let index = movies.results.findIndex(movie => movie.id === req.params.movieId);\n\n      if (!movie) {\n        return handleError(res);\n      }\n\n      movie = { ...movie,\n        title: req.body.title,\n        details: [{\n          cast: req.body.cast || \"\",\n          director: req.body.director,\n          storyline: req.body.director || \"\"\n        }, ...movie.details.slice(1)],\n        images: [{\n          url: req.body.url\n        }, ...movie.images.slice(1)],\n        videos: [{\n          url: req.body.trailer\n        }, ...movie.videos]\n      };\n      movies.results = [...movies.results.slice(0, index), movie, ...movies.results.slice(index + 1)];\n      fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(`./files/${Date.now()}.txt`, movies, 'utf8', function (err) {\n        if (err) return console.log(err);\n      });\n      return res.status(200).json({\n        movie\n      });\n    }\n\n    return handleError(res);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getMovies,\n  showMovie,\n  editMovie,\n  validateMovieId\n});\n\n//# sourceURL=webpack:///./src/controllers/moviesController.js?");

/***/ }),

/***/ "./src/routes/movies.routes.js":
/*!*************************************!*\
  !*** ./src/routes/movies.routes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_moviesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/moviesController */ \"./src/controllers/moviesController.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/movies').get(_controllers_moviesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMovies);\nrouter.route('/movies/:movieId').get(_controllers_moviesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showMovie).put(_controllers_moviesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editMovie);\nrouter.param('movieId', _controllers_moviesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateMovieId);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/movies.routes.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_movies_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/movies.routes */ \"./src/routes/movies.routes.js\");\n/* harmony import */ var express_throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-throttle */ \"express-throttle\");\n/* harmony import */ var express_throttle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_throttle__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst PORT = \"1337\";\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express_throttle__WEBPACK_IMPORTED_MODULE_6___default()({\n  \"burst\": 10,\n  \"rate\": \"5/s\"\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use('/', _routes_movies_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.listen(PORT, err => {\n  if (err) console.log(\"error\", err);\n  console.log(`> Running on localhost:${PORT}`);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! exports provided: isNotNull, isNotNaN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNotNull\", function() { return isNotNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNotNaN\", function() { return isNotNaN; });\nconst isNotNull = it => it !== undefined && it !== null;\nconst isNotNaN = it => !isNaN(parseInt(it));\n\n//# sourceURL=webpack:///./src/utils/functions.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /mnt/c/Users/samue/Documents/apache/bp-test/server/src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-throttle":
/*!***********************************!*\
  !*** external "express-throttle" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-throttle\");\n\n//# sourceURL=webpack:///external_%22express-throttle%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ })

/******/ });