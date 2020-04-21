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

        describe("clears completed rows", () => {

            it("when there is a single complete row", () => {
                const sut = WorldFactory.fromState([
                    "          ",
                    "IIIIIIIIII"
                ]);

                sut.tick();

                const snapshot = sut.toStringArray();
                expect(snapshot[1]).toBe("          ");

            });

            it("when there are multiple complete rows", () => {
                const sut = WorldFactory.fromState([
                    "          ",
                    "          ",
                    "          ",
                    "IIIIIIIIII",
                    "IIIIIIIIII"
                ]);

                sut.tick();

                const snapshot = sut.toStringArray();
                expect(snapshot).toStrictEqual([
                    "          ",
                    "          ",
                    "          ",
                    "          ",
                    "          ",
                ]);
            });
        });

        describe("applies gravity to rows after clearing them", () => {

            it("contents fall downwards when clearing single row", () => {
                const sut = WorldFactory.fromState([
                    "S         ",
                    "IIIIIIIIII"
                ]);

                sut.tick();

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
        
                sut.tick();
        
                const snapshot = sut.toStringArray();
                expect(snapshot).toEqual([
                    "    ",
                    "    ",
                    "S   ",
                ]);
            });
        });

    });


});