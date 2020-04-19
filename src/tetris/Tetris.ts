import { uuidv4 } from "../util";

export class Tetris {

  public worlds: World[];

  constructor() {
    this.world = World[];
  }

  public addPlayer() {
    const newWorld = new World();
    this.world.push(newWorld);
  }

  public start(): void {
    setInterval(function(game: Tetris) { 
      game.tick();       
    }, 1000, this);
  }

  public tick() {

  }

}


class World {

  public width: number;
  public height: number;

  constructor(width: number = 10, height: number = 22) {
    this.width = width;
    this.height = height;
  }
}