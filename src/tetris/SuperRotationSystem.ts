import { Tetromino } from "./Tetromino";
import { World } from "./World";
import { RotationOperation } from './RotationOperation';
import { RotationState } from './RotationState';
import { IRotationSystem } from './IRotationSystem';

// https://tetris.wiki/Super_Rotation_System
export class SuperRotationSystem implements IRotationSystem {
  
  private world: World;
  
  public constructor(world: World) {
    this.world = world;
  }

  public rotate(piece: Tetromino, direction: RotationOperation) {

  } 

}

