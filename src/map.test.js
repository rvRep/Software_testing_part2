import map from './map';
import {expect, jest} from '@jest/globals';



function unefinedFunction() {

}

describe('map', () => { 

    const testArray1 = [4, 6, 0];

    const testArray2 = ["hello", "this", "is", "an", "array"];

    const testArray3 = [1, 2, 3, 4];

    const square = n => n*n;

    test('Test mapping an array of integers to square', () => {
        expect(map(testArray1, square)).toEqual([16, 36, 0]);
    });

    test('Test mapping array of strings to uppercase', () => {
        const toUpper = str => str.toUpperCase();
        expect(map(testArray2, toUpper)).toEqual(["HELLO", "THIS", "IS", "AN", "ARRAY"]);
    });

    test('Test mapping function over an empty array', () => {
        expect(map([], square)).toEqual([]);
    });

    test('Test mapping function that returns the same value', () => {
        const returnSameValue = n => n;
        expect(map(testArray1, returnSameValue)).toEqual(testArray1);
    });

    test('Test mapping function over undefined type', () => {
        expect(map(undefined, square)).toEqual([]);
    });

    test('Test mapping undefined function over array', () => {
        expect(map(testArray1, unefinedFunction)).toEqual([undefined, undefined, undefined]);
    });

    test('Test mapping with a function that returns a different type', () => {
        const toString = n => n.toString();
        expect(map(testArray3, toString)).toEqual(['1', '2', '3', '4']);
    });

    test('Test mapping with a function that uses the index', () => {
        const addIndex = (n, index) => n + index;
        expect(map(testArray3, addIndex)).toEqual([1, 3, 5, 7]);
    });

    test('Test mapping with a function that uses the entire collection', () => {
        const sumAll = (n, index, array) => array.reduce((sum, val) => sum + val, 0);
        expect(map(testArray3, sumAll)).toEqual([10, 10, 10, 10]);
    });

    test('Test handing non-numeric input to numeric functions', () => {
        const stringArray = ["these", "are", "not", "numbers"];
        const undefinedArray = [undefined, undefined, undefined, undefined];
        expect(map(stringArray, square)).toEqual([NaN, NaN, NaN, NaN]);
        expect(map(undefinedArray, square)).toEqual([NaN, NaN, NaN, NaN]);        
    });
});