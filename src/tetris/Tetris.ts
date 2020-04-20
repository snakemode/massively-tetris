import { uuidv4 } from "../util";
import { World } from "./World";

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