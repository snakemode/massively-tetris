import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { uuidv4 } from "../util";

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
      
      
      ctx.fillStyle = "black";
      ctx.fillRect(offsetX, offsetY, minoSize, minoSize);            

      ctx.fillStyle = cell.occupied ? "red" : "white";
      ctx.fillRect(offsetX + 1, offsetY + 1, minoSize - 2, minoSize - 2);    
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
    }, 33);
    
}

start();

