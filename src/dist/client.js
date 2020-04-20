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

/***/ "./src/public/Controls.ts":
/*!********************************!*\
  !*** ./src/public/Controls.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Types_1 = __webpack_require__(/*! ../tetris/Types */ \"./src/tetris/Types.ts\");\nclass Controls {\n    constructor(game) {\n        this.game = game;\n    }\n    processInput(keyPressed) {\n        const key = keyPressed.key.toLowerCase();\n        const movement = toMove(key);\n        if (movement.rotation != Types_1.RotationOperation.None) {\n            this.game.world.rotate(movement.rotation);\n        }\n        else {\n            this.game.world.move(movement);\n        }\n    }\n    connect() {\n        window.addEventListener(\"keypress\", (args) => {\n            this.processInput(args);\n        }, false);\n    }\n}\nexports.Controls = Controls;\nconst toMove = (key) => {\n    switch (key) {\n        case \"a\": return { deltaX: -1, deltaY: 0, rotation: Types_1.RotationOperation.None };\n        case \"s\": return { deltaX: 0, deltaY: -1, rotation: Types_1.RotationOperation.None };\n        case \"d\": return { deltaX: 1, deltaY: 0, rotation: Types_1.RotationOperation.None };\n        case \"w\": return { deltaX: 0, deltaY: 0, rotation: Types_1.RotationOperation.Right };\n        default: return { deltaX: 0, deltaY: 0, rotation: Types_1.RotationOperation.None };\n    }\n};\n\n\n//# sourceURL=webpack://lib/./src/public/Controls.ts?");

/***/ }),

/***/ "./src/public/client.ts":
/*!******************************!*\
  !*** ./src/public/client.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Tetris_1 = __webpack_require__(/*! ../tetris/Tetris */ \"./src/tetris/Tetris.ts\");\nconst util_1 = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/public/Controls.ts\");\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/public/render.ts\");\nlet game;\nlet controls;\nfunction start() {\n    game = new Tetris_1.Tetris();\n    controls = new Controls_1.Controls(game);\n    controls.connect();\n    const playerId = util_1.uuidv4();\n    game.addPlayer(playerId);\n    game.start();\n    setInterval(function () {\n        render_1.render(game);\n    }, 33);\n}\nstart();\n\n\n//# sourceURL=webpack://lib/./src/public/client.ts?");

/***/ }),

/***/ "./src/public/render.ts":
/*!******************************!*\
  !*** ./src/public/render.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst canvas = document.getElementById(\"game\");\nconst ctx = canvas.getContext(\"2d\");\nconst minoSize = 30;\nfunction render(game) {\n    let index = -1;\n    for (const row of game.world.rows()) {\n        index++;\n        const offsetY = index * minoSize;\n        let cellIndex = -1;\n        for (const cell of row) {\n            cellIndex++;\n            const offsetX = cellIndex * minoSize;\n            ctx.fillStyle = \"black\";\n            ctx.fillRect(offsetX, offsetY, minoSize, minoSize);\n            ctx.fillStyle = selectColour(cell);\n            ctx.fillRect(offsetX + 1, offsetY + 1, minoSize - 2, minoSize - 2);\n        }\n    }\n}\nexports.render = render;\nfunction selectColour(cell) {\n    if (!cell.occupied) {\n        return \"white\";\n    }\n    switch (cell.origin) {\n        case \"I\": return \"skyBlue\";\n        case \"J\": return \"blue\";\n        case \"L\": return \"orange\";\n        case \"O\": return \"yellow\";\n        case \"S\": return \"chartreuse\";\n        case \"T\": return \"darkViolet\";\n        case \"Z\": return \"red\";\n        default: return \"black\";\n    }\n}\n\n\n//# sourceURL=webpack://lib/./src/public/render.ts?");

/***/ }),

