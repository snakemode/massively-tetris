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
eval("\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetris_1 = __webpack_require__(/*! ../tetris/Tetris */ \"./src/tetris/Tetris.ts\");\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nconsole.log(\"Hello from client side TypeScript\");\nvar world = document.getElementById(\"game\");\nvar ctx = world.getContext(\"2d\");\nvar minoSize = 30;\nfunction renderWorld(world) {\n    var e_1, _a, e_2, _b;\n    var index = -1;\n    try {\n        for (var _c = __values(world.Rows()), _d = _c.next(); !_d.done; _d = _c.next()) {\n            var row = _d.value;\n            index++;\n            var offsetY = index * minoSize;\n            var cellIndex = -1;\n            try {\n                for (var row_1 = (e_2 = void 0, __values(row)), row_1_1 = row_1.next(); !row_1_1.done; row_1_1 = row_1.next()) {\n                    var cell = row_1_1.value;\n                    cellIndex++;\n                    var offsetX = cellIndex * minoSize;\n                    ctx.fillStyle = \"black\";\n                    ctx.fillRect(offsetX, offsetY, minoSize, minoSize);\n                    ctx.fillStyle = cell.occupied ? \"red\" : \"white\";\n                    ctx.fillRect(offsetX + 1, offsetY + 1, minoSize - 2, minoSize - 2);\n                }\n            }\n            catch (e_2_1) { e_2 = { error: e_2_1 }; }\n            finally {\n                try {\n                    if (row_1_1 && !row_1_1.done && (_b = row_1.return)) _b.call(row_1);\n                }\n                finally { if (e_2) throw e_2.error; }\n            }\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n}\nfunction render(game) {\n    var e_3, _a;\n    try {\n        for (var _b = __values(game.Worlds), _c = _b.next(); !_c.done; _c = _b.next()) {\n            var world_1 = _c.value;\n            renderWorld(world_1);\n        }\n    }\n    catch (e_3_1) { e_3 = { error: e_3_1 }; }\n    finally {\n        try {\n            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\n        }\n        finally { if (e_3) throw e_3.error; }\n    }\n}\nvar game;\nfunction start() {\n    game = new Tetris_1.Tetris();\n    var playerId = util_1.uuidv4();\n    game.addPlayer(playerId);\n    game.start();\n    setInterval(function () {\n        render(game);\n    }, 33);\n}\nstart();\n\n\n//# sourceURL=webpack://lib/./src/public/client.ts?");

/***/ }),

/***/ "./src/tetris/RotationState.ts":
/*!*************************************!*\
  !*** ./src/tetris/RotationState.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RotationState;\n(function (RotationState) {\n    RotationState[RotationState[\"L\"] = 0] = \"L\";\n    RotationState[RotationState[\"O\"] = 1] = \"O\";\n    RotationState[RotationState[\"R\"] = 2] = \"R\";\n    RotationState[RotationState[\"TWO\"] = 3] = \"TWO\";\n})(RotationState = exports.RotationState || (exports.RotationState = {}));\n\n\n//# sourceURL=webpack://lib/./src/tetris/RotationState.ts?");

/***/ }),

/***/ "./src/tetris/Tetris.ts":
/*!******************************!*\
  !*** ./src/tetris/Tetris.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar World_1 = __webpack_require__(/*! ./World */ \"./src/tetris/World.ts\");\nvar Tetris = /** @class */ (function () {\n    function Tetris() {\n        this.Worlds = [];\n    }\n    Tetris.prototype.addPlayer = function (playerId) {\n        var newWorld = new World_1.World(playerId);\n        this.Worlds.push(newWorld);\n    };\n    Tetris.prototype.start = function () {\n        setInterval(function (game) {\n            game.tick();\n        }, 1000, this);\n    };\n    Tetris.prototype.tick = function () {\n        var e_1, _a;\n        try {\n            for (var _b = __values(this.Worlds), _c = _b.next(); !_c.done; _c = _b.next()) {\n                var world = _c.value;\n                world.tick();\n            }\n        }\n        catch (e_1_1) { e_1 = { error: e_1_1 }; }\n        finally {\n            try {\n                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\n            }\n            finally { if (e_1) throw e_1.error; }\n        }\n    };\n    return Tetris;\n}());\nexports.Tetris = Tetris;\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetris.ts?");

/***/ }),

