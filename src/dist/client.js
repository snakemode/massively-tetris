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
eval("\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetris_1 = __webpack_require__(/*! ../tetris/Tetris */ \"./src/tetris/Tetris.ts\");\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nconsole.log(\"Hello from client side TypeScript\");\nvar world = document.getElementById(\"world\");\nfunction renderWorld(game) {\n    var e_1, _a, e_2, _b;\n    try {\n        for (var _c = __values(game.Worlds), _d = _c.next(); !_d.done; _d = _c.next()) {\n            var world_1 = _d.value;\n            try {\n                for (var _e = (e_2 = void 0, __values(world_1.Cells())), _f = _e.next(); !_f.done; _f = _e.next()) {\n                    var cell = _f.value;\n                    //console.log(cell);\n                }\n            }\n            catch (e_2_1) { e_2 = { error: e_2_1 }; }\n            finally {\n                try {\n                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);\n                }\n                finally { if (e_2) throw e_2.error; }\n            }\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n}\nvar game;\nfunction start() {\n    game = new Tetris_1.Tetris();\n    var playerId = util_1.uuidv4();\n    game.addPlayer(playerId);\n    game.start();\n    setInterval(function () {\n        renderWorld(game);\n    }, 33);\n}\nstart();\n\n\n//# sourceURL=webpack://lib/./src/public/client.ts?");

/***/ }),

/***/ "./src/tetris/Tetris.ts":
/*!******************************!*\
  !*** ./src/tetris/Tetris.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetris = /** @class */ (function () {\n    function Tetris() {\n        this.Worlds = [];\n    }\n    Tetris.prototype.addPlayer = function (playerId) {\n        var newWorld = new World(playerId);\n        this.Worlds.push(newWorld);\n    };\n    Tetris.prototype.start = function () {\n        setInterval(function (game) {\n            game.tick();\n        }, 1000, this);\n    };\n    Tetris.prototype.tick = function () {\n    };\n    return Tetris;\n}());\nexports.Tetris = Tetris;\nvar World = /** @class */ (function () {\n    function World(playerId, width, height) {\n        if (width === void 0) { width = 10; }\n        if (height === void 0) { height = 22; }\n        this.playerId = playerId;\n        this.width = width;\n        this.height = height;\n        this.occupiedLocations = [];\n    }\n    World.prototype.Cells = function () {\n        var _loop_1, this_1, y;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    console.log(\"Hi cells\");\n                    _loop_1 = function (y) {\n                        var _loop_2, x;\n                        return __generator(this, function (_a) {\n                            switch (_a.label) {\n                                case 0:\n                                    _loop_2 = function (x) {\n                                        var occupied, obj;\n                                        return __generator(this, function (_a) {\n                                            switch (_a.label) {\n                                                case 0:\n                                                    occupied = this_1.occupiedLocations.filter(function (l) { return l.x === x && l.y === y; }).length > 0;\n                                                    obj = { x: x, y: y, occupied: occupied };\n                                                    return [4 /*yield*/, obj];\n                                                case 1:\n                                                    _a.sent();\n                                                    return [2 /*return*/];\n                                            }\n                                        });\n                                    };\n                                    x = 0;\n                                    _a.label = 1;\n                                case 1:\n                                    if (!(x < this_1.width)) return [3 /*break*/, 4];\n                                    return [5 /*yield**/, _loop_2(x)];\n                                case 2:\n                                    _a.sent();\n                                    _a.label = 3;\n                                case 3:\n                                    x++;\n                                    return [3 /*break*/, 1];\n                                case 4: return [2 /*return*/];\n                            }\n                        });\n                    };\n                    this_1 = this;\n                    y = 0;\n                    _a.label = 1;\n                case 1:\n                    if (!(y < this.height)) return [3 /*break*/, 4];\n                    return [5 /*yield**/, _loop_1(y)];\n                case 2:\n                    _a.sent();\n                    _a.label = 3;\n                case 3:\n                    y++;\n                    return [3 /*break*/, 1];\n                case 4: return [2 /*return*/];\n            }\n        });\n    };\n    return World;\n}());\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetris.ts?");

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