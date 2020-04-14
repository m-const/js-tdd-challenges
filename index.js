//5 JS coding challenges, using Mocha and Chai to un unit tests on them

//1.Anagram function
//are two strings anagrams (not using real language)

//2. Fibonacci generate x > 2 number of characters 
//of the fibonacci sequence in an array (where each number is the sum of the previous 2)

exports.fibonacci = (n = 10) => {
  //check if the input is valid
  //let seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let seq = [0,1];
  if (typeof(n) == 'number' && n != NaN) {
    if (n > 2) {
        for (i = 1; i < (n-1); i++){
            newValue = seq[(i-1)] + seq[i];
            seq.push(newValue)
        }
      return seq;
    } else { return false; }
  } else { return false; }
};

//3. Palindrome function
//check if a string is a palindrom ie racecar
exports.palindrome = (str, caseSensitive = false) => {
  //check if the input is of type string
  if (typeof(str) == 'string') {
    //clean up the string, remove any non-a-zA-Z
    let tmpStr = str.replace(/([^A-Z])/gi,'').trim();
    let cleanStr = caseSensitive ? tmpStr : tmpStr.toLocaleLowerCase();
    //ensure the provided / cleanedstring is longer than 2 characters
    if (cleanStr.length > 2) {
      
       let strArray = cleanStr.split(''); 
       let strRevArray = new Array;
      for(x = 0, i = (strArray.length-1); i >= 0; i--, x++){
          //build a new aray of the str backwards
          strRevArray[x] = strArray[i]
      }
      //compare the original string to the reversed string.
      let originalString = strArray.toString();
      let reversedString = strRevArray.toString();
      let result = originalString.localeCompare(reversedString);
      return (result === 0)? true:false;
      
    } else { return null; }
  } else { return null; }
};




//4. Wristband
/* A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
  ["A", "A"],
  ["B", "B"],
  ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
  ["A", "B"],
  ["A", "B"],
  ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
  ["A", "B", "C"],
  ["C", "A", "B"],
  ["B", "C", "A"],
  ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
  ["A", "B", "C"],
  ["B", "C", "A"],
  ["C", "A", "B"],
  ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband. */

//5 All Subsets that Add to a Value
/* Create a function that returns all subarrays in an array that sum to a particular value. Return the subarrays in the following order:

First by ascending length.
Second by comparing element-by-element, starting from the leftmost one. Put the array with the smaller element first in the pairwise comparison.
The following example will illustrate:

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
Examples
getSubsets([-1, 0, 1, 2], 2) ➞ [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]

getSubsets([-1, 0, 1, 2], 3) ➞ [[1, 2], [0, 1, 2]]

getSubsets([1, 2, 3, 4], 5) ➞ [[1, 4], [2, 3]]

getSubsets([-1, 0, 1, 2], 4) ➞ []
Notes
Arrays will have unique numbers.
Return an empty array if there does not a exist a subset whose numbers sum to that value (see fourth example). */

// module.exports = {
//   sayHello: () => {
//     return 'Hello';
//   },
//   addNumbers: (x, y) => {
//     return x + y;
//   },

// };
