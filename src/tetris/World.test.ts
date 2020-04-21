import { Location, RotationOperation } from './Types';
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

    describe("Move", () => {

        it("Can move horizontally", () => {
            const sut = WorldFactory.fromState([
                "   ss     ",
                "IIss      ",
            ], { x: 2, y: 1}, "S");

            sut.move({ deltaX: 1, deltaY: 0, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toStrictEqual([
                "    SS    ",
                "II SS     ",
            ]);
        });        

        it("Won't let a tetromino move through a neighbour horizontally", () => {
            const sut = WorldFactory.fromState([
                "   ss     ",
                "IIss      ",
            ], { x: 2, y: 1}, "S");

            sut.move({ deltaX: -1, deltaY: 0, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toStrictEqual([
                "   SS     ",
                "IISS      ",
            ]);
        });

        it("Won't let a tetromino move through the left wall", () => {
            const sut = WorldFactory.fromState([
                " ss     ",
                "ss      ",
            ], { x: 0, y: 1}, "S");

            sut.move({ deltaX: -1, deltaY: 0, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toStrictEqual([
                " SS     ",
                "SS      ",
            ]);
        });

        it("Won't let a tetromino move through the right wall", () => {
            const sut = WorldFactory.fromState([
                "  ss",
                " ss ",
            ], { x: 1, y: 1}, "S");

            sut.move({ deltaX: 1, deltaY: 0, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toStrictEqual([
                "  SS",
                " SS ",
            ]);
        });

        it("Won't let a tetromino move through the floor", () => {
            const sut = WorldFactory.fromState([
                " ss",
                "ss ",
            ], { x: 0, y: 1}, "S");

            sut.move({ deltaX: 0, deltaY: -1, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toEqual([
                " SS",
                "SS ",
            ]);
        });

        it("Won't let a tetromino move through a piece underneath it", () => {
            const sut = WorldFactory.fromState([
                " ss",
                "ss ",
                "III",
            ], { x: 0, y: 2}, "S");

            sut.move({ deltaX: 0, deltaY: -1, rotation: RotationOperation.None });

            const snapshot = sut.toStringArray(true);
            expect(snapshot).toEqual([
                " SS",
                "SS ",
                "III",
            ]);
        });

    });


});