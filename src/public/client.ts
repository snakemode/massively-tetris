import { Tetris } from "../tetris/Tetris";

console.log("Hello from client side TypeScript");

function renderWorld(game: Tetris) {
    console.log("Rendering");
}

let game: Tetris;
function start() {
    game = new Tetris();
    game.start();

    setInterval(function() {
        renderWorld(game);
    }, 33);
    
}

start();

