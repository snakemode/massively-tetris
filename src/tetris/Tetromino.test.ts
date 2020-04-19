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
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.R);
        });

        it("Can rotate right, twice, to the bottom", () => {
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.TWO);
        });

        it("Can rotate right, three times, to the left", () => {
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate(RotationOperation.Right);
            tetromino.rotate( RotationOperation.Right);

            expect(tetromino.orientation).toBe(RotationState.L);
        });

        it("Can rotate Left", () => {
            tetromino.rotate(RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.L);
        });

        it("Can rotate Left, twice, to the bottom", () => {
            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate( RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.TWO);
        });

        it("Can rotate Left, three times, to the right", () => {
            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate(RotationOperation.Left);
            tetromino.rotate(RotationOperation.Left);

            expect(tetromino.orientation).toBe(RotationState.R);
        });        
    });

    describe("Test tetronimo handles rotation operations correctly.", () => {
        
        let tetromino: Tetromino;
        beforeEach(() => {
            tetromino = Tetromino.create("_");
        });


        it("Defaults to origin state", () => {
            expect(tetromino.layout).toStrictEqual([
                [ '#', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right", () => {
            tetromino.rotate(RotationOperation.Right);

            expect(tetromino.layout).toStrictEqual([
                [ ' ', '#', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ' ],
            ]);
        });

        it("Can rotate right, right", () => {
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