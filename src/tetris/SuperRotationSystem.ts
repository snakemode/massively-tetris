import { Tetromino } from "./Tetromino";
import { RotationOperation } from './RotationOperation';
import { RotationState } from './RotationState';
import { IRotationSystem } from './IRotationSystem';

// https://tetris.wiki/Super_Rotation_System
export class SuperRotationSystem implements IRotationSystem {

    move(piece: Tetromino) {
      
    }
  
    rotate(piece: Tetromino, direction: RotationOperation) {
        
        piece.rotate(direction);

        // Do wall kicks and collision checks

    }

}

