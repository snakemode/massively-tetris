import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { uuidv4 } from "../util";

console.log("Hello from client side TypeScript");

const world: any = document.getElementById("game");
var ctx = world.getContext("2d");

const minoSize = 30;


function renderWorld(world: World) {
  let index = -1;
  
  for (const row of world.Rows()) {        
    index++;
    const offsetY = index * minoSize;

    let cellIndex = -1;
    
    for (const cell of row) {
      cellIndex++;
      const offsetX = cellIndex * minoSize;

      ctx.fillStyle = cell.occupied ? "black" : "green";
      ctx.fillRect(offsetX, offsetY, minoSize, minoSize);            
    }        
  }   
}

function render(game: Tetris) {
    for(const world of game.Worlds) {
      renderWorld(world);  
    }
}

let game: Tetris;

function start() {
    game = new Tetris();
    const playerId = uuidv4();
    game.addPlayer(playerId);
    game.start();

    setInterval(function() {
        render(game);
    }, 1000);
    
}

start();

