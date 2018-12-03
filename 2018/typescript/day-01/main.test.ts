import { expect } from "chai";
import "mocha";
import main from "./main";

/*
+1, +1, +1 results in  3
+1, +1, -2 results in  0
-1, -2, -3 results in -6
 */

describe("Day 01", () => {
  it("+1, +1, +1 results in  3", () => {
    const result = main([+1, +1, +1]);
    expect(result).to.equal(3);
  });

  it("+1, +1, -2 results in  0", () => {
    const result = main([+1, +1, -2]);
    expect(result).to.equal(0);
  });

  it("-1, -2, -3 results in -6", () => {
    const result = main([-1, -2, -3]);
    expect(result).to.equal(-6);
  });
});
