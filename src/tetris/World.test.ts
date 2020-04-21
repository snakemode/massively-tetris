import { World } from "./World";
import { WorldFactory } from './WorldFactory';


describe("World", () => {

    it("Can make a test world from state", () => {
        const sut = WorldFactory.fromState([
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
            const sut = WorldFactory.fromState([
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
            const sut = WorldFactory.fromState([
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
            const sut = WorldFactory.fromState([
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
            const sut = WorldFactory.fromState([
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
            const sut = WorldFactory.fromState([
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