/***/ "./src/tetris/SuperRotationSystem.ts":
/*!*******************************************!*\
  !*** ./src/tetris/SuperRotationSystem.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// https://tetris.wiki/Super_Rotation_System\nclass SuperRotationSystem {\n    constructor(world) {\n        this.world = world;\n    }\n    rotate(direction) {\n        const withRotationApplied = this.world.tetromino.previewRotation(direction);\n        const wouldCollideWithOccupied = this.world.occupiedLocations.filter(loc => loc.x == nextX && loc.y == nextY).length;\n        if (wouldCollideWithOccupied) {\n        }\n        const wallKicks = [];\n        // this.world.tetromino.rotate(direction);\n    }\n}\nexports.SuperRotationSystem = SuperRotationSystem;\n\n\n//# sourceURL=webpack://lib/./src/tetris/SuperRotationSystem.ts?");

/***/ }),

/***/ "./src/tetris/Tetris.ts":
/*!******************************!*\
  !*** ./src/tetris/Tetris.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst World_1 = __webpack_require__(/*! ./World */ \"./src/tetris/World.ts\");\nclass Tetris {\n    constructor() {\n        this.world = new World_1.World(\"player1\");\n    }\n    addPlayer(playerId) {\n    }\n    start() {\n        setInterval(function (game) {\n            game.tick();\n        }, 1000, this);\n    }\n    tick() {\n        this.world.tick();\n    }\n}\nexports.Tetris = Tetris;\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetris.ts?");

/***/ }),

/***/ "./src/tetris/Tetromino.ts":
/*!*********************************!*\
  !*** ./src/tetris/Tetromino.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Types_1 = __webpack_require__(/*! ./Types */ \"./src/tetris/Types.ts\");\nconst TetrominoLayouts_1 = __webpack_require__(/*! ./TetrominoLayouts */ \"./src/tetris/TetrominoLayouts.ts\");\nconst valid = [\"I\", \"J\", \"L\", \"S\", \"T\", \"Z\", \"O\"];\nclass Tetromino {\n    constructor(shape, allLayouts, defaultState = Types_1.RotationState.O) {\n        this.shape = shape;\n        this.allLayouts = allLayouts;\n        this.orientation = defaultState;\n        this.layout = this.layoutFor(defaultState);\n        this.locked = false;\n        this.location = { x: -1, y: -1 };\n    }\n    get height() { return this.layout.length; }\n    setOrientation(state) {\n        this.orientation = state;\n        this.layout = this.layoutFor(state);\n        return this;\n    }\n    rotate(direction) {\n        const clockwiseRotationMap = [\n            Types_1.RotationState.O,\n            Types_1.RotationState.R,\n            Types_1.RotationState.TWO,\n            Types_1.RotationState.L,\n        ];\n        const currentIndex = clockwiseRotationMap.indexOf(this.orientation);\n        let nextState = currentIndex + direction;\n        nextState = nextState >= clockwiseRotationMap.length ? 0 : nextState;\n        nextState = nextState < 0 ? clockwiseRotationMap.length - 1 : nextState;\n        const nextOrientation = clockwiseRotationMap[nextState];\n        this.setOrientation(nextOrientation);\n        return this;\n    }\n    previewRotation(direction) {\n        const clone = new Tetromino(this.shape, this.allLayouts, this.orientation);\n        return clone.rotate(direction); // ☜(ﾟヮﾟ☜) YOLO\n    }\n    occupies(worldLocation) {\n        const all = [...this.minos()];\n        const thatMatch = all.filter(m => m.x === worldLocation.x && m.y === worldLocation.y);\n        return thatMatch.length > 0;\n    }\n    *minos() {\n        for (let minoY in this.layout) {\n            const relativeY = parseInt(minoY);\n            for (let minoX in this.layout) {\n                const relativeX = parseInt(minoX);\n                const cellValue = this.layout[relativeY][relativeX];\n                if (cellValue === ' ') {\n                    continue;\n                }\n                const x = this.location.x + relativeX;\n                const y = this.location.y - relativeY;\n                const shape = this.shape;\n                yield { x, y, relativeX, relativeY, shape };\n            }\n        }\n    }\n    layoutFor(state) {\n        return this.allLayouts.filter(l => l.label == state)[0].layout;\n    }\n    static create(shape) {\n        return new Tetromino(shape, TetrominoLayouts_1.AllLayouts[shape]);\n    }\n    static Empty() { return this.create(\"Empty\"); }\n    static random() {\n        let shuffled = valid\n            .map((a) => ({ sort: Math.random(), value: a }))\n            .sort((a, b) => a.sort - b.sort)\n            .map((a) => a.value);\n        return Tetromino.create(shuffled[0]);\n    }\n}\nexports.Tetromino = Tetromino;\n\n\n//# sourceURL=webpack://lib/./src/tetris/Tetromino.ts?");

