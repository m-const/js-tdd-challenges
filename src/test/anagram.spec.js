// const assert = require("chai").assert;
// const app = require("../index");
import {assert} from 'chai';
import {anagram} from '../anagram.js';

// #1.Anagram function
/* 
returns object structured as noted below or false on error
{
    target : target,
    anagram : [anagram1 .. anagramN]
}

return if no anagram is found 
{
    target : target,
    anagram : null
}
*/

describe('anagram() unit tests', ()=>{

    const hpTarget = 'li    st*en';
    const hpSearch = 'si&len t';
    const res = anagram(hpTarget, hpSearch);

    //happy path validations
    it(`Happy Path - Str: Should return an object`,  () => {
        assert.isObject(res, 'Happy Path returned not an object');
    });
    it(`Happy Path - Str: Should return an object with a target property of type string`,  () => {
        assert.isString(res.target, 'Happy Path target property returned not a string');
    });
    it(`Happy Path - Str: Should return an object with an anagram property of type array`,  () => {
        assert.isArray(res.anagram, 'Happy Path anagram property returned not an array');
    });
    it(`Happy Path - Str: Should return an object with an anagram property of type array with first element equal to ${hpSearch}`,  () => {
        assert.equal(res.anagram[0], hpSearch,`Happy Path anagram property element 1 returned other than "${hpSearch}"`);
    });

    const hpArrTarget = 'li%s ten';
    const hpArrSearch = ['s il%ent','ba  n$%ana','noi^%$sy'];
    const resHpArr = anagram(hpArrTarget, hpArrSearch);

    //happy path validations - array
    it(`Happy Path - Array: Should return an object`,  () => {
        assert.isObject(resHpArr, 'Happy Path returned not an object');
    });
    it(`Happy Path - Array: Should return an object with a target property of type string`,  () => {
        assert.isString(resHpArr.target, 'Happy Path target property returned not a string');
    });
    it(`Happy Path - Array: Should return an object with an anagram property of type array`,  () => {
        assert.isArray(resHpArr.anagram, 'Happy Path anagram property returned not an array');
    });
    it(`Happy Path - Array: Should return an object with an anagram property of type array with first element equal to ${hpSearch[0]}`,  () => {
        assert.equal(resHpArr.anagram[0], hpArrSearch[0],`Happy Path anagram property element 1 returned other than "${hpSearch[0]}"`);
    });

    //Negative - Array
    const negArrTarget = 'listen';
    const negArrSearch = ['apple','banana','pear'];
    const negArrRes = anagram(negArrTarget, negArrSearch);
    it(`Negative Path - Array: Should return an object`,  () => {
        assert.isObject(negArrRes, 'Happy Path returned not an object');
    });
    it(`Negative Path - Array: Should return an object with a target property of type string`,  () => {
        assert.isString(negArrRes.target, 'Negative Path target property returned not a string');
    });
    it(`Negative Path - Array: Should return an object with an anagram property of type null`,  () => {
        assert.isNull(negArrRes.anagram, 'Negative anagram property returned not null');
    });
    //Negative - STR
    const negTarget = 'listen';
    const negSearch = 'yell';
    const negRes = anagram(negTarget, negSearch);
    it(`Negative Path - Str: Should return an object`,  () => {
        assert.isObject(negRes, 'Happy Path returned not an object');
    });
    it(`Negative Path - Str: Should return an object with a target property of type string`,  () => {
        assert.isString(negRes.target, 'Negative Path target property returned not a string');
    });
    it(`Negative Path - Str: Should return an object with an anagram property of type null`,  () => {
        assert.isNull(negRes.anagram, 'Negative anagram property returned not null');
    });
    
    //Edge Case, empty target string
    const ec1Target = '';
    const ec1Search = ['apple','banana','pear'];
    const ec1Res = anagram(ec1Target, ec1Search);
    it(`Edge Case 1 - empty target string: Should return false`,  () => {
        assert.isFalse(ec1Res, 'Empty target string target returned not false');
    });
  
    //Edge Case, no search
    const ec2Target = 'listen';
    const ec2Search = '';
    const ec2Res = anagram(ec2Target, ec2Search);
    it(`Edge Case 2 - empty search string: Should return false`,  () => {
        assert.isFalse(ec2Res, 'Empty search string target returned not false');
    });
    //Edge Case, no search array
    const ec3Target = 'listen';
    const ec3Search = [];
    const ec3Res = anagram(ec3Target, ec3Search);
    it(`Edge Case 3 - empty search array: Should return null`,  () => {
        assert.isNull(ec3Res.anagram, 'Empty search array target returned not null');
    });


    //Edge Case, target is not a string
    const ec4Target = 4;
    const ec4Search = ['apple'];
    const ec4Res = anagram(ec4Target, ec4Search);
    it(`Edge Case 4 - Target is not a string: Should return false`,  () => {
        assert.isFalse(ec4Res, 'Non-string target returned not false');
    });
    //Edge Case, search is not a string or string of arrays
    const ec5Target = 'listen';
    const ec5Search = 5;
    const ec5Res = anagram(ec5Target, ec5Search);
    it(`Edge Case 5 - Search is not a string: Should return false`,  () => {
        assert.isFalse(ec5Res, 'Non-string search returned not false');
    });

      //Edge Case, an element of the search array is not a string - ignore non-string values, and values where target === search
      const ec6Target = 'listen';
      const ec6Search = ['silent',45,'listen',null,,];// eslint-disable-line
      const ec6Res = anagram(ec6Target, ec6Search);
      it(`Edge Case 6 - Search array contains a non-string element but containing a string anagram: Should return the valid anagram in valid object`,  () => {
          assert.equal(ec6Res.anagram[0],ec6Search[0], 'Search array containing a non-string element but containing a string anagram returned not valid return object');
      });
       //Edge Case - string, search the same as target
    const ec7Target = 'listen';
    const ec7Search = 'listen';
    const ec7Res = anagram(ec7Target, ec7Search);
    it(`Edge Case 7 - Search the same as target: Should return false`,  () => {
        assert.isFalse(ec7Res, 'search = target returned not false');
    });
});