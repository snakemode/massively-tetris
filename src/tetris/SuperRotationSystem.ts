import { Tetromino } from "./Tetromino";
import { RotationOperation } from './RotationOperation';
import { RotationState } from './RotationState';

export class SuperRotationSystem {

    rotate(piece: Tetromino, direction: RotationOperation) {
        
        piece.rotate(direction);

        // Do wall kicks and collision checks

    }

}

