
import { RotationState } from "./RotationState";
import { RotationOperation } from './RotationOperation';

export class Tetromino {
    public orientation: RotationState;
    constructor() {
        this.orientation = RotationState.O;
    }

    rotate(direction: RotationOperation) {
        const rotationMap = [
            RotationState.L,
            RotationState.O,
            RotationState.R,
            RotationState.TWO,
        ];

        const currentIndex = rotationMap.indexOf(this.orientation);
        let nextState = currentIndex + direction;
        
        nextState = nextState >= rotationMap.length ? 0 : nextState;
        nextState = nextState < 0 ? rotationMap.length - 1 : nextState;
        this.orientation = rotationMap[nextState];
    }

    public static I(): Tetromino { return new Tetromino(); }
}
