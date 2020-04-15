// const assert = require("chai").assert;
// const app = require("../index");
import {assert} from 'chai';
import {anagram} from '../anagram.js';

// #1.Anagram function

describe('anagram() unit tests', ()=>{

    //if this test object is changed, ensure the first search is a valid anagram so the test messages are accurate
    const hpAnagram = {
        "target" : "listen",
        "search" : ["silent","banana","noisy"]
    };
    const res = anagram(hpAnagram);
    it(`Happy Path: Should return an object`,  () => {
        assert.isObject(res, 'Happy Path returned not an object');
    });
    it(`Happy Path: Should return an object with a target property of type string`,  () => {
        assert.isString(res.target, 'Happy Path target property returned not a string');
    });
    it(`Happy Path: Should return an object with an anagram property of type array`,  () => {
        assert.isArray(res.anagram, 'Happy Path anagram property returned not an array');
    });
    it(`Happy Path: Should return an object with an anagram property of type array with first element equal to ${hpAnagram.search[0]}`,  () => {
        assert.equal(res.anagram[0], hpAnagram.search[0],`Happy Path anagram property element 1 returned other than "${hpAnagram.search[0]}"`);
    });
});