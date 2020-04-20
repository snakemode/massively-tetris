import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { Move, Mino, ValidTetronimo, Cell } from "../tetris/Types";

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
           
      ctx.fillStyle = "lightGray";
      ctx.fillRect(offsetX, offsetY, minoSize, minoSize);            

      ctx.fillStyle = selectColour(cell);
      ctx.fillRect(offsetX + 1, offsetY + 1, minoSize - 2, minoSize - 2);    
    }        
  }
}

function selectColour(cell: Cell): string {
  if (!cell.occupied) {
    return "white";
  }  
  switch(cell.origin) {
    case "I": return "skyBlue";
    case "J": return "blue";
    case "L": return "orange";
    case "O": return "yellow";      
    case "S": return "chartreuse";      
    case "T": return "darkViolet";            
    case "Z": return "red";
    default: return "black";
  }
}