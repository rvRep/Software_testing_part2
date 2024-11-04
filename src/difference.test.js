// difference.test.js
import difference from './difference';

describe('difference', () => {
    test('should return the difference of two arrays', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    test('should return the difference when multiple arrays are provided', () => {
        expect(difference([2, 1, 3], [2, 3], [1])).toEqual([]);
    });

    test('should return the original array if no values to exclude are provided', () => {
        expect(difference([2, 1])).toEqual([2, 1]);
    });

    test('should return an empty array if the first array is empty', () => {
        expect(difference([], [2, 3])).toEqual([]);
    });

    test('should return an empty array if the first argument is not an array-like object', () => {
        expect(difference(null, [2, 3])).toEqual([]);
    });
});