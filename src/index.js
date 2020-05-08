//2. Fibonacci generate x > 2 number of characters
"use strict";
exports.fibonacci = (n = 10) => {
  //check if the input is valid
  //let seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  let seq = [0, 1];
  if (typeof n == "number" && !isNaN(n)) {
    if (n > 2) {
      for (let i = 1; i < n - 1; i++) {
        let newValue = seq[i - 1] + seq[i];
        seq.push(newValue);
      }
      return seq;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//3. Palindrome function
//check if a string is a palindrom ie racecar
exports.palindrome = (str, caseSensitive = false) => {
  //check if the input is of type string
  if (typeof str == "string") {
    //clean up the string, remove any non-a-zA-Z
    let tmpStr = str.replace(/([^A-Z])/gi, "").trim();
    let cleanStr = caseSensitive ? tmpStr : tmpStr.toLocaleLowerCase();
    //ensure the provided / cleanedstring is longer than 2 characters
    if (cleanStr.length > 2) {
      let strArray = cleanStr.split("");
      let strRevArray = new Array();
      for (let x = 0, i = strArray.length - 1; i >= 0; i--, x++) {
        //build a new aray of the str backwards
        strRevArray[x] = strArray[i];
      }
      //compare the original string to the reversed string.
      let originalString = strArray.toString();
      let reversedString = strRevArray.toString();
      let result = originalString.localeCompare(reversedString);
      return result === 0 ? true : false;
    } else {
      return null;
    }
  } else {
    return null;
  }
};