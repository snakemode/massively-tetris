var lib =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/client.ts":
/*!******************************!*\
  !*** ./src/public/client.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetris_1 = __webpack_require__(/*! ../tetris/Tetris */ \"./src/tetris/Tetris.ts\");\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nconsole.log(\"Hello from client side TypeScript\");\nvar world = document.getElementById(\"world\");\nfunction renderWorld(game) {\n    for (var _i = 0, _a = game.Worlds; _i < _a.length; _i++) {\n        var world_1 = _a[_i];\n    }\n}\nvar game;\nfunction start() {\n    game = new Tetris_1.Tetris();\n    var playerId = util_1.uuidv4();\n    game.addPlayer(playerId);\n    game.start();\n    setInterval(function () {\n        renderWorld(game);\n    }, 33);\n}\nstart();\n\n\n//# sourceURL=webpack://lib/./src/public/client.ts?");

/***/ }),

/***/ "./src/tetris/Tetris.ts":
/*!******************************!*\
  !*** ./src/tetris/Tetris.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetris = /** @class */ (function () {\n    function Tetris() {\n        this.Worlds = [];\n    }\n    Tetris.prototype.addPlayer = function (playerId) {\n        var newWorld = new World(playerId);\n        this.Worlds.push(newWorld);\n    };\n    Tetris.prototype.start = function () {\n        setInterval(function (game) {\n            game.tick();\n        }, 1000, this);\n    };\n    Tetris.prototype.tick = function () {\n    };\n    return Tetris;\n}());\nexports.Tetris = Tetris;\nvar World = /** @class */ (function () {\n    function World(playerId, width, height) {\n        if (width === void 0) { width = 10; }\n        if (height === void 0) { height = 22; }\n        this.playerId = playerId;\n        this.width = width;\n        this.height = height;\n    }\n    return World;\n}());\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetris.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction uuidv4() {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\n        return v.toString(16);\n    });\n}\nexports.uuidv4 = uuidv4;\n\n\n//# sourceURL=webpack://lib/./src/util.ts?");

/***/ })

/******/ });