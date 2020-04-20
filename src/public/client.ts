import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { uuidv4 } from "../util";
import { Move } from "./tetris/Types";
import { Controls } from "./Controls";

const canvas: any = document.getElementById("game");
var ctx = canvas.getContext("2d");

const minoSize = 30;

function render(game: Tetris) {
  let index = -1;
  
  for (const row of game.world.rows()) {        
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

let game: Tetris;
let controls: Controls;

function start() {
  game = new Tetris();
  controls = new Controls(game);

  const playerId = uuidv4();
  game.addPlayer(playerId);
  game.start();

  setInterval(function() {
      render(game);
  }, 33);    
}

start();

