import { ACoolClass } from "./ACoolClass";

describe("A Cool Class", () => {
  it("stores a parameter.", () => {
    const sut = new ACoolClass("Hi there");
    
    expect(sut.Param).toBe("Hi there");
  });
});