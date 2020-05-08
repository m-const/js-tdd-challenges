import { assert } from "chai";
import { subsets } from "../subsets.js";

/* 
5. All Subsets that Add to a Value a function that returns all subarrays in an array that sum to a particular value. 

> Return the subarrays in the following order:
> First by ascending length.
> Second by comparing element-by-element, starting from the leftmost one. Put the array with the smaller element first in the pairwise comparison.
> The following example will illustrate:
```
getSubsets([-3, -2, -1, 0, 1, 2, 3], 2)
[ // All the subsets below sum to 2.
  [2],
  [-1, 3],
  [0, 2], // Same length: -1 < 0, so [-1, 3] goes before [0, 2]
  [-3, 2, 3],
  [-2, 1, 3],
  [-1, 0, 3],
  [-1, 1, 2],
  [-3, 0, 2, 3],
  [-2, -1, 2, 3],
  [-2, 0, 1, 3], // Same length + same first element: -1 < 0, so [-2, -1, 2, 3] goes before [-2, 0, 1, 3]
  [-1, 0, 1, 2],
  [-3, -1, 1, 2, 3],
  [-2, -1, 0, 2, 3],
  [-3, -1, 0, 1, 2, 3]
]

getSubsets([-1, 0, 1, 2], 2) ➞ [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]

getSubsets([-1, 0, 1, 2], 3) ➞ [[1, 2], [0, 1, 2]]

getSubsets([1, 2, 3, 4], 5) ➞ [[1, 4], [2, 3]]

getSubsets([-1, 0, 1, 2], 4) ➞ []
```
> Notes
> Arrays will have unique numbers.
> Return an empty array if there does not a exist a subset whose numbers sum to that value (see fourth example). * */

describe("Subsets() unit tests", () => {
  describe("Happy Path", () => {
    const res = subsets([-3, -2, -1, 0, 1, 2, 3], 2);
    const expRes = [
      [2],
      [-1, 3],
      [0, 2],
      [-3, 2, 3],
      [-2, 1, 3],
      [-1, 0, 3],
      [-1, 1, 2],
      [-3, 0, 2, 3],
      [-2, -1, 2, 3],
      [-2, 0, 1, 3],
      [-1, 0, 1, 2],
      [-3, -1, 1, 2, 3],
      [-2, -1, 0, 2, 3],
      [-3, -1, 0, 1, 2, 3],
    ];
    it(`Should return  Array`, () => {
      assert.isArray(res, "Returned other than Array");
    });
    it(`Should return 2 dimensional array`, () => {
      assert.isArray(res[0], "is not a 2d array");
    });

    it(`Should return 14 elements in 2nd array dimension`, () => {
      assert.equal(res.length, 14, "Returned other than 14 2d elements");
    });

    for (let x = 0; x < expRes.length; x++) {
      it(`return element [${x}] should be ${expRes[x]}`, () => {
        assert.includeDeepOrderedMembers(
          expRes[x],
          res[x],
          `return element [${x}] is  ${res[x]}`
        );
      });
    }
  });
  describe("Negative Path", () => {
    const resNeg = subsets([-1, 0, 1, 2], 4);

    it(`Should return  Array`, () => {
      assert.isArray(resNeg, "Returned other than Array");
    });
    it(`Should return an empty array`, () => {
      assert.isUndefined(resNeg[0], "is not undefined");
    });
    const resNegLong = subsets([-1, 0, 1, 2,3,5,6,89,456,9,8,23,56,89,78,45,12,89,56,54,32,65,78,-80,-99], 4);

    it(`Input arrays longer than 20 should return false`, () => {
      assert.isFalse(resNegLong, "Returned other than false for long input array");
    });
  });
});
