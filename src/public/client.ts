import { Tetris } from "../tetris/Tetris";
import { uuidv4 } from "../util";

console.log("Hello from client side TypeScript");

const world: HTMLElement | null = document.getElementById("world");

function renderWorld(game: Tetris) {
    
}

let game: Tetris;
function start() {
    game = new Tetris();
    game.addPlayer();
    game.start();

    setInterval(function() {
        renderWorld(game);
    }, 33);
    
}

start();