/***/ }),

/***/ "./src/tetris/TetrominoLayouts.ts":
/*!****************************************!*\
  !*** ./src/tetris/TetrominoLayouts.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Types_1 = __webpack_require__(/*! ./Types */ \"./src/tetris/Types.ts\");\n// Matrix rotations are for suckers.\nexports.AllLayouts = {\n    \"_\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"#   \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" #  \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"  # \".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \"   #\".split(''),\n                \"    \".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n    ],\n    \"Empty\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"   \".split(''),\n                \"   \".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \"   \".split(''),\n                \"   \".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"   \".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \"   \".split(''),\n                \"   \".split(''),\n                \"   \".split('')\n            ]\n        },\n    ],\n    \"I\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"    \".split(''),\n                \"####\".split(''),\n                \"    \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \"  # \".split(''),\n                \"  # \".split(''),\n                \"  # \".split(''),\n                \"  # \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"    \".split(''),\n                \"    \".split(''),\n                \"####\".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \" #  \".split(''),\n                \" #  \".split(''),\n                \" #  \".split(''),\n                \" #  \".split('')\n            ]\n        },\n    ],\n    \"J\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"#  \".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" ##\".split(''),\n                \" # \".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \"  #\".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \" # \".split(''),\n                \"## \".split('')\n            ]\n        },\n    ],\n    \"L\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"  #\".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" # \".split(''),\n                \" ##\".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \"#  \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \"## \".split(''),\n                \" # \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"O\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \" ## \".split(''),\n                \" ## \".split(''),\n                \"    \".split('')\n            ]\n        },\n    ],\n    \"S\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \" ##\".split(''),\n                \"## \".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" ##\".split(''),\n                \"  #\".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \" ##\".split(''),\n                \"## \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \"#  \".split(''),\n                \"## \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"T\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \" # \".split(''),\n                \"###\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \" # \".split(''),\n                \" ##\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"###\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \"## \".split(''),\n                \" # \".split('')\n            ]\n        },\n    ],\n    \"Z\": [\n        {\n            label: Types_1.RotationState.O,\n            layout: [\n                \"## \".split(''),\n                \" ##\".split(''),\n                \"   \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.R,\n            layout: [\n                \"  #\".split(''),\n                \" ##\".split(''),\n                \" # \".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.TWO,\n            layout: [\n                \"   \".split(''),\n                \"## \".split(''),\n                \" ##\".split('')\n            ]\n        },\n        {\n            label: Types_1.RotationState.L,\n            layout: [\n                \" # \".split(''),\n                \"## \".split(''),\n                \"#  \".split('')\n            ]\n        },\n    ],\n};\n\n\n//# sourceURL=webpack://lib/./src/tetris/TetrominoLayouts.ts?");

/***/ }),

/***/ "./src/tetris/Types.ts":
/*!*****************************!*\
  !*** ./src/tetris/Types.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RotationOperation;\n(function (RotationOperation) {\n    RotationOperation[RotationOperation[\"Left\"] = -1] = \"Left\";\n    RotationOperation[RotationOperation[\"None\"] = 0] = \"None\";\n    RotationOperation[RotationOperation[\"Right\"] = 1] = \"Right\";\n})(RotationOperation = exports.RotationOperation || (exports.RotationOperation = {}));\n;\nvar RotationState;\n(function (RotationState) {\n    RotationState[RotationState[\"L\"] = 0] = \"L\";\n    RotationState[RotationState[\"O\"] = 1] = \"O\";\n    RotationState[RotationState[\"R\"] = 2] = \"R\";\n    RotationState[RotationState[\"TWO\"] = 3] = \"TWO\";\n})(RotationState = exports.RotationState || (exports.RotationState = {}));\n;\n\n\n//# sourceURL=webpack://lib/./src/tetris/Types.ts?");

/***/ }),