/***/ "./src/tetris/Tetromino.ts":
/*!*********************************!*\
  !*** ./src/tetris/Tetromino.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RotationState_1 = __webpack_require__(/*! ./RotationState */ \"./src/tetris/RotationState.ts\");\nvar valid = [\"I\", \"J\", \"L\", \"S\", \"T\", \"Z\", \"O\"];\nvar Tetromino = /** @class */ (function () {\n    function Tetromino(allLayouts, defaultState) {\n        if (defaultState === void 0) { defaultState = RotationState_1.RotationState.O; }\n        this.allLayouts = allLayouts;\n        this.orientation = defaultState;\n        this.layout = this.layoutFor(defaultState);\n        this.locked = false;\n        this.location = { x: -1, y: -1 };\n    }\n    Tetromino.prototype.rotate = function (direction) {\n        var rotationMap = [\n            RotationState_1.RotationState.O,\n            RotationState_1.RotationState.R,\n            RotationState_1.RotationState.TWO,\n            RotationState_1.RotationState.L,\n        ];\n        var currentIndex = rotationMap.indexOf(this.orientation);\n        var nextState = currentIndex + direction;\n        nextState = nextState >= rotationMap.length ? 0 : nextState;\n        nextState = nextState < 0 ? rotationMap.length - 1 : nextState;\n        this.orientation = rotationMap[nextState];\n        this.layout = this.layoutFor(this.orientation);\n    };\n    Tetromino.prototype.occupies = function (testLoc) {\n        for (var minoY in this.layout) {\n            for (var minoX in this.layout) {\n                var cellValue = this.layout[minoY][minoX];\n                if (cellValue === ' ') {\n                    continue;\n                }\n                var locationInWorldX = this.location.x + parseInt(minoX);\n                var locationInWorldY = this.location.y + parseInt(minoY);\n                if (locationInWorldX === testLoc.x && locationInWorldY === testLoc.y) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    Tetromino.prototype.layoutFor = function (state) {\n        return this.allLayouts.filter(function (l) { return l.label == state; })[0].layout;\n    };\n    Tetromino.create = function (shape) {\n        return new Tetromino(layouts[shape]);\n    };\n    Tetromino.I = function () { return this.create(\"I\"); };\n    Tetromino.J = function () { return this.create(\"J\"); };\n    Tetromino.L = function () { return this.create(\"L\"); };\n    Tetromino.S = function () { return this.create(\"S\"); };\n    Tetromino.T = function () { return this.create(\"T\"); };\n    Tetromino.Z = function () { return this.create(\"Z\"); };\n    Tetromino.O = function () { return this.create(\"O\"); };\n    Tetromino.random = function () {\n        var shuffled = valid\n            .map(function (a) { return ({ sort: Math.random(), value: a }); })\n            .sort(function (a, b) { return a.sort - b.sort; })\n            .map(function (a) { return a.value; });\n        return Tetromino.create(shuffled[0]);\n    };\n    return Tetromino;\n}());\nexports.Tetromino = Tetromino;\nvar layouts = {\n    \"_\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \"#   \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" #  \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"  # \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \"   #\".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n    ],\n    \"I\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \"    \".split(''),\n                \"####\".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \"  # \".split(''),\n                \"  # \".split(''),\n                \"  # \".split(''),\n                \"  # \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"    \".split(''),\n                \"    \".split(''),\n                \"####\".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \" #  \".split(''),\n                \" #  \".split(''),\n                \" #  \".split(''),\n                \" #  \".split('')\n            ]\n        },\n    ],\n    \"J\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \"#  \".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" ##\".split(''),\n                \" # \".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \"  #\".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \" # \".split(''),\n                \"## \".split('')\n            ]\n        },\n    ],\n    \"L\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \"  #\".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" # \".split(''),\n                \" ##\".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \"#  \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \"## \".split(''),\n                \" # \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"O\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n    ],\n    \"S\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \" ##\".split(''),\n                \"## \".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" ##\".split(''),\n                \"  #\".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \" ##\".split(''),\n                \"## \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \"#  \".split(''),\n                \"## \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"T\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \" # \".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" ##\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \"## \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"Z\": [\n        {\n            label: RotationState_1.RotationState.O,\n            layout: [\n                \"## \".split(''),\n                \" ##\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.R,\n            layout: [\n                \"  #\".split(''),\n                \" ##\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"## \".split(''),\n                \" ##\".split('')\n            ]\n        },\n        {\n            label: RotationState_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \"## \".split(''),\n                \"#  \".split('')\n            ]\n        },\n    ],\n};\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetromino.ts?");

/***/ }),

/***/ "./src/tetris/World.ts":
/*!*****************************!*\
  !*** ./src/tetris/World.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tetromino_1 = __webpack_require__(/*! ./Tetromino */ \"./src/tetris/Tetromino.ts\");\nvar World = /** @class */ (function () {\n    function World(playerId, width, height) {\n        if (width === void 0) { width = 10; }\n        if (height === void 0) { height = 22; }\n        this.playerId = playerId;\n        this.width = width;\n        this.height = height;\n        this.occupiedLocations = [];\n        this.tetromino = null;\n    }\n    World.prototype.tick = function () {\n        if (!this.tetromino) {\n            this.tetromino = Tetromino_1.Tetromino.random();\n            this.tetromino.location = { x: 3, y: 22 };\n        }\n        // DO REAL COLLISION DETECTION HERE\n        var nextLocation = this.tetromino.location.y - 1;\n        if (nextLocation > 0) {\n            this.tetromino.location.y = nextLocation;\n        }\n        else {\n            this.tetromino = null;\n        }\n    };\n    World.prototype.Cells = function () {\n        var _a, _b, row, row_1, row_1_1, cell, e_1_1, e_2_1;\n        var e_2, _c, e_1, _d;\n        return __generator(this, function (_e) {\n            switch (_e.label) {\n                case 0:\n                    _e.trys.push([0, 11, 12, 13]);\n                    _a = __values(this.Rows()), _b = _a.next();\n                    _e.label = 1;\n                case 1:\n                    if (!!_b.done) return [3 /*break*/, 10];\n                    row = _b.value;\n                    _e.label = 2;\n                case 2:\n                    _e.trys.push([2, 7, 8, 9]);\n                    row_1 = (e_1 = void 0, __values(row)), row_1_1 = row_1.next();\n                    _e.label = 3;\n                case 3:\n                    if (!!row_1_1.done) return [3 /*break*/, 6];\n                    cell = row_1_1.value;\n                    return [4 /*yield*/, cell];\n                case 4:\n                    _e.sent();\n                    _e.label = 5;\n                case 5:\n                    row_1_1 = row_1.next();\n                    return [3 /*break*/, 3];\n                case 6: return [3 /*break*/, 9];\n                case 7:\n                    e_1_1 = _e.sent();\n                    e_1 = { error: e_1_1 };\n                    return [3 /*break*/, 9];\n                case 8:\n                    try {\n                        if (row_1_1 && !row_1_1.done && (_d = row_1.return)) _d.call(row_1);\n                    }\n                    finally { if (e_1) throw e_1.error; }\n                    return [7 /*endfinally*/];\n                case 9:\n                    _b = _a.next();\n                    return [3 /*break*/, 1];\n                case 10: return [3 /*break*/, 13];\n                case 11:\n                    e_2_1 = _e.sent();\n                    e_2 = { error: e_2_1 };\n                    return [3 /*break*/, 13];\n                case 12:\n                    try {\n                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);\n                    }\n                    finally { if (e_2) throw e_2.error; }\n                    return [7 /*endfinally*/];\n                case 13: return [2 /*return*/];\n            }\n        });\n    };\n    World.prototype.Rows = function () {\n        var _loop_1, this_1, yLoop;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _loop_1 = function (yLoop) {\n                        var y, row, _loop_2, x;\n                        return __generator(this, function (_a) {\n                            switch (_a.label) {\n                                case 0:\n                                    y = this_1.height - yLoop;\n                                    row = [];\n                                    _loop_2 = function (x) {\n                                        var occupied = this_1.occupiedLocations.filter(function (l) { return l.x === x && l.y === y; }).length > 0;\n                                        if (this_1.tetromino != null && this_1.tetromino.occupies({ x: x, y: y })) {\n                                            occupied = true;\n                                        }\n                                        row.push({ x: x, y: y, occupied: occupied });\n                                    };\n                                    for (x = 0; x < this_1.width; x++) {\n                                        _loop_2(x);\n                                    }\n                                    return [4 /*yield*/, row];\n                                case 1:\n                                    _a.sent();\n                                    return [2 /*return*/];\n                            }\n                        });\n                    };\n                    this_1 = this;\n                    yLoop = 0;\n                    _a.label = 1;\n                case 1:\n                    if (!(yLoop < this.height)) return [3 /*break*/, 4];\n                    return [5 /*yield**/, _loop_1(yLoop)];\n                case 2:\n                    _a.sent();\n                    _a.label = 3;\n                case 3:\n                    yLoop++;\n                    return [3 /*break*/, 1];\n                case 4: return [2 /*return*/];\n            }\n        });\n    };\n    return World;\n}());\nexports.World = World;\n\n\n//# sourceURL=webpack://lib/./src/tetris/World.ts?");

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