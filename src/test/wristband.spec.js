import { assert } from "chai";
import { wristband } from "../wristband.js";

//4. Wristband
/*A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.
 */
describe("Wristband() unit tests", () => {
  describe("Happy Path - Part of horizontal wristband.", () => {
    const res = wristband([
      ["A", "A"],
      ["B", "B"],
      ["C", "C"],
    ]);

    //happy path validations
    it(`Should return  Bool`, () => {
      assert.isBoolean(res, "Returned other than Boolean");
    });
    it(`Should return true`, () => {
      assert.isTrue(res, "Returned not true");
    });
  });
  describe("Happy Path - Part of vertical wristband.", () => {
    const res = wristband([
      ["A", "B"],
      ["A", "B"],
      ["A", "B"],
    ]);

    //happy path validations
    it(`Should return boolean`, () => {
      assert.isBoolean(res, "Returned other than Boolean");
    });
    it(`Should return true`, () => {
      assert.isTrue(res, "Returned not true");
    });
  });
  describe("Happy Path - Part of diagonal left wristband.", () => {
    const res = wristband([
      ["A", "B", "C"],
      ["C", "A", "B"],
      ["B", "C", "A"],
      ["A", "B", "C"],
    ]);

    //happy path validations
    it(`Should return boolean`, () => {
      assert.isBoolean(res, "Returned other than Boolean");
    });
    it(`Should return true`, () => {
      assert.isTrue(res, "Returned not true");
    });
  });

  describe("Happy Path - Part of diagonal right wristband.", () => {
    const res = wristband([
      ["A", "B", "C"],
      ["B", "C", "A"],
      ["C", "A", "B"],
      ["A", "B", "A"],
    ]);

    //happy path validations
    it(`Should return boolean`, () => {
      assert.isBoolean(res, "Returned other than Boolean");
    });
    it(`Should return true`, () => {
      assert.isTrue(res, "Returned not true");
    });
  });
  describe("Edge Case - non-array input", () => {
    const res = wristband(42);

    //happy path validations
    it(`Non-array input should be null`, () => {
      assert.isNull(res, "Returned other than null when non-array input is provided");
    });
    });
});
