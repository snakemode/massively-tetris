import { uuidv4 } from "../util";
import { World } from "./World";

export class Tetris {

  public world: World;

  constructor() {
    this.world = new World("player1");
  }

  public start(): void {
    setInterval(function(game: Tetris) { 
      game.tick();       
    }, 1000, this);
  }

  public tick() {    
    this.world.tick();
  }
}