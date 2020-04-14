#JS - Challenges
###A simple Set of typical JS challenges solved using TDD using Mocha with Chai

Challenges:
1. TODO: Anagram function are two strings anagrams (not using real language) - ie: Listen = Silent
2. Fibonacci generate x > 2 number of characters of the fibonacci sequence in an array (where each number is the sum of the previous 2) - ie: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
3. Palindrome function - check if a string is a palindrome (not using real language) - ie racecar
4. Wristband checker - A wristband can have 4 patterns returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

>horizontal: each item in a row is identical.
>vertical: each item in a column is identical.
>diagonal left: each item is identical to the one on it's upper left or bottom right.
>diagonal right: each item is identical to the one on it's upper right or bottom left.
>You are shown an incomplete section of a wristband.


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
//Examples
getSubsets([-1, 0, 1, 2], 2) ➞ [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]

getSubsets([-1, 0, 1, 2], 3) ➞ [[1, 2], [0, 1, 2]]

getSubsets([1, 2, 3, 4], 5) ➞ [[1, 4], [2, 3]]

getSubsets([-1, 0, 1, 2], 4) ➞ []
```
>Notes
>Arrays will have unique numbers.
>Return an empty array if there does not a exist a subset whose numbers sum to that value (see fourth example). *


Run the tests using 

`npm test`