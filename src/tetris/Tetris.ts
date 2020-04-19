import { uuidv4 } from "../util";

export class Tetris {

  public Worlds: World[];

  constructor() {
    this.Worlds = [];
  }

  public addPlayer(playerId: string) {
    const newWorld = new World(playerId);
    this.Worlds.push(newWorld);
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

  public playerId: string;
  public width: number;
  public height: number;

  constructor(playerId: string, width: number = 10, height: number = 22) {
    this.playerId = playerId;
    this.width = width;
    this.height = height;
  }
}