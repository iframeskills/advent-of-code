import { expect } from "chai";
import "mocha";
import main from "./main2";

/*
  +1, -1 first reaches 0 twice.
  +3, +3, +4, -2, -4 first reaches 10 twice.
  -6, +3, +8, +5, -6 first reaches 5 twice.
  +7, +7, -2, -7, -4 first reaches 14 twice.
 */

describe("Day 2", () => {
  it("+1, -1 first reaches 0 twice.", () => {
    const result = main([+1, -1]);
    expect(result).to.equal(0);
  });

  it("+3, +3, +4, -2, -4 first reaches 10 twice.", () => {
    const result = main([+3, +3, +4, -2, -4]);
    expect(result).to.equal(10);
  });

  it("-6, +3, +8, +5, -6 first reaches 5 twice.", () => {
    const result = main([-6, +3, +8, +5, -6]);
    expect(result).to.equal(5);
  });

  it("+7, +7, -2, -7, -4 first reaches 14 twice.", () => {
    const result = main([+7, +7, -2, -7, -4]);
    expect(result).to.equal(14);
  });
});
