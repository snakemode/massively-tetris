import { Tetromino } from "./Tetromino";

type Cell = { x: number, y: number, occupied: boolean };
type Row = Cell[];
type Location = { x: number, y: number };

export class World {

  public playerId: string;
  public width: number;
  public height: number;

  public occupiedLocations: Location[];
  public tetromino: Tetromino | null;

  constructor(playerId: string, width: number = 10, height: number = 22) {
    this.playerId = playerId;
    this.width = width;
    this.height = height;
    this.occupiedLocations = [];
    this.tetromino = null;
  }

  public tick(): void {
    if (!this.tetromino) {
      this.tetromino = Tetromino.random();
      this.tetromino.location = { x: 3, y: this.height + 2 };
    }
    
    // DO REAL COLLISION DETECTION HERE
    
    let nextLocationBottom = this.tetromino.location.y - 1;
    if (nextLocationBottom > 0) {    
      this.tetromino.location.y = nextLocation;
    } else {
      
      for (const mino of this.tetromino.Minos()) {
        this.occupiedLocations.push(mino);
      }
      
      this.tetromino = null;
    }
  }

  public *Cells(): IterableIterator<Cell> {
    for (let row of this.Rows()) {
      for (let cell of row) {
        yield cell;
      }    
    }
  }

  public *Rows(): IterableIterator<Row> {    
    for (let yLoop = 0; yLoop < this.height; yLoop++) {
      const y: number = this.height - yLoop;
      
      const row: Row = [];
      
      for (let x = 0; x < this.width; x++) {
        let occupied: boolean = this.occupiedLocations.filter(l => l.x === x && l.y === y).length > 0;
        
        if (this.tetromino != null && this.tetromino.occupies({ x, y })) {
          occupied = true;
        }
        
        row.push({ x, y, occupied });      
      }
      
      yield row;
    }
  }
    
}