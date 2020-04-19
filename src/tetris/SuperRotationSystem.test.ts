import { SuperRotationSystem } from "./SuperRotationSystem";
import { RotationState } from "./RotationState";
import { RotationOperation } from "./RotationOperation";
import { Tetromino } from './Tetromino';

describe("Super Rotation System", () => {

    let sut: SuperRotationSystem;
    beforeEach(() => {
        sut = new SuperRotationSystem();
    });

    it("Can rotate Right", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Right);

        expect(tetromino.orientation).toBe(RotationState.R);
    });

    it("Can rotate right, twice, to the bottom", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Right);
        sut.rotate(tetromino, RotationOperation.Right);

        expect(tetromino.orientation).toBe(RotationState.TWO);
    });

    it("Can rotate right, three times, to the left", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Right);
        sut.rotate(tetromino, RotationOperation.Right);
        sut.rotate(tetromino, RotationOperation.Right);

        expect(tetromino.orientation).toBe(RotationState.L);
    });

    it("Can rotate Left", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Left);

        expect(tetromino.orientation).toBe(RotationState.L);
    });

    it("Can rotate Left, twice, to the bottom", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Left);
        sut.rotate(tetromino, RotationOperation.Left);

        expect(tetromino.orientation).toBe(RotationState.TWO);
    });

    it("Can rotate Left, three times, to the right", () => {
        var tetromino = new Tetromino();

        sut.rotate(tetromino, RotationOperation.Left);
        sut.rotate(tetromino, RotationOperation.Left);
        sut.rotate(tetromino, RotationOperation.Left);

        expect(tetromino.orientation).toBe(RotationState.R);
    });

});