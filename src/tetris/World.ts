import { Location, ValidTetronimo, Move, Mino, Cell } from './Types';
import { Tetromino } from "./Tetromino";

type Row = Cell[];

export class World {

  public playerId: string;
  public width: number;
  public height: number;

  public occupiedLocations: Mino[];
  public tetromino: Tetromino;

  constructor(playerId: string, width: number = 10, height: number = 22) {
    this.playerId = playerId;
    this.width = width;
    this.height = height;
    this.occupiedLocations = [];
    this.tetromino = Tetromino.Empty();
  }

  public tick(): void {
    if (this.tetromino.shape === "Empty") {
      this.tetromino = Tetromino.random();
      this.tetromino.location = { x: 3, y: this.height + 2 };
    }
        
    this.move({ deltaX: 0, deltaY: -1 });
  }
  
  public move(movement: Move) { 
    if (this.tetromino.canMove(movement, this.occupiedLocations)) {      
      this.tetromino.location.x = this.tetromino.location.x + movement.deltaX;
      this.tetromino.location.y = this.tetromino.location.y + movement.deltaY;
    } else {
      this.lockTetromino();
      this.tetromino = Tetromino.Empty();
    }    
  }
  
  private lockTetromino(): void {
    for (const mino of this.tetromino.minos()) {
      this.occupiedLocations.push(mino);
    }   
  }

  public *cells(): IterableIterator<Cell> {
    for (let row of this.rows()) {
      for (let cell of row) {
        yield cell;
      }    
    }
  }

  public *rows(): IterableIterator<Row> {    
    for (let yLoop = 0; yLoop < this.height; yLoop++) {
      const y: number = this.height - yLoop;
      
      const row: Row = [];
      
      for (let x = 0; x < this.width; x++) {
        let anyMinos: Mino[] = this.occupiedLocations.filter(l => l.x === x && l.y === y);
        let occupied: boolean = anyMinos.length > 0;
        let mino = occupied ? occupied[0]: null;
        
        if (this.tetromino != null && this.tetromino.occupies({ x, y })) {
          mino = this.tetromino.minoFor({ x, y });
        }
        
        row.push({ x, y, mino });      
      }
      
      yield row;
    }
  }
    
}