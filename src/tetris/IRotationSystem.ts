import { Tetromino } from './Tetromino';
import { RotationOperation } from './Types';

export interface IRotationSystem {
    rotate(direction: RotationOperation);
}