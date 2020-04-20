import { Tetris } from "../tetris/Tetris";
import { uuidv4 } from "../util";

console.log("Hello from client side TypeScript");

const world: HTMLElement | null = document.getElementById("game") as HTMLCanvasElement;
var ctx = world.getContext("2d");

const minoSize = 10;

function renderWorld(game: Tetris) {
    for(const world of game.Worlds) {
            
      for (const [index, row] of world.Rows().entries()) {
        
        const offsetY = index * minoSize;
        
        for (const [cellIndex, cell] of row) {
        
            const offsetX = cellIndex * minoSize;
          
            ctx.fillStyle = "black";
            ctx.fillRect(offsetX, offsetY, minoSize, minoSize);
            
        }
        
      }
      
    }
}

let game: Tetris;

function start() {
    game = new Tetris();
    const playerId = uuidv4();
    game.addPlayer(playerId);
    game.start();

    setInterval(function() {
        renderWorld(game);
    }, 33);
    
}

start();

