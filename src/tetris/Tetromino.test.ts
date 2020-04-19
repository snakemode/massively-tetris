import { RotationState } from "./RotationState";
import { RotationOperation } from "./RotationOperation";
import { Tetromino, ValidTetronimo } from './Tetromino';

describe("Tetromino", () => {

    describe("handles basic rotation unencumbered by specific Tetris rule sets", () => {

        let tetromino: Tetromino;
        beforeEach(() => {
            tetromino = Tetromino.I();
        });

        it("Can rotate Right", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.R);
        });

        it("Can rotate right, twice, to the bottom", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.TWO);
        });

        it("Can rotate right, three times, to the left", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate( RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.L);
        });

        it("Can rotate Left", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.L);
        });

        it("Can rotate Left, twice, to the bottom", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate( RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.TWO);
        });

        it("Can rotate Left, three times, to the right", () => {
            var tetromino = Tetromino.I();

            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate(RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.R);
        });        
    });

    describe("Test tetronimo handles rotation operations correctly.", () => {
        
        it("Defaults to origin state", () => {
            var tetromino = Tetromino.create("_");

            expect(tetromino.layout).toStrictEqual([
                [ '#', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right", () => {
            var tetromino = Tetromino.create("_");

            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.layout).toStrictEqual([
                [ ' ', '#', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right, right", () => {
            var tetromino = Tetromino.create("_");

            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.layout).toStrictEqual([
                [ ' ', ' ', '#', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right, right, right", () => {
            var tetromino = Tetromino.create("_");

            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.layout).toStrictEqual([
                [ ' ', ' ', ' ', '#' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right, right, right, right", () => {
            var tetromino = Tetromino.create("_");

            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.layout).toStrictEqual([
                [ '#', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });
    });

    it("can create all known shapes", () => {

        const valid: ValidTetronimo[] = ["I", "J", "L",  "S",  "T",  "Z", "O" ];

        for (let knownShape of valid) {
            expect(Tetromino.create(knownShape)).toBeDefined();
        }
    });

});