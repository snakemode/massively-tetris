import { Tetromino } from "./Tetromino";
import { World } from "./World";
import { RotationOperation, RotationState } from './Types';
import { IRotationSystem } from './IRotationSystem';

// https://tetris.wiki/Super_Rotation_System
export class SuperRotationSystem implements IRotationSystem {
  
  private world: World;
  
  public constructor(world: World) {
    this.world = world;
  }

  public rotate(direction: RotationOperation) {
    const withRotationApplied = this.world.tetromino.previewRotation(direction);
    
    /*const wouldCollideWithOccupied = this.world.occupiedLocations.filter(loc => loc.x == nextX && loc.y == nextY).length;
    if (wouldCollideWithOccupied) {
      
    }*/

    this.world.tetromino.rotate(direction);

  } 

}

