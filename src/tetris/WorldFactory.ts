
import { ValidTetronimo } from './Types';
import { World } from "./World";

export class WorldFactory {  
    public static fromState(worldLayout: string[]): World {
      worldLayout = worldLayout.reverse();
      var width = worldLayout[0].length;
      var height = worldLayout.length;
  
      var world = new World("player1", width, height);
  
      for (const [y, line] of worldLayout.entries()) {
        const cells = line.split('');
        
        for (const [x, cell] of cells.entries()) {
          if (cell != ' ') {
            world.occupiedLocations.push({x, y, shape: cell as any as ValidTetronimo });
          }
        }
      }
  
      return world;
    }    
}