import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { Move, Mino, ValidTetronimo } from "../tetris/Types";

const canvas: any = document.getElementById("game");
const ctx = canvas.getContext("2d");

const minoSize = 30;

export function render(game: Tetris) {
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

      ctx.fillStyle = selectColour(cell);
      ctx.fillRect(offsetX + 1, offsetY + 1, minoSize - 2, minoSize - 2);    
    }        
  }
}

function selectColour(mino: Mino): string {
  if (!mino.occupied) {
    return "white";
  }  
  switch(mino.shape) {
    case "I": return "powderBlue";
    case "J": return "powderBlue";
    case "L": return "powderBlue";
    case "O": return "powderBlue";      
    case "S": return "powderBlue";      
    case "T": return "powderBlue";            
    case "Z": return "powderBlue";
    default: return "black";
  }
}