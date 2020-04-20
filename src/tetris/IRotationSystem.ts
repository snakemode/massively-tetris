import { Tetromino } from './Tetromino';
import { RotationOperation } from './RotationOperation';

export interface IRotationSystem {
    rotate(piece: Tetromino, direction: RotationOperation);
}