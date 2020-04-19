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

type Cell = { x: number, y: number, occupied: boolean };
type Row = Cell[];
type Location = { x: number, y: number };

class World {

  public playerId: string;
  public width: number;
  public height: number;

  public occupiedLocations: Location[];

  constructor(playerId: string, width: number = 10, height: number = 22) {
    this.playerId = playerId;
    this.width = width;
    this.height = height;
    this.occupiedLocations = [];
  }    

  public *Cells(): IterableIterator<Cell> {
    
    for(let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        
        const occupied = this.occupiedLocations.filter(l => l.x === x && l.y === y).length > 0;
        const obj: Cell = { x, y, occupied };
        yield obj;        
      }
    }
  }
    
}