const assert = require("chai").assert;
const app = require("../index");

// #2 fibonacci tests

describe('fibonacci() unit tests', ()=>{
    let x = 10;
    let expected = [0,1,1,2,3,5,8,13,21,34];
    
    const res = app.fibonacci(x);
    it(`Happy Path: Should return an array type`,  () => {
        assert.isArray(res, 'is not an Array');
    });
    it(`Happy Path: Should return an array of ${x} numbers`,  () => {
        assert.lengthOf(res,x, `Is not ${x} members in length`);
    });
    it(`Happy Path: Should return an array of ${expected} members`,  () => {
        assert.includeMembers(res,expected, `Should return this ${expected} set of members`);
    });

    //edge cases
    //function called without providing a character count
    
    const resEdge = app.fibonacci();
    it(`Edge Case: no param provided - Should return an array type`,  () => {
        assert.isArray(resEdge, 'is not an Array');
    });
    it(`Edge Case: no param provided - Should return an array of ${x} numbers`,  () => {
        assert.lengthOf(resEdge,x, `Is not ${x} members in length`);
    });
    it(`Edge Case: no param provided - Should return an array of ${expected} members`,  () => {
        assert.includeMembers(resEdge,expected, `Should return this ${expected} set of members`);
    });

    //negative tests
    //parameter is not a number
    const resNeg = app.fibonacci(null);
    it(`Negative: Should return boolean type if param other than positive integer is provided`,  () => {
        assert.isBoolean(resNeg,`Should return false if parm is not a number`);
    });
    it(`Negative: Should return boolean false if param other than positive integer is provided`,  () => {
        assert.strictEqual(resNeg,false, `Should return false if parm is not a number`);
    });  

    //parameter is a negative number
    const resNegInt = app.fibonacci(-5);
    it(`Negative: Should return false if negative number is provided`,  () => {
        assert.strictEqual(resNegInt,false, `Should return false if parm is not a number`);
    });

    //parameter is NaN
    const resNaN = app.fibonacci(NaN);
    it(`Negative: Should return boolean false if param is NaN`,  () => {
        assert.strictEqual(resNaN,false, `NaN was provided and response was NOT false`);
    });
});

//#3 palindrome
describe('palindrome() unit tests',()=>{
    //must return bool true if the supplied string is a palindrome, false if not
   
    //case insensitive
    const resPalindromeTrue = app.palindrome("Never odd or even?");
    const resPalindromeFalse = app.palindrome("Not a palindrome!");
    it(`Happy Path True: Case Insensitive - Should return a bool type`,  () => {
        assert.isBoolean(resPalindromeTrue, 'Happy path strings returned other than bool');
    });
    it(`Happy Path False: Case Insensitive - Should return false because the provided string is NOT a palindrome`,  () => {
        assert.isFalse(resPalindromeFalse, `A string that is not a palindrome returned true`);
    });
    it(`Happy Path True: Case Insensitive - Should return true because a real palindrome was provided`,  () => {
        assert.isTrue(resPalindromeTrue, `A string that is a palindrome returned false`);
    });
 
    //case sensitive
    const resPalindromeTrueCS = app.palindrome("Never odd or eveN?", true);
    const resPalindromeFalseCS = app.palindrome("Not a palindrome!", true);
    it(`Happy Path True: Case Sensitive - Should return a bool type`,  () => {
        assert.isBoolean(resPalindromeTrueCS, 'Happy path strings returned other than bool');
    });
    it(`Happy Path False: Case Sensitive - Should return false because the provided string is NOT a palindrome`,  () => {
        assert.isFalse(resPalindromeFalseCS, `A string that is not a palindrome returned true`);
    });
    it(`Happy Path True: Case Sensitive - Should return true because a real palindrome was provided`,  () => {
        assert.isTrue(resPalindromeTrueCS, `A string that is a palindrome returned false`);
    });

    //symbols/whitespace will be removed but the remaining strings will be evaluated.
    const resPalindromeTrueSymbols = app.palindrome("a#a43ac c%^&42 37 4a  aa"); //this is a valid palindrom of aaaccaaa with a bunch of noise
    it(`Edge Case True: Should return a bool type`,  () => {
        assert.isBoolean(resPalindromeTrueSymbols, 'Edge Case True, palindrome with noise characters (^A-z) returned  other than bool');
    });
    it(`Edge Case True: Should return true because a real palindrom was provided noise characters (^A-z)`,  () => {
        assert.isTrue(resPalindromeTrueSymbols, `A string that is a palindrome with noise characters (^A-z) returned false`);
    });
  
   //must return null if non-string input or if input string is less than 3 characters
    const resPalindromeNullShort = app.palindrome("XX"); // too short
    const resPalindromeNullNotString = app.palindrome(1991); // not a string
    it(`Edge Case Null: An integer was provided instead of a string`,  () => {
        assert.isNull(resPalindromeNullShort, `A number type returned not null`);
    });
    it(`Edge Case Null: A string less than 3 characters was provieded`,  () => {
        assert.isNull(resPalindromeNullNotString, `A string that is too short returned not null`);
    });
}); 