/***/ "./src/tetris/World.ts":
/*!*****************************!*\
  !*** ./src/tetris/World.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Types_1 = __webpack_require__(/*! ./Types */ \"./src/tetris/Types.ts\");\nconst SuperRotationSystem_1 = __webpack_require__(/*! ./SuperRotationSystem */ \"./src/tetris/SuperRotationSystem.ts\");\nconst Tetromino_1 = __webpack_require__(/*! ./Tetromino */ \"./src/tetris/Tetromino.ts\");\nclass World {\n    constructor(playerId, width = 10, height = 22) {\n        this.gameOver = false;\n        this.rotationSystem = new SuperRotationSystem_1.SuperRotationSystem(this);\n        this.playerId = playerId;\n        this.width = width;\n        this.height = height;\n        this.occupiedLocations = [];\n        this.tetromino = Tetromino_1.Tetromino.Empty();\n    }\n    tick() {\n        if (this.gameOver) {\n            return;\n        }\n        if (this.tetromino.shape === \"Empty\") {\n            this.tetromino = Tetromino_1.Tetromino.random();\n            this.tetromino.location = { x: 3, y: this.height + 2 };\n            const gameOverCheck = this.canMove({ deltaX: 0, deltaY: -1, rotation: Types_1.RotationOperation.None });\n            if (!gameOverCheck.canMove) {\n                console.log(\"❌ Game over!\");\n                this.gameOver = true;\n            }\n        }\n        this.move({ deltaX: 0, deltaY: -1, rotation: Types_1.RotationOperation.None });\n    }\n    move(move) {\n        const moveCheck = this.canMove(move);\n        if (moveCheck.canMove) {\n            this.tetromino.location.x = this.tetromino.location.x + move.deltaX;\n            this.tetromino.location.y = this.tetromino.location.y + move.deltaY;\n        }\n        if (moveCheck.lock) {\n            this.lockTetromino();\n            this.tetromino = Tetromino_1.Tetromino.Empty();\n        }\n    }\n    canMove(move) {\n        for (const mino of this.tetromino.minos()) {\n            const nextX = mino.x + move.deltaX;\n            const nextY = mino.y + move.deltaY;\n            if (nextY <= 0) {\n                return { canMove: false, lock: true };\n            }\n            if (nextX < 0 || nextX >= this.width) {\n                return { canMove: false, lock: false };\n            }\n            const wouldCollideWithOccupied = this.occupiedLocations.filter(loc => loc.x == nextX && loc.y == nextY).length;\n            if (wouldCollideWithOccupied) {\n                return { canMove: false, lock: true };\n            }\n        }\n        return { canMove: true, lock: false };\n    }\n    rotate(direction) {\n        this.rotationSystem.rotate(direction);\n    }\n    lockTetromino() {\n        for (const mino of this.tetromino.minos()) {\n            this.occupiedLocations.push(mino);\n        }\n    }\n    *cells() {\n        for (let row of this.rows()) {\n            for (let cell of row) {\n                yield cell;\n            }\n        }\n    }\n    *rows() {\n        for (let yLoop = 0; yLoop < this.height; yLoop++) {\n            const y = this.height - yLoop;\n            const row = [];\n            for (let x = 0; x < this.width; x++) {\n                let anyMinos = this.occupiedLocations.filter(l => l.x === x && l.y === y);\n                let occupied = anyMinos.length > 0;\n                let origin = occupied ? anyMinos[0].shape : null;\n                if (this.tetromino != null && this.tetromino.occupies({ x, y })) {\n                    occupied = true;\n                    origin = this.tetromino.shape;\n                }\n                row.push({ x, y, occupied, origin });\n            }\n            yield row;\n        }\n    }\n}\nexports.World = World;\n\n\n//# sourceURL=webpack://lib/./src/tetris/World.ts?");

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