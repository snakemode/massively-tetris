import { World } from "./World";
import { RotationState, RotationOperation } from "./Types";
import { Tetromino } from './Tetromino';


describe("World", () => {

    it("Can make a test world from state", () => {
        const sut = World.fromState([
            "S   ",
            "IIII",
            "IIII"
        ]);
        const snapshot = sut.toStringArray();
        expect(snapshot).toStrictEqual([
            "S   ",
            "IIII",
            "IIII"
        ]);
    });


    describe("Tick", () => {

        it("clears completed rows", () => {
            const sut = World.fromState([
                "          ",
                "IIIIIIIIII"
            ]);

            sut.tick();

            const snapshot = sut.toStringArray();
            expect(snapshot[1]).toBe("          ");

        });
    });


    describe("lineClear", () => {

        it("clears completed rows", () => {
            const sut = World.fromState([
                "          ",
                "          ",
                "          ",
                "          ",
                "IIIIIIIIII"
            ]);

            sut.lineClear();

            const snapshot = sut.toStringArray();
            expect(snapshot).toStrictEqual([
                "          ",
                "          ",
                "          ",
                "          ",
                "          ",
            ]);
        });

        it("clears multiple rows", () => {
            const sut = World.fromState([
                "          ",
                "          ",
                "          ",
                "IIIIIIIIII",
                "IIIIIIIIII"
            ]);

            sut.lineClear();

            const snapshot = sut.toStringArray();
            expect(snapshot).toStrictEqual([
                "          ",
                "          ",
                "          ",
                "          ",
                "          ",
            ]);
        });

        it("contents fall downwards when clearing single row", () => {
            const sut = World.fromState([
                "S         ",
                "IIIIIIIIII"
            ]);

            sut.lineClear();

            const snapshot = sut.toStringArray();
            expect(snapshot).toStrictEqual([
                "          ",
                "S         ",
            ]);
        });

        it("contents fall downwards when clearing multiple rows", () => {
            const sut = World.fromState([
                "S   ",
                "IIII",
                "IIII"
            ]);
    
            sut.lineClear();
    
            const snapshot = sut.toStringArray();
            expect(snapshot).toEqual([
                "    ",
                "    ",
                "S   ",
            ]);
        });
    });


